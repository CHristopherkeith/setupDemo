<template>
  <div class="home">
    <button @click="onClick">click</button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import HomeView1 from "1030SetupNpmlink/src/views/HomeView.vue";
import HomeView2 from "../../node_modules/1030SetupNpmlink/src/views/HomeView.vue";

function onClick(): void {
  console.log(window.wx, "[window.wx]");
  // window.wx.openLocation({ data: "foo" });
  window.wx.miniProgram.postMessage({ data: {foo: 'bar'} });
}
</script>
