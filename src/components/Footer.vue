<<template>
  <div class="footer" id="cus_footer">
            <div class="music_img"><img :src="audio.imgSrc" @click="toInfo"></div>
            <div class="music_name">
                <p>{{audio.name}}</p>
                <div class="about">
                <span class="begin">{{getEndTime(currentTime)}}</span>
                <div class="progressWrap" id="progressBar" v-on:click="progressChange($event)">
                    <div class="progress" v-bind:style="{width:persent}"></div>
                </div>
                <span class="end">{{totalTime}}</span>
                </div>
            </div>
            <div class="music_control" id="control"><span v-bind:class="[ this.isPlaying?play:stop ]" v-on:click="playOrStop"></span></div>
        </div>
</template>

<<script>
export default {
  mounted() {
      this.Audio=document.querySelector('audio');
    //   this.Audio.addEventListener('play',this.playMusic);
    this.Audio.onplay=this.playMusic();
  },
  destroyed(){
      clearInterval(this.interval);
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
         stop:'stop',
         interval:{}
    }
  },
  computed:{
    isPlaying() {
      return this.$store.state.isPlaying;
    },
    audio() {
      return this.$store.state.audio;
    },
    DOM() {
      return this.$store.state.DOM;
    },
  },
    methods:{  
        playMusic:function(){
            var a=setInterval(() => {
             if(this.Audio.duration){
              console.log(this.Audio.duration);
              this.totalTime=this.getEndTime(this.Audio.duration);;
              this.currentTime=this.Audio.currentTime;
              this.interval=setInterval(()=>{
              this.currentTime=this.Audio.currentTime;
              this.persent=((this.currentTime/this.Audio.duration)*100).toFixed(2)+'%';
              },1000)
              clearInterval(a);
             }
            }, 1);
        },
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
        toInfo(){
            this.$store.commit('isShowIndex', false);
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
    left: 10px;
}
.footer .music_name .end{
    position: absolute;
    right: 10px;
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


