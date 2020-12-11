// 1. 自定义map方法
export function map(array, callback) {
  // 创建一个空数组
  let arr = []
  //遍历数组当前数组
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //调用callback得到结果
    const result = callback(element, index)
    //添加到数组中
    arr.push(result)
  }
  //返回数组
  return arr
}
// 2. 自定义reduce方法
export function reduce(array, callback, initValue) {
  let total = initValue //的到初始值
  //遍历当前数组
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //调用callback得到结果,赋值给total
    total = callback(total, element, index)
  }
  //返回total
  return total
}
// 3. 自定义filter方法
export function filter(array, callback) {
  // 创建一个空数组
  let arr = []
  //遍历数组当前数组,调用callback得到一个布尔值，如果为true,添加到arr
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //调用callback得到结果
    const result = callback(element, index)
    //如果为真，则添加到arr
    if (result) {
      arr.push(element)
    }
  }
  //返回数组
  return arr
}
// 4. 自定义find方法
export function find(array, callback) {
  //遍历数组当前数组,调用callback得到一个布尔值，如果为true,返回结果并退出循环
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //调用callback得到结果
    const result = callback(element, index)
    //如果为真，返回该元素
    if (result) {
      return element
    }
  }
  return undefined //如果全部为false，返回undefined
}
// 5. 自定义findIndex方法
export function findIndex(array, callback) {
  //遍历数组当前数组,调用callback得到一个布尔值，如果为true,返回该元素的下标并退出循环
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //调用callback得到结果
    const result = callback(element, index)
    //如果为真，返回该元素的下标
    if (result) {
      return index
    }
  }
  return -1 //全为false,则返回-1
}
// 6. 自定义every方法
export function every(array, callback) {
  //遍历数组当前数组,调用callback得到一个布尔值，如果全为true则返回true，如果其中一个为false则返回false
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //调用callback得到结果
    const result = callback(element, index)
    //如果不为真，则直接返回false
    if (!result) {
      return false
    }
  }
  return true //全部为真，返回true
}
// 7. 自定义some方法
export function some(array, callback) {
  //遍历数组当前数组,调用callback得到一个布尔值，如果其中有一个为true,则直接返回true,否则返回false
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //调用callback得到结果
    const result = callback(element, index)
    //如果为真，则直接返回true
    if (result) {
      return true
    }
  }
  return false //全部为false，返回false
}