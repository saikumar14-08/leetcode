/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

 // Find the length of the list.
 // Insert the sentinel node and point to head.
 ca;cu;ate the insertion point i.e., pos-n
 iterate till the pos like prev= prev.next and after exiting loop prev.next = prev.next.next 
 return sentinel.next
 */

 
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    /*
    let sentinel = new ListNode();
    sentinel.next = head;

    let curr = head;
    let len = 0;
    while(curr) {
        len++;
        curr =  curr.next;
    }

    let pos = len-n;
    let prev = sentinel;
    for(let i=0;i<pos;i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
    */
    let sentinel = new ListNode();
    sentinel.next = head;
    let s = sentinel;
    let f = sentinel;
    while(n) {
        f = f.next;
        n--;
    }
    let curr = s;
    while(f.next) {
        f = f.next;
        curr = curr.next;
    }
    curr.next = curr.next.next
    return s.next;
};