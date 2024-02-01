<template>
  <!-- <nav> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> |
    <router-link to="/editor">Editor</router-link> -->
    <!-- <router-link to="/c1">c1</router-link> |
    <router-link to="/c2">c2</router-link> -->
  <!-- </nav> -->
  <router-view />
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
// import { comps } from "@/views/MyComp/useComp";
import {ElMessageBox} from "element-plus"
import {Delete} from "@element-plus/icons-vue"



// onMounted(()=>{
//   console.log('[onMounted from App.vue]')
// })

// onBeforeMount(async ()=>{
//   console.log('[onBeforeMount from App.vue]')
//   await new Promise(resolve=>{
//     setTimeout(() => {
//       resolve(true);
//     }, 0);
//   })
//   console.log('[onBeforeMount from App.vue end]')
// })
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
