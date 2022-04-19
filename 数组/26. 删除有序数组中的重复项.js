/**
 * 我是利用对象来做的答案
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   const obj = {}
//   for(let i = 0; i < nums.length;) {
//     if(!obj[nums[i]]) {
//       obj[nums[i]] = true
//       i+=1
//     }else {
//       nums.splice(i, 1)
//     }
//   }
//   return nums.length
// };

/**
 * 双指针版本
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let fast = 1, slow = 0, len = nums.length;
  if(!len) return 0;
  while(fast < len) {
    if(nums[fast] !== nums[slow]) {
      slow += 1
      nums[slow] = nums[fast]
    }
    fast += 1;
  }
  return slow + 1;
};


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));