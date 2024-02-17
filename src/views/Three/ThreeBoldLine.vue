<template>
  <div class="Three" ref="containerRef"></div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "@/three/addons/controls/OrbitControls.js";
import { IFCLoader } from "@/three/addons/loaders/IFCLoader.js";
import { IFCSPACE } from "@/three/addons/loaders/web-ifc.js";
import { Line2 } from "@/three/addons/lines/Line2.js";
import { LineMaterial } from "@/three/addons/lines/LineMaterial.js";
import { LineGeometry } from "@/three/addons/lines/LineGeometry.js";
import "element-plus/es/components/message/style/css";
import "element-plus/es/components/loading/style/css";
import { ElMessage, ElLoading } from "element-plus";

const containerRef = ref<HTMLDivElement>();

onMounted(()=>{
  init();
  animate();
});

let line, renderer, scene, camera, camera2, controls;
let line1;
let matLine, matLineBasic, matLineDashed;
let stats, gpuPanel;
let gui;

// viewport
let insetWidth;
let insetHeight;

// init();
// animate();

function init() {

  const containerWidth = containerRef.value!.offsetWidth;
  const containerHeight = containerRef.value!.offsetHeight;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(containerWidth, containerHeight);
  containerRef.value!.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  camera = new THREE.PerspectiveCamera(
    40,
    containerWidth / containerWidth,
    1,
    1000
  );
  camera.position.set(-40, 0, 60);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 10;
  controls.maxDistance = 500;

  const geometry = new LineGeometry();
  geometry.setPositions([0, 0, 0, 0, 10, 0]);

  matLine = new LineMaterial({
    color: 0xff0000,
    linewidth: 5,
  });

  line = new Line2(geometry, matLine);
  scene.add(line);

  window.addEventListener("resize", onWindowResize);
  onWindowResize();
}

function onWindowResize() {
  const containerWidth = containerRef.value!.offsetWidth;
  const containerHeight = containerRef.value!.offsetHeight;
  camera.aspect = containerWidth / containerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(containerWidth, containerHeight);

  insetWidth = containerWidth / 4;
  insetHeight = containerHeight / 4;
}

function animate() {
  const containerWidth = containerRef.value!.offsetWidth;
  const containerHeight = containerRef.value!.offsetHeight;
  requestAnimationFrame(animate);

  renderer.setViewport(0, 0, containerWidth, containerHeight);

  controls.update();

  matLine.resolution.set(containerWidth, containerHeight); // resolution of the viewport

  renderer.render(scene, camera);
}
</script>
<style scoped lang="scss">
.Three {
  height: 100%;
  width: 100%;
}
</style>
