const mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  let listsAsArray = [];
  for (let i = 0; i < lists.length; i++) {
    let currNode = lists[i];
    while (currNode) {
      let nextNode = currNode.next;
      currNode.next = null;
      listsAsArray.push(currNode);
      currNode = nextNode;
    }
  }
  listsAsArray.sort((a, b) => a.val - b.val);
  let head = listsAsArray[0];
  if (!head) return null;
  let currNode = head;
  for (let i = 1; i < listsAsArray.length; i++) {
    currNode.next = listsAsArray[i];
    currNode = currNode.next;
  }
  return head;
};