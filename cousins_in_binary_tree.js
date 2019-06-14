const isCousins = function (root, x, y) {
  let queue = [root];
  let prep = [];
  root.parent = -1;
  console.log(x);

  while (queue.length) {
    let runParentCheck = false;
    let arr = queue.map(e => e.val);
    let xParent, yParent;
    if (arr.includes(y) && arr.includes(x)) runParentCheck = true;
    while (queue.length) {
      let currNode = queue.shift();

      if (currNode.left) {
        currNode.left.parent = currNode.val;
        prep.push(currNode.left);
      }
      if (currNode.right) {
        currNode.right.parent = currNode.val;
        prep.push(currNode.right);
      }
      if (currNode.val === x) xParent = currNode.parent;
      if (currNode.val === y) yParent = currNode.parent;
    }
    if (runParentCheck && xParent !== yParent) return true;
    queue = prep.slice();
    prep = [];
  }
  return false;
};