# vue-electron 插件使用

## 问题记录
> 记录一些常见的问题
1. 无法正常使用nodejs扩展的问题
   
   如果未经过操作直接使用node原生模块的话会在页面中报 `fs.readSync not function` 错误,此时需要在 `vue.config.js` 文件中找到导出的对象,找到 `pluginOptions` 中的 `electronBuilder` 对象中添加 `nodeIntegration: true` 代码如下所示
   ```
    module.exports = {
        //...
        pluginOptions: {
            electronBuilder: {
                nodeIntegration: true,
            }
        }
        //...
    };
   ```

## 常用api记录
1. ipc 进程通信
    + ipcMain
    + ipcRenderer
     
2. broserWindow 渲染窗口
    + close
    + min

