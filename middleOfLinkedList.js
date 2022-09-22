/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 Find middle node of LL with 2 pointers, a slow and fast.
 When pointer fast reaches null, pointer slow is at the middle node.
 return pointer slow;
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
  let pointerSlow = head;
  let pointerFast = head;
  
  while (pointerFast && pointerFast.next) {
    pointerSlow = pointerSlow.next;
    pointerFast = pointerFast.next.next;
  }
  
  return pointerSlow;
};