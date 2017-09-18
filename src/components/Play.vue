<<template>
   <div class="music_info">
        <div class="header_menu">
            <div class="back"><span @click="toMain"></span></div>
            <div class="music_title"><p>周深 - 化身孤岛的鲸 (原曲：我们都被忘了)</p></div>
            <div class="menu_list"><span></span></div>
        </div>
        <div class="lyric">
            <img src="http://imgcache.qq.com/music/photo/album_300/13/300_albumpic_1137013_0.jpg">
            <div class="image_radius">
                <img src='http://imgcache.qq.com/music/photo/album_300/13/300_albumpic_1137013_0.jpg'>
            </div>
            <div class="music_progress">
                <span class="bgt">{{getEndTime(currentTime)}}</span>
                <div class="progress_bar" id="progress_bar" v-on:click="progressChange($event)">
                    <div class="progress_item" v-bind:style="{width:persent}"></div>
                </div>
                <span class="ent">{{totalTime}}</span>
            </div>
        </div>
        <div class="music_footer">
            <div class="pro">
                <span></span>
            </div>
            <div class="stop_begin">
                <span v-bind:class="[isPlaying?play:stop ]" v-on:click="playOrStop"></span>
            </div>
            <div class="next">
                <span></span>
            </div>
        </div>
    </div>
</template>

<<script>
export default {
    mounted(){
     this.Audio=document.querySelector('audio');
     this.Audio.addEventListener('play',()=>{
        // alert(this.Audio.duration);
        this.totalTime=this.getEndTime(this.Audio.duration);
         var _this=this;
        setInterval(function(){
            _this.currentTime=_this.Audio.currentTime;
            _this.persent=((_this.currentTime/_this.Audio.duration)*100).toFixed(2)+'%';
            // alert(_this.persent);
        },1000)
       
    }) 
  },
  computed:{
      DOM(){
          return this.$store.state.DOM;
      },
      isPlaying(){
          return this.$store.state.isPlaying;
      },
      audio(){
          return this.$store.state.audio;
      }
  },
  data(){
    return {
         currentTime:0,
         pActive:false,
         sActive:true,
         persent:'0%',
         totalTime:'00.00',
         Audio:{},
         play:'play',
         stop:'stop'
    }
  },
  methods:{  
        playOrStop:function(){
        this.$store.commit('play', !this.isPlaying);
        !this.isPlaying ? this.DOM.audio.pause() : this.DOM.audio.play();
        },
        getEndTime:function(time){
        var totals=parseInt(time);
        var minute=Math.floor(totals/60);
        var second=totals-minute*60;
        minute=minute<10?('0'+minute):minute;
        second=second<10?('0'+second):second;
        return minute+':'+second;
        },
        progressChange:function(e){
        var bar=document.getElementById(e.currentTarget.id);
                    //  alert(e.currentTarget.id);
        this.persent=parseInt((Number(e.offsetX)/Number(bar.clientWidth-2)*100))+'%';
        this.Audio.currentTime=(this.Audio.duration)*(parseInt(this.persent)/100);
        this.Audio.play();
        this.$store.commit('play', true);
                    //  alert(bar.clientWidth-2);
                    //  alert(e.offsetX);
        },
        toMain(){
        this.$store.commit('isShowIndex',true);
        }
        },
}
</script>

<<style scoped>
.music_info{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
}
.music_info .header_menu{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background-color: #b72712;
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
}
.music_info .header_menu .back{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
}
.music_info .header_menu .back span{
    height: 30px;
    width: 30px;
    margin-left: 15px;
    background: url('../../images/left.png') no-repeat;
    background-size: 30px;
    cursor: pointer;
}
.music_info .header_menu .menu_list{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
}
.music_info .header_menu .menu_list span{
    height: 30px;
    width: 30px;
    margin-left: 25px;
    background: url('../../images/caidan.png') no-repeat;
    background-size: 30px;
    cursor: pointer;
}
.music_title{
    flex: 3;
    -webkit-box-flex: 3;        
    -moz-box-flex: 3;           
    -ms-flex: 3;  
    color: white;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.music_info .header_menu .music_title p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1rem;
    font-weight: 700;
}      
.lyric{
    flex: 9;
    background-color: white;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.lyric img{
    position: absolute;
    height: 100%;
    width:100%;
    z-index: 0;
    filter: brightness(65%) blur(8px);
    -webkit-filter: brightness(65%) blur(8px);
    left: 0px;
    bottom: 0px;
}
.lyric .image_radius{
    width: 300px;
    height: 300px;
}
.lyric .image_radius img{
    width: 100%;
    height: 100%;
    filter: blur(0);
    -webkit-filter:blur(0);
    position: relative;
    border-radius: 50%;
}
.music_progress{
    width: 100%;
    position: absolute;
    bottom: 8px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    color: white;
    left: 0px;
}
.music_progress span{
    text-align: center;
}
.music_progress .bgt{
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
}
.music_progress .progress_bar{
    flex: 4.5;
    -webkit-box-flex: 4.5;        
    -moz-box-flex: 4.5;           
    -ms-flex: 4.5;  
    height: 4px;
    width:100%;
    background-color: gray;
    cursor: pointer;
}
.music_progress .progress_bar .progress_item{
    width: 0%;
    border-right: 2px solid white;
    height: 100%;
    background-color: green;
}
.music_progress .ent{
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
}
.music_footer{
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
    background-color: #b72712;
    width: 100%;
    /* position: relative; */
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 65px;
}
.music_footer .pro{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
}
.music_footer .pro span{
    display: inline-block;
    cursor: pointer;
    height: 50px;
    width: 50px;
    background: url("../../images/pre.png") no-repeat;
    background-size: 50px;
}
.music_footer .stop_begin{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
}
.music_footer .stop_begin span{
    display: inline-block;
    cursor: pointer;
    height: 50px;
    width: 50px;
    /* background: url("../images/play.png") no-repeat; */
    background-size: 50px;
}
.music_footer .next{
    flex: 1;
    -webkit-box-flex: 1;        
    -moz-box-flex: 1;           
    -ms-flex: 1;  
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
}
.music_footer .next span{
    display: inline-block;
    cursor: pointer;
    height: 50px;
    width: 50px;
    background: url("../../images/next.png") no-repeat;
    background-size: 50px;
}
.play{
    background:url('../../images/stop.png') no-repeat;
}
.stop{
    background:url('../../images/play.png') no-repeat;
}
</style>


