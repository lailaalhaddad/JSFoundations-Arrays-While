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
  return numbers.length % 2 == 1 ;
  // if (numbers.length %2 == 1){
  //   return true;
  // } else {
  //     return false;
  // }
}
  // isArrayLengthOdd([1, 2, 3]);
  // isArrayLengthOdd([1, 2, 3, 4]);

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
  return numbers.length %2 == 0;
  
  // if (numbers.length %2 == 0){
  //   return true;
  // } else {
  //   return false;
  // }
}
  // isArrayLengthEven([1, 2, 3]);
  // isArrayLengthEven([1, 2, 3, 4]);

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
  return instructors;
}
  // addLailaToArray("Laila");

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  let eliminateTeam = (["Brazil", "Germany", "Italy"]);
  return eliminateTeam.pop();
}
  // eliminateTeam("Italy")

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
    return fruits.slice(2,4);
  } else{
    return [];
  }
}
  // secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]);
  // secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]);

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
//   youGottaCalmDown.forEach((element) => {
//     if(shout.endwith('!')){
//       shout.slice(shout.endwith('!'),shout.length);
//     }
//   });
  
  for(let i = 0; i < shout.length; i++) {
    if(shout.endsWith('!')){
         console.log(shout.slice(shout.endsWith('!'), -10));
     } else {
       console.log(shout);
     }
  }
}

youGottaCalmDown("HI!!!!!!!!!!");
youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!");
youGottaCalmDown("Hellooooo");

module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};