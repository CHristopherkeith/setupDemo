<template>
  <div class="home">
    <button @click="onClick">click</button>
    <input v-model="value" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import HomeView1 from "1030SetupNpmlink/src/views/HomeView.vue";
import HomeView2 from "../../node_modules/1030SetupNpmlink/src/views/HomeView.vue";

let value: Ref<string> = ref("");

function onClick(): void {
  console.log(window.wx, "[window.wx]");

  /**
   * @description postMessage
   */

  window.wx.miniProgram.postMessage({ data: { foo: "bar" } });

  // window.wx.miniProgram.navigateBack();

  /**
   * @description navigateTo
   */

  // window.wx.miniProgram.navigateTo({url: '/pages/placeholder/placeholder'})

  // window.wx.miniProgram.navigateBack({delta: 1})
  // window.wx.miniProgram.redirectTo({
  //   url: "/pages/index",
  // });
}
</script>
