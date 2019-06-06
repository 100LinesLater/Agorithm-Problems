const uniquePaths = function (m, n) {
  if (m === 1 || n === 1) return 1;
  let table = [];
  for (let i = 0; i < n; i++) {
    table.push([]);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0) {
        table[i][j] = 1;
      } else if (j === 0) {
        table[i][j] = 1;
      } else {
        table[i][j] = table[i - 1][j] + table[i][j - 1];
      }
    }
  }
  return table[n - 1][m - 1];
};