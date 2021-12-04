
/* 
自定义队列类型 队列核心定义: 先进先出,后进后出, 例如现实中的排队
使用数组封装
*/
export default class Queue {
  //用于保存元素的数据的数组
  // arr = []
  constructor(arr = []) {
    this.arr = arr
  }
  enqueue (element) {
    return this.arr.push(element)
  }
  //出队列
  dequeue () {
    return this.arr.shift()
  }
  //查看队头
  front () {
    return this.arr[0]
  }
  //栈中元素的个数
  size () {
    return this.arr.length
  }
  //是否是空栈
  isEmpty () {
    if (this.arr.length) return false
    else return true
  }
  // 返回空格隔开的字符串
  toString () {
    return this.arr.join(' ')
  }
}
// 入队列
