<template>
  <div>
    <div :class="right?'navs':'nav'">
      <!--导航上半部分-->
      <div class="header float-clearfix" v-if="!right">
        <ul>
          <li>
            <Icon type="md-navigate" color="white"/>
            <a href="">专柜查询</a>
          </li>
          <span class="line">|</span>
          <li  class="service">
            <a href="">客服中心
              <!--客服中心下拉菜单-->
              <div class="sub-menu">
                <div class="triangle"></div>
                <div class="left last_item">
                  <div class="title">
                    <h3>我能帮到您什么</h3>
                    <p>为方便您愉快地进行购物，以下是可供参考的常见的问题</p>
                  </div>
                  <ul>
                    <li>
                      <a href="">
                        <span>常见问题</span>
                        <Icon type="md-arrow-dropright" />
                        <i class="icon icon-right-arrow"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span>关于兰蔻</span>
                        <Icon type="md-arrow-dropright" />
                      </a>
                    </li>

                    <li>
                      <a href="">
                        <span>网站地图</span>
                        <Icon type="md-arrow-dropright" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span>发货说明</span>
                        <Icon type="md-arrow-dropright" />
                      </a>
                    </li>

                    <li>
                      <a href="">
                        <span>退货流程</span>
                      </a><Icon type="md-arrow-dropright" />
                    </li>
                    <li>
                      <a href="">
                        <span>官网购物理由</span>
                      </a>
                      <Icon type="md-arrow-dropright" />
                    </li>
                  </ul>
                </div>
                <div class="right">
                  <div class="title">
                    <h3>联系我们</h3>
                    <p>我们为您打造优质服务</p>
                  </div>
                  <ul>
                    <li class="online-consultation e-online-consultation">
                      <a onclick="window.open ('http://care3.live800.com/live800/chatClient/chatbox.jsp?companyID=8169&configID=2482&skillId=648&enterurl=%E5%85%B0%E8%94%BB', 'newwindow', 'height=600, width=900, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')">
                        <span>在线咨询</span>
                      </a>
                    </li>
                    <li>
                      <p class="line-server">
                        <span>咨询热线：400-820-8016</span>
                      </p>
                      <p>会员权益咨询：400-820-8017</p>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <!--logo-->
        <div class="logo">
          <router-link :to="{name:'homepage'}">
            <img :src="url">
          </router-link>
          <!--<img src="https://res.lancome.com.cn/build/images/logo@2x.png" alt="" title="兰蔻官方商城">-->
        </div>
        <!--右侧内容部分-->
        <div class="right">
          <ul>
            <li>
              <a href="">全部产品</a>
            </li><span class="line">|</span>
            <li>
              <a href="">订阅电子杂志</a>
            </li><span class="line">|</span>
            <li v-if="or">
              <router-link :to="{name:'operate'}">登录/注册</router-link>
            </li>
            <li v-if="!or" @click="deluser">
              <!--<a href="">注销</a>-->
              <router-link to="">注销</router-link>
            </li>
            <span class="line">|</span>
            <li @click="jump">
              <router-link to="" class="shoppackage">
                <Icon type="md-cart" />
                <span v-if="inf" class="goodsCount">
                  <Badge :count="counts">
                    <a href="#" class="demo-badge"></a>
                  </Badge>
                </span>
                购物袋
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!--分类部分-->
      <div class="nav_content" id="totop">
        <!--左侧logo-->
        <div class="nav_content_logo logo" v-if="right">
          <router-link :to="{name:'homepage'}">
            <img :src="url">
          </router-link>
        </div>
        <!--导航内容-->
        <ul class="nav_classify">
          <li>
            <!--<a href="">-->
              <!--首页-->
            <!--</a>-->
            <router-link :to="{name:'homepage'}">首页</router-link>
          </li>
          <li>
            <a href="">护肤</a>
          </li>
          <li>
            <a href="">彩妆</a>
          </li>
          <li>
            <a href="">香水</a>
          </li>
          <li>
            <a href="">特惠礼盒</a>
          </li>
          <li>
            <a href="">圣诞礼遇</a>
          </li>
          <li>
            <a href="">畅销榜单</a>
          </li>
          <li>
            <a href="">官网购物理由</a>
          </li>
        </ul>
        <div class="operate_area">
          <!--搜索框-->
          <form action="">
            <input :class="right?'search_content_after':'search_content_before'" type="text" placeholder="美丽人生香水">
            <Icon type="ios-search" color="white" :class="right?'larger_after':'larger'"/>
          </form>
          <div class="operate_right" v-if="right">
            <!--我的-->
            <router-link :to="{name:'operate'}" class="mine">
              <Icon type="ios-contact-outline" color="white"/>
            </router-link>
            <!--购物车-->
            <span @click="jump">
              <Icon type="md-cart" color="white"/>
              <span  class="goodsC">
                <Badge :count="counts">
                  <a href="#" class="demo-badge"></a>
                </Badge>
              </span>
            </span>
          </div>
        </div>
      </div>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import qs from 'qs'
    export default {
      name: "navs",
      data(){
        return{
          counts:0,//购物车商品数量
          or:true,//登录与注销的切换
          right:false,//导航响应滚动改变样式
          inf:false,//购物车商品数量显示
          show:'',
          url:'../../static/logo.png'
        }
      },
      methods:{
        jump(){
          var user = this.$store.state.status;//登录用户
          var sessions = sessionStorage.getItem('goods');
          var statu;
          // this.show=this.$store.state.shopCarShow;
          if(user){
            this.$axios.post('http://localhost/lancomephp/addcar.php',qs.stringify({users:user})).then(res=>{
              console.log(res.data);
              statu=res.data;
              //状态判断
              if(statu){
                this.$store.commit('change');
                this.show=this.$store.state.shopCarShow;
                // console.log(this.show);
                // console.log(0);
              }else{
                this.$store.commit('changere');
                this.show=this.$store.state.shopCarShow;
                // console.log(1);
              }
              if(this.show){
                this.$router.push({name:'after'});
              }else{
                this.$router.push({name:'before'});
              }
            })
          }
          console.log(sessions,statu);
          if(sessions){
            this.$store.commit('change');
            this.show=this.$store.state.shopCarShow;
            // console.log(this.show);
          }else{
            this.$store.commit('changere');
            this.show=this.$store.state.shopCarShow;
          }
          if(this.show){
            this.$router.push({name:'after'});
          }else{
            this.$router.push({name:'before'});
          }


        },
        handleScroll(){
          var scrollTop = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
          if(scrollTop > 86){
            this.right=true;
          }else{
            this.right=false;
          }
        },
        alertfn(){
          this.$router.push({name:'operate'});
        },
        // 注销用户登录
        deluser(){
          function getValue(keys){
            var val;
            var err = document.cookie.split('; ');
            for(var i=0;i<err.length;i++){
              var names = err[i].split('=');
              if(names[0] == keys){
                val = names[1];
                break;
              }
            }
            return val;
          }
          var str1 = getValue('username');
            console.log(this.or);
            this.or=true;
            document.cookie = "username="+str1+"; expires=Thu, 17 Dec 2000 12:00:00 GMT";
        }
      },
      created(){
        // if(this.$store.state.status){
        //   this.or = false;//显示注销
        // }
      },
      mounted(){
        // console.log(this.or);
        this.counts = this.$store.state.count;
        this.inf = this.$store.state.inf;
        window.addEventListener('scroll',this.handleScroll);

      },
      updated(){
        //  用户状态管理
        //获取登录用户的用户名，显示在首页
        function getValue(keys){
          var val;
          var err = document.cookie.split('; ');
          for(var i=0;i<err.length;i++){
            var names = err[i].split('=');
            if(names[0] == keys){
              val = names[1];
              break;
            }
          }
          return val;
        }
        if(getValue("username")){
          this.or=false;
        }
        // console.log(this.$store.state.status);
        // if(this.$store.state.status){
        //   this.or = false;//显示注销
        // }
      },

    }
