/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var curr = head
    while(head != null && head.val === val) {
        head = head.next
    }
    while(curr && curr.next) {
        if(curr.next.val === val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return head
};