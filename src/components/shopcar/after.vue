<template>
    <div class="after">
      <div class="logo">
        <div class="imgboxs">
          <router-link :to="{name:'homepage'}"> <img :src="url"></router-link>
        </div>
      </div>
      <!--标题-->
      <div class="header">
        <div>
          <router-link :to="{name:'homepage'}">《继续购物 </router-link>
        </div>
        <div>
          <h1>我的购物袋({{sumall}})</h1>
        </div>
      </div>
      <!--内容部分-->
      <div class="contents">
        <!--左侧-->
        <div class="left">
          <!--左侧有三部分-->
          <div class="top">
            <div>
              <input type="checkbox"  checked="">
            </div>
            <div class="selAll">全选</div>
            <div class="productinfo">商品信息</div>
            <div class="pay">单价</div>
            <div class="count">数量</div>
            <div class="total">小计</div>
          </div>
          <!--中间部分-->
          <div class="center" v-for="(item,index) in goodsinfo">
            <input type="checkbox" checked="" class="checkBef">
            <div class="imgbox">
              <img :src="item.src" alt="">
            </div>

            <div class="infos">
              <div class="infosTop">
                <div class="infoLeft">
                  <p>{{item.name}}</p>
                  <p>30ml</p>
                </div>
                <div class="infoRight">
                  <p>{{item.price}}</p>
                  <input type="number" v-model="item.count" minlength="0" maxlength="10" class="counts" v-bind="selfn(index)" ref="getNum">
                  <div class="allfee">{{item.count*item.price}}</div>
                </div>
              </div>
              <div class="infosBotm">
                <ul>
                  <li><a href="">修改</a></li>
                  <li><a href="">+收藏夹</a></li>
                  <li @click="deletefn" class="delete">删除</li>
                </ul>
              </div>
            </div>
          </div>
          <!--底部-->
          <div class="bottom1">
            <div class="btmleft">
              <div>官网促销活动</div>
            </div>
            <div class="btmright">
              <h6>年底终极福利  美丽加享</h6>
              <p>*全场购满2件正装，即赠圣诞星品臻选水润礼包1份；</p>
              <p>*宠爱升级！全场购满2件正装，且含菁纯系列产品（除唇膏外）加赠菁纯臻颜丝润晚霜5ml；</p>
              <p>*蜜享券不能同享</p>
            </div>
          </div>
          <div class="bottom2">
            <div class="btmleft2">订单总价</div>
            <div class="settlement">
              <p>商品价格
                <span>{{amount}}</span>
              </p>
              <p>优惠金额
                <span>0</span>
              </p>
              <p>运费
                <span>0</span>
              </p>
            </div>
          </div>
          <div class="sumAll">
            <p><router-link :to="{name:'homepage'}">《继续购物 </router-link></p>
            <div class="feeAll">
              <div class="sum_fee">
                <p>总价
                <span>{{amount}}</span></p>
              </div>
              <div class="pay btn">立即结算</div>
            </div>
          </div>
        </div>
        <!--右侧-->
        <div class="right">
          <div class="rightTop">
            <div class="sum"> <h2>订单总结</h2></div>
            <div class="fast">立即结算</div>
            <div class="row">
              <span>商品价格</span>
              <span>760</span>
            </div>
            <div class="row">
              <span>优惠金额</span>
              <span>0</span>
            </div>
            <div class="row">
              <span>运费</span>
              <span>0</span>
            </div>
            <div class="row">
              <span>总价</span>
              <span>760</span>
            </div>
          </div>
          <div class="rightBtm">
            <h3>客服中心</h3>
            <p>如有任何问题，请联系我们</p>
            <p>400-820-8016</p>
            <div class="online btn">在线客服</div>
          </div>
        </div>
      </div>
      <!--活动部分-->
      <footers/>
      <active/>
    </div>
</template>

