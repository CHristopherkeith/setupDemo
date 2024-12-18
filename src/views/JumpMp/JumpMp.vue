<template>
  <button @click="handleClick">test from setupDemo</button>
</template>
<script setup lang="ts">
function handleClick(): void {
  console.log('[debug handleClick from JumpMp]')
  wx.miniProgram.navigateTo({ url: "/pages/navigation/navigation" });
}
</script>
