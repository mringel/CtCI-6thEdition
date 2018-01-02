// Implement an algorithm to find the kth to last element of a singly linked list

// For this solution k=1 would return the last element, k=2 would return the
// second to last element. It could also be defined such that k=0 would return
// the last element.

// Note: In some linked list implementations the size of the length list is
// known. In this case the solution would be trivial. We're assuming here that
// the size of the linked list is not known.

// Recursive solution. Recursive solutions are often cleaner code-wise but less
// optimal in time and or space.

// This method does not return the element, but logs it to the console. This may
// or may not satisfy the requirements of the problem.

function printKthToLast(head, k) {
  if (head == null) {
    return 0;
  }
  var index = printKthToLast(head.next, k) + 1;
  if (index === k) {
    console.log(k + 'th to the last node is ' + head.value);
  }
  return index;
}

// Iterative solution. Use two pointers, start one at the beginning and the
// other k nodes into the list.  When the second one hits the end, the first
// will be k from the end. Takes O(n) time and O(1) space.

function kthToLast(head, k) {
  var p1 = head;
  var p2 = head;

  // move p1 k nodes into the list
  for (var i = 0; i < k; i++) {
    if (p1 == null) {
      return null; // out of bounds
    }
    p1 = p1.next;
  }

  // Move pointers at same pace.  When p1 hits end, p2 will k away from end
  while (p1) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
}
