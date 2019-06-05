const firstMissingPositive = function (nums) {
  let oneFound = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) oneFound = true;
    if (nums[i] < 1 || nums[i] > nums.length) nums[i] = 1;
  }
  if (!oneFound) return 1;
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    nums[index] = - Math.abs(nums[index]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return i + 1;
  }
  return nums.length + 1;
};