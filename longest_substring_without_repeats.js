const lengthOfLongestSubstring = function (s) {
  let hash = {};
  let currString = "";
  let longest = 0;
  let lastIdx = 0;
  for (let i = 0; i < s.length; i++) {
    if (!hash.hasOwnProperty(s[i])) {
      hash[s[i]] = i;
      currString += s[i];
      if (currString.length > longest) longest = currString.length;
    } else {
      let idx = hash[s[i]] + 1;
      for (let j = lastIdx; j < idx; j++) {
        delete hash[s[j]];
      }
      currString = s.slice(idx, i + 1);
      hash[s[i]] = i;
      lastIdx = idx;
    }
  }
  return longest;
};