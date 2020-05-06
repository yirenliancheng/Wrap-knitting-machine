<!--此组件为文档界面的左侧目录Tree-->
<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <el-submenu index="1">
      <template slot="title">
        <i :class="folder"></i>
        <span>绪论</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">
          <i class="el-icon-document"></i>第一节
        </el-menu-item>
        <el-menu-item index="1-2">
          <i class="el-icon-document"></i>第二节
        </el-menu-item>
        <el-menu-item index="1-3">
          <i class="el-icon-document"></i>第三节
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i :class="folder"></i>
        <span>第一章</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">
          <i class="el-icon-document"></i>第一节
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-document"></i>第二节
        </el-menu-item>
        <el-menu-item index="2-3">
          <i class="el-icon-document"></i>第三节
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i :class="folder"></i>
        <span>第二章</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">
          <i class="el-icon-document"></i>第一节
        </el-menu-item>
        <el-menu-item index="3-2">
          <i class="el-icon-document"></i>第二节
        </el-menu-item>
        <el-menu-item index="3-3">
          <i class="el-icon-document"></i>第三节
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i :class="folder"></i>
        <span>第三章</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1">
          <i class="el-icon-document"></i>第一节
        </el-menu-item>
        <el-menu-item index="4-2">
          <i class="el-icon-document"></i>第二节
        </el-menu-item>
        <el-menu-item index="4-3">
          <i class="el-icon-document"></i>第三节
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i :class="folder"></i>
        <span>第四章</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="5-1">
          <i class="el-icon-document"></i>第一节
        </el-menu-item>
        <el-menu-item index="5-2">
          <i class="el-icon-document"></i>第二节
        </el-menu-item>
        <el-menu-item index="5-3">
          <i class="el-icon-document"></i>第三节
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "NavAside",
  data() {
    return {
      folder:"el-icon-folder"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key); 
      this.folder = "el-icon-folder-opened";
    },
    handleClose(key, keyPath) {
      console.log(key);
      this.folder = "el-icon-folder";
    }
  }
};
</script>

<style scoped>
</style>