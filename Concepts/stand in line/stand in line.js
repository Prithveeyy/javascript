function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr)); // Output: Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); // Output: 1
console.log("After: " + JSON.stringify(testArr)); // Output: After: [2,3,4,5,6]

