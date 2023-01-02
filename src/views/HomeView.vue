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

  // window.wx.miniProgram.postMessage({ data: { foo: "bar" } });

  // window.wx.miniProgram.navigateBack();

  /**
   * @description navigateTo
   */

  window.wx.miniProgram.navigateTo({
    url: "/pages/placeholder/placeholder",
    events: {
      // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
      acceptDataFromOpenedPage: function (data: any) {
        console.log(data,'[data from h5 acceptDataFromOpenedPage]');
      },
      someEvent: function (data: any) {
        console.log(data, '[data from h5 someEvent]');
      },
    },
    success: function (res: any) {
      console.log(res, '[res from h5]')
      // 通过 eventChannel 向被打开页面传送数据
      // res.eventChannel.emit("acceptDataFromOpenerPage", { data: "test" });
    },
  });

  // window.wx.miniProgram.navigateBack({delta: 1})
  // window.wx.miniProgram.redirectTo({
  //   url: "/pages/index",
  // });
}
</script>
