/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let sA = new Set();
    let cA = headA;
    let cb = headB;
    while(cA) {
        sA.add(cA);
        cA = cA.next;
    }
    while(cb) {
        if(sA.has(cb)) return cb;
        cb=cb.next;
    }
    return null;
};