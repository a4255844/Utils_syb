/* 
 1). 大众乞丐版
            问题1: 函数属性会丢失
            问题2: 循环引用会出错
*/
export function deepClone1(target) {

  return JSON.parse(JSON.stringify(target))
}
/* 
  2). 面试基础版本
            解决问题1: 函数属性丢失
            无法解决: 循环引用,栈内存溢出
*/
export function deepClone2(target) {
  if (target instanceof Array || (target !== null && typeof target === 'object')) {
    const newTarget = target instanceof Array ? [] : {}
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        newTarget[key] = deepClone2(target[key]) //递归实现深度克隆
      }
    }
    return newTarget
  } else {
    return target
  }
}
/*
 3). 面试加强版本
            解决问题: 循环引用正常,函数属性会丢失
            解决思路：
                目标：同一个对象/数组只能被克隆一次
                创建克隆对象前：如果克隆对象已经存在，直接返回
                创建克隆对象后：保存克隆对象
                保存的容器结构：key: target, value: newTarget
            
*/
export function deepClone3(target, map = new Map()) {
  if (target instanceof Array || (target !== null && typeof target === 'object')) {
    let newTarget = map.get(target)
    // map中存在对应的克隆对象，直接将其返回
    if (newTarget) {
      return newTarget  //不要对同一个对象进行多次clone
    }
    newTarget = target instanceof Array ? [] : {}
    map.set(target, newTarget) //保存到map容器，以便下次进行对比
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        newTarget[key] = deepClone3(target[key], map) //递归实现深度克隆
      }
    }
    return newTarget
  } else {
    return target
  }
}
/* 
 4). 面试加强版本2(优化遍历性能)
            数组: while | for | forEach() 优于 for-in | keys()&forEach()
            对象: for-in 与 keys()&forEach() 差不多
*/
export function deepClone4(target, map = new Map()) {
  if (target instanceof Array || (target !== null && typeof target === 'object')) {
    let newTarget = map.get(target)
    // map中存在对应的克隆对象，直接将其返回
    if (newTarget) {
      return newTarget  //不要对同一个对象进行多次clone
    }
    if (target instanceof Array) {
      newTarget = []
      map.set(target, newTarget) //保存到map容器，以便下次进行对比
      target.forEach((item, index) => {
        newTarget[index] = deepClone4(item, map)
      })
    } else {
      newTarget = {}
      map.set(target, newTarget) //保存到map容器，以便下次进行对比
      for (const key in target) {
        if (target.hasOwnProperty(key)) {
          newTarget[key] = deepClone4(target[key], map) //递归实现深度克隆
        }
      }
    }
    return newTarget
  } else {
    return target
  }
}