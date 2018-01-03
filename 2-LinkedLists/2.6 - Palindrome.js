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


// Iterative Approach

// Another approach is to iterate through the list and push the first half to a
// stack. If the size is known this is easy. If the size is not known you can
// use the fast and slow runner approach.

// The solution assumes that a stack constructor has been defined.

function isPalindrome2(head) {
  var fast = head;
  var slow = head;

  var stack = new Stack();

  while (fast && fast.next) {
    stack.push(slow.data);
    slow = slow.next;
    fast = fast.next.next;
  }

  // Has odd number of elements, so skip the middle elements
  if (fast) {
    slow = slow.next;
  }

  while (slow) {
    var top = stack.pop();

    if (top != slow.data) {
      return false;
    }
    slow = slow.next;
  }
  return true;
}
