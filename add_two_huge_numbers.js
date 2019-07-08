const addTwoHugeNumbers = (a, b) => {
  let lengthA = 0;
  let lengthB = 0;
  let currNode = a;
  while (currNode) {
    lengthA++;
    currNode = currNode.next;
  }
  currNode = b;
  while (currNode) {
    lengthB++;
    currNode = currNode.next;
  }
  let otherNode;
  if (lengthA > lengthB) {
    currNode = a;
    otherNode = b;
  } else {
    currNode = b;
    otherNode = a;
  }
  let diff = Math.abs(lengthA - lengthB);
  let prevNode;
  while (currNode) {
    if (diff) {
      diff--;
    } else {
      currNode.value += otherNode.value;
      if (prevNode && currNode.value > 9999) {
        prevNode.value += 1;
        currNode.value -= 10000;
      }
      otherNode = otherNode.next;
    }
    prevNode = currNode;
    currNode = currNode.next;
  }
  let head;
  if (lengthA > lengthB) {
    currNode = a;
    head = a;
  } else {
    currNode = b;
    head = b;
  }
  let normalized = false;
  while (!normalized) {
    normalized = true;
    while (currNode.next) {
      if (currNode.next.value > 9999) {
        currNode.value += 1;
        currNode.next.value -= 10000;
        normalized = false;
      }
      currNode = currNode.next;
    }
    currNode = head;
  }
  if (head.value > 9999) {
    let temp = new ListNode(1);
    temp.next = head;
    head.value -= 10000;
    head = temp;
  }
  return head;
}