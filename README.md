# vue-remote-loader

远程加载 vue 应用的简单方案，类似微前端，适合加载大量轻量的远程 vue 应用到一个页面上。

基本实现是给远程应用增加一个 bootstrap 的外部方法，并打包为 umd 格式。外壳应用远程获取打包的 js 文件并执行 bootstrap 入口函数。

css 隔离通过 vue scope 方式解决。

> __master__ 为主应用（外壳）

> __app1__、__app2__ 为子应用

TODO: 增加 js 隔离方案
