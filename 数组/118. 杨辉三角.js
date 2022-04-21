/**
 * 两个while加两个变量循环
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const arr = []
  let i = 0
  while(numRows - i > 0) {
    let arrRow = [], j = 0
    while(j <= i) {
      arrRow[j] = (arr[i-1] && arr[i-1][j-1] && arr[i-1][j]) ? (arr[i-1][j-1] + arr[i-1][j]) : 1
      j ++
    }
    arr.push(arrRow)
    i++
  }
  return arr
};

// 感觉这个leetcode有bug，题目说非正整数，结果没有测试用例0的情况。别人还能正常通过，无语。。。
var generate = function(numRows) {
  const dp  = new Array()
  dp.push([1])
  for(let i = 1; i < numRows; i++) {
      const nextRow = new Array(), lastRow = dp[dp.length - 1]
      nextRow.push(1)
      for(let j = 1; j < lastRow.length; j++)
          nextRow.push(lastRow[j - 1] + lastRow[j])
      nextRow.push(1)
      dp.push(nextRow)
  }
  return dp
};

console.log(generate(0));