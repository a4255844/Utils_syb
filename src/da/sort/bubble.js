/* 
实现冒泡排序：
        注意事项： 两层嵌套的循环
                   外层循环每次次数会-1
*/
export default function bubbleSort(array) {
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
