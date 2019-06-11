const firstUniqChar = function (s) {
  let res = {};
  for (let i = 0; i < s.length; i++) {
    if (!res.hasOwnProperty(s[i])) {
      res[s[i]] = [i];
    } else {
      res[s[i]].push(i);
    }
  }
  let results = Object.keys(res).filter(x => res[x].length === 1);
  if (!results.length) return -1;
  results = results.map(x => res[x][0]);
  let min = s.length;
  for (let i = 0; i < results.length; i++) {
    if (results[i] < min) min = results[i];
  }
  return min;
};