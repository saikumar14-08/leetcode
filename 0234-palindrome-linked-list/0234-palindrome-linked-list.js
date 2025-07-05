/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let ar = [];
    let curr = head;
    let size = 0;
    while(curr) {
        ar.push(curr.val);
        curr=curr.next; 
        size++;       
    }
    let f = 0;
    let l = ar.length - 1;
    while(f<l)
        if(ar[f++] !== ar[l--]) return false;
    return true;
};