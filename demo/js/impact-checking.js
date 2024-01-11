/**
 * 思路：二维的碰撞检测其实就是两个一维数组的相交，定好相关的标准就可以
 * 1. 已左上角为笛卡尔坐标系的(0,0)点
 * 2. 用三个要素(左上角坐标、宽、高)来一个长方形(物体)的唯一位置
 * 3. 这样就变成了同一平面两个长方形的碰撞检测了
 */

// NOTE: 检测某一个点是否在矩形中
const checkPointInRect = (point = {x: 0, y: 0}, rect = {p: {x: 0, y: 0}, w: 10, h: 20}) => {
  return point.x >= rect.p.x && point.x <= rect.p.x + rect.w && point.y >= rect.p.y && point.y <= rect.p.y + rect.h
}

const checking = (rectA = { p: {x: 0, y: 0}, w: 10, h: 20 }, rectB = { p: {x: 0, y: 0}, w: 10, h: 20 }) => {
  // NOTE: 其中一个矩形中的任何一个顶点在另一个矩形中，则表示他们肯定是相交（碰撞）的
  const lefttop = rectA.p
  const righttop = {x: rectA.p.x + rectA.w, y: rectA.p.y}
  const leftbottom = {x: rectA.p.x, y: rectA.p.y + rectA.h}
  const rightbottom = {x: rectA.p.x + rectA.w, y: rectA.p.y + rectA.h}
  return checkPointInRect(lefttop, rectB) || checkPointInRect(righttop, rectB) || checkPointInRect(leftbottom, rectB) || checkPointInRect(rightbottom, rectB)
}

const rA = {
  p: { x: 0, y: 0 },
  w: 10,
  h: 20 
}

const rB = {
  p: { x: 10, y: 10 },
  w: 10,
  h: 20 
}

console.log(checking(rA, rB))