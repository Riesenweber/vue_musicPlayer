<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition name="showMain">
    <div v-show='isShowPlay' class="index">
    <transition name="showSide">
    <v-side v-if="isShowSide"></v-side>
    </transition>
    <vHeader></vHeader>
    <router-view></router-view>
    <vFooter v-if="isShowFooter"></vFooter>
    </div>
    </transition>
    <transition name="showPlay">
    <v-play v-show='!isShowPlay'></v-play>
    </transition>
    <audio :src="audio.src" v-bind:autoplay="isPlaying" ref="audio"></audio>
  </div>
</template>

<script>
import vHeader from "./components/Header.vue"
import vFooter from "./components/Footer.vue"
import vPlay from "./components/Play.vue"
import vSide from "./components/sideMenu.vue"
export default {
  name: 'app',
  mounted(){
     this.$store.commit('findDOM', {name: 'audio', dom: this.$refs.audio});
  },
  data(){
    return{
      deSrc:"http://ws.stream.qqmusic.qq.com/101806738.m4a?fromtag=46"
    }
  },
  computed:{
    isPlaying() {
      return this.$store.state.isPlaying;
    },
    isShowPlay(){
      return this.$store.state.isShowPlay;
    },
    isShowSide(){
      return this.$store.state.isShowSide;
    },
    audio(){
      return this.$store.state.audio;
    },
    isShowFooter(){
      return this.$store.state.isShowFooter;
    }
  },
  beforeCreate(){
    this.$store.dispatch('getdata');
  },
  components:{
    vHeader,
    vFooter,
    vPlay,
    vSide
  }
}
</script>

<style>
@import "./commom-style/common.scss";
.showMain-enter-active {
  transition: all .4s ease;
}
.showMain-leave-active {
  transition: all 0 ease-out;
}
.showMain-enter, .showMain-leave-active {
  transform: translateX(-350px);
  opacity: 0;
}
.showPlay-enter-active {
  transition: all .4s ease;
}
.showPlay-leave-active {
  transition: all 0 ease-out;
}
.showPlay-enter, .showPlay-leave-active {
  transform: translateY(350px);
  opacity: 0;
}
.showSide-enter-active {
  transition: all .4s ease;
}
.showSide-leave-active {
  transition: all .2s ease-out;
}
.showSide-enter, .showSide-leave-active {
  transform: translateX(-150px);
  opacity: 0;
}
#app ,.index {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  position: relative;
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
}
</style>
