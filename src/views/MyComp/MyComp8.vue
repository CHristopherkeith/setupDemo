<template>
  <div>
    <span>MyComp5</span>
    <!-- <el-button>MyComp5</el-button> -->
    <!-- <el-table :data="tableData" style="width: 100%"> -->
      <!-- <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" /> -->
    <!-- </el-table> -->
    <!-- <el-table></el-table> -->
    <!-- <component :is="ElTable"></component> -->
  </div>
</template>
<script lang="ts" setup>
import {ElTable} from "element-plus"
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
