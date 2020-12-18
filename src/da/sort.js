/* 
实现冒泡排序：
        注意事项： 两层嵌套的循环
                   外层循环每次次数会-1
*/
export function bubbleSort(array) {
  let temp = ''
  for (let index = array.length; index > 0; index--) {
    for (let j = 0; j < index - 1; j++) {
      if (array[j] > array[j + 1]) {
        // temp = array[j]
        // array[j] = array[j + 1]
        // array[j + 1] = temp
        // es6的语法
        [array[j + 1], array[j]] = [array[j], array[j + 1]]
      }
    }
  }
  return array
}
export function insertSort(array) {
  //假设第一个元素已经排好序
  const len = array.length
  for (let i = 1; i < len; i++) {
    const start = array[i]
    let preIndex = i - 1
    while (preIndex >= 0 && array[preIndex] > start) {
      array[preIndex + 1] = array[preIndex]
      preIndex--
    }
    array[preIndex + 1] = start
    // let j
    // for (j = i - 1; j >= 0; j--) {
    //   if (array[j] > start) {
    //     array[j + 1] = array[j]
    //   } else {
    //     break
    //   }
    // }
    // array[j + 1] = start
  }
  return array
}