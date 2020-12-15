/* 
    语法: object mergeObject(...objs)
    功能: 合并多个对象, 返回一个合并后对象(不改变原对象)
*/
import { concat } from '../array/concat'
export function mergeObject(...objs) {
  let result = {}
  objs.forEach(obj => {
    Object.keys(obj).forEach(key => {
      const value = obj[key]
      //如果result里没有key那么把key添加到result
      if (!result.hasOwnProperty(key)) {
        result[key] = value
      } else { //如果result里有key那么把key的值和value合并成一个数组
        //concat的第一个参数必须是数组，此处不能确定所，以用[]代替
        result[key] = concat([], result[key], value)
      }
    })
  })
  return result
}