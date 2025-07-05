/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public bool HasCycle(ListNode head) {
        HashSet<ListNode> hs = new HashSet<ListNode>();
        ListNode curr = head;
        while(curr != null) {
            if(hs.Contains(curr)) return true;
            hs.Add(curr);
            curr = curr.next;
        }
        return false;
    }
}