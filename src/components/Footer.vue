<<template>
  <div class="footer" id="cus_footer">
            <div class="music_img"><img src="http://imgcache.qq.com/music/photo/album_300/13/300_albumpic_1137013_0.jpg" @click="toInfo"></div>
            <div class="music_name">
                <p>周深 - 化身孤岛的鲸 (原曲：我们都被忘了)</p>
                <div class="about">
                <span class="begin">{{beginTime}}</span>
                <div class="progressWrap" id="progressBar" v-on:click="progressChange($event)">
                    <div class="progress" v-bind:style="{width:persent}"></div>
                </div>
                <span class="end">{{endTime}}</span>
                </div>
            </div>
            <div class="music_control" id="control"><span v-bind:class="{ play:pActive,'stop':sActive }" v-on:click="playOrStop"></span></div>
        </div>
</template>

<<script>
export default {
  name:'footer',
  mounted() {
    this.Audio=document.querySelector('audio');
    this.totalTime=this.getEndTime(this.Audio.duration);
  },
  data(){
    return {
         beginTime:'00.00',
         endTime:'00.00',
         pActive:false,
         sActive:true,
         persent:'0%',
         totalTime:'',
         Audio:{}
    }
  },
  computed:{
    isPlaying() {
      return this.$store.state.isPlaying;
    },
    isShowAsideMenu() {
      return this.$store.state.isShowAsideMenu;
    },
    isShowMiniMusic() {
      return this.$store.state.isShowMiniMusic;
    },
    audio() {
      return this.$store.state.audio;
    },
    DOM() {
      return this.$store.state.DOM;
    },
  },
    methods:{
        init:function(){
        this.Audio=document.querySelector('#player');
        // alert(this.Audio.duration);
        this.endTime=this.totalTime;
        },
        play:function(){
        this.pActive=true;
        this.sActive=false;
        // this.Audio.play();
        // alert(1);
        },
        stop:function(){
        this.pActive=false;
        this.sActive=true;
        // this.Audio.pause();
        },
        playOrStop:function(){
            // alert(this.Audio.src);
        !this.isPlaying ? this.DOM.audio.pause() : this.DOM.audio.play();
        this.init();
        if(this.pActive==false){
        this.play();
         }else{
        this.stop();
        }
        },
        getEndTime:function(time){
        var totals=parseInt(time);
        var minute=Math.floor(totals/60);
        var second=totals-minute*60;
        minute=minute<10?('0'+minute):minute;
        second=second<10?('0'+second):second;
        return minute+':'+second;
        },
        updateTime:function(){
        audio=document.querySelector('#player');
        this.beginTime=this.getEndTime(audio.currentTime);
        this.persent=this.updatePercent(audio.currentTime,audio.duration);
        },
        updatePercent:function(cur,total){
        var percent=parseInt((Number(cur)/Number(total)*100))+'%';
        return percent;
        },
        progressChange:function(e){
        audio=document.querySelector('#player');
        var bar=document.getElementById(e.currentTarget.id);
                    //  alert(e.currentTarget.id);
        var scroll=parseInt((Number(e.offsetX)/Number(bar.clientWidth-2)*100))+'%';
        audio.currentTime=(audio.duration)*(parseInt(scroll)/100);
        this.init();
        this.play();
                    //  alert(bar.clientWidth-2);
                    //  alert(e.offsetX);
        }
        }
  }
</script>

<<style scoped>
.footer{
    border: none;
    height: 70px;
    width: 100%;
    background-color: #b72712;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    line-height: 70px;
}
.footer .music_img{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
}
.footer .music_name{
    flex:5;
    -webkit-box-flex: 5;        
    -moz-box-flex: 5;           
    -ms-flex: 5;  
    position: relative;
    color: white;
    text-indent: 4px;
    text-align: center;
    overflow: hidden;
}
.footer .music_name p{
    height: 40px;
    line-height: 40px;
    font-size: 17px;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
}
.footer .music_name .begin{
    position: absolute;
    left: 25px;
}
.footer .music_name .end{
    position: absolute;
    right: 26px;
}
.footer .music_name .about{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 10px;
}
.footer .music_name .progressWrap{
    width: 50%;
    height: 5px;
    background-color: hsla(0,0%,100%,.5);
    position: relative;
    display: inline-block;
    vertical-align: 2px;
    cursor: pointer;
}
.footer .music_name .progressWrap .progress{
    background-color: green;
    height: 100%;
    border-right: 2px solid white;
}
.footer .music_control{
    flex:1.5;
    -webkit-box-flex: 1.5;        
    -moz-box-flex: 1.5;           
    -ms-flex: 1.5;  
    text-align: center;
}
.footer .music_control span{
    height: 50px;
    width: 50px;
    display: inline-block;
    background-size: 50px;
    margin-top: 10px;
    cursor: pointer;
}
.footer img{
    border-radius: 50%;
    cursor: pointer;
    margin: 0;
    padding: 0;
    height: 70px;
    width: 70px;
}
.play{
    background:url('../../images/stop.png') no-repeat;
}
.stop{
    background:url('../../images/play.png') no-repeat;
}
</style>


