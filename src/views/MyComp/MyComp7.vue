<template>
  <div>
    <span>MyComp7</span>
    <!-- <el-button>MyComp7</el-button> -->
    <!-- <Toolbar
      class="wang-editor-tool-bar"
      :defaultConfig="toolbarConfig"
      :editor="editorRef"
    />
    <div class="editor-area-box">
      <Editor
        class="wang-editor-area"
        v-model="inputValue"
        :defaultConfig="editorConfig"
        @onCreated="handleCreated"
      />
    </div> -->
  </div>
</template>
<script lang="ts" setup>
// import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>
