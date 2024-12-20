/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let res = [];
    let curr = head;
    while(curr) {
        res.push(curr.val)
        curr = curr.next
    }
    let op = 0
    for(let i=0;i<res.length;i++) {
        op+=res[i] * (Math.pow(2,res.length-1-i))
    }
    return op
};