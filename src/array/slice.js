// 语法: var new_array = slice(array, [begin[, end]])
// 功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变
export function slice(array, begin, end) {
  let arr = []
  //如果传入的数组为空，直接返回
  if (array.length === 0) return arr
  //如果没有传递begin或end
  begin = begin || 0
  end = end || array.length
  //如果begin和end的值超出范围
  if (begin < 0) begin = 0
  if (end > array.length) end = array.length
  //遍历数组，返回对应的结果
  for (let index = begin; index < end; index++) {
    arr.push(array[index])
  }
  return arr
}