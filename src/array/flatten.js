// 1. 理解: 
// 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
// 如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]
// 2. 实现:
// 方法一: 递归 + reduce() + concat()
import { concat } from './concat'
import { reduce, some } from './declares'
export function flatten1(array) {
  return reduce(array, (pre, item) => {
    if (!Array.isArray(item)) {
      pre.push(item)
    } else {
      pre = concat(pre, flatten1(item))
    }
    return pre
  }, [])
}

// 方法二: ... + some() + concat()
export function flatten2(array) {
  let arr = concat([], ...array)
  while (some(arr, item => Array.isArray(item))) {
    arr = concat([], ...arr)
  }
  return arr
}