</script>

<style scoped>
  .nav{
    width: 100%;
    min-height: 145px;
    background:rgba(0,0,0,1);
    z-index: 100;
  }
  .navs{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    min-height: 70px;
    background: #000;
    z-index: 100;
  }

  /*header*/
  .nav_content{
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    min-height: 70px;
    display: flex;
    justify-content: space-around;
    position: relative;

  }
  .header{
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    min-height: 70px;
    display: flex;
    justify-content: space-around;
    position: relative;
    /*z-index: 100;*/
  }

  .header {
    clear: both!important;
  }
  /*logo*/
  .logo{
    width: 193px;
    height: 48px;
    margin: 0 5%;
    padding-top: 19px;
  }
  .logo img{
    width: 100%;
  }
  li{
    list-style:none;
    display: inline-block;
    line-height: 80px;
  }
  .nav_classify{
    margin: 0;
  }
  .right ul li a,.header ul li a{
    font-size: 16px;
    padding: 0 10px;
    color: darkgray;
  }
  .nav_content ul li a{
    color: white;
    font-size: 16px;
    padding: 0 15px;
  }

  form{
    width: 280px;
    height: 70px;
    color: white;
    font-size: 18px;
  }
  .operate_area input{
    background: #d51b51;
    border: 0;
    color: white;
    outline: none;
    font-size: 15px;
    padding: 20px 60px 20px 31px;
  }
  /*//滚动之前的样式*/
  .search_content_before{
    width: 280px;
    height: 70px;
    color: white;
  }
  /*滚动之后的样式*/
  .search_content_after{
    width: 136px;
    height: 38px;
    position: absolute;
    bottom: 25px;
    color: white;
  }
  .operate_right{
    display: inline-block;
    position: absolute;
    right: 10px;
    bottom: 30px;
    /*display: none;*/
  }
  .ivu-icon{
    font-size:25px;
    padding: 0 10px;
    color: #fff;
    /*float: right;*/
  }
  .nav_content_logo{
    display: block;
    width: 130px;
    height: 32px;
    /*display: none;*/
  }
  /*放大镜*/
  .larger{
    position: absolute;
    top: 20px;
    right: 90px;
  }
  .larger_after{
    position: absolute;
    top: 20px;
    right: 170px;
  }
  /*返回顶部*/
