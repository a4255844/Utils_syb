/* 
  1. 函数的返回值为promise, 成功的结果为response, 失败的结果为error
  2. 能处理多种类型的请求: GET/POST/PUT/DELETE
  3. 函数的参数为一个配置对象
      {
        url: '',   // 请求地址
        method: '',   // 请求方式GET/POST/PUT/DELETE
        params: {},  // GET/DELETE请求的query参数
        data: {}, // POST或DELETE请求的请求体参数 
      }
  4. 响应json数据自动解析为js的对象/数组
*/
/* 发送任意类型请求的函数 */
function axios({
  method = "GET",
  url,
  params = {},
  data = {}
}) {
  //准备query参数:根据params创建query参数
  let queryStr = ''
  Object.keys(params).forEach(key => {
    queryStr += `&${key}=${params[key]}`
  })
  if (queryStr) {
    url += '?' + queryStr.substring(1)
  }
  //准备请求体参数: 把data转换为JSON字符串
  data = JSON.stringify(data)
  return new Promise((resolve, reject) => {
    //创建xhr对象
    const xhr = new XMLHttpRequest()
    // 初始化
    xhr.open(method, url)
    method = method.toUpperCase()
    //发送请求
    //   1.发送带有query参数的请求 get delete
    //   2.发送带有请求体参数的请求 post put 
    if (method === 'POST' || method === 'PUT') {
      xhr.setRequestHeader('Content-Type', 'appLication/json;charset=utf-8')
      xhr.send(data)
    } else { //GET  DELETE
      xhr.send()
    }
    //监视请求的状态
    xhr.onreadystatechange = () => {
      const { status, readyState, statusText } = xhr
      if (readyState !== 4) return
      if (status >= 200 && status < 300) {
        const response = {
          data: JSON.parse(xhr.response),
          status,
          statusText
        }
        resolve(response)
      } else {
        reject(new Error('request error status is ' + status))
      }
    }
  })
}
/* 发送特定请求的静态方法 */
axios.get = function (url, opstions) {
  return axios(Object.assign(opstions, { url, method: 'GET' }))
}
axios.post = function (url, opstions) {
  return axios({ url, method: 'POST', data: { ...opstions } })
}
axios.put = function (url, opstions) {
  return axios({ url, method: 'PUT', data: { ...opstions } })
}
axios.delete = function (url) {
  return axios({ url, method: 'DELETE' })
}
// 暴露 axios对象
export default axios