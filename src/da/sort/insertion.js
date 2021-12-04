//插入排序
export default function insertSort(array) {
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