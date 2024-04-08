function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
