const nearestPalindromic = function (n) {
  if (n === "0") return "1";
  if (n <= "10") return (parseInt(n) - 1).toString();
  if (n === "11") return "9";
  let half = Math.floor(n.length / 2);
  if (n.length % 2 === 1) {
    if (n.split("").reverse().join("") === n) {
      let low = parseInt(n.slice(0, half + 1)) - 1;
      let high = parseInt(n.slice(0, half + 1)) + 1;
      if (high.toString().length > half + 1) {
        high = high.toString().slice(0, half + 1);
        high += high.toString().split("").reverse().join("");
        low = low.toString() + low.toString().slice(0, half).split("").reverse().join("");
      } else if (low.toString().length < half + 1) {
        low = low.toString().slice(0, half);
        low += low.toString().split("").reverse().join("");
        high = high.toString() + high.toString().slice(0, half).split("").reverse().join("");
      } else {
        low = low.toString() + low.toString().slice(0, half).split("").reverse().join("");
        high = high = high.toString() + high.toString().slice(0, half).split("").reverse().join("");
      }
      if (Math.abs(parseInt(n) - parseInt(low)) <= Math.abs(parseInt(n) - parseInt(high))) {
        return low;
      } else {
        return high;
      }
    } else {
      let middle = n.slice(0, half + 1);
      middle += middle.slice(0, half).split("").reverse().join("");
      let other;
      if (parseInt(middle) > parseInt(n)) {
        other = (parseInt(n.slice(0, half + 1)) - 1).toString();
        other += other.slice(0, half).split("").reverse().join("");
        if (Math.abs(parseInt(n) - parseInt(other)) <= Math.abs(parseInt(n) - parseInt(middle))) {
          return other;
        } else {
          return middle;
        }
      } else {
        other = (parseInt(n.slice(0, half + 1)) + 1).toString();
        other += other.slice(0, half).split("").reverse().join("");
        if (Math.abs(parseInt(n) - parseInt(middle)) <= Math.abs(parseInt(n) - parseInt(other))) {
          return middle;
        } else {
          return other;
        }
      }
    }
  } else {
    if (n.split("").reverse().join("") === n) {
      let low = parseInt(n.slice(0, half)) - 1;
      let high = parseInt(n.slice(0, half)) + 1;
      console.log(high, low);
      if (high.toString().length > half) {
        high = high.toString();
        high += high.toString().slice(0, half).split("").reverse().join("");
        low = low.toString() + low.toString().split("").reverse().join("");
      } else if (low.toString().length < half) {
        low = low.toString();
        low += "9" + low.toString().split("").reverse().join("");
        high = high.toString() + high.toString().split("").reverse().join("");
      } else {
        low = low.toString() + low.toString().split("").reverse().join("");
        high = high = high.toString() + high.toString().split("").reverse().join("");
      }
      if (Math.abs(parseInt(n) - parseInt(low)) <= Math.abs(parseInt(n) - parseInt(high))) {
        return low;
      } else {
        return high;
      }
    } else {
      let middle = n.slice(0, half);
      middle += middle.split("").reverse().join("");
      let other;
      if (parseInt(middle) > parseInt(n)) {
        other = (parseInt(n.slice(0, half)) - 1).toString();
        if (other.length < half) {
          other += "9" + other.split("").reverse().join("");
        } else {
          other += other.split("").reverse().join("");
        }
        if (Math.abs(parseInt(n) - parseInt(other)) <= Math.abs(parseInt(n) - parseInt(middle))) {
          return other;
        } else {
          return middle;
        }
      } else {
        other = (parseInt(n.slice(0, half)) + 1).toString();
        other += other.split("").reverse().join("");
        if (Math.abs(parseInt(n) - parseInt(middle)) <= Math.abs(parseInt(n) - parseInt(other))) {
          return middle;
        } else {
          return other;
        }
      }
    }
  }
};