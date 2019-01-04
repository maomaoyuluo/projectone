<template>
    <div class="register">
      <div class="goregister">
        <h3>注册成为会员</h3>
        <p>我是已经注册用户，前往
          <router-link to="operate">登录</router-link>
        </p>
        <div class="titles">
          <div>
            <span>称谓</span>
            <RadioGroup>
              <label>
                <Radio label="先生"></Radio>
              </label>
              <label>
                <Radio label="女士"></Radio>
              </label>
            </RadioGroup>

          </div>
          <div><p><span class="important">*</span>为必填</p></div>
        </div>
        <!--账号-->
        <div class="row">
          <div class="registername">
            <label class="resname">您的邮箱/手机 <span class="important">*</span></label><br>
            <input type="text" placeholder="请输入有效的邮箱或手机" v-model="id">
          </div>
          <div class="username">
            <label class="uname">姓名</label><br>
            <input type="text" v-model="name">
          </div>
        </div>
        <!--密码-->
       <div class="row">
         <div class="registerpass">
           <label class="respass">密码 <span class="important">*</span></label><br>
           <input type="password" placeholder="请输入您的密码" v-model="pass">
           <!--密码强度-->
         </div>
         <div class="reregisterpass">
           <label class="rerespass">请再次确认密码 <span class="important">*</span></label><br>
           <input type="password" placeholder="请再次输入您的密码" v-model="repass">
           <!--密码强度-->
         </div>
       </div>
        <!--验证码-->
      <div class="rows security">
        <div class="securitycode">
          <div class="yanzheng">
            <label class="codename">请输入验证码 <span class="important">*</span></label><br>
            <input type="text" v-model="safecode">
            <!--<div class="code">请输入验证码</div>-->
            <span>看不清楚？<a href="">换一张</a></span>
          </div>
        </div>
        <div class="msgcode">
          <label class="codename">短信验证码 <span class="important">*</span></label><br>
          <input type="text" v-model="msgcode">
          <div class="inquire btn">
            <!--<a href="">获取短信验证码</a>-->
            获取短信验证码
          </div>
        </div>
      </div>
        <p>
          <Checkbox></Checkbox>
          我愿意订阅兰蔻电子报，及时接收兰蔻最新资讯和促销信息</p>
        <p><Checkbox></Checkbox>我已阅读和了解兰蔻官网的<a href="">使用条款</a>和<a href="">隐私声明</a>，并且同意接受使用条款。</p>
        <p>您填写本页面信息，将被视为您同意兰蔻（中国）品牌为向您提供更完善的服务和推介，<br>将您的个人信息提供给品牌经销商或联盟企业。</p>
        <div class="regbtn btn"  @click="regfn">
          <router-link to="">立即注册</router-link>
        </div>
      </div>
    </div>
</template>

<script>
  import qs from 'qs'
    export default {
      name: "register",
      data(){
        return{
          url:'',
          id:'',
          name:'',
          pass:'',
          repass:'',
          safecode:'',
          msgcode:''
        }
      },
      methods:{
        regfn(){
          console.log('111');
          let reg = /^[A-Za-z0-9]{5,15}/;
          let Pass=reg.test(this.pass);
          let ID = reg.test(this.id);
          if(this.id==''||this.pass==''||this.repass==''||this.name==''||this.safecode==''||this.msgcode==''){
            //  输入信息不能为空
            alert('输入信息不能为空');
          }else{
            if(Pass&&ID){
              // 匹配两次密码是否一致
              if(this.pass==this.repass){
                this.$axios.post('http://localhost/lancomephp/register.php',qs.stringify({'id':this.id,'pass':this.pass,'name':this.name})).then(res=>{
                  console.log(res);
                  if(res.data=='#0'){
                    alert('注册成功');
                    // this.url='operate';
                    location.href='http://localhost:8080/operate';
                  }else if(res.data=='#1'){
                    alert('用户已存在,请重新注册');
                  }
                })
              }else{
                alert('请再次确认密码');
              }
            }else{
            //  格式错误
              alert('请输入正确格式');
            }
          }
        }
      }
    }
</script>

<style scoped>
  .register{
    width: 50%;
    margin: 200px auto;
    padding: 50px;
    text-align: left;
    /*background: pink;*/
    border: 1px solid #ccc;

  }
  .important{
    color: red;
  }
  .goregister{
    width: 100%;
  }
  /*前往登录*/
  .goregister h3{
    margin: 20px 0;
  }
  .goregister p a{
    color: darkgray;
    text-decoration: underline;
  }
  .titles{
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }
  .security,.row{
    display: flex;
    justify-content: space-between;
  }
  .registername,.registerpass,.username,.reregisterpass{
    width: 48%;
    text-align: left;
  }
   .row input{
    width: 80%;
    margin: 10px auto;
    height: 50px;
    outline: none;
  }
  /*验证码*/

  .securitycode,.msgcode{
    width: 48%;
    text-align: left;
  }
  .securitycode input,.msgcode input{
    width: 30%;
    height: 40px;
    outline: none;
  }
  .securitycode a{
    color: darkgray;
    text-decoration: underline;
  }
  .regbtn a,.msgcode a{
    color: #fff;
    font-size: 18px;
    width: 30%;
    height: 50px;
    background: #000;
    text-align: center;
    line-height: 50px;
    padding: 10px;
    text-decoration: none;
  }
  .btn a:hover{
    background: #b51b51;
  }

</style>
