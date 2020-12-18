
/* 
自定义队列类型
使用数组封装
*/
export default function Queue() {
  //用于保存元素的数据的数组
  this.arr = []  //比较常规的方式，缺点是外部会看到此属性
  // const arr = []   //这样定义外部无法看到，但是缺陷是需要给每个实例都创建方法
  // 创建方法是必须用this
  // Stack.prototype.push = function
  // this.push = function
}
// 入队列
Queue.prototype.enqueue = function (element) {
  return this.arr.push(element)
}
//出队列
Queue.prototype.dequeue = function () {
  return this.arr.shift()
}
//查看队头
Queue.prototype.front = function () {
  return this.arr[0]
}
//栈中元素的个数
Queue.prototype.size = function () {
  return this.arr.length
}
//是否是空栈
Queue.prototype.isEmpty = function () {
  if (this.arr.length) return false
  else return true
}
