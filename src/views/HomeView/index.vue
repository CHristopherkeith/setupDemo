<template>
  <!-- <DynamicComp v-if="!!path" :path="path" /> -->
  <button @click="onClick('MyComp3')">show c3</button>
  <DynamicComp :path="'MyComp4'" />
  <DynamicComp :path="'MyComp5'" />
  <!-- <button @click="onClick('MyComp4')">show c4</button>
  <button @click="onClick('MyComp5')">show c5</button> -->
  <!-- <button @click="onClick('MyComp6')">show c6</button>
  <button @click="onClick('MyComp7')">show c7</button> -->
  <!-- <el-button>el button</el-button> -->
  <!-- <HomeView /> -->
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import HomeView from "@/views/HomeView/HomeView.vue";
import HelloWorld from "@/components/HelloWorld.vue";
// import HomeView from "subprojectVue/src/views/SubProjectHomeView.vue";
import DynamicComp from "@/views/DynamicComp/DynamicComp.vue";
// import HomeView from "subProjectTs/src/views/SubProjectTsHomeView.vue";
import _ from "lodash";
// import {ElMessageBox} from "element-plus"


console.log(_.cloneDeep({ a: "1" }));

const path: Ref<string> = ref("MyComp3");
function onClick(pathValue: string) {
  // path.value = "views/SubProjectTsHomeView";
  // console.log(localStorage.getItem("dynamicCompPath"), '[localStorage.getItem("dynamicCompPath")]')
  // path.value =
  //   localStorage.getItem("dynamicCompPath") || "views/SubProjectTsHomeView";
  path.value = pathValue;
  console.log(path, "[path]");
  // ElMessageBox.confirm("aa","bb",{type: "warning"})
}

// function getComp(compPath:string): void {
//   try {
//     // const compPath: string = localStorage.getItem("dynamicCompPath") || "";
//     const importRes = import(
//       /* webpackChunkName: "[foo]" */
//       `@/views/DynamicComp/${compPath}.vue`
//     );
//     console.log(importRes, "[importRes from import]");
//   } catch (error) {
//     console.log(error, "[error from import]");
//   }
// }
</script>
