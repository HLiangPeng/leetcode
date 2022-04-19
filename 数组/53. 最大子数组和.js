/**
 * 没有思路。。。
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

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));