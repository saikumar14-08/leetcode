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
    let currA = headA;
    while(currA) {
        let currB = headB;
        while(currB) {
            if(currA == currB) return currB;
            currB = currB.next;
        }
        currA = currA.next;
    }
    return null;
};