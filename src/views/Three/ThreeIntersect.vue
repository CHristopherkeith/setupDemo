<template>
  <div class="Three" ref="containerRef"></div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "@/three/addons/controls/OrbitControls.js";
import { IFCLoader } from "@/three/addons/loaders/IFCLoader.js";
import { IFCSPACE } from "@/three/addons/loaders/web-ifc.js";
import "element-plus/es/components/message/style/css";
import "element-plus/es/components/loading/style/css";
import { ElMessage, ElLoading } from "element-plus";

const containerRef = ref<HTMLDivElement>();

onMounted(init);

let camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer;

async function init() {
  let l = ElLoading.service()
  //Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x8cc7de);

  const containerWidth = containerRef.value!.offsetWidth;
  const containerHeight = containerRef.value!.offsetHeight;

  //Camera
  camera = new THREE.PerspectiveCamera(
    45,
    containerWidth / containerHeight,
    0.1,
    1000
  );
  camera.position.z = -70;
  camera.position.y = 25;
  camera.position.x = 90;

  //Initial cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
  const cube = new THREE.Mesh(geometry, material);
  // scene.add(cube);

  // const geometry1 = new THREE.BoxGeometry(0.5,0.5,0.5);
  // const material1 = new THREE.MeshPhongMaterial({ color: 0xff0000 });
  // const cube1 = new THREE.Mesh(geometry1, material1);
  // cube1.position.y = 8;
  // cube1.position.x = 10;
  // cube1.position.z = -15;
  // cube1.addEventListener("click",()=>{console.log('click!')})
  // scene.add(cube1);

  //Lights
  const directionalLight1 = new THREE.DirectionalLight(0xffeeff, 2.5);
  directionalLight1.position.set(1, 1, 1);
  scene.add(directionalLight1);

  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2.5);
  directionalLight2.position.set(-1, 0.5, -1);
  scene.add(directionalLight2);

  const ambientLight = new THREE.AmbientLight(0xffffee, 0.75);
  scene.add(ambientLight);

  //Setup IFC Loader
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

  let cube1:THREE.Mesh;

  ifcLoader.load(
    "models/ifc/rac_advanced_sample_project.ifc",
    function (model) {
      console.log(model, "[model]");
      scene.add(model.mesh);
      const geometry1 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const material1 = new THREE.MeshPhongMaterial({ color: 0xff0000 });
      cube1 = new THREE.Mesh(geometry1, material1);
      cube1.position.y = 8;
      cube1.position.x = 10;
      cube1.position.z = -15;
      cube1.addEventListener("click", () => {
        console.log("click!");
      });
      scene.add(cube1);
      l.close();
      // 添加点击事件
      window.addEventListener("click", onMouseClick, false);

      
      render();
    }
  );

  // 点击事件处理函数
  function onMouseClick(event) {
        // 计算鼠标点击位置的归一化坐标
        var mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        var mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        // 创建一个射线投射器
        var raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);

        // 检测射线和立方体的交叉
        var intersects = raycaster.intersectObject(cube1);

        // 如果有交叉，则表示点击了立方体
        if (intersects.length > 0) {
          // console.log('Clicked on the cube!');
          // 在这里添加您的点击事件处理逻辑
          ElMessage({ message: "已经在此位置做了检查！", type: "success" });
        } else {
          // ElMessage({ message: "该位置不是检查点！", type: "warning" });
        }
      }

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
