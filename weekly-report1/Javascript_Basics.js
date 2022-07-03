// Merge 3 array.
// Remove 2 nd element from array.
// Replace 1st element of array with new value.
// Find max and min number from array.
// Sort array in descending order.
// "Hello World !" . replace World with "ABC".
// "Hello XYZ, " add "How are you" at the end of the string.
// Declare one array with number and sum all the number.



//1)  Merge 3 array.



const arr1 = [" jui "," shivam "," namra "," chintan "]
const arr2 = [" internship "," day3 "]
const arr3 = [" task "]
const arr4= [1,2,5,6,-1]

const webbrains = arr1.concat(arr2,arr3);
console.log(webbrains);

//2)  Remove 2 nd element from array.

//function removeElement() {


var spliced = arr1.splice(1, 1);
console.log("remove element:   "+ arr1);


//}
    

//3)  Replace 1st element of array with new value.

//function replaceElemnt() {


arr1.splice(0, 1, "intern");
console.log("replace element:   "+ arr1);

//}

//4) Find max and min number from array.

console.log("maximum from the array " + Math.max(...arr4)); 
console.log("Min from the array " + Math.min(...arr4));


// Sort array in descending order.

arr1.sort();
arr1.reverse();
console.log("Array in decending order "+ arr1);

//5)  "Hello World !" . replace World with "ABC".


let text = "Hello world !";
let result = text.replace("world", "ABC");
console.log(result);


//6) "Hello XYZ, " add "How are you" at the end of the string.

let var1= "Hello XYZ";
console.log(var1 + " How are you");

//7) Declare one array with number and sum all the number.
var sum = 0;

for (let i = 0; i < arr4.length; i++) {
    sum += arr4[i];
}
console.log("sum of array4 " + sum);