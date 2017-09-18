<<template>
        <div class="aside_menu">
           <div class="side">
                <span class="side_back" @click="back_side(false)"></span>
               <div class="side_header">
                   <a><img src="../../images/photo.jpg"></a>
                   <div class="about">
                       <span>张海龙</span>
                       <span id="lv">LV100</span>
                       <span class="sign">签到</span>
                    </div>
               </div>
               <div class="side_body"></div>
           </div>
           <div class="nothing" @click="back_side(false)"></div>
        </div>
</template>

<<script>
export default {
  name:'sideMenu',
  methods:{
      back_side(flag){
          this.$store.commit('showSide',flag);
      }
  }
}
</script>

<<style <style scoped>
.aside_menu{
    height: 100%;
    width:100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
.aside_menu .side{
    box-shadow: 0 0 30px gray;
    flex: 3;
    -webkit-box-flex: 3;        
    -moz-box-flex: 3;           
    -ms-flex: 3;  
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
}
.aside_menu .side .side_header{
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
    background-color: #b72712;
    padding: 20px 0 10px 10px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    min-height: 158px;
    max-height: 158px;
}
.side_back{
    background: url("../../images/left.png");
    width: 30px;
    height: 30px;
    background-size: 30px;
    position: absolute;
    top: 10px;
    left: 50%;
    z-index: 2;
    cursor: pointer;
}
.aside_menu .side .side_header a{
    
}
.aside_menu .side .side_header img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    cursor: pointer;
}
.aside_menu .side .side_header .about{
    position: relative;
    color: white;
    font-size: 1rem;
    font-weight: 900;
    margin-top: 2px;
}
.aside_menu .side .side_header .sign{
    position: absolute;
    right: 8px;
    font-size: 14px;
    font-weight: 500;
    padding: 0 8px;
    border: 1px solid white;
    border-radius: 20px;
    cursor: pointer;
}
#lv{
    border: 1px solid white;
    font-size: 10px;
    font-weight: 500;
    border-radius: 20px;
    font-style: italic;
    padding: 0 6px;
}
.aside_menu .side .side_body{
    flex: 5.5;
    -webkit-box-flex: 5.5;        
    -moz-box-flex: 5.5;           
    -ms-flex: 5.5;  
    background-color: white;
    position: relative;
}
.aside_menu .nothing{
    flex: 2;
    -webkit-box-flex: 2;        
    -moz-box-flex: 2;           
    -ms-flex: 2;  
    opacity: 0
}
</style>


