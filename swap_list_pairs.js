const swapPairs = function (head) {
  if (!head) return head;
  let next = head.next;
  let curr = head;
  let prev;

  while (next) {
    let twoOver = next.next;
    curr.next = twoOver;
    next.next = curr;
    if (prev) {
      prev.next = next;
    } else {
      head = next;
    }

    prev = curr;
    curr = twoOver;

    if (curr) {
      next = curr.next;
    } else {
      next = null;
    }
  }
  return head;
};