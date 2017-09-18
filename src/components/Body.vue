<<template>
  <div class="body">
            <div class="menu_item" style="border:none">
            <img src="http://imgcache.qq.com/music/photo/album_300/13/300_albumpic_1137013_0.jpg">
            <span class="music_name">1.  周深 - 化身孤岛的鲸 (原曲：我们都被忘了)</span>
            <span class="music_delete"></span>
            </div>
            <div class="menu_item">
            <img src="http://imgcache.qq.com/music/photo/album_300/13/300_albumpic_1137013_0.jpg">
            <span class="music_name">2.  周深 - 化身孤岛的鲸 (原曲：我们都被忘了)</span>
            <span class="music_delete"></span>
            </div>
            <div class="menu_item">
            <img src="http://imgcache.qq.com/music/photo/album_300/13/300_albumpic_1137013_0.jpg">
            <span class="music_name">3.  周深 - 化身孤岛的鲸 (原曲：我们都被忘了)</span>
            <span class="music_delete"></span>
            </div>
            <div class="menu_item">
            <img src="http://imgcache.qq.com/music/photo/album_300/13/300_albumpic_1137013_0.jpg">
            <span class="music_name">4.  周深 - 化身孤岛的鲸 (原曲：我们都被忘了)</span>
            <span class="music_delete"></span>
            </div>
            <div class="tips">没有更多歌曲了~</div>
    </div>
</template>
<<script>
export default {
   name:'body'
}
</script>
<<style scoped>
.body{
    padding: 4px;
    padding-bottom: 0;
    flex:8;
}
.body .menu_item{
    position: relative;
    padding: 3px;
    cursor: pointer;
    border-radius: 5px;
    border-top: 1px solid rgba(0,0,0,.1);
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


