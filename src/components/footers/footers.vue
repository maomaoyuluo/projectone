<template>
    <div class="footer">
      <!--搜索框-->
      <div class="footer_search">
        <div class="finding">我在寻找…</div>
        <form action="">
          <input class="search_content" type="text" placeholder="搜索" >
          <Icon type="ios-search" color="white" class="larger"/>
        </form>
      </div>
      <!--底部布局-->
      <div class="foot_bottom">
        <ul class="foot_top">
          <li>
              <p>© L’Oreal China 欧莱雅（中国）有限公司版权所有</p>
          </li>
          <li>
            <a href="" class="common_top">
              <span>中国工商 </span>
            </a>
            <a href="" class="common_top">
              <span> 沪ICP备08100043号-34 </span>
            </a>
          </li>
          <li>
            <a href="" class="common_top">
              <span>沪公网安备 31010602001526号</span>
            </a>
          </li>
        </ul>
        <div class="foot_content">
          <ul>
            <li>
              <a href="" class="common">
                <span>使用条款</span>
              </a>
            </li><span class="line">|</span>
            <li>
              <a href="" class="common">
                <span>Cookies政策</span>
              </a>
            </li><span class="line">|</span>
            <li>
              <a href="" class="common">
                <span>隐私政策</span>
              </a>
            </li><span class="line">|</span>
          </ul>
          <p class="common">浏览该网站表示您接受并同意我们使 用cookies为您提供个性化的浏览体验。点击 <a href="" class="common lastcookies">Cookies政策</a>
            了解详情</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "footers"
    }
</script>

<style scoped>
  .footer{
    padding-bottom: 50px;
  }
  .footer_search{
    width: 100%;
    padding: 60px 30%;
    background: #000;

    font-size: 0;
    display: flex;
    justify-content: space-around;
  }
.finding{
    font-size: 18px;
    color: #fff;
    line-height:55px ;
    /*margin-right:550px;*/
  }
  .footer_search input{
    background: #d51b51;
    border: 0;
    color: white;
    outline: none;
    font-size: 15px;
    padding: 20px 60px 20px 31px;
  }
  .footer_search{
    color: white;
  }
  .foot_bottom{
    text-align: center;
    margin: 30px 0;
  }
  .foot_top{
    margin: 0;
  }
 li{
   display: inline-block;
    margin: 0 10px;
    text-decoration: none;
  }
  .foot_content ul li a span,p{
    color: darkgray;
    font-size: 14px;
  }
  .foot_top li a span{
    font-size: 14px;
  }
  .common_top{
    color: #000;
  }
  .common{
    color: darkgray;
  }
  .lastcookies{
    text-decoration: underline;
  }
  .line{
    color: #ccc;
  }
</style>
