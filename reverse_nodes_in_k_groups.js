const reverseNodesInKGroups = (l, k) => {
  if (!l) return [];
  if (k <= 1) return l;
  let currNode = l;
  let numNodes = 0;
  let count = 0;
  while (currNode) {
    currNode = currNode.next;
    numNodes++;
  }
  count = Math.floor(numNodes / k);
  if (count === 0) return l;
  let remainder = numNodes % k;

  currNode = l;
  let prevNode = null;
  let prevStartNode;
  let startNode;
  let head;
  let firstLoop = true;

  while (count > 0) {
    let ticks = k;
    startNode = currNode;
    while (ticks > 0) {
      let temp = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      ticks--;
      currNode = temp;
    }
    if (firstLoop) {
      head = prevNode;
      firstLoop = false;
    }
    if (prevStartNode) prevStartNode.next = prevNode;
    prevStartNode = startNode;
    count--;
  }
  if (remainder) {
    startNode.next = currNode;
  } else {
    startNode.next = null;
  }

  return head;
}