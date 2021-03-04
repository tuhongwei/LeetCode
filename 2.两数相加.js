/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let res = cur = new ListNode(0);
  let carry = 0; // 存储进位
  while (l1 !== null || l2 !== null) {
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;
    let sum = val1 + val2 + carry;
    cur.next = new ListNode(sum % 10); // 当前位的值
    cur = cur.next;
    carry = sum > 9 ? 1 : 0;
    l1 !== null && (l1 = l1.next);
    l2 !== null && (l2 = l2.next);
  }
  // 最后一位是否有进位
  if (carry > 0) {
    cur.next = new ListNode(carry);
  }
  return res.next;
};
// @lc code=end

