const myAtoi = function (str) {
  let pos;
  let modString = '';
  let numbers = '0123456789';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      if (pos === false || pos) break;
      continue;
    } else if (numbers.includes(str[i])) {
      if (pos !== false) pos = true;
      modString += str[i];
    } else if (str[i] === '-') {
      if (pos === false || pos) break;
      pos = false;
    } else if (str[i] === '+') {
      if (pos === false || pos) break;
      pos = true;
    } else {
      break;
    }
  }

  if (!modString.length) return 0;
  let res = parseInt(modString);

  if (res > 2 ** 31 - 1 && pos) res = 2 ** 31 - 1;
  if (res > 2 ** 31 - 1 && !pos) res = 2 ** 31;

  if (pos) {
    return res;
  } else {
    return -res;
  }
};