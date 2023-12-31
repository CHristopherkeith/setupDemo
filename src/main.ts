import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// 测试npm link
import App1 from '1030SetupNpmlink/src/App.vue'
import App2 from '../node_modules/1030SetupNpmlink/src/App.vue'
import router from './router'
import store from './store'
// vConsole
// import vConsole from 'vconsole';
// new vConsole();

const app = createApp(App);

// 注册所有图标
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component);
// }


app.use(store).use(router)/* .use(ElementPlus) */.mount('#app')