.backto{
  width: 100px;
  height: 60px;
  background: #000;

  font-size:18px;
  text-align: center;
  line-height: 60px;
  display: none;
  position: fixed;
  bottom: 43px;
  right: 0;
}
  .backto a{
    color: white;
    text-decoration: none;
  }
  a{
    text-decoration: none;
  }
  .line{
    color: #ccc;
  }
  .service{
    /*position: relative;*/
  }
  .sub-menu{
    width: 80%;
    background: white;
    display: flex;
    padding: 50px;
    justify-content: space-between;
    position: absolute;
    top: 65px;
    left:0;
    display: none;
    z-index: 1;
    border-bottom: 10px solid #000;
  }
  .triangle{
    width: 0px;
    height: 0px;
    border-width: 30px;
    border-style: solid;
    border-color: transparent transparent white transparent;
    position: absolute;
    top: -40px;
    left: 21%;
    /*z-index: 10;*/
  }

  .sub-menu .left,.sub-menu .right {
    display: inline-block;
    vertical-align: top;
  }
  .sub-menu > .right .title,.sub-menu > .left .title{
    color: #000;
    margin-bottom: 20px;
  }
  .sub-menu .left{
    width: 59%;
    /*padding:20px 50px;*/
    text-align: left;
    /*border: 1px solid red;*/
  }
  .sub-menu .right{
    width: 50%;
    padding: 0 20px;
    text-align: left;
    /*border: 1px solid red;*/
  }
  .sub-menu ul li a:hover{
    text-decoration: underline;
  }
 .left ul li,.sub-menu .right ul li{
   display: block;
   margin: 5px 0;
   line-height: 30px;
 }
  .service:hover .sub-menu{
    display: flex;
  }
  .last_item{
    border-right:1px solid #ccc;
    padding: 0 30px;
  }
  /*购物车商品数量显示*/
  .goodsCount{
    position: relative;
    top: 25px;
    left: -25px;
  }
  .goodsC{
    position: relative;
    top: -15px;
    right: 0px;
  }
</style>
