export function apply(fn, obj, args) {
  if (obj === undefined || obj === null) {
    obj = window
  }
  // 在obj中添加tempFn属性，让其等于这个函数
  obj.tempFn = fn
  //调用obj中的tempFn方法，改变this指向
  const result = obj.tempFn(...args)
  //删除tempFn方法
  delete obj.tempFn
  return result
}