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
- `navigateTo`，通过url传参，跳转到中转页面，可以触发相应小程序的方法
