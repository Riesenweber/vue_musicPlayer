<template>
<transition name="showBody">
    <div class="body">
        <div class="onLoading" v-show="!ready">
            <div class="ready">
                <i class="ready-icon"></i>加载中...
            </div>
        </div>
        <div class="img">
            <img :src="imgurl">
            <div class="picInfo">插画|{{picinfo}}</div>
        </div>
        <div class="content">
            <p>{{forward}}</p>
            <div class="wordsInfo">{{wordsinfo}}</div>
        </div>
        <div class="control">
            <div class="prev"><a @click="change(--index)" :class="{gray:index==1}">上一篇</a></div>
            <div class="loading">
                <div v-if="isLoading">One</div>
                <div v-else class="icon-loading"></div>
            </div>
            <div class="next"><a @click="change(++index)" :class="{gray:index==10}">下一篇</a></div>
        </div>
    </div>
</transition>
</template>

<<script>
export default {
  name:'search',
  mounted(){
      this.$store.commit("showFooter",false);
      this.$store.commit("changeBorderIndex",3);
      this.getIdList().then(res=>{
          return Promise.all(res.data.data.map(item=>{
              return this.getOne(item)
          }))
       }).then(list=>{
           this.allList=list
        //    console.log(this.allList)
           this.show(this.allList,this.index);
           this.ready=1;
       })
   },
  data(){
      return{
          allList:[],
          imgurl:"",
          forward:"",
          picinfo:"",
          wordsinfo:"",
          index:1,
          isLoading:1,
          ready:0
      }
  },
  computed:{
        musicData(){
            return this.$store.state.musicData;
        }
  },
  methods:{
      show(res,index){
          console.log(res);
          this.imgurl=res[index-1].data.data.content_list[0].img_url;
          this.forward=res[index-1].data.data.content_list[0].forward;
          this.picinfo=res[index-1].data.data.content_list[0].pic_info;
          this.wordsinfo=res[index-1].data.data.content_list[0].words_info;
      },
      change(index){
          if(index<1){
              this.index=1;
              return;
          }else if(index>10){
              this.index=10;
              return;
          }
          this.isLoading=0;
          setTimeout(() => {
              this.show(this.allList,index);
              this.isLoading=1;
          }, 600);
      },
      getIdList(){
          var url="http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android";
          return new Promise((resolve,reject)=>{
          this.axios.get(url).then((res)=>{
              resolve(res);
          })
          })
      },
      getOne(id){
          var url="http://v3.wufazhuce.com:8000/api/onelist/"+id+"/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android";
          return new Promise((resolve,reject)=>{
          this.axios.get(url).then((res)=>{
              resolve(res);
          })
          })
      }
  },
}
</script>

<style scoped>
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
a{
    text-decoration: none;
    color: #000;
    cursor: pointer;
}
.body{
    padding: 0px 4px 0px 4px;
    overflow: auto;
    width: 100%;
    height: 100%;
    padding-bottom: 100px;
    overflow: auto;
}
.onLoading{
    position: absolute;
    left: 0;
    z-index: 2;
    height: 100%;
    width: 100%;
    background-color: white;
}
.onLoading .ready{
    font-size: 120%;
    text-align: center;
    padding-top: 20px;
}
.ready .ready-icon{
    display: inline-block;
    width: 30px;
    height:30px;
    background: url("../../images/loading.png") no-repeat;
    animation: rotate 2s infinite;
    background-size: contain;
    vertical-align: text-bottom;
    margin-right: 10px;
}
.img{
    padding-bottom: 10px;
    margin-top: 6px;
    margin-bottom: 5px;
}
.img img{
    width: 100%;
}
.picInfo{
    text-align: center;
    font-size: 50%;
    color: #808080;
}
.content{
    margin-top: 2px;
    margin-left: 10px;
}
.content p{
    font-size: 80%;
    margin-bottom: 5px;
    color: #000;
}
.wordsInfo{
    text-align: center;
    font-size: 40%;
    color: #808080;
}
.control{
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    border-top: 2px solid gray;
    padding: 10px 0;
    background-color: #fff;
    opacity: 1;
}
.control::before{
    content: "";
    position: absolute;
    width: 100%;
}
.prev{
    flex: 1;
}
.loading{
    flex:1;
}
.next{
    flex:1;
}
.gray{
    color: gray;
}
.icon-loading{
    width: 22px;
    height:22px;
    margin: auto;
    background: url("../../images/loading.png") no-repeat;
    animation: rotate 2s infinite;
    background-size: contain;
}
@keyframes rotate{
  from{
      transform: rotate(0deg);
  }
  to{
      transform: rotate(360deg);
  }
}
</style>


