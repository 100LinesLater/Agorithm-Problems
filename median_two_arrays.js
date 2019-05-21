const findMedianSortedArrays = function (nums1, nums2) {
  let totalLength = nums1.length + nums2.length;
  let i = 0;
  let j = 0;
  let res = [];

  while (i + j < Math.floor(totalLength / 2) + 1) {
    if (nums1[i] === undefined) {
      res.push(nums2[j]);
      j++;
    } else if (nums2[j] === undefined) {
      res.push(nums1[i]);
      i++;
    }
    else if (nums1[i] <= nums2[j]) {
      res.push(nums1[i]);
      i++;
    } else {
      res.push(nums2[j]);
      j++;
    }
  }

  if (totalLength % 2 === 1) {
    return res[Math.floor(totalLength / 2)];
  }
  return (res[Math.floor(totalLength / 2)] + res[Math.floor(totalLength / 2) - 1]) / 2;
};