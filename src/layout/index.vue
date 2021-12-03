<template>
   <!-- <div class="layout">
    <el-container class="container">
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-container>
        <el-header >
          <Header />
        </el-header>
        <el-main>
          <Main></Main>
        </el-main>
        <el-footer style="height: 40px;">Footer</el-footer>
      </el-container>
    </el-container>
  </div> -->
  <div :class="classObj" class="app-wrapper">
    
  </div>
</template>

<script>
import Header from "@/layout/components/Header.vue";
import Aside from "@/layout/components/Aside.vue";
import Main from '@/layout/components/Main.vue';
export default {
  name: "Layout",
  components: {
    Header,
    Aside,
    Main
  },
};
</script>
<style scoped>
.el-header {
  padding: 0;
  background: #409EFF;
  border-bottom: 1px solid rgba(0,0,0,.2);
}
.layout {
  min-height: 100vh;
  background-color: #ffffff;
}
.container{
  min-height: 100vh;
  background: #ffffff;
  
}
.el-aside {
  min-height: 100vh;
  
}
.el-main {
  background: rgb(229, 229, 229);
  border-left: 1px solid rgba(0,0,0,.2);
}
.el-footer{
  border-top: 1px solid rgba(0,0,0,.2);
}
</style>
<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>