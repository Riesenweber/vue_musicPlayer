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
               <div class="side_body">
                   <ul>
                       <li><i class="mess-icon"></i>我的消息</li>
                       <li><i class="hy-icon"></i>会员中心</li>
                       <li><i class="shop-icon"></i>商城</li>
                       <li><i class="online-icon"></i>在线听歌免流量</li>
                   </ul>
                   <ul>
                       <li><i class="friend-icon"></i>我的好友</li>
                       <li><i class="around-icon"></i>附近的人</li>
                   </ul>
                   <ul>
                       <li><i class="pf-icon"></i>个性换肤</li>
                       <li><i class="listen-icon"></i>听歌识曲</li>
                       <li><i class="stop-icon"></i>定时停止播放</li>
                       <li><i class="sao-icon"></i>扫一扫</li>
                       <li><i class="clock-icon"></i>音乐闹钟</li>
                       <li><i class="drive-icon"></i>驾驶模式</li>
                       <li><i class="pan-icon"></i>音乐云盘</li>
                       <li><i class="about-icon"></i>关于</li>
                   </ul>
               </div>
               <div class="footer-menu">
                       <div class="light"><i class="light-icon"></i>护眼</div>
                       <div class="setting"><i class="set-icon"></i>设置</div>
                       <div class="out" @click="close()"><i class="out-icon"></i>退出</div>
               </div>
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
      },
      close(){
          window.close();
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
    position:relative;
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
    left: 85%;
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
    overflow:auto;
    flex: 5.5;
    -webkit-box-flex: 5.5;        
    -moz-box-flex: 5.5;           
    -ms-flex: 5.5;  
    background-color: white;
    position: relative;
    margin-bottom:45px;
}
.side_body ul{
    padding-left:15px;
    padding-top:10px;
    border-bottom:6px solid rgba(0,0,0,.05);
}
.side_body ul:nth-last-child(1){
    border-bottom:none;
}
.side_body ul li{
    list-style:none;
    font-size:90%;
    color:rgba(0, 0, 0, .5);
    margin-bottom:20px;
}
i{
    height:18px;
    width:18px;
    margin-right:4px;
    display:inline-block;
    vertical-align:text-bottom;
}
i.mess-icon{
    background:url("../../images/mess.png");
    background-size:contain;
}
i.hy-icon{
    background:url("../../images/huiyuan.png");
    background-size:contain;
}
i.shop-icon{
    background:url("../../images/shop.png");
    background-size:contain;
}
i.online-icon{
    background:url("../../images/online.png");
    background-size:contain;
}
i.friend-icon{
    background:url("../../images/friend.png");
    background-size:contain;
}
i.around-icon{
    background:url("../../images/around.png");
    background-size:contain;
}
i.pf-icon{
    background:url("../../images/pf.png");
    background-size:contain;
}
i.listen-icon{
    background:url("../../images/listen.png");
    background-size:contain;
}
i.stop-icon{
    background:url("../../images/dingshi.png");
    background-size:contain;
}
i.sao-icon{
    background:url("../../images/sao.png");
    background-size:contain;
}
i.clock-icon{
    background:url("../../images/clock.png");
    background-size:contain;
}
i.drive-icon{
    background:url("../../images/car.png");
    background-size:contain;
}
i.pan-icon{
    background:url("../../images/yunpan.png");
    background-size:contain;
}
i.about-icon{
    background:url("../../images/about.png");
    background-size:contain;
}
i.light-icon{
    background:url("../../images/light.png");
    background-size:contain;
}
i.set-icon{
    background:url("../../images/setting.png");
    background-size:contain;
}
i.out-icon{
    background:url("../../images/out.png");
    background-size:contain;
}
.footer-menu{
    width:100%;
    height:45px;
    position:absolute;
    bottom:0px;
    left:0px;
    background-color:#fff;
    border-top:1px solid rgba(0,0,0,.05);
    justify-content:center;
    display:flex;
    text-align:center;
    align-items:center;
    flex-direction:row;
    font-size:80%;
}
.footer-menu .light{
    flex:1;
}
.footer-menu .setting{
    flex:1;
}
.footer-menu .out{
    flex:1;
}
.aside_menu .nothing{
    flex: 2;
    -webkit-box-flex: 2;        
    -moz-box-flex: 2;           
    -ms-flex: 2;  
    opacity: 0
}
</style>


