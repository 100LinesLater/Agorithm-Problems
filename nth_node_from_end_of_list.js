const removeNthFromEnd = function (head, n) {
  let end = head;
  let start = head;
  while (n > 1) {
    end = end.next;
    n--;
  }
  let prev = null;
  while (end.next) {
    end = end.next;
    prev = start;
    start = start.next;
  }
  if (!prev) return head.next;
  prev.next = start.next;
  return head;
};