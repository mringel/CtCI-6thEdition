// Implement an algorithm to delete a node in the middle (i.e. any node but the
// first and last node) of a singly linked list, given access only to that node
// (and not the head).

function deleteNode(node) {
  if (node == null || node.next == null) {
    return false; // failure
  }

  var next = node.next;
  node.data = next.data;
  node.next = next.next;
  return true; // success
}
