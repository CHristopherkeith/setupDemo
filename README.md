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

### h5与小程序通信
- `postMessage`，需要在小程序触发特定的行为（回退、组件销毁及分享）才能唤起小程序相应的方法
- `navigateTo`，通过`url`传参，跳转到中转页面，可以触发相应小程序的方法
  1. 此方案的`hash`值污染的问题（路由拦截或在h5回退）
  2. 小程序`pages`的通讯需要使用发布订阅机制吗？（考虑使用`getCurrentPages`）
  3. 小程序`pages/index`是否有需要使用计算属性？