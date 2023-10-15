<template>
  <div class="home">
    <button @click="onClick">click</button>
    <input v-model="value" />
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// 测试执行时机
import foo from "./testData";
import { onMounted, onBeforeMount } from 'vue';

// onMounted(()=>{
//   console.log('[onMounted from HomeView.vue]')
// })

// onBeforeMount(()=>{
//   console.log('[onBeforeMount from HomeView.vue]')
// })
// console.log(foo, '[foo from HomeView.vue]')

let value: Ref<string> = ref("");

function onClick(): void {
  /**
   * @description postMessage
   */

  // window.wx.miniProgram.postMessage({ data: { foo: "bar" } });

  // window.wx.miniProgram.navigateBack();

  /**
   * @description navigateTo
   */

  //  小程序
  // console.log(window.wx, "[window.wx]");
  // window.wx.miniProgram.navigateTo({
  //   url: "/pages/placeholder/placeholder",
  //   events: {
  //     // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
  //     acceptDataFromOpenedPage: function (data: any) {
  //       console.log(data, "[data from h5 acceptDataFromOpenedPage]");
  //     },
  //     someEvent: function (data: any) {
  //       console.log(data, "[data from h5 someEvent]");
  //     },
  //   },
  //   success: function (res: any) {
  //     console.log(res, "[res from h5]");
  //     // 通过 eventChannel 向被打开页面传送数据
  //     // res.eventChannel.emit("acceptDataFromOpenerPage", { data: "test" });
  //   },
  // });

  // window.wx.miniProgram.navigateBack({delta: 1})
  // window.wx.miniProgram.redirectTo({
  //   url: "/pages/index",
  // });

  // uni-app
  // document.addEventListener("UniAppJSBridgeReady", function () {
  console.log(window.uni, "[window.uni]");
  console.log(window.uni.navigateTo, "[window.uni.navigateTo]");
  window.uni.navigateTo({
    // url: '/pages/component/button/button'
    url: "/pages/placeholder/placeholder",
    // });
  });
  // console.log(window.uni.navigateTo, "[window.uni.navigateTo]");
  // window.uni.openLocation({
  //   longitude: 121.6,
  //   latitude: 24.9,
  // });
  // });
}
</script>
