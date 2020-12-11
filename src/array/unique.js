// 1). 理解:
//         创建一个不重复的数组副本, 只有首次出现的元素才会被保留
//         如: uniq([2, 3, 2, 7, 6, 7]) ==> [2, 3, 7, 6]
// 2). 实现:
//         方法1: 利用forEach()和indexOf()
//                说明: 本质是双重遍历, 效率差些
//         方法2: 利用forEach() + 对象容器
//                说明: 只需一重遍历, 效率高些
//         方法3: 利用ES6语法: from + Set 或者 ... + Set
//                说明: 编码简洁


//方法1: 利用forEach()和indexOf()
//       说明: 本质是双重遍历, 效率差些
export function unique1(array) {
  let arr = []
  array.forEach(item => {
    if (arr.indexOf(item) === -1) {
      arr.push(item)
    }
  });
  return arr
}
//         方法2: 利用forEach() + 对象容器
//                说明: 只需一重遍历, 效率高些
export function unique2(array) {
  let arr = []
  let obj = {}  //属性名是item,属性值是true
  array.forEach(item => {
    // if(!obj[item]) 
    if (!obj.hasOwnProperty(item)) {
      arr.push(item)
      obj[item] = true
    }
  })
  return arr
}
//         方法3: 利用ES6语法: from + Set 或者 ... + Set
//                说明: 编码简洁
export function unique3(array) {
  // return Array.from(new Set(array))
  return [...new Set(array)]
}