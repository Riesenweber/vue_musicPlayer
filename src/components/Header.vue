<template>
  <div class="header">
            <div class="appName">
                <span class="menu">
                    <i @click="showSide(true)"></i>
                </span>
                <p>音乐</p>
                <span class="search">
                    <i></i>
                </span>   
            </div>
            <div class="allMenu">
                <div class="item myMusic" :class="{'active':changeBorderIndex==1}">
                    <router-link to="/body">{{tab_my}}</router-link>
                </div>
                <div class="item discover" :class="{'active':changeBorderIndex==2}">
                    <router-link to="/search">{{tab_dic}}</router-link>
                </div>
                <div class="item about" :class="{'active':changeBorderIndex==3}">
                    <router-link to="/topic">{{tab_abo}}</router-link>
                </div>
            </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  computed:{
    changeBorderIndex(){
        return this.$store.state.changeBorderIndex;
    }
  },
  data () {
    return {
      tab_my: '我的',
      tab_dic: '搜索',
      tab_abo: '文章',
    }
  },
  methods:{
      showSide(flag){
          this.$store.commit('showSide',flag);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    background: #b72712;
    width: 100%;
    /* flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;   */
}
.appName{
    padding: 10px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid hsla(0, 0%, 100%, .2);
}
.appName .menu{
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
    position: relative;
}
.appName .menu i{
    position: absolute;
    display: inline-block;
    left: 15px;
    width: 25px;
    height: 25px;
    background: url('../../images/caidan.png') no-repeat;
    background-size: 25px;
    cursor: pointer;
    clear: both;
}
.appName p{
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
    color: white;
    text-align: center;
    font-family: '微软雅黑';
    font-size: 18px;
    font-style: bold;
}
.appName .search{
    position: relative;
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
}
.appName .search i{
    position: absolute;
    display: inline-block;
    right: 15px;
    width: 25px;
    height: 25px;
    background: url('../../images/search.png') no-repeat;
    background-size: 25px;
    cursor: pointer;
    clear: both;
}.header{
    background: #b72712;
    width: 100%;
    /* flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;   */
}
.appName{
    padding: 10px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid hsla(0, 0%, 100%, .2);
}
.appName .menu{
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
    position: relative;
}
.appName .menu i{
    position: absolute;
    display: inline-block;
    left: 15px;
    width: 25px;
    height: 25px;
    background: url('../../images/caidan.png') no-repeat;
    background-size: 25px;
    cursor: pointer;
    clear: both;
}
.appName p{
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
    color: white;
    text-align: center;
    font-family: '微软雅黑';
    font-size: 18px;
    font-style: bold;
}
.appName .search{
    position: relative;
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
}
.appName .search i{
    position: absolute;
    display: inline-block;
    right: 15px;
    width: 25px;
    height: 25px;
    background: url('../../images/search.png') no-repeat;
    background-size: 25px;
    cursor: pointer;
    clear: both;
}
.allMenu{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    background-color: white;
    font-size: 15px;
}
.allMenu .item{
    /* padding: 10px; */
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.allMenu .item a{
    cursor: pointer;
    color: black;

}
.allMenu .myMusic{
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
}
.active{
    border-bottom: 2px solid #b72712;
}
.active a{
    color:#b72712!important;
}
.allMenu .discover{
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
}
.allMenu .about{
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
}
</style>
