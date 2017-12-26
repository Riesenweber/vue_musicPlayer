<<template>
  <transition name="showBody">
  <div class="body">
            <div @click="playMusic(index)" class="menu_item" style="border:none" v-for="(item,index) of musicData">
            <img :src="item.imgSrc">
            <span class="music_name">{{item.name}}</span>
            <span class="music_delete" @click="deleteLocal(index)"></span>
            </div>
            <div class="tips">没有更多歌曲了~</div>
    </div>
    </transition>
</template>
<<script>
export default {
   name:'body',
   mounted(){
       this.$store.commit('changeBorderIndex',1);
       if (this.isPlaying==true) {
           this.$store.commit("showFooter",true);
       }
   },
   computed:{
       musicData(){
           return this.$store.state.musicData;
       },
       isPlaying(){
           return this.$store.state.isPlaying;
       }
   },
   methods:{
      playMusic(index){
          console.log(index);
          this.$store.commit("playMyMusic",index);
          this.$store.commit("showFooter",true);
      },
      deleteLocal(index,ev){
          ev=window.event||ev;
          ev.stopPropagation();
          this.$store.commit('del',index);
      }
   }
}
</script>
<<style scoped>
.showBody-enter-active {
  transition: all .4s ease;
}
.showBody-leave-active {
  transition: all 0 ease;
}
.showBody-enter, .showBody-leave-active {
  transform: translateX(-150px);
  opacity: 0;
}
.body{
    padding: 4px;
    padding-bottom: 0;
    flex:8;
    background-color:rgba(0,0,0,.05);
    overflow:auto;
}
.body .menu_item{
    position: relative;
    padding: 3px;
    cursor: pointer;
    border-radius: 5px;
    border-bottom: 1px solid rgba(0,0,0,.1)!important;
}
.body .menu_item .music_name{
    width: 65%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: top;
    margin-top: 15px;
    margin-left: 7px;
}
.body .menu_item img{
    height: 50px;
    width: 50px;    
}
.body .menu_item .music_delete{
    position: absolute;
    right: 10px;
    top: 20px;
    width: 20px;
    height: 20px;
    background: url('../../images/delete.png') no-repeat;
    background-size: 20px;
}
.tips{
    text-align: center;
    font-size: 80%;
    margin-top: 15px;
    color: gray;
}
</style>


