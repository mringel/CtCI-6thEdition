// Implement a function to check if a linked list is a palindrome

// Solution 1: reverse and compare.  We only need to compare the first half of
// the lists since if the first half of the normal lists matches the first half
// of the reversed list, then the other halfs must also match.

function isPalindrome(head) {
  var reversed = reverseAndClone(head);
  return isEqual(head, reversed);
}

function reverseAndClone(node) {
  var head = null;
  while (node) {
    var n = new LinkedListNode(node.data); // clone
    n.next = head;
    head = n;
    node = node.next;
  }
  return head;
}

function isEqual(listOneNode, listTwoNode) {
  while (listOneNode && listTwoNode ) {
    if (listOneNode.data != listTwoNode.data) {
      return false;
    }
    listOneNode = listOneNode.next;
    listTwoNode = listTwoNode.next;
  }
  return true;
}
