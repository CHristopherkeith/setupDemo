<template>
  <HomeView0 />
  <!-- <DynamicComp v-if="!!path" :path="path" />
  <button @click="onClick">show comp</button> -->
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import HomeView0 from "@/views/HomeView/HomeView.vue";
import HomeView from "subprojectVue/src/views/SubProjectHomeView.vue";
import DynamicComp from "@/views/DynamicComp/DynamicComp.vue";

// import HomeView from "subProjectTs/src/views/SubProjectTsHomeView.vue";
const path: Ref<string> = ref("");
function onClick() {
  // path.value = "views/SubProjectTsHomeView";
  // console.log(localStorage.getItem("dynamicCompPath"), '[localStorage.getItem("dynamicCompPath")]')
  path.value = localStorage.getItem("dynamicCompPath") || "views/SubProjectTsHomeView";
}
</script>
