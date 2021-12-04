//用于返回节流函数的工具函数
import call from './call'
export function throttle(callback, delay) {
  let pre = 0 //用来记录之前的时间，默认为0才能第一次一定执行
  return function (event) { //节流函数/事件回调函数，this是事件的调用者
    //记录每次事件触发的时间
    const current = Date.now()
    if (current - pre > delay) { //进行判断 只有离上一次调用callback的时间差大于delay
      call(callback, this, event) //调用handleClick函数(真正处理事件的),this为函数调用者button
      console.log(this);
      pre = current //当事件回调函数调用后记录当前时间
    }
  }
}