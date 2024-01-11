/**
 * ？：两个矩阵点乘的问题
 * 1. 判断是否为矩阵形式
 * 2. 判断是否可以相乘
 * 3. 计算出最后的结果
 */
let arr = [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
  [4, 5, 6],
];
let arr1 = [
  [1, 2],
  [2, 3],
  [3, 4],
];
// 判断是否为矩阵形式的二维数组
let isMatrix = (arr) =>
  Array.isArray(arr) &&
  arr.length > 0 &&
  arr.every((item) => Array.isArray(item) && item.length === arr[0].length);
let matrixMulti = (matrix, matrix1) => {
  // 先判断是否满足矩阵相乘的条件
  // 1. 确保两个数组都是矩阵数组
  if (!isMatrix(matrix) || !isMatrix(matrix1)) return "存在不为矩阵的数组";
  // 2. 矩阵函数列数是可以相乘的
  if (matrix1.length !== matrix[0].length)
    return `${matrix.length}*${matrix[0].length}和${matrix1.length}*${matrix1[0].length}的矩阵不可点乘`;
  // 先确定矩阵的行数和列数
  const [row, col] = [matrix.length, matrix1[0].length];
  let result = [];
  for (let i = 0; i < row; i++) {
    let arr = []; // 数组有几行
    for (let j = 0; j < col; j++) {
      // 一行中的每个数对应的值
      arr.push(
        matrix[i].reduce(
          (sum, item, index) => sum + item * matrix1[index][j],
          0
        )
      );
    }
    result.push(arr);
  }
  return result;
};
console.log("---------->", matrixMulti(arr, arr1));
