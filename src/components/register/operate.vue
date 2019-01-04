<template>
    <div class="operate">
      <!--登录-->
      <div class="login">
        <h2>已注册用户登录</h2>
        <div class="loginname">
          <label for="logincode">您的邮箱/手机*</label><br>
          <Input type="text" id="logincode" v-model="id" clearable=""/>
        </div>
        <div class="loginpass">
          <label for="loginpassword">密码*</label><br>
          <Input type="password" id="loginpassword" v-model="pass" clearable="" />
        </div>
        <div class="rememberme">
          <label class="remember">
            <Checkbox></Checkbox>
            <span>记住用户名</span>
          </label>
          <label class="forget">
            <Icon type="md-arrow-dropright" />
            <a href="">
              <span>忘记密码？</span>
            </a>
          </label>
        </div>
        <!--登录按钮-->
        <div class="loginBtn" @click="loginfn">
          <!--<a href="">登录</a>-->
          登录
        </div>
        <div class="loginBtn">
          <router-link :to="{name:'adminlogin'}">管理员登录</router-link>
        </div>
        <!--或-->
        <div class="or">
          <hr>
          <span>或</span>
        </div>
        <div class="more">
          <p>使用合作网站账号登录</p>
          <ul>
            <li><a href=""><div class="wechat"></div> </a><span>微信</span></li>
            <li><a href=""><div class="wechat"></div> </a><span>QQ</span></li>
            <li><a href=""><div class="wechat"></div> </a><span>微博</span></li>
            <li><a href=""><div class="wechat"></div> </a><span>支付宝</span></li>
          </ul>
        </div>
      </div>
      <!--注册-->
      <div class="register">
        <h2>新用户注册</h2>
        <p>注册即可享受：</p>
        <ul>
          <li>-免费试用体验</li>
          <li>-官网独家礼遇</li>
          <li>-一手新品资讯</li>
          <li>-查看历史订单</li>
          <li>-收藏您喜欢的产品</li>
        </ul>
        <div class="registerBtn">
          <router-link :to="{name:'register'}">注册</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  import qs from 'qs'
    export default {
      name: "operate",
      data(){
          return{
            id:'',
            pass:''
          }
      },
      methods:{
        loginfn(){
          if(this.id == ''||this.pass==''){
            alert('请输入账号或密码');
          }else{
            this.$axios.post('http://localhost/lancomephp/login.php',qs.stringify({'id':this.id,'pass':this.pass})).then(res => {
              console.log(res);
              if(res.data=='#0'){
                alert('登录成功');
                //保存cookie
                document.cookie = "username="+this.id;
                setCookie("username",this.id,1);
                function setCookie(cname,cvalue,time){
                  var date = new Date();
                  date.setTime(date.getTime() + (time*24*60*60*1000));
                  var expires = "expires="+date.toGMTString();
                  document.cookie = cname+"="+cvalue+"; "+expires;
                }
                // 跳转到商品主页
                this.$router.push({name:'homepage',query:{obj:this.id}});

              }else if(res.data=='#1'){
                alert('账号或密码错误');
              }
            })
          }
        }
      }
    }
</script>

<style scoped>
  .operate{
    width: 50%;
    margin: 150px auto;
    border: 1px solid #ccc;
    display: flex;
    padding: 10px;
  }
  /*登录*/
  .login{
    width: 64%;
    border-right: 1px solid #ccc;
    text-align: left;
    padding: 40px;
  }
  #loginpassword,#logincode{
    width: 80%;
    height:40px;
    outline: none;
    margin: 10px 0;
  }
  .rememberme{
    width: 80%;
    display: flex;
    justify-content: space-between;
    color: darkgray;
  }
  .loginBtn{
    width: 40%;
    height: 50px;
    background: #000;
    color: #fff;
    font-size:  22px;
    line-height:50px;
    text-align: center;
    display: inline-block;
    margin: 0 10px;
  }
  .loginBtn:hover{
    background: #b51b51;
  }
  .wechat{
    width: 80%;
    height: 50px;
    background: #000;
    margin: 0 auto;
    /*background: url("../../assets/icon.png") -280px -100px;*/
  }
  /*其他方式*/
  .or{
    width: 100%;
    height: 20px;
    text-align: center;
    position: relative;
    margin: 50px 0;
  }
  .or span{
    position: absolute;
    top: -10px;
    left: 49%;
    background: #fff;
    padding: 0 20px;
  }

  li{
    list-style: none;
  }
  .ivu-icon{
    float: left;
  }
  .more ul{
    width: 80%;
    display: flex;
  }
  .more ul li{
    width: 24%;
    margin: 10px;
    text-align: center;
  }
  /*注册*/
  .register{
    width: 35%;
    /*background: yellow;*/
    text-align: center;
    padding: 50px;
  }
  .register ul li{
    color: darkgray;
    margin: 10px 0;
  }
  .registerBtn{
    width: 60%;
    height: 50px;
    margin: 50px auto;
    text-align: center;
    line-height: 50px;
    background: #000;
    font-size: 22px;
    color: #fff;
  }
  .registerBtn:hover{
    background: #b51b51;
  }
  .registerBtn a,.loginBtn a{
    color: #fff;
    text-decoration: none;
  }
  .forget a{
    color: darkgray;
    text-decoration: none;
  }
</style>
