# 1030setup

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### h5 与小程序通信

- `postMessage`，需要在小程序触发特定的行为（回退、组件销毁及分享）才能唤起小程序相应的方法
- `navigateTo`，通过`url`传参，跳转到中转页面，可以触发相应小程序的方法
  1. 此方案的`hash`值污染的问题（路由拦截或在 h5 回退）
  2. 小程序`pages`的通讯需要使用发布订阅机制吗？（考虑使用`getCurrentPages`）
  3. 小程序`pages/index`是否有需要使用计算属性？

### 主项目与业务项目分离的问题（npm link）

- 公共包的问题，例如子项目的`vue`包

- 子项目反向引用主项目包的问题，主项目跳转到子项目页面，子项目无法跳转回主项目页面；子项目页面引用主项目包，目前已尝试过一下两种方式：

  1. 使用`@/xx`路径引用，代码提示找不到模块与类型，无法跳转
  2. 子项目使用`npm link`链接主项目，使用`mainProject/xx`引用，可以跳转，但只能跳转到软连接文件，也有找不到模块与类型的告警，不能定位到当前项目的文件

- `import()`动态导入的问题

  由于`ES6`+`webpack`的静态编译特性，`import(path)`的`path`不能完全为动态，需要指定特定的部分模块路径信息，需要解决，在主项目指定的**特定的部分模块路径信息**如何动态与业务项目关联

- 考虑上一个问题，其根本原因在于`import()`只支持编译时静态编译，是否可以考虑动态编译？[实际上动态编译可能只是一个技术思考，是否真有其必要性？]
  1. `require()`方法能否支持编译时动态编译？
  2. 运行时编译？（例如编译`vue`组件字符串）
