/**
 * 一开始没理解题目的返回值， 这道题只能用递归做
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  let len = nums.length,
    minIndex = Math.floor(len / 2),
    root = nums[minIndex],
    left = minIndex - 1,
    right = len - 1,
    treeLen = 1,
    arr = [root]
  while(left >= 0) {
    let len = treeLen, leftArr = [], rightArr = []
    while(len > 0) {
      leftArr.push(nums[left] ? nums[left--] : null)
      nums[right] && right > minIndex && rightArr.push(nums[right--])
      len--
    }
    arr.push(...leftArr, ...rightArr);
    treeLen++
  }
  return arr
};

const sortedArrayToBST = nums => {
  if (!nums.length) return null;
  // 去中间索引
  const mid = nums.length >> 1;
  // 构建二叉树，根节点为中间值，左子树为左侧值继续构建，右子树为右子树继续构建
  const root = new TreeNode(
      nums[mid],
      sortedArrayToBST(nums.slice(0, mid)),
      sortedArrayToBST(nums.slice(mid + 1))
  );
  return root;
};

let nums = [-10, -3, 0, 5, 9]
// nums = [1, 3]
// nums = [1]
console.log(sortedArrayToBST(nums))