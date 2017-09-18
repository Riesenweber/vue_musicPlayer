<<template>
<transition name="showBody">
  <div class="sousuo">
        <div class="search_input">
            <div class="input">
              <i></i>
              <input type="text" placeholder="搜索歌曲"></input>
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
  }
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
   overflow: auto;
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
</style>


