<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import HomeView1 from '1030SetupNpmlink/src/views/HomeView.vue'
import HomeView2 from '../../node_modules/1030SetupNpmlink/src/views/HomeView.vue'


// export default defineComponent({
//   name: 'HomeView',
//   components: {
//     HelloWorld,
//   },
// });
</script>
