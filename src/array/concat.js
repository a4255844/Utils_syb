// 语法: var new_array = concat(array, value1[, value2[, ...[, valueN]]]) 
// 功能: 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变 
export function concat(array, ...values) {
  let arr = [...array]
  //遍历values,将value或者value中的元素添加到arr中
  values.forEach(item => {
    if (Array.isArray(item)) {
      arr.push(...item)
    } else {
      arr.push(item)
    }
  })
  return arr
}