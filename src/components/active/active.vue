<template>
    <div class="active">
      <div class="actives"></div>
      <div class="details">
        <a href="" class="decoration">了解详情</a>
        <router-link :to="{name:'control'}">管理员页面</router-link>
        <router-view></router-view>
      </div>
      <!--<div class="details"><a href="" class="decoration">管理员页面</a></div>-->

      <div class="solve">
        <div>关于我们</div>
        <a href="">微信</a>
        <a href="">微博</a>
        <a href="" class="online_inquire decoration">在线咨询</a>
        <a href="" class="phone_inquire decoration">电话咨询
          <transition name="fade">
            <div class="hide">
              <Icon type="ios-call-outline" />
              <div class="inquire">
                <div>咨询热线</div>
                <div>400-8888-88</div>
              </div>
            </div>
          </transition>

        </a>

      </div>
    </div>
</template>

<script>
    export default {
      name: "active",
      data(){
        return{
          user:''
        }
      },
      methods:{
       // 电话咨询的hover效果
       scrollActive(x, y, texts){
          var actives = document.querySelector('.actives');
          // document.createElement ('marquee'); 勿改变
          var eleId = document.createElement ('marquee');
          eleId.style.position = 'absolute';
          eleId.style.left = x + 'px';
          eleId.style.top = y + 'px';
          eleId.innerText = texts;
          actives.appendChild (eleId);
        }
      },
      created(){
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
        this.user = getValue('username');
        this.$store.commit('status',this.user);
      },
      mounted(){
        var test = `美丽加享 全场购满两件正装 即送甄选礼包1份`;
        // 当有用户登录时显示该用户账号
        if(this.user){
          var texts = `###欢迎${this.user}前来选购!###  美丽加享 全场购满两件正装 即送甄选礼包1份`;
          this.scrollActive(10,0,texts);
        }else{
          this.scrollActive(10,0,test);
        }
      }
    }
</script>

<style scoped>
  .active{
    width: 100%;
    padding: 10px 10%;
    font-size: 16px;
    color: #fff;
    background: #d51b51;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    z-index: 100;
  }
  .actives{
    width: 40%;
    position: relative;
  }
  .details,.solve{
    width: 30%;
    text-align: center;
  }
  .solve{
    display: flex;
  }
  a{
    color: white;
    padding: 0 10px;
  }
  .decoration{
    text-decoration: underline;
  }
  /*电话咨询*/
  .hide{
    width: 250px;
    height: 80px;
    border: 1px solid #ccc;
    background: #fff;
    /*display: flex;*/
    display: none;
    position: absolute;
    bottom: 45px;
    right: 180px;
    color: black;
    font-size: 22px;
  }
  /*.ivu-icon{*/
    /*font-size: 70px;*/
  /*}*/
  .inquire{
    font-size: 20px;
  }
  .phone_inquire:hover .hide{
    display:flex;
  }
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    -webkit-transition: opacity 2s;
    -moz-transition: opacity 2s;
    -ms-transition: opacity 2s;
    -o-transition: opacity 2s;
    transition: opacity 2s;
  }
  .fade-leave-to{
    opacity: 0;
  }
</style>