<script>
  import active from '@/components/active/active'
  import footers from '@/components/footers/footers'
  import qs from 'qs'
    export default {
      name: "after",
      data(){
          return{
            user:'',//登录用户
            sumall:0,
            url:"../../static/logo.png",
            goodsinfo:[],
            count:1,
            amount:0,//商品总价格
            checks:0
          }
      },
      components:{
        active,
        footers
      },
      methods:{
        //删除商品
        deletefn(){
          this.user = this.$store.state.status;
          if(this.user){
          //  登录状态

          }else{
          // 未登录状态
            let dels = document.querySelectorAll('.delete');
            for(let x=0;x<dels.length;x++){
              var _this = this;
              dels[x].onclick = function(){
                _this.id = _this.goodsinfo[x].id;
                var sure = confirm("确定要删除吗？");
                if(sure){
                  // _this.parentNode.remove();
                  for(let j=0;j < _this.goodsinfo.length;j++){
                    if(_this.goodsinfo[j].id == _this.id){
                      _this.goodsinfo.splice(j,1);
                      sessionStorage.setItem('goods',JSON.stringify(_this.goodsinfo));
                    }
                  }
                }else{
                //  不删除
                }
              }
            }
          }
        },
        selfn(index){
          let allfee = document.querySelectorAll('.allfee');
          //获取所有复选框
          // let checkAll = document.querySelectorAll('.checkBef');
          // this.checks = checkAll;
          let inps = document.querySelectorAll('.counts');
          for(let i=0;i<this.checks.length;i++){
            var _this = this;
            if(this.checks[i].checked){
              inps[i].onchange = function(){
                _this.goodsinfo[i].count = Number(inps[i].value);//改变当前商品数量
                // console.log(_this.goodsinfo[i].count);
                if(_this.goodsinfo.indexOf(_this.goodsinfo[i].id)){
                  _this.goodsinfo.splice(i,1,_this.goodsinfo[i]);
                  // console.log(_this.goodsinfo);
                  let str = JSON.stringify(_this.goodsinfo);
                  _this.$axios.post('http://localhost/lancomephp/updata_car.php',qs.stringify({users:_this.user,goods:str})).then(res=>{
                    console.log(res.data);
                  })
                }
              }
              _this.amount+=Number(allfee[i].innerText);
            }else{
              return;
            }
          }
        }
      },
      created(){
        let checkAll = document.querySelectorAll('.checkBef');
        this.checks = checkAll;
        //计算商品总价
        //获取所有商品的小计
        // let allfee = document.querySelectorAll('.allfee');
        // //获取所有复选框
        // let checkAll = document.querySelectorAll('.checkBef');
        // for(let i=0;i<checkAll.length;i++){
        //   if(checkAll[i].checked){
        //     var _this = this;
        //
        //     this.goodsinfo[i].onclick = function(){
        //       console.log(i);
        //     }
        //     console.log(checkAll[0].checked);
        //     this.amount+=Number(allfee[i].innerText);
        //   }else{
        //     return;
        //   }
        // }
        // this.sumall = this.$store.state.count;//购物车显示商品总数
        this.user = this.$store.state.status;
        // console.log(this.user);
        if(this.user){
          console.log(this.user);
        //  存在登录用户
          this.$axios.post('http://localhost/lancomephp/addcar.php',qs.stringify({users:this.user})).then(res=>{
            console.log(res.data);
            this.goodsinfo = res.data;
            console.log(this.goodsinfo);
            //获取选中商品总数
            for(var i=0;i<this.goodsinfo.length;i++){
              // console.log(this.checks[0].checked);
              if(this.checks[i].checked){
                this.sumall += Number(this.goodsinfo[i].count);
              }
            }
          })
        }else{
          //未登录
          var goods = sessionStorage.getItem('goods');
          var info = JSON.parse(goods);
          this.goodsinfo = info;
          var sum = 0;
          for(let i = 0; i < info.length; i++ ){
            sum += Number(info[i].price);
          }
          this.amount = sum;
          if(info){
            this.$store.commit('add',info.length);//购物车商品数量改变
          }
        }
      },
      mounted(){

      }
    }
</script>

<style scoped>
  .logo{
    width: 100%;
    height: 150px;
    background: #000;
    padding: 20px 0;
  }
 .imgboxs{
    width: 253px;
    height: 51px;
    margin: 35px auto;
  }
  .imgboxs img{
    width: 100%;
    height: 100%;
  }
  .after{
    width: 100%;
    margin: 0px auto;
    /*background: pink;*/
  }
  .header{
    width: 80%;
    margin: 30px auto;
  }
  .header a{
    color: #000;
    text-decoration: none;
    margin: 10px 0;
  }
  .contents{
    width: 80%;
    margin: 50px auto;
    /*background: yellow;*/
    display: flex;
    justify-content: space-between;
  }
  /*左侧部分*/
  .left{
    /*width: 70%;*/
    /*border: 1px solid #000;*/
  }
  .left .top{
    width: 100%;
    height: 40px;
    background: #000;
    line-height: 40px;
    color: #fff;
    display: flex;
    padding: 0 10px;
  }
  .left .top div{
    text-align: center;
  }
  .selAll{
    width: 10%;
  }
  .productinfo{
    width: 30%;
  }
  .pay, .count, .total{
    width: 20%;
  }
/*中间部分*/
  .center{
    width: 100%;
    padding: 20px 10px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
  }
  .infosBotm li{
    list-style: none;
    margin: 0 10px;
  }
  .infosBotm ul{
    display: flex;
  }
  .infosBotm li a{
    color: #000;
    text-decoration: underline;
  }
  .imgbox{
    width: 10%;
  }
  .imgbox img{
    width: 100%;
  }
  .infoLeft p:nth-of-type(2){
    color: darkgray;
    margin: 10px 0;
  }
  .infos{
    width: 85%;
    /*border: 1px solid #000;*/
    padding: 20px;
  }
  .infosTop{
    display: flex;
    justify-content: space-between;
  }
  .infoRight{
    width: 60%;
    display: flex;
  }
  .infoRight p{
    width: 30%;
  }
  .infoRight .counts{
    width: 30%;
    height: 40px;
    margin: 0 20%;
    margin-left: 20px;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 40px;
  }
  .counts{
    outline: none;
  }
  .bottom1,.bottom2{
    width: 100%;
    padding: 25px 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
  }
  .btmleft{
    width: 25%;
    font-size: 22px;
  }
  .btmright,.btmleft2{
    width: 70%;
    text-align: left;
  }
  .btmleft2{
    font-size: 22px;
  }
  .settlement{

  }
  .settlement span,.sum_fee span{
    margin-left: 100px;
  }
  .sumAll p a{
    color: #000;
  }
  .sumAll{
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
  }
  .btn{
    width: 50%;
    margin: 0 auto;
    height: 40px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    font-size: 18px;
    background: #000;
  }
  .btn:hover{
    background: #b51b51;
  }
  .feeAll{
    width: 23%;
  }

  .right{
    width: 28%;
    /*border: 1px solid;*/
    /*padding:40px 20px;*/
  }
  .fast{
    width: 80%;
    margin: 30px auto;
    text-align: center;
    height: 40px;
    background: #b51b51;
    line-height: 40px;
    color: #fff;
    font-size: 18px;
  }
  .row{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .rightTop{
    border: 1px solid #ccc;
    padding: 40px 0;
  }
  .sum h2{
    text-align: center;
  }
  .rightBtm{
    border: 1px solid #ccc;
    text-align: center;
    padding: 40px 20px;
    margin: 20px 0;
  }
</style>
