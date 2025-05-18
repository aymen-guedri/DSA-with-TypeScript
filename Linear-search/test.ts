import linear_search from "./ex1";

const arr = [1, 3, 5, 7, 9];

console.log("Test 1 (should be true):", linear_search(arr, 5));
console.log("Test 2 (should be false):", linear_search(arr, 2));
console.log("Test 3 (should be true):", linear_search(arr, 9));
console.log("Test 4 (should be false):", linear_search([], 1));
