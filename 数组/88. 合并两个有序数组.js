/**
 * 用双指针试试，好吧自己没做出来。。。
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   let i = j = 0, num = 0;
//   while(nums1[m+n-1] === 0) {
//     if(nums1[i] <= nums2[j]) {
//       i++
//     }
//     else if(nums1[i] > nums2[j]) {
//       num = nums1[i];
//       nums1[i] = nums2[j];
//       nums1[n+j] = num
//       nums2[j] = 0
//       i++
//     }
//     else if(nums2[j] === 0) {
//       j++;
//     }
//   }
// };


/**
 * 新知识点：逆向双指针
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  while (len1 >= 0 && len2 >= 0) {
    // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
  nums1.splice(0, len2 + 1, ...nums2.slice(0, len2 + 1))
};


let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// let nums1 = [4, 5, 6, 0, 0, 0], m = 3, nums2 = [1, 2, 3], n = 3
merge(nums1, m, nums2, n)
console.log(nums1)