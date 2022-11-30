// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let reversable = [1, 3, 5];
// let reversed = reversable.reverse(); NOPE

let reversed = [];
for (let i = 0; i < reversable.length; i++) {
    let j = reversable.length - i - 1;
    reversed.push(reversable[j]);
}

console.log("\nUno reverse");
console.log(reversable);
console.log(reversed);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

let numArray = [1, 4, 5, 45, -2, 0];
console.log("\nHere's our Array", numArray);

let maxValue = Math.max(...numArray); //  Thanks Math
//console.log(maxValue);

for (let i = 0; i < numArray.length; i++) { // also this
    if (i == 0) {
        maxValue = numArray[i];
    } else {
        maxValue = (numArray[i] > maxValue ? numArray[i] : maxValue); // O(n^2) 👎
    };
};

console.log("\nMaxValue");
console.log("maxValue", maxValue);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

let minValue = null;

for (let i = 0; i < numArray.length; i++) { // literally copy pasted from above
    if (i == 0) {
        minValue = numArray[i];
    } else {
        minValue = (numArray[i] < minValue ? numArray[i] : minValue);
    };
};

console.log("\nMinValue");
console.log("minValue", minValue);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let evenArray = [];

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
        evenArray.push(numArray[i]);
    };
};

console.log("evenArray", evenArray);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

let oddArray = numArray.concat(); // Technically this should not be saved in another array but in the original one but I chose to do this anyway because I wanted to keep the numArray to be able to reuse it later
console.log(oddArray);
for (let i = oddArray.length; i > 0; i--) { // First idea I had to fix the indexing problem so here we are 
    console.log(i);
    if (oddArray[i] % 2 === 0) {
        oddArray.splice(i, 1);
    };
};

console.log("\nRemove odd numbers:");
console.log(numArray);
console.log(oddArray);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let someString = "This is a big ol string containing all the vowels I could remember...";
let smStrng = ""; // = someString.replace(/[aeiou]/gi, '');

for (let i = 0; i < someString.length; i++) {
    smStrng += (["a", "e", "i", "o", "u"].includes(someString.charAt(i))) ? "" : someString.charAt(i);
}

console.log("Remove all vowels from a given string:");
console.log(someString);
console.log(smStrng);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

let incrArray = []; // same thing as above
for (let i = 0; i < numArray.length; i++) {
    incrArray.push(numArray[i]+1);    
}

console.log("\nIncrement all array elements by one:");
console.log(numArray);
console.log(incrArray);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let stringArray = ["it's", "funny", "how", "significance", "makes", "a", "difference"];
let lengthsArray = [];
for (let i = 0; i < stringArray.length; i++) {
    lengthsArray.push(stringArray[i].length); // please no emojis or complex chinese characters
}

console.log("\nGet the lengths of every string in an array:")
console.log(stringArray);
console.log(lengthsArray);