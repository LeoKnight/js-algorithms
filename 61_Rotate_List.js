/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) {
      return head;
  }
  let length = 1; // length of the list
  let end = head;
  while (end.next != null) {
      length++;
      end = end.next;
  }
  k = k % length;
  if (k == 0) {
      return head;
  }
  let newEnd = head;
  let pos = 1;
  for (let i = 1; i < length - k; i++) {
      newEnd = newEnd.next;
  }
  let newHead = newEnd.next;
  end.next = head;
  newEnd.next = null;
  return newHead;
};