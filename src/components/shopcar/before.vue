<template>
    <div class="before">
      <Layout>
        <Header>
          <div class="imgbox">
            <router-link :to="{name:'homepage'}"> <img :src="url"></router-link>
          </div>
        </Header>
        <Content>
          <Layout class="goshop">
            <router-link :to="{name:'homepage'}"  class="goshopping">
              <Icon type="md-arrow-dropleft" />继续购物
            </router-link>
            <h1>您的购物袋是空的</h1>
          </Layout>
          <Layout class="empty_find">
           <ul>
             <li>
               <div class="finding">
                 <h2>寻觅灵感?</h2>
                 <a href="">立即购买您喜爱的产品</a>
               </div>
             </li>
             <li class="last_item">
               <h2>想要找到完美的礼物?</h2>
               <a href="">挑选最合适TA的精美礼物</a>
             </li>
           </ul>
         </Layout>
          <Layout class="artical_banner">
            <a href="">
              <img :src="banner" alt="">
            </a>
          </Layout>
        </Content>
        <Footer class="footers">
          <div class="foot_content">
            <div class="foot_items">
              <p class="first_item">
                <Icon type="ios-unlock" />
                安全支付保障
              </p>
              <p>安全支付系统采用SSL加密。</p>
              <p>icon</p>
            </div>
            <div class="foot_items">
              <p class="first_item">
                <Icon type="ios-call-outline" />
                联系我们
              </p>
              <p>如果您有任何问题，</p>
              <p>希望得到进一步咨询，</p>
            </div>
            <div class="foot_items">
              <p class="first_item">
                <Icon type="ios-boat" />
                您的特殊礼遇
              </p>
              <p>首款好礼</p>
              <p>首次购物可获赠</p>
              <p>免费礼品小样</p>
            </div>
            <div class="foot_items">
              <p class="first_item">
                <Icon type="ios-timer" />
                全国配送
              </p>
              <p>快递可至全国各地</p>
              <p>快递2至6日</p>
              <p>正常送达全国</p>
            </div>
            <div class="foot_items last_item">
              <p class="first_item">
                <Icon type="md-albums" />
                需要帮助？
              </p>
              <p>我们在线客服人员将帮助您在线选购商品
                <a href="">在线咨询</a></p>
              <p>（周一至周日9:00-21:00）</p>
              <p>客服热线：400-820-8016</p>
              <p>（周一至周日9:00-21:00）</p>
            </div>
          </div>
        </Footer>
      </Layout>
      <footers/>
      <!--<router-view></router-view>-->
      <active/>
    </div>
</template>

<script>
  import active from '@/components/active/active'
  import footers from '@/components/footers/footers'
    export default {
      name: "before",
      components:{
        footers,
        active
      },
      data(){
          return{
            url:"../../static/logo.png",
            banner:"../../static/sh.jpg"
          }
      }
    }
</script>

<style scoped>
  body{
    background: #fff;
  }
  .ivu-layout-header{
    widows: 100%;
    height:150px;
    background: #000;
  }
  .imgbox{
    width: 253px;
    height: 51px;
    margin: 35px auto;
  }
  .imgbox img{
    width: 100%;
    height: 100%;
  }
  .artical_banner{
    width: 100%;
  }
  .artical_banner img{
    width: 100%;
  }
  /*content*/
  .goshopping{
    width: 80%;
    margin: 20px auto;
    text-align: left;
    text-decoration: none;
    color: #000;
  }
  .goshop h1{
    text-align: center;
  }
  .empty_find{
    width: 80%;
    margin: 0 auto;
    padding: 70px 0;
    /*background: red;*/
  }
  .empty_find ul{
    display: flex;
    margin: 30px 0;
  }
  .finding a,.last_item a{
    color: darkgray;
    text-decoration: underline;
  }
  .empty_find li{
    width: 49%;
    text-align: center;
    list-style: none;
  }
  .empty_find ul li h2{
    margin: 50px 0;
  }

 /*footer*/
  .ivu-layout-footer{
    background:white;
  }
  .footers{
    width: 100%;
    border-top:1px solid #ccc ;
    border-bottom: 1px solid #ccc;
    padding: 30px 0;
    margin: 150px 0;
    background: #fff;
  }
  .foot_content{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .foot_items{
    width: 20%;
    text-align: left;
  }
  .first_item{
    color:#000;
    font-size: 16px;
  }
  .last_item{
    height: 100%;
    border-left: 1px solid #ccc;
    padding-left: 100px;
  }

  .ivu-icon{
    font-size: 25px;
  }
</style>
