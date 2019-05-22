const convert = function (s, numRows) {
  if (numRows === 1) return s;
  let hash = {};
  let i = 0;
  let down = true;
  let row = 1;

  while (i < s.length) {
    if (!hash.hasOwnProperty(row)) {
      hash[row] = [s[i]];
    } else {
      hash[row].push(s[i]);
    }
    if (row === 1) {
      down = true;
    } else if (row === numRows) {
      down = false;
    }
    if (down) {
      row++;
    } else {
      row--;
    }
    i++;
  }
  let res = "";
  if (s.length < numRows) numRows = s.length;
  for (let j = 1; j < numRows + 1; j++) {
    res += hash[j].join("");
  }
  return res;
};