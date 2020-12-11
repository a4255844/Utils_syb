import call from './call'
export function bind(fn, obj, ...args) {
  return (...args2) => {
    //调用原来函数，指定this为obj,参数列表由args和args2一次组成
    return call(fn, obj, ...args, ...args2)
  }
}