const rearrangeLastN = (l, n) => {
  if (n === 0) return l;
  let count = 0;
  let i = l;
  while (i) {
    i = i.next;
    count++;
  }
  if (count === n) return l;

  i = l;
  let j = l;
  while (n) {
    j = j.next;
    n--;
  }
  while (j.next) {
    i = i.next;
    j = j.next;
  }
  j.next = l;
  let temp = i.next;
  i.next = null;
  return temp;
}