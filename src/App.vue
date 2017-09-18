<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <vHeader></vHeader>
    <router-view></router-view>
    <vFooter></vFooter>
    <audio src="http://ws.stream.qqmusic.qq.com/104128113.m4a?fromtag=46"></audio>
  </div>
</template>

<script>
import vHeader from "./components/Header.vue"
import vFooter from "./components/Footer.vue"
export default {
  name: 'app',
  components:{
    vHeader,
    vFooter
  }
}
</script>

<style>
@import "./commom-style/common.css";
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
}
</style>
