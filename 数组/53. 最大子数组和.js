/**
 * 没有思路。。。暴力求解超时了
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let len = nums.length, arr = [], max = nums[0];
  nums.forEach((num, index) => {
    for(let i = index; i < len; i++) {
      const newArr = nums.slice(index, i + 1)
      maxNum = newArr.reduce((pre, val) => pre + val)
      if(maxNum > max) {
        arr = newArr
        max = maxNum
      }
    }
  })
  return max
};

/**
 * 新知识点：动态规划
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let ans = nums[0];
  let sum = 0;
  for(const num of nums) {
      if(sum > 0) {
          sum += num;
      } else {
          sum = num;
      }
      ans = Math.max(ans, sum);
  }
  return ans;
};

console.log(maxSubArray([1, -2,-5]));