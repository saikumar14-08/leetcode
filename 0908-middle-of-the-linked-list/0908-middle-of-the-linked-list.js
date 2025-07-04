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
var middleNode = function(head) {
    // let curr = head;
    // let size = 0;
    // while(curr.next != null) {
    //     curr = curr.next;
    //     size++;
    // }
    // let midInd = Math.ceil(size/2);
    // let midEl = head;
    // for(let i=0;i<midInd;i++) {
    //     midEl = midEl.next;
    // }
    // return midEl;
    let fast = head;
    let slow = head;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};