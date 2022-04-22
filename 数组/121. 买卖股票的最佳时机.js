/**
 * 动态规划好难呀
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let len = prices.length,
      dp = Array.from(new Array(len), ()=>new Array(2))
  dp[0][0] = 0 // 第0天不持有
  dp[0][1] = -prices[0] // 第0天持有
  for(let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
  }
  return dp[len-1][0]
};

let prices = [7,6,4,3,1]
prices = [7,1,5,3,6,4]
console.log(maxProfit(prices));