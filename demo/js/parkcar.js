/*
 * 题目要求
 * 使用面相对象设计一个停车场管理系统，该停车场包含：
 *	 1.停车位，用于停放车辆；
 *	 2.停车位提示牌，用于展示剩余停车位；
 * 可以丰富该系统的元素，给出类，类属性，类接口。
 */

const AllCarapaceNum = 500

class ParkCar {
  constructor () {
    this.rest = AllCarapaceNum
  }
  comeinCarapace (num = 1) {
    if (this.rest > num) {
      this.rest -=num
    } else {
      console.log('车位不够了，请等待')
    }
  }
  comeoutCarapace (num = 1) {
    this.rest ++
  }
  restCarapaceNum () {
    console.log(this.rest)
  }
}