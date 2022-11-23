Now let's zoom into the "version comparison" part of the requirements,
interpret the examples given, and come up with concrete rules for comparing
versions. One way to describe this step is: How would you explain to a
non-technical person the rules for comparing two version numbers? We emphasize
non-technical language here, because we want to focus on interpreting the
requirements, not on coming up with a solution.

When comparing version numbers, we want to examine each segment of one version
number, and compare it to the corresponding segment of the other version
number. A version number is "larger" than another if the number at that
specific segment is larger than the other. Segments are separated by `.`
characters.

A valid version number must start with a number (not any other type of
character), and must contain only numbers or single point (`.`) characters.
