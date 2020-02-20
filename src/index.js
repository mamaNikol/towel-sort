
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined) {
    return [];
  }
let arr = matrix.flat();
return arr.sort(function (a, b) {
    return a - b;
});
}

