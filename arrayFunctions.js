/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
  if (numbers.length %2 == 1){
    console.log(true);
  } else {
    console.log(false);
  }
}
  isArrayLengthOdd([1, 2, 3]);
  isArrayLengthOdd([1, 2, 3, 4]);

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  if (numbers.length %2 == 0){
    console.log(true);
  } else {
    console.log(false);
  }
}
  isArrayLengthEven([1, 2, 3]);
  isArrayLengthEven([1, 2, 3, 4]);

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  instructors = ["Mshary", "Hasan"];
  instructors.push("Laila");
  console.log(instructors);
}
  addLailaToArray("Laila");

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  let eliminateTeam = ["Brazil", "Germany", "Italy"];
  console.log(eliminateTeam.splice(2,1));
}
  eliminateTeam("Italy")

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length %2 == 0){
    console.log(fruits.slice(2,4));
  } else{
    console.log("[]");
  }
}
  secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]);
  secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]);

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */
function youGottaCalmDown(shout) {
  // shout.forEach((element) => {
  //   if(shout.endwith('!')){
  //     shout.slice(3,11);
  //   }
  // });
  
  for(let i = 0; i < shout.length-1; i++) {
    if(shout.endwith('!')){
         console.log(shout.slice(2,11));
  }
}
  youGottaCalmDown("HI!!!!!!!!!!");
  youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!");
  youGottaCalmDown("Hellooooo");
}
module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
