const minFallingPathSum = function (A) {
  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      let options = [];
      if (j > 0) options.push(A[i - 1][j - 1]);
      if (j < A.length - 1) options.push(A[i - 1][j + 1]);
      options.push(A[i - 1][j]);
      A[i][j] += Math.min(...options);
    }
  }
  return Math.min(...A[A.length - 1]);
};