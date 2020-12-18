/* 
  希尔排序
  1. 计算出一个增量数组(折半)
     递减，最后一个必须是1
     distance = length
     distance = Math.floor(distance/2)
  2. 以当前增量对数组进行分组，分成多个小数组
     对每个小数组进行分组，分成多个小数组
     每个小数组排序是交替进行
*/
function shellSort(array) {
  let len = array.length
  let distance = len
  while (distance > 1) {
    distance = Math.floor(distance / 2)
    for (let i = distance; i < len; i++) {
      const start = array[i]  //记录当前位置的值
      let preIndex = i - distance  //记录当前位置向左比较的具体位置
      while (preIndex >= 0 && array[preIndex] > start) {
        array[preIndex + distance] = array[preIndex]
        preIndex = preIndex - distance
      }
      array[preIndex + distance] = start
    }
  }
  return array
}
const array = [4, 6, 3, 1, 7, 9, 5, 12, 43]
console.log(shellSort(array));