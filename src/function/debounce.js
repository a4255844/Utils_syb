//用于返回防抖函数的工具函数
export function debounce(callback, delay) {
  return function (event) {

    // if(callback.setTimeoutId) { 
    if (callback.hasOwnProperty('setTimeoutId')) { //判断定时器id是否存在
      clearTimeout(callback.setTimeoutId) //如果存在则清除当前定时器
    }
    // 保存定时器id到callback函数
    callback.setTimeoutId = setTimeout(() => { //进入定时器，准备执行事件函数
      callback.call(this, event) //执行事件函数
      delete callback.setTimeoutId //执行完毕后，删除对应的setTimeoutId属性(定时器id)
    }, delay);
  }
}