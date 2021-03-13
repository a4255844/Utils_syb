/*
 实现浅拷贝
        方法一: 利用ES6语法
        方法二: 利用ES5语法 for in
*/
// ES6语法
export function clone1(target) {
  if (target instanceof Array) {
    return [...target]
    // return target.slice()
    // return [].concat(target)
    // return Array.from(target)
    // return target.filter(item => true)
  } else if (target !== null && typeof target === 'object') {
    return { ...target }
  } else {  //如果既不是数组也不是对象
    return target
  }
}
//ES5语法
export function clone2(target) {
  //被克隆的目标必须是数组或者对象，不能是函数
  if (target instanceof Array || (target !== null && typeof target === 'object')) {
    const newTarget = target instanceof Array ? [] : {}
    for (const key in target) { //for in 默认会遍历原型对象上的属性
      if (target.hasOwnProperty(key)) {
        newTarget[key] = target[key];
      }
    }
    return newTarget
  } else {
    return target
  }
}