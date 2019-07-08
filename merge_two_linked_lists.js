const mergeTwoLinkedLists = (l1, l2) => {
  if (!l1 && !l2) return [];
  if (!l1) return l2;
  if (!l2) return l1;
  let values = [];
  let currNode1 = l1;
  let currNode2 = l2;
  while (currNode1 || currNode2) {
    if (!currNode1) {
      values.push(currNode2.value);
      currNode2 = currNode2.next;
    } else if (!currNode2) {
      values.push(currNode1.value);
      currNode1 = currNode1.next;
    } else {
      if (currNode1.value <= currNode2.value) {
        values.push(currNode1.value);
        currNode1 = currNode1.next;
      } else {
        values.push(currNode2.value);
        currNode2 = currNode2.next;
      }
    }
  }
  let head = new ListNode(values[0]);
  let currNode = head;
  for (let i = 1; i < values.length; i++) {
    currNode.next = new ListNode(values[i]);
    currNode = currNode.next;
  }
  currNode.next = null;
  return head;
}