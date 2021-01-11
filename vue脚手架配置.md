# vue脚手架的基础配置
## 1. *配置路径别名*
   >从网上找的方法,网上还有另外一种配置方法,但是没法用
   + 在根目录下找到 `vue.config.js` 文件
        >如果没有此文件可以直接去找其他教程,或者是找尝试自己创建一个,免得浪费时间
   + 在 `vue.config.js` 文件中加入如下代码
        > 
        ``` 
        let path = require('path');
        function resolve(dir) {
            console.log(dir);
            return path.join(__dirname, dir);
        }
        let c = {
            configureWebpack: {
                resolve: {
                    extensions: ['.js', '.vue', '.json'],
                    alias: {
                        '@components': resolve('src/components'),
                        '@': resolve('src')
                    }
                },

            },
        }
        module.exports = c;
        ```
        > 这个文件是一个js文件,他需要导出一个配置的对象结构,他把这个js文件给当成配置文件用了,一个高级的json文件。这里导入了path模块使用__dirname进行路径拼接,alias属性里面前面的值对应的是要设置的别名,后面使用resolve方法拼接路径,可以替换成其他的路径
    + 在组件中使用
        ```
        import H from '@components/HelloWorld.vue'
        import b from '@request/api';
        ```
## 2. 设置服务器启动端口
> 配置vue的启动端口
  + 依旧是在 `vue.config.js` 中进行配置,依旧是返回的对象.加上如下代码
    > 
    ``` 
    devServer: {
        open: process.platform === 'darwin',
        host: '127.0.0.1',
        port: 2333,
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        before: app => {}
    }
    ```
   + 重新启动服务,可以发现端口已经被修改成了2333
## 3. 配置mockjs
> 这一步浪费了挺多时间的,过于傻逼,可能早已经配置好了结果自己写错了路径,导致找了大量资料,方法不一定适用所有的
  + 引入mockjs
    > 
    ```
    npm install mockjs
    ```
  + 创建mockjs
    > 在src目录下边创建mock文件夹,在mock文件夹中创建index.js 其中写上如下代码
    ```
    //导入mockjs
    import Mock from 'mockjs';
    // a可以替换成其他的mock文件
    require('./path/a.js'); 
    Mock.setup({
        timeout: 800
    });    
    ```
    > 在mock目录下边创建叫path的目录,里面创建a.js文件,内部写入如下代码
    ```
    // 导入mockjs
    let Mock = require('mockjs');
    // 创建成一个函数用来返回数据
    let a = function() {
        return {
            abc: 1
        }
    }
    // 第一个参数写正则来匹配路径,第二个参数写上method(get|post),a则为函数,返回一个值
    Mock.mock(/\/mock\/news/, 'get', a);
    ```
    > 可以在服务启动后去访问/api/mock/news文件夹看是否成功配置好了
  + end


## 4. 关闭烦人的变量定义必须使用的错误
> 变量生来自由，变量都有权选择是否被使用。为了变量的自由而战   —— 
+ 在根目录的 `package.json` 里面找到 `eslintConfig` ,添加或者找到 `rules` 字段,添加或者设置 `"no-unused-vars":"off"` 即可正常关闭
+ 后续等待更新
## 5. 全局注册Antd组件
  + 在main.js的入口中导入antd模块,然后挂载在vue中
 
