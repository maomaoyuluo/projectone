<template>
  <div class="operate">
    <!--登录-->
    <div class="login">
      <router-link :to="{name:'operate'}">《返回我的</router-link>
      <h2>管理员用户登录</h2>
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
      <div class="loginBtn" @click="loginfn(username)">
        管理员登录
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
  </div>
</template>

<script>
  import qs from 'qs'
    export default {
       name: 'adminlogin',
      data(){
        return{
          id:'',
          pass:''
        }
      },
      methods:{
        loginfn(obj){
          if(this.id == ''||this.pass==''){
            alert('请输入账号或密码');
          }else{
            this.$axios.post('http://localhost/lancomephp/admin.php',qs.stringify({'ids':this.id,'passs':this.pass})).then(res => {
              console.log(res);
              if(res.data=='#0'){
                alert('登录成功');
                // 跳转到商品主页
                this.$router.push({name:'control',query:{obj:this.id}});
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
