
// You should implement your task here.

module.exports = function towelSort (matrix) {
  matrix = matrix || [];
  return matrix.reduce((acc, cur, index) => acc.concat(index % 2 === 0 ? cur : cur.reverse()), []) 
}
