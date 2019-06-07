const summaryRanges = function (nums) {
  if (!nums.length) return [];
  let currNum = nums[0];
  let currIteration = 0;
  let res = [];
  let rangeStarted = false;
  res.push("" + nums[0]);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === currNum + 1) {
      rangeStarted = true;
      currNum++;
    } else {
      if (rangeStarted) {
        res[currIteration] += "->" + currNum;
      }
      currIteration++;
      currNum = nums[i];
      res.push("" + currNum);
      rangeStarted = false;
    }
  }
  if (currNum !== parseInt(res[res.length - 1]) && currNum === nums[nums.length - 1]) {
    res[currIteration] += "->" + nums[nums.length - 1];
  }
  return res;
};