<template>
  <div class="header">
            <div class="appName">
                <span class="menu">
                    <i @click="show_sideMenu"></i>
                </span>
                <p>音乐</p>
                <span class="search">
                    <i></i>
                </span>   
            </div>
            <div class="allMenu">
                <div class="item myMusic" :class="{'active':isActivem}">
                    <a @click="toggle(tab_my)">{{tab_my}}</a>
                </div>
                <div class="item discover" :class="{'active':isActived}">
                    <a @click="toggle(tab_dic)">{{tab_dic}}</a>
                </div>
                <div class="item about" :class="{'active':isActivea}">
                    <a @click="toggle(tab_abo)">{{tab_abo}}</a>
                </div>
            </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      tab_my: '我的',
      tab_dic: '搜索',
      tab_abo: '关于',
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
    color: white;
    font-size: 15px;
}
.allMenu .item{
    padding: 15px;
}
.allMenu .item a{
    cursor: pointer;
}
.allMenu .myMusic{
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
}
.active{
    border-bottom: 2px solid #e0f2f1;
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
