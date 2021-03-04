/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = {}; // 当然也可以用Map
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num in obj) {
      return [obj[num], i];
    }
    obj[target - num] = i;
  }
};
// @lc code=end

