/**
 * 这道题也太鸡儿简单了吧，通过率咋这么低
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  const len = nums.length;
  if(nums[len-1] < target) return len
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === target) {
      return i
    }else if (nums[i] > target) {
      return i
    }
  }
};

console.log(searchInsert([1,3,5,6], 7));