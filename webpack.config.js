const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  // 模式 决定打包的文件是否为压缩后的
  mode: 'development',
  // mode: 'production',
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sybUtils.js',
    // filename: 'sybUtils.mini.js',
    library: 'aUtils', //向外暴露的对象的名称
    libraryTarget: 'umd', //针对esm / commonjs / amd 语法
  }
}