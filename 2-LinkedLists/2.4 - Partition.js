// Write code to partition a linked list around a value x, such that all nodes
// less than x come before all nodes greater than or equal to x.

// One solution is to iterate through the linked list and create two linked
// lists, one for before the partition and one for after, then link the two
// lists.

// Pass the head of the list as node
function partition(node, x) {
  var beforeStart = null,
      beforeEnd = null,
      afterStart = null,
      afterEnd = null;

  while (node) {
    var next = node.next;
    node.next = null;
    if (node.data < x) {
      // Insert node at end of before list
      if (beforeStart == null) {
        beforeStart = node;
        beforeEnd = beforeStart;
      } else {
        beforeEnd.next = node;
        beforeEnd = node;
      }
    } else {
      // Insert node into end of after list
      if (afterStart === null) {
        afterStart = node;
        afterEnd = afterStart;
      } else {
        afterEnd.next = node;
        afterEnd = node;
      }
    }
    node = next;
  }

  if (beforeStart === null) {
    return afterStart;
  }

  // Merge before and after list
  beforeEnd.next = afterStart;
  return beforeStart;
}

// We can make the code a bit shorter if we don't care about making the list
// "stable", i.e. preserving order except for the partioning. The problem, as
// given, says nothing about preserving order, so we can grow a single list
// by either appending each node to the head or tail.

function partition2(node, x) {
  var head = node;
  var tail = node;

  while (node) {
    var next = node.next;
    if (node.data < x) {
      // Insert node at head
      node.next = head;
      head = node;
    } else {
      // Insert node at tail
      tail.next = node;
      tail = node;
    }
    node = next;
  }
  tail.next = null;

  return head;
}
