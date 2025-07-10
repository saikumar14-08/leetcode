/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Create a sentinel node which points to head.
    let sentinel = new ListNode();
    sentinel.next = head;

    // Calculate the length.
    let len = 0;
    let curr = head;
    while(curr) {
        len++;
        curr = curr.next
    }

    // Find the prev pos of the deleting element and Run the loop to find the prev.
    let prev = sentinel;
    let pos = len - n;
    for(let i=0;i<pos;i++)
        prev = prev.next;
    prev.next = prev.next.next;
    return sentinel.next
};