
/* 
自定义优先级队列
使用数组封装
*/
export default function PriorityQueue() {
  //用于保存元素的数据的数组
  this.arr = []  //比较常规的方式，缺点是外部会看到此属性
  // const arr = []   //这样定义外部无法看到，但是缺陷是需要给每个实例都创建方法
  // 创建方法是必须用this
  // Stack.prototype.push = function
  // this.push = function 此方式必须写在构造函数内部
  this.QueueElement = function (data, priority) {
    this.data = data
    this.priority = priority
  }
}

// 入队列
PriorityQueue.prototype.enqueue = function (data, priority) {
  //要求priority在[0,100]之间，剖则抛出异常
  if (priority < 0 || priority > 100) {
    throw new Error('优先级值必须在0到100之间')
  }
  //创建一个新的元素
  const queueElement = new this.QueueElement(data, priority)
  //将元素添加到this.arr当中，如果是空的，直接添加
  if (!this.arr.length) {
    this.arr.push(queueElement)
  } else { //如果this.arr内有元素，则需要遍历并判断：（越小优先级越高）
    for (let index = 0; index < this.arr.length; index++) {
      if (this.arr[index].priority > priority) {
        this.arr.splice(index, 0, queueElement)
        return
      }
    }
    // 如果上面没找到，直接放在最后面
    this.arr.push(queueElement)
  }
}
//出队列
PriorityQueue.prototype.dequeue = function () {
  return this.arr.shift()
}
//查看队头
PriorityQueue.prototype.front = function () {
  return this.arr[0]
}
//栈中元素的个数
PriorityQueue.prototype.size = function () {
  return this.arr.length
}
//是否是空栈
PriorityQueue.prototype.isEmpty = function () {
  if (this.arr.length) return false
  else return true
}
