<template>
  <component :is="comp"></component>
</template>
<script lang="ts" setup>
import {
  toRefs,
  onMounted,
  markRaw,
  ref,
  defineAsyncComponent,
  nextTick,
} from "vue";
// import HomeView from "subProjectTs/src/views/SubProjectTsHomeView.vue";

interface Prop {
  path: string;
}

const props = withDefaults(defineProps<Prop>(), {
  path: "",
});

const { path } = toRefs(props);

const comp = ref();

// comp.value = markRaw(HomeView);

onMounted(async (): Promise<void> => {
  try {
    // const dyComp = await import(
    //   /* webpackChunkName: "SubProjectTsHomeView" */ path.value
    // );
    console.log(path.value, "[path.value]");
    const dyComp = defineAsyncComponent(
      () =>
        import(
          /* webpackChunkName: "SubProjectTsComp" */ `subProjectTs/src/${path.value}.vue`
        )
    );
    console.log(dyComp, "[dyComp]");
    comp.value = markRaw(dyComp);
  } catch (error) {
    console.log(error, "[error]");
    console.log("[动态组件路径错误]");
  }
});
</script>
<style></style>
