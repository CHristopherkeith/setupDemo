import { createApp } from 'vue'
import App from './App.vue'
import App1 from '1030SetupNpmlink/src/App.vue'
import App2 from '../node_modules/1030SetupNpmlink/src/App.vue'
import router from './router'
import store from './store'
import vConsole from 'vconsole';
new vConsole();


createApp(App).use(store).use(router).mount('#app')
