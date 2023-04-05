<template>
  <HomeView0 />
  <!-- <DynamicComp v-if="!!path" :path="path" />
  <button @click="onClick">show comp</button> -->
</template>
<script lang="ts" setup>
import { ref, Ref } from "vue";
import HomeView0 from "@/views/HomeView/HomeView.vue";
// import HomeView from "subprojectVue/src/views/SubProjectHomeView.vue";
// import DynamicComp from "@/views/DynamicComp/DynamicComp.vue";
const path: Ref<string> = ref("");
function onClick() {
  // path.value = "views/SubProjectTsHomeView";
  path.value = localStorage.getItem("dynamicCompPath") || "";
}
</script>
