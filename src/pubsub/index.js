const pubsub = {}
/* 设计一个用来存储消息名和回调的容器
    {
      msg1 : {
       uid_1 : callback,
       uid_2 : callback
      },
      msg2 : {
       uid_3 : callback
      }
    }
*/
let callbackContainer = {}
let id = 0
//  pubsub语法
// 1. subscribe(msgName,callback): 订阅消息,并返回有一个标识token
pubsub.subscribe = function (msg, callback) {

  if (!callbackContainer[msg]) {
    const callbacks = {} //用于储存函数
    callbackContainer[msg] = callbacks
  }
  const token = `uid_${++id}_${msg}` //生成 token
  callbackContainer[msg][token] = callback  //保存函数
  return token

}
// 2. publish(msgName,data) 异步发布消息
pubsub.publish = function (msg, data) {
  if (callbackContainer[msg]) {
    const callbacks = callbackContainer[msg]
    Object.values(callbacks).forEach(callback => {
      setTimeout(() => {
        callback(msg, data)
      })
    })
  }
}
// 3. publishSync(msgName,data)同步发送消息
pubsub.publishSync = function (msg, data) {
  if (callbackContainer[msg] && callbackContainer[msg] !== 'undefined') {
    const callbacks = callbackContainer[msg]
    Object.values(callbacks).forEach(callback => {
      callback(msg, data)
    })
  }
}
// 4. unsubscribe(flag): 根据flag取消订阅 
pubsub.unsubscribe = function (flag) {
  if (flag === undefined) {  //未传入flag
    callbackContainer = {}
  } else if (typeof flag === 'string' && flag.indexOf('uid_') === 0) { //传入的是token
    Object.values(callbackContainer).forEach(callbacks => {
      delete callbacks[flag]
    })
    // const msg = flag.split('_')[2]
    // callbackContainer[msg] && delete callbackContainer[msg][flag]
  } else {   //传入的是msg
    delete callbackContainer[flag]
  }


}
export default pubsub

