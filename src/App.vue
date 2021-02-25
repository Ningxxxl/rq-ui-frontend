<template>
  <!--  <div id="app">-->
  <!--    <img alt="Vue logo" src="./assets/logo.png">-->
  <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--  </div>-->
  <div>
    <el-container>
<!--      <el-main>-->
        <UserManagement></UserManagement>
<!--      </el-main>-->
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import UserManagement from "@/components/UserManagement";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    UserManagement
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
