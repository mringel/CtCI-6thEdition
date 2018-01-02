// Write code to remove duplicates from an unsorted linked list.
// Follow up: How would you solve this problem if a temporary buffer is not
// allowed?

//Solution with temporary buffer.  Uses a set to keep track of found values in
// the linked list. Passing head as node will delete all dups in the list.
// This solution takes O(N) time, where N is the length of the linked list.
function deleteDups(node) {
  var set = new Set();
  var previous = null;
  while (node != null) {
    if (set.has(n.value)) {
      previous.next = node.next;
    } else {
      set.add(node.value);
      previous = node;
    }
    node = node.next;
  }
}

// If we can't use a buffer we can use two pointers, current and runner.
// Current iterates through the list and runner checks all subsequent nodes
// for duplicates. This runs in O(N^2) time, but O(1) space.

function deleteDups2(head) {
  var current = head;
  while (current != null) {
    // remove all future nodes that have the same value
    var runner = current;
    while (runner.next) {
      if (runner.next.value === current.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
}
