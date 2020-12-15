/*
  2. 自定义instanceof工具函数
        语法: myInstanceOf(obj, Type)
        功能: 判断obj是否是Type类型的实例
        实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回tru, 否则返回false
*/
export function myInstanceOf(obj, Type) {
  let protoObj = obj.__proto__
  while (protoObj !== null) {  //只要protoObj != null,就继续循环
    if (protoObj === Type.prototype) return true  //判断protoObj 是否 === type,如果相等，返回true
    protoObj = protoObj.__proto__    //赋值到下一层proto
  }
  return false  //如果跳出循环,返回false
}