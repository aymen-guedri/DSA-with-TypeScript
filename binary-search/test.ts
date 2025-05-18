import binary_search from "./ex1";

const arr = [1, 3, 5, 7, 9, 11, 13];

console.log("Test 1 (should be true):", binary_search(arr, 7));
console.log("Test 2 (should be false):", binary_search(arr, 2));
console.log("Test 3 (should be true):", binary_search(arr, 13));
console.log("Test 4 (should be false):", binary_search([], 1));
