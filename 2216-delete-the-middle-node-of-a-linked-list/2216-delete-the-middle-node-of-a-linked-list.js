/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    // Use slow pointer, fast pointer algo to find the mid point.
    // To satisfy corner cases let us use sentinel node.
    let sentinel = new ListNode();
    sentinel.next = head;

    let slow = sentinel;
    let fast = head;
    // Upon reaching mid point update the reference.
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return sentinel.next;
    
};