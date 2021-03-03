const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

/* promise 构造函数 */
function Promise(excutor) {
  const that = this
  that.status = PENDING
  that.data = undefined
  that.callBacks = []
  function resolve(value) {
    if (that.status !== PENDING) return
    that.status = RESOLVED
    that.data = value
    if (that.callBacks.length) {
      setTimeout(() => {
        that.callBacks.forEach(cbsObj => {
          cbsObj.onResolved(value)
        });
      });
    }
  }
  function reject(reason) {
    if (that.status !== PENDING) return
    that.status = REJECTED
    that.data = reason
    if (that.callBacks.length) {
      setTimeout(() => {
        that.callBacks.forEach(cbsObj => {
          cbsObj.onRejected(reason)
        });
      });
    }
  }

  try {
    excutor(resolve, reject)
  } catch (error) {
    reject(error)
  }

}
/* 
     1. then方法返回一个新的promise,它的返回值决定新promise的状态和值
      1) 抛异常: 返回的是一个失败的promsie
      2) 值:     返回一个成功的promsie
      3) promise: 返回的结果根据这个promsie的结果决定 
    */

Promise.prototype.then = function (onResolved, onRejected) {
  const that = this
  /* 如果用户未指定对应的回调函数,把对应的值传递下去: */
  onResolved = typeof onResolved === 'function' ? onResolved : value => value //把value传递下去 
  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason } //把reason传递下去

  return new Promise((resolve, reject) => {
    function handle(callBack) {
      try {
        const result = callBack(that.data)
        if (result instanceof Promise) { //如果返回值是promsie
          result.then(
            value => resolve(value),
            reason => reject(reason)
          )
        } else { //如果返回值是普通值
          resolve(result)
        }
      } catch (error) {  //如果抛出异常
        reject(error)
      }
    }

    if (that.status === RESOLVED) {  //如果状态为对应状态,则直接异步执行回调函数
      setTimeout(() => {
        handle(onResolved)
      });
    } else if (that.status === REJECTED) {
      setTimeout(() => {
        handle(onRejected)
      });
    } else {  //如果状态为PENDING,保存对应的回调函数
      that.callBacks.push({
        onResolved() {
          handle(onResolved)
        },
        onRejected() {
          handle(onRejected)
        }
      })
    }
  })
}


Promise.prototype.catch = function (onRejected) {
  /* 返回一个promise 直接返回.then即可 */
  return this.then(undefined, onRejected)
}

Promise.resolve = function (value) {
  /* 返回一个成功的promsie,如果传入的值也是一个promise,那么返回的promsie的状态由传入的promsie来决定 */

  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(resolve, reject)
    } else {
      resolve(value)
    }
  })
}

Promise.reject = function (value) {
  /*接收一个值,返回一个失败的promsie */
  return new Promise((resolve, reject) => {
    reject(value)
  })
}
Promise.all = function (values) {
  /* 接受一个promsie数组,如果全部成功,返回成功的promsie数组,其中有一个失败,则返回第一个失败的prosmie */
  return new Promise((resolve, reject) => {
    const promises = new Array(values.length) //创建一个用于保存成功promsie结果的数组,指定长度
    let current = 0 //记录当前成功的个数的变量
    values.forEach((value, index) => {
      value.then(
        value => {
          current++  //每成功一个,记录个数
          promises[index] = value  //将成功的promsie放入数组中对应的位置
          if (current === values.length) { //如果长度和成功个数相等,则表示成功
            resolve(promises) //返回成功的promise数组
          }
        },
        reason => { //如果其中有一个失败,直接返回失败的promsie
          reject(reason)
        }
      )
    })
  })
}
Promise.race = function (values) {
  /* 接收一个promise数组,返回第一个成功或失败的promsie */
  return new Promise((resolve, reject) => {
    values.forEach(value => {
      value.then(resolve, reject)
    })
  })
}
/* 扩展:返回一个指定延时时间的promsie,
        如果传入的值也是一个promise,那么返回的promsie的状态由传入的promsie来决定
*/
Promise.resolveDelay = function (value, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value instanceof Promise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    }, time);
  })
}
/* 扩展:返回一个指定延时时间失败的promsie */
Promise.rejectDelay = function (value, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(value)
    }, time);
  })
}
export default Promise