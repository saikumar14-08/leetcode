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
    let slow = head;
    let fast = head;
    // 1. Find the mid node of the list. i.e., slow.
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast = fast.next.next;
    }
    // 2. Reverse the second half of the list.
    let curr = slow;
    let prev = null;
    while(curr) {
        // Save -> Reverse -> Move
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // 3. Compare the pointers
    let f=head;
    let l=prev;
    while(l) {
        if(f.val!=l.val) return false;
        f=f.next;
        l=l.next
    }
    return true;
};