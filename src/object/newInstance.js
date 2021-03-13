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
  //构造函数实际上是可以有返回值的，如果定义了返回值，并且返回值是对象类型，那么应该返回该结果
  //如果不是对象类型，则会正常返回实例对象
  //判断返回值是否为对象，如果是则返回该结果

  if (result instanceof Object) {
    return result
  }
  /* 
    obj.__proto__ = {}
    obj.__proto__.constructor = Fn
    错误的方法，每次创建实例后，实例对象的原型都是空对象
  */

  //将构造函数的显示原型对象 赋值给 实例的隐式原型对象，所有实例指向同一个原型对象
  obj.__proto__ = Fn.prototype
  return obj
}