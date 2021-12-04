
/* 
自定义优先级队列
使用数组封装
*/
import Queue from './queue'
export default class PriorityQueue extends Queue {
  //用于保存元素的数据的数组
  constructor(arr = []) {
    super(arr)
  }
  // 入队列
  enqueue (data, priority) {
    //要求priority在[0,100]之间，剖则抛出异常
    if (priority < 0 || priority > 100) {
      throw new Error('优先级值必须在0到100之间')
    }
    //创建一个新的元素
    const queueElement = new PriorityQueue.QueueElement(data, priority)
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
  // 转换字符串结果
  toString() {
    return this.arr.reduce((pre, item) => {
      pre.push(`${item.data}-${item.priority}`)
      return pre
    }, []).join(' ')
  }
}
// PriorityQueue的内部类
PriorityQueue.QueueElement = class {
  constructor(data, priority) {
    this.data = data
    this.priority = priority
  }
}

