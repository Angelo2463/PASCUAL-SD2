// console.log("Hello, World!");

// [SECTION] Array
// an array is also a storage fro multiple elements/values let arr = [1, 2, 3, 4, 5];
// The best practice is values/elements stored inan array should be of the same data type.

let pokemon = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"];

console.log(pokemon);
console.log(pokemon[0]); // Pikachu
console.log(pokemon[1]); // Bulbasaur
console.log(pokemon[2]);
console.log(pokemon[3]);

console.log(`My favorite pokemon is ${pokemon[0]}.`);
console.log(`My second favorite pokemon is ${pokemon[1].toLocaleUpperCase()}.`);

// get the length of the array
console.log(pokemon.length);

// Accessing an index that does not existing will return undefined
console.log(pokemon[4]); // undefined

// Array Mutation
// Modifying Array Elements
pokemon[4] = "Jigglypuff"; // Adding a new element at index 4
console.log(pokemon);
console.log(pokemon.length); // 5

pokemon[2] = "Charmeleon"; // Modifying the element at index 2
console.log(pokemon);

pokemon[10] = "Mew"; // Adding a new element at index 10
pokemon[11] = "Mewtwo"; // Adding a new element at index 11
console.log(pokemon);
console.log(pokemon.length); // 12

// Add element on the tail of an array without knowing the index number.
pokemon[pokemon.length] = "Eevee"; // Adding a new element at the end of the array
console.log(pokemon);
console.log(pokemon.length); // 13


//Access the last element of an array
console.log(pokemon[pokemon.length - 1]); // Eevee
console.log(pokemon.length - 1); // 12

// [SECTION] MODERN ARRAY MUTATION METHODS

let fruits = ["Apple", "Banana", "Melon"];
// push() - adds an element to the end of the array and returns the new length of the array

console.log("Original Array: " + fruits); // ["Apple", "Banana", "Melon"]
fruits.push("Grapes"); // Adding "Grapes" to the end of the array
console.log("After push: " + fruits); // ["Apple", "Banana", "Melon", "Grapes"] 

// pop() - removes the last element from the array and returns that element
console.log("Before pop: " + fruits); // ["Apple", "Banana", "Melon", "Grapes"]
let removedFruit = fruits.pop();
console.log("After pop: " + fruits); // ["Apple", "Banana", "Melon"]
fruits.pop(); // Removing "Grapes" from the end of the array
console.log("After pop: " + fruits); // ["Apple", "Banana"]

// unshift() - adds an element to the beginning of the array and returns the new length of the array
console.log("Original Array: " + fruits); // ["Apple", "Banana"]
fruits.unshift("Strawberry"); // Adding "Strawberry" to the beginning of the array
console.log("After unshift: " + fruits); // ["Strawberry", "Apple", "Banana"]

fruits.unshift("Mango", "Melon", "kiwi");
console.log("After unshift: " + fruits); // ["Mango", "Melon", "kiwi", "Strawberry", "Apple", "Banana"]

//shift() - removes the first element from the array and returns that element
console.log("Before shift: " + fruits); // ["Mango", "Melon", "kiwi", "Strawberry", "Apple", "Banana"]
fruits.shift(); // Removing "Mango" from the beginning of the array
fruits.shift(); // Removing "Melon" from the beginning of the array
console.log("After shift: " + fruits); // ["Melon", "kiwi", "Strawberry", "Apple", "Banana"]

//sort() - sorts the elements of an array in place and returns the sorted array
console.log("Before sort: " + fruits); // ["Melon", "kiwi", "Strawberry", "Apple", "Banana"]
fruits.sort(); // Sorting the array in ascending order
console.log("After sort: " + fruits); // ["Apple", "Banana", "Melon", "Strawberry", "kiwi"]

// reverse() - reverses the order of the elements in an array in place and returns the reversed array
console.log("Before reverse: " + fruits);
fruits.reverse(); // Reversing the order of the array
console.log("After reverse: " + fruits); // ["kiwi", "Strawberry", "Melon", "Banana", "Apple"]

// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log("Original Array: " + fruits); // ["kiwi", "Strawberry", "Melon", "Banana", "Apple"]
fruits.splice(2, 1); // Removing 1 element at index 2
console.log("After splice: " + fruits); // ["kiwi", "Strawberry", "Banana", "Apple"]
fruits.splice(1, 0, "Grapes", "Mango"); // Adding "Grapes" and "Mango" at index 1 without removing any element
console.log("After splice: " + fruits);
fruits.splice(3, 1, "Watermelon"); // Replacing 1 element at index 3 with "Watermelon"
console.log("After splice: " + fruits);

// forEach() - executes a provided function once for each array element
console.log("Original Array: " + fruits); // ["kiwi", "Grapes", "Mango", "Strawberry", "Watermelon", "Apple"]
fruits.forEach(x => {
    console.log(x);
});// Output: "kiwi", "Grapes", "Mango", "Strawberry", "Watermelon", "Apple"