
/* 
自定义栈类型
使用数组封装
*/
export default function Stack() {
  //用于保存元素的数据的数组
  this.arr = []  //比较常规的方式，缺点是外部会看到此属性
  // const arr = []   //这样定义外部无法看到，但是缺陷是需要给每个实例都创建方法
  // 创建方法是必须用this
  // Stack.prototype.push = function
  // this.push = function
}
// 入栈
Stack.prototype.push = function (element) {
  return this.arr.push(element)
}
//出栈
Stack.prototype.pop = function () {
  return this.arr.pop()
}
//查看栈顶元素
Stack.prototype.peek = function () {
  return this.arr[this.arr.length - 1]
}
//栈中元素的个数
Stack.prototype.size = function () {
  return this.arr.length
}
//是否是空栈
Stack.prototype.isEmpty = function () {
  if (this.arr.length) return false
  else return true
}
//将栈结构的内容用字符串返回 1 2 3
Stack.prototype.toString = function () {
  // let result = ''
  // for(let i = 0; i < this.arr.length; i++) {
  //   result += this.arr[i] + ' '
  // }
  // return result
 return this.arr.join('')
}
