
let eventBus = {}
let callbackContainer = {}
// 1. on(eventName, callback): 绑定事件监听
eventBus.on = function (eventName, callback) {
  let callbacks = callbackContainer[eventName]
  if (!callbacks) { //callbacks应该为数组
    callbackContainer[eventName] = callbacks = []
  }
  callbacks.push(callback) //保存函数
}
// 2. emit(eventName, data): 分发事件
eventBus.emit = function (eventName, data) {
  const callbacks = callbackContainer[eventName]  //取出储存回调的数组
  if (callbacks && callbacks !== 'undefinde') {
    callbacks.forEach(callback => {
      setTimeout(() => {  //异步调用函数
        callback(data)
      });
    })
  }
}
// 3. off(eventName): 删除事件, 不传参数则删除所有
eventBus.off = function (eventName) {
  if (eventName === undefined) {
    callbackContainer = {}
  } else {
    delete callbackContainer[eventName]
  }
}
export default eventBus