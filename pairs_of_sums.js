const pairsOfSumsNaive = (arr, k) => {
  let sums = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        sums.push([i, j]);
      }
    }
  }
    return sums;
  }; // time complexity: O(n^2) space complexity: O((n/2)^2) => O(n^2)

  // Better approach assuming no repeated numbers
  const pairsOfSumsBetter = (arr, k) => {
    let hash = {};
    let sums = [];
    for (let i = 0; i < arr.length; i++) {
      if (hash.hasOwnProperty(k - arr[i])) {
        hash[k - arr[i]].push(i);
        sums.push(hash[k - arr[i]]);
        continue;
      }
      if (!hash.hasOwnProperty(arr[i])) {
        hash[arr[i]] = [i];
      } else {
        hash[arr[i]].push(i);
        sums.push(hash[arr[i]]);
      }
    }
    return sums;
  }; // time complexity: O(n) space complexity: O(n)

  let arr = [1,2,3,5,8,10,11,12,13];
  let x = 13;
  console.log(pairsOfSumsNaive(arr, x), pairsOfSumsBetter(arr, x));