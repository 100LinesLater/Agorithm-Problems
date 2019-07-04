const isListPalindrome = (l) => {
  if (l === null) return true;
  let length = 0;
  let currNode = l;
  while (currNode) {
    currNode = currNode.next;
    length++;
  }
  currNode = l;
  let nextNode;
  let prevNode = null;
  let halfLength = Math.floor(length / 2);
  while (halfLength > 0) {
    halfLength--;
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  let head = prevNode;
  if (length % 2 === 0) {
    l.next = currNode;
  } else {
    l.next = currNode.next;
    currNode = currNode.next;
  }
  while (currNode) {
    if (currNode.value !== head.value) return false;
    currNode = currNode.next;
    head = head.next;
  }
  return true;
}
