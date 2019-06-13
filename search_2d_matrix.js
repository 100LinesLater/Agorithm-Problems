const searchMatrix = function (matrix, target) {
  if (!matrix.length) return false;
  let m = matrix.length;
  let n = matrix[0].length;
  if (matrix[0][0] > target) return false;
  if (matrix[m - 1][n - 1] < target) return false;
  let i = 0;
  let j = 0;
  while (i < m && matrix[i][j] <= target) {
    if (matrix[i][0] === target) return true;
    i++;
  }
  i--;
  while (i >= 0 && j < n) {
    if (matrix[i][j] === target) {
      return true;
    } else if (j < n - 1 && matrix[i][j + 1] > target) {
      i--;
    } else {
      j++;
    }
  }
  return false;
};