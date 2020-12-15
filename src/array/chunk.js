/*  
2. chunk(array, size): 将数组拆分成多个 size 长度的区块，
   每个区块组成小数组,整体组成一个二维数组
*/
export function chunk(array, size = 1) {
  const bigArr = []  //创建大数组
  let smallArr = []  //创建小数组
  if (size < 1) size = 1
  if (!array.length) return bigArr

  array.forEach(item => {
    //如果smallArr的长度为0，将smallArr添加到bigArr内,
    if (!smallArr.length) bigArr.push(smallArr)
    smallArr.push(item)
    if (smallArr.length === size) { //如果长度等于size,则清空数组
      smallArr = []
    }

  });
  return bigArr
}