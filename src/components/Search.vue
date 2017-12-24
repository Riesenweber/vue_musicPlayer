<template>
<transition name="showBody">
  <div class="sousuo">
        <div class="search_input">
            <div class="input">
              <i></i>
              <input v-model='keyword' @keyup.enter="Search(keyword)" type="text" placeholder="搜索歌曲"></input>
            </div>
        </div>
        <div class="search-list">
        <div @click="playMusic(item.songname,item.albumpic_big,item.m4a)" class="musicList" v-for="(item,index) of musicList">
            <div class='music-icon'>
                <img :src="item.albumpic_small">
            </div>
            <div class='music-info'>
                <div class='music-title'>
                    {{item.songname}}
                </div>
                <div class='music-singer'>
                    {{item.singername}}
                </div>
            </div>
        </div>
        </div>
    </div>
</transition>
</template>

<<script>
export default {
  name:'search',
  mounted(){
      this.$store.commit("changeBorderIndex",2);
  },
  data(){
      return{
          keyword:'',
          musicList:[]
      }
  },
  computed:{
        musicData(){
            return this.$store.state.musicData;
        }
  },
  methods:{
      Search(e){
          var url="http://route.showapi.com/213-1?showapi_appid=43929&showapi_sign=a046b25771534b40a5e691850c5f10be&page=1&keyword="+e;
          this.axios.get(url).then((res)=>{
              this.musicList=res.data.showapi_res_body.pagebean.contentlist;
              console.log(this.musicList);
          })
      },
      playMusic(name,imgSrc,src){
          console.log(src);
          this.$store.commit("playMusic",{name:name,imgSrc:imgSrc,src:src});
          this.$store.commit("showFooter",true);
          this.$store.commit("addMusic",{name:name,imgSrc:imgSrc,src:src});
      }
  },
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
  transform: translateX(250px);
  opacity: 0;
}
.sousuo{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex:10;
    -webkit-box-flex: 10;        
    -moz-box-flex: 10;           
    -ms-flex: 10;  
    width: 100%;
    height: 100%;
    flex-direction: column;
   -webkit-box-direction: normal;
   overflow: hidden;
}
.sousuo .search_input{
    background-color: rgba(0,0,0,.1);
    position: relative;
    text-align: center;
    width: 100%;
}
.sousuo .search_input .input{
    position: relative;
    height: 35px;
    margin: 20px auto;
    text-align: left;
    width:90%;
}
.input i{
    background:url("../../images/search_gray.png") no-repeat;
    position: absolute;
    top: 7px;
    left: 8px;
    height: 20px;
    width: 20px;
    background-size: 20px;
}
.sousuo .search_input .input input{
    width: 100%;
    height: 100%;
    padding: 0 34px 0 34px;
    font-size: 1rem;
    border: none;
    border-radius: 3px;
    outline: none;
}
.search-list{
    overflow:auto;
    flex:1;
}
.musicList{
   display:flex;
   border-bottom:1px solid rgba(0,0,0,.1);
   height:50px;
}
.musicList .music-icon{
    display:flex;
    justify-content:center;
    align-items:center;
    height:50px;
    width:50px;
}
.musicList .music-icon img{
    height:90%;
    width:90%;;
}
.musicList .music-info{
    position:relative;
    display:flex;
    flex:1;
    padding:4px;
    flex-direction:column;

}
.musicList .music-info .music-title{
    width:260px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}
.musicList .music-info .music-singer{
    padding-top:3px;
    font-size:50%;
    color:gray;
}
</style>


