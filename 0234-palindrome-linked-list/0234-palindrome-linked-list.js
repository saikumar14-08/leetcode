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
    while(head) {
        ar.push(head.val);
        head = head.next;
    }
    let f=0;
    let l=ar.length-1;    
    while(f<l) {
        console.log(ar[f], ar[l]);
        if(ar[f] != ar[l]) return false;
        f++; l--;
    }
    return true;
};