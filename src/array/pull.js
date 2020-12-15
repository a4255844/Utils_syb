/* 
1. pull(array, ...values):
        删除原数组中与value相同的元素, 返回所有删除元素的数组
        说明: 原数组发生了改变
        如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 原数组变为[1, 5], 返回值为[3,3,7]
    2. pullAll(array, values):
        功能与pull一致, 只是参数变为数组
        如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组1变为[1, 5], 返回值为[3,3,7]
*/
export function pull(array, ...values) {
  const result = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (values.indexOf(element) !== -1) { //如果values内有数组中的元素
      array.splice(index, 1)  //删除原数组中相同的元素
      result.push(element)  //将删除的元素保存到新数组
      index--  //删除后元素会位移，所以需要--
    }
  }
  return result  //返回新数组
}
export function pullAll(array, values) {
  return pull(array, ...values)
}