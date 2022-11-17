// At the end of each term, faculty members need to prepare a class record
// summary for students based on the weighted scores of exams and exercises. In
// this practice problem, we will prepare one such summary from some provided
// student records.

// We store the student data in an object that looks like this:
// let studentScores = {
//   student1: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: [],
//     },
//   },
//   student2: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: [],
//     },
//   },
//   student3: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: [],
//     },
//   },
//   studentN: {
//     id: <idNumber>,
//     scores: {
//       exams: [],
//       exercises: [],
//     },
//   },
// };

// The output class record summary should look like this:

// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }

// 1. Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
// 2. Compute the student's total exercise score: 20 + 15 + 40 = 75
// 3. Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
// 4. Round the percent grade to the nearest integer: 81
// 5. Lookup the letter grade in the table above: C
// 6. Combine the percent grade and letter grade: "81 (C)"

const EXAM_WEIGHT = 0.65
const EXERCISE_WEIGHT = 0.35

const GRADES_RANGES = {
  A: 93,
  B: 85,
  C: 77,
  D: 69,
  E: 60,
  F: 0,
}

// Takes an array of exam scores
function computeAverageExamScore(scores) {
  const roundToOneAfterDecimal = (num) => {
    return Math.round(num * 10) / 10
  }

  return roundToOneAfterDecimal(
    scores.reduce((sum, score) => sum + score) / scores.length
  )
}

// Takes an array of exercise scores
function totalExerciseScore(scores) {
  return scores.reduce((sum, score) => sum + score)
}

function calculateWeightedGrade(examScore, exerciseScore) {
  return examScore * EXAM_WEIGHT + exerciseScore * EXERCISE_WEIGHT
}

function roundFinalGrade(weightedGrade) {
  return Math.round(weightedGrade)
}

function findLetterGrade(score) {
  const letters = Object.keys(GRADES_RANGES)

  for (let i = 0; i < letters.length; i += 1) {
    if (score >= GRADES_RANGES[letters[i]]) {
      return letters[i]
    }
  }
}

function formatFinalGrade(roundedWeightedGrade) {
  return `${roundedWeightedGrade} (${findLetterGrade(roundedWeightedGrade)})`
}

function finalStudentGrade(studentScores) {
  const weightedGrade = calculateWeightedGrade(
    computeAverageExamScore(studentScores.exams),
    totalExerciseScore(studentScores.exercises)
  )
  return formatFinalGrade(roundFinalGrade(weightedGrade))
}

function generateExamObject(examScores) {
  const averageScore = (scores) =>
    scores.reduce((total, score) => total + score) / scores.length
  const minScore = (scores) => Math.min(...scores)
  const maxScore = (scores) => Math.max(...scores)

  return examScores.map((exam) => {
    return {
      average: averageScore(exam),
      minimum: minScore(exam),
      maximum: maxScore(exam),
    }
  })
}

function transpose(matrix) {
  return matrix[0].map((_, c) => matrix.map((_, r) => matrix[r][c]))
}

function generateClassRecordSummary(scores) {
  const studentScores = Object.keys(scores).map(
    (student) => scores[student].scores
  )
  const examScores = transpose(studentScores.map((student) => student.exams))

  return {
    studentGrades: studentScores.map((student) => finalStudentGrade(student)),
    exams: generateExamObject(examScores),
  }
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
}

console.log(generateClassRecordSummary(studentScores))

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
