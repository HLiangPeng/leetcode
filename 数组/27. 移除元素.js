/**
 * 我采用的是双指针
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//  var removeElement = function(nums, val) {
//   if(!nums.length) return 0;
//   let start = 0, end = nums.length - 1;
//   while(start !== end) {
//     console.log(start, end, nums, val);
//     if(nums[end] === val) {
//       end -= 1
//       continue;
//     }
//     if(nums[start] === val) {
//       const num = nums[start]
//       nums[start] = nums[end]
//       nums[end] = num
//       continue;
//     }
//     start += 1
//   }
//   if(start === 0 && val === nums[start]) {
//     nums = []
//     return 0
//   }
//   return start + 1
// };

/**
 * 我不懂我的运行时间为啥是它的两倍
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let start = 0, end = nums.length;
  while(start < end) {
      if(nums[start] === val) {
          nums[start] = nums[end - 1];
          end--;
      } else {
          start++;
      }
  }
  return start;
};

console.log(removeElement([3] , 3));