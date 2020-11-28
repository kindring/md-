# `vuex` 技巧大不全
## 1. 这是个啥
> 官方文档写的非常好,建议自己看去
+ 官方合作项目
  > [vuex官方文档](https://vuex.vuejs.org/zh)
+ <details>
    <summary> 状态管理模式 </summary>
    
    在一个专门的地方来存储数据,类似于仓库的存在,也可以视作一个快递中转站.统一管理数据,好知道一些数据到了什么地方,你的包裹到了什么地方
  </details>
## 2. 老子懂了

## 3. 实战演练
> 自己在项目中如何使用vuex 项目参照antdv的antdpro项目
+ ### 项目结构 
  <details>
    <summary>目前的路径</summary>
    
    > 带后缀的是文件,没带后缀就是文件夹
    - `src`
      -  `store`
         -  <font color=#008000>index.js</font>
         -  `modules`
            -  state.js
   </details>     
+ ### 文件之间的如何导入
  + 在main.js中导入store,如下面的代码所示
    ```
        import Vue from 'vue'
        import store from './store/'
        // elseImport...

        // someUse...
        new Vue(
            store,
            // elseMounet
        ).$mount('#app');
    ```
  + 在store目录下的`index.js`中配置导入[vue](https://cn.vuejs.org/index.html)和[vuex](https://vuex.vuejs.org/zh),顺便导入`modules`中自己创建的vuex模块,如下面代码所示
    ```
        import Vue from 'vue'
        import Vuex from 'vuex'

        import stateStore from './modules/state'
        // 继续导入其他模块

        //vue 使用vuex
        Vue.use(Vuex);

        export default new Vuex.store({
            modules: {
                stateStore,
                // 其他的vuex模块
            },
            state: {

            },
            mutations: {

            },
            actions: {

            },
            getters: {

            }
        })
    ```
  
## 4. 这到底是个啥?
## 6. 我又悟了