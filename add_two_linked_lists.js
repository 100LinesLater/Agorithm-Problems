// Definition for singly-linked list.
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
// @param {ListNode} l1
// @param {ListNode} l2
// @return {ListNode}

const addTwoNumbers = function (l1, l2) {
  let list1Length = 0;
  let list2Length = 0;
  let smallerLength;

  let currNode = l1;
  while (currNode) {
    currNode = currNode.next;
    list1Length++;
  }
  currNode = l2;
  while (currNode) {
    currNode = currNode.next;
    list2Length++;
  }
  let otherNode;

  if (list1Length > list2Length) {
    smallerLength = list2Length;
    currNode = l1;
    otherNode = l2;
  } else {
    smallerLength = list1Length;
    currNode = l2;
    otherNode = l1;
  }

  let carryOver = 0;
  let resultList;
  let resultCurrNode;
  while (currNode) {
    if (smallerLength > 0) {
      let digit = currNode.val + otherNode.val + carryOver;
      carryOver = Math.floor(digit / 10);
      digit %= 10;
      if (!resultList) {
        resultCurrNode = new ListNode(digit);
        resultList = resultCurrNode;
      } else {
        resultCurrNode.next = new ListNode(digit);
        resultCurrNode = resultCurrNode.next;
      }
      otherNode = otherNode.next;
      smallerLength--;
    } else {
      let digit = currNode.val + carryOver;
      carryOver = Math.floor(digit / 10);
      digit %= 10;
      resultCurrNode.next = new ListNode(digit);
      resultCurrNode = resultCurrNode.next;
    }
    currNode = currNode.next;
  }
  if (carryOver) {
    resultCurrNode.next = new ListNode(carryOver);
  }
  return resultList;
};