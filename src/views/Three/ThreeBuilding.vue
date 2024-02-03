<template>
  <div class="Three" ref="containerRef"></div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "@/three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "@/three/addons/loaders/GLTFLoader.js";
import { RGBELoader } from "@/three/addons/loaders/RGBELoader.js";

const containerRef = ref<HTMLDivElement>();

onMounted(init);

let camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer;

// init();

function init() {
  // const container = document.createElement("div");
  // document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(
    45,
    containerRef.value!.offsetWidth / containerRef.value!.offsetHeight,
    0.25,
    1000
  );
  camera.position.set(-1.8, 0.6, 2.7);

  scene = new THREE.Scene();

  console.log(scene.position, "[scene.position]");
  scene.position.z = -10;
  scene.position.y = -15;
  scene.position.x = 5;
  scene.scale.set(4, 4,4);

  // scene.position.z = -18;
  // scene.position.y = -8;
  // scene.position.x = 5;
  // // scene.scale.set(4, 4,4);

  new RGBELoader()
    .setPath("textures/equirectangular/")
    .load("royal_esplanade_1k.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;

      scene.background = texture;
      scene.environment = texture;

      render();

      // model

      // const loader = new GLTFLoader().setPath(
      //   "models/gltf/DamagedHelmet/glTF/"
      // );
      // loader.load("DamagedHelmet.gltf", async function (gltf) {
      //   const model = gltf.scene;

      //   // wait until the model can be added to the scene without blocking due to shader compilation

      //   await renderer.compileAsync(model, camera, scene);

      //   scene.add(model);

      //   render();
      // });

      const loader = new GLTFLoader();
      loader.load("/models/Building.glb", async function (gltf) {
        const model = gltf.scene;

        // wait until the model can be added to the scene without blocking due to shader compilation

        // await renderer.compileAsync(model, camera, scene);

        scene.add(model);

        render();
      });
    });

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  containerRef.value!.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", render); // use if there is no animation loop
  // controls.minDistance = 2;
  // controls.maxDistance = 10;
  controls.target.set(0, 0, -0.2);
  controls.update();

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  render();
}

//

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
