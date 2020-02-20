
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix) return [];
  return matrix.reduce((acc, arr, i) => {
    if(i % 2) arr.reverse();
    acc.push(arr);
    return acc;
  }, []).flat(2);
};