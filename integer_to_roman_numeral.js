const intToRoman = function (num) {
  let mil = Math.floor(num / 1000);
  let hund = Math.floor((num % 1000) / 100);
  let ten = Math.floor((num % 100) / 10);
  let unit = num % 10;
  let res = "";

  while (mil) {
    res += "M";
    mil--;
  }
  while (hund) {
    if (hund === 9) {
      res += "CM";
      hund = 0;
    } else if (hund === 4) {
      res += "CD";
      hund = 0;
    } else if (hund >= 5) {
      res += "D";
      hund -= 5;
    } else {
      res += "C";
      hund--;
    }
  }
  while (ten) {
    if (ten === 9) {
      res += "XC";
      ten = 0;
    } else if (ten === 4) {
      res += "XL";
      ten = 0;
    } else if (ten >= 5) {
      res += "L";
      ten -= 5;
    } else {
      res += "X";
      ten--;
    }
  }
  while (unit) {
    if (unit === 9) {
      res += "IX";
      unit = 0;
    } else if (unit === 4) {
      res += "IV";
      unit = 0;
    } else if (unit >= 5) {
      res += "V";
      unit -= 5;
    } else {
      res += "I";
      unit--;
    }
  }
  return res;
};