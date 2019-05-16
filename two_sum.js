const twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash.hasOwnProperty(nums[i])) {
      hash[nums[i]].push(i);
      return hash[nums[i]];
    } else {
      hash[target - nums[i]] = [i];
    }
  }
};