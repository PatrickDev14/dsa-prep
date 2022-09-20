/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 
 set a node to list.head; use pointerSlow and pointerFast; if they are equal then there is a cycle
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  let pointerSlow = head;
  let pointerFast = head;
  
  while (pointerFast && pointerFast.next) {
    pointerSlow = pointerSlow.next;
    pointerFast = pointerFast.next.next;
    
    if (pointerSlow === pointerFast) {
      return true;
    }
  }
  return false;    
};