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

onMounted(init);

let camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer;

async function init() {
  const loading = ElLoading.service();
  //Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x8cc7de);

  const containerWidth = containerRef.value!.offsetWidth;
  const containerHeight = containerRef.value!.offsetHeight;

  //Camera
  camera = new THREE.PerspectiveCamera(
    45,
    containerWidth / containerHeight,
    1,
    1000
  );
  camera.position.z = -70;
  camera.position.y = 25;
  camera.position.x = 90;

  //Lights
  const directionalLight1 = new THREE.DirectionalLight(0xffeeff, 2.5);
  directionalLight1.position.set(1, 1, 1);
  scene.add(directionalLight1);

  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2.5);
  directionalLight2.position.set(-1, 0.5, -1);
  scene.add(directionalLight2);

  const ambientLight = new THREE.AmbientLight(0xffffee, 0.75);
  scene.add(ambientLight);

  // Setup IFC Loader
  const ifcLoader = new IFCLoader();
  // await ifcLoader.ifcManager.setWasmPath(
  //   "wasm/",
  //   true
  // );

  await ifcLoader.ifcManager.parser.setupOptionalCategories({
    [IFCSPACE]: false,
  });

  await ifcLoader.ifcManager.applyWebIfcConfig({
    USE_FAST_BOOLS: true,
  });

  ifcLoader.load(
    "models/ifc/rac_advanced_sample_project.ifc",
    function (model) {
      scene.add(model.mesh);
      addTrack();
      loading.close();
      render();
    }
  );

  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(containerWidth, containerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  containerRef.value!.appendChild(renderer.domElement);

  //Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", render);

  window.addEventListener("resize", onWindowResize);

  render();
}

const vectors = [
  [19, 0, -30],
  [19, 0, -20],
  [15, 0, -20],
  [15, 0, -33],
  [12, 0, -33],
  [12, 0, -30],
  [12, 1.5, -28],
  [12, 2.5, -25],
  [12, 3.9, -22],
  [12, 3.9, -20],
  [9, 3.9, -20],
  [9, 3.9, -31],
  [12, 3.9, -31],
  [12, 6, -26],
  [12, 7.7, -21.5],
  [12, 7.7, -20],
  [9, 7.7, -20],
  [9, 7.7, -31],
  [14, 7.7, -31],
  [14, 7.7, -9],
  [62, 7.7, -9],
];

const curve = new THREE.CatmullRomCurve3(
  vectors.map((item) => new THREE.Vector3(...item)),
  false,
  "centripetal",
  100,
);

const curvePoints = curve.getPoints(100);

function addTrack(): void {
  const containerWidth = containerRef.value!.offsetWidth;
  const containerHeight = containerRef.value!.offsetHeight;

  const points: number[] = [];
  vectors.forEach((item) => {
    points.push(...item);
  });

  const geometry = new LineGeometry();
  geometry.setPositions(points);

  const material = new LineMaterial({
    color: 0x00ff00,
    linewidth: 2,
  });

  // material.glow = true;
  console.log(material, "[material]");

  material.resolution.set(containerWidth, containerHeight);

  const line = new Line2(geometry, material);
  scene.add(line);
}

function addTrack_bold_line_animate(): void {
  const containerWidth = containerRef.value!.offsetWidth;
  const containerHeight = containerRef.value!.offsetHeight;

  // const points: number[] = [];

  let geometry = new LineGeometry();
  // geometry.setPositions([]);

  const material = new LineMaterial({
    color: 0x00ff00,
    linewidth: 2,
  });

  material.resolution.set(containerWidth, containerHeight);

  const line = new Line2(geometry, material);
  scene.add(line);

  let cnt = 1;
  const timer = setInterval(() => {
    const newVectors = vectors.slice(0, cnt);
    const points: number[] = [];
    newVectors.forEach((item) => {
      points.push(...item);
    });
    line.geometry = new LineGeometry().setPositions(points);

    render();
    cnt++;
    console.log(cnt, "[cnt]");
    if (cnt > vectors.length) {
      clearInterval(timer);
    }
  }, 300);
}

function addTrack_normal_line_animate(): void {
  const material = new THREE.LineBasicMaterial({
    color: 0xff0000,
    linewidth: 50,
  });

  let geometry = new THREE.BufferGeometry();

  const line = new THREE.Line(geometry, material);
  scene.add(line);

  let cnt = 1;
  const timer = setInterval(() => {
    const newVectors = vectors.slice(0, cnt);
    console.log(newVectors, "[newVectors]");
    const points: THREE.Vector3[] = [];
    newVectors.forEach((item) => {
      points.push(new THREE.Vector3(...item));
    });
    geometry = new THREE.BufferGeometry().setFromPoints(points);
    line.geometry = geometry;
    render();
    console.log(cnt);
    cnt++;
    if (cnt > vectors.length) {
      clearInterval(timer);
    }
  }, 300);
}

// 正常
function addTrack_normal_line(): void {
  const material = new THREE.LineBasicMaterial({
    color: 0xff0000,
    linewidth: 50,
  });

  let geometry = new THREE.BufferGeometry();

  const points: THREE.Vector3[] = [];
  const vectors = [
    [19, 0, -30],
    [19, 0, -20],
    [15, 0, -20],
    [15, 0, -33],
    [12, 0, -33],
    [12, 0, -30],
    [12, 1.5, -28],
    [12, 2.5, -25],
    [12, 3.9, -22],
    [12, 3.9, -20],
    [9, 3.9, -20],
    [9, 3.9, -31],
    [12, 3.9, -31],
    [12, 6, -26],
    [12, 7.7, -21.5],
    [12, 7.7, -20],
    [9, 7.7, -20],
    [9, 7.7, -31],
    [14, 7.7, -31],
    [14, 7.7, -9],
    [62, 7.7, -9],
  ];
  vectors.forEach((item) => {
    points.push(new THREE.Vector3(...item));
  });

  geometry = new THREE.BufferGeometry().setFromPoints(points);

  const line = new THREE.Line(geometry, material);
  scene.add(line);
}

function onWindowResize() {
  const containerWidth = containerRef.value!.offsetWidth;
  const containerHeight = containerRef.value!.offsetHeight;
  camera.aspect = containerWidth / containerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);

  render();
}

function render() {
  renderer.render(scene, camera);
}
</script>
<style scoped lang="scss">
.Three {
  height: 100%;
  width: 100%;
}
</style>
