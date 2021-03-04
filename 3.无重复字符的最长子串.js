/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 第一种
var lengthOfLongestSubstring = function(s) {
  let res = 0, substr = '';
  for (let i = 0; i < s.length; i++) {
    let p = substr.indexOf(s[i]);
    if (p > -1) {
      substr = substr.substring(p + 1) + s[i];
    } else {
      substr += s[i];
      res = Math.max(substr.length, res)
    }
  }
  return res;
};

// 第二种
var lengthOfLongestSubstring = function(s) {
  let map = new Map(), res = 0;
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]) + 1, i);
    }
    map.set(s[j], j);
    res = Math.max(res, j - i + 1);
  }
  return res;
};
// @lc code=end

