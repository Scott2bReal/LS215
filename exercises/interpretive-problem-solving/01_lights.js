// You have a bank of switches before you, numbered from 1 to n. Every switch
// is connected to exactly one light that is initially off. You walk down the
// row of switches and toggle every one of them. You walk back to the beginning
// of the row and start another pass. On this second pass, you toggle switches
// 2, 4, 6, and so on. On the third pass, you go back to the beginning again,
// this time toggling switches 3, 6, 9, and so on. You continue to repeat this
// process until you have gone through n repetitions.
//
// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after n repetitions.

/*
Input: Total number of switches (integer)
Output: Array containing numbers of lights that are on

Requirements:
  - It seems like n = number of switches, so the number of cycles
    is equal to the number of switches? Not quite sure if that is an accurate
    interpretation but I would ask the interviewer
  - If 0 lights then return empty array?

Data Structure: Object with light number key and status value, array to contain
  final return

Algorithm:
  - Init object with number of lights for keys and all of them are set to false
  - Init multiplier object which will determine the space between switches
  - Step through the lights object, and turn on lights if light number % multiplier is 0
  - Once the multiplier is higher than the number of lights, step through the
    lights object and push any lights that are on into the final array
  - Return that array
*/

function initLightsObject(switches) {
  let lightNum = 1;
  const lights = {};

  while (lightNum <= switches) {
    lights[lightNum] = false;
    lightNum += 1;
  }

  return lights;
}

function toggleLight(light) {
  return !light;
}

function findLitLights(lights) {
  return Object.keys(lights).filter((light) => lights[light])
}

function lightsOn(switches) {
  const lights = initLightsObject(switches);
  let multiplier = 1;

  while (multiplier <= switches) {
    Object.keys(lights).forEach((light) => {
      if (light % multiplier === 0) {
        lights[light] = toggleLight(lights[light]);
      }
    })
    multiplier += 1;
  }

  return findLitLights(lights);
}

console.log(lightsOn(5));        // [1, 4]

// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
