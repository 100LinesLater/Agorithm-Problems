const reverse = function (x) {
  if (x === 0) {
    return 0;
  } else if (x > 0) {
    if (x > 2 ** 31 - 1) return 0;
    let res = parseInt(x.toString().split("").reverse().join(""));
    if (res > 2 ** 31 - 1) return 0;
    return res;
  } else {
    if (x < -(2 ** 31)) return 0;
    let res = parseInt("-" + x.toString().slice(1).split("").reverse().join(""));
    if (res < -(2 ** 31)) return 0;
    return res;
  }
};