/* 
 1. 自定义new工具函数
        语法: newInstance(Fn, ...args)
        功能: 创建Fn构造函数的实例对象
        实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj
*/
import { apply } from '../function/apply'
export function newInstance(Fn, ...args) {
  let obj = {}
  const result = apply(Fn, obj, args) //改变Fn的this指向obj
  if (result instanceof Object) { //判断返回值是否为对象，如果是则返回该结果
    return result
  }
  //如果不是，则指定obj.__proto__ = Fn.prototype,
  //这样做的目的是：让obj原型对象的constructor重新指回Fn构造函数
  obj.__proto__ = Fn.prototype
  return obj
}