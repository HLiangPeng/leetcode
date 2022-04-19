// var twoSum = function (nums, target) {
//   const arr = [],
//     len = nums.length
//   for (let i = 0; i < len; i++) {
//     let diffNum, num = nums[i], arr1, index
//     if (arr[1]) return arr
//     arr1 = nums.slice(i + 1, len)
//     arr[0] = i
//     diffNum = target - num
//     index = arr1.findIndex(val => val == diffNum)
//     console.log(diffNum, index);
//     arr[1] = index == -1 ?  '' : index + i + 1
//   }
// };

// twoSum([-1,-2,-3,-4,-5],-8)
// console.log(twoSum([-3,4,3,90],0))


// 利用对象来做
var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [hash[target - nums[i]], i];
    }
    hash[nums[i]] = i;
  }
  return [];
};

console.log(twoSum([3,2,4],6));