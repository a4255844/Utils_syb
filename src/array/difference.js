/*
1. difference(arr1, arr2)
        得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)
        如: difference([1,3,5,7], [5, 8])  ==> [1, 3, 7]
*/
import { filter } from './declares'
//两组数组的方法
export function difference(arr1, arr2) {
  return filter(arr1, item => arr2.indexOf(item) === -1)
}
//两组以上数组的方法
export function differences(arr1, ...arrays) {
  return filter(arr1, item => {
    let result = true //上来默认设置为没有该元素
    // arrays.forEach(array => {  //效率过低，forEach无法中断
    //   if (array.indexOf(item) !== -1) { 
    //     result = false  //这里可以中断
    //   }
    // })
    for (let index = 0; index < arrays.length; index++) {
      const array = arrays[index];
      if (array.indexOf(item) !== -1) {
        result = false  //如果有修改结果为false
        break   //这里可以中断
      }
    }
    return result
  })

}