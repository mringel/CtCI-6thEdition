// You have two numbers represented by linked lists, where each node
// contains a single digit.  The digits are stored in reverse order such that
// the 1's digit is at the head of the list. Write a function that adds the two
// numbers together and returns the sum as a linked list.

function addLists(node1, node2, carry) {
  if (node1 === null && node2 == null && carry === 0) {
    return null;
  }

  var result = new LinkedListNode();

  var value = carry;
  if (node1) {
    value += node1.data;
  }
  if (node2) {
    value += node2.data;
  }

  result.data = value % 10;

  // Recursion
  if (node1 || node2) {
    var more = addLists(node1 === null ? null : node.next,
                        node2 === null ? null : node2.next,
                      value >= 10 ? 1 : 0);
    result.setNext(more);
  }

  return result;
}
