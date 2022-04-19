/**
 * 单指针
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const len = digits.length;
  let i = len
  while(digits[i-1] === 9) {
    if(i > 0) {
      digits[i - 1] = 0
    }
    i--
  }
  i === 0 ? digits.unshift(1) : digits[i-1]++
  return digits;
};

// console.log(plusOne([9]))
// console.log(plusOne([1,2,3]))
// console.log(plusOne([4,3,2,1]))
console.log(plusOne([0]))