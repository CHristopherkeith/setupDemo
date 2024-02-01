<template>
  <div class="Three" ref="containerRef"></div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as THREE from "three";

const containerRef = ref<HTMLDivElement>();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

onMounted(() => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(
    containerRef.value!.offsetWidth,
    containerRef.value!.offsetHeight
  );
  containerRef.value!.appendChild(renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
});
</script>
<style scoped lang="scss">
.Three {
  height: 100%;
  width: 100%;
}
</style>
