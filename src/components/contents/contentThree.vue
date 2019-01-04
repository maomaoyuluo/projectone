<template>
    <div class="contentThree">
      <!--三个标题-->
      <ul>
        <li><h3><a href="">明星彩妆</a></h3></li>
        <li><h3><a href="">圣诞礼盒</a></h3></li>
        <li><h3><a href="">明星护肤</a></h3></li>
      </ul>
      <!--商品陈列-->
      <div class="content_goods">
        <!-- Swiper -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="y in msg">
              <div class="contents_part" @click="jumpPage(y.name,y.src,y.des,y.price,y.id)">
                <!--图片部分-->
                <div class="imgbox">
                  <img :src="y.src">
                </div>
                <!--详情-->
                <div class="details">
                  <div class="swiper-color">
                    <div class="sel-color">1</div>
                    <div class="sel-color">2</div>
                    <div class="sel-color">3</div>
                    <div class="sel-color">4</div>
                    <div class="sel-color">5</div>
                  </div>
                  <h5><a href="">{{y.name}}</a></h5>
                  <p><a href="">{{y.des}}</a></p>
                  <div class="grade">
                    <!--热度-->
                    <div class="hot">
                      <Icon type="md-star" />
                      <Icon type="md-star" />
                      <Icon type="md-star" />
                      <Icon type="md-star" />
                      <Icon type="md-star" />
                    </div>
                    <!--价格-->
                    <div class="price">{{y.price}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import qs from 'qs'
    export default {
      name: "contentThree",
      data(){
        return{
          msg:null,
          arrs:null,
          length:'',
          part:''
        }
      },
      methods:{
        jumpPage(name,src,des,price,id){
          this.$router.push({path:'/goodsdetail',query:{name:name,src:src,des:des,price:price,id:id}});

        }
      },
      created(){
        //    请求数据
        this.$axios.get('http://localhost/lancomephp/getinfo.php',qs.stringify({type:'xhp'})).then(res=>{
          console.log(res.data);
          this.msg=res.data;
        })
      },
      mounted(){
        var swiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }
    }
</script>

<style scoped>
  /*导入swiper.css */
  @import "../../../node_modules/swiper/dist/css/swiper.css";
  .content_goods{
    width: 80%;
    margin: 0 auto;
    display: flex;
    overflow: hidden;
  }
  .contentThree{
    text-align: center;
    margin: 20px 0;
  }
  .ivu-icon{
    font-size: 25px;
  }
  .contentThree>ul {
    width: 100%;
    padding: 30px 30%;
    display: flex;
    justify-content: space-around;
  }
  .contentThree ul li h3 a{
    color: #000;
  }
  li{
    list-style: none;
  }
  /*内容区域*/
  /*.swiper-container{*/
    /*width: 70%;*/
    /*z-index: -10;*/
  /*}*/
.details h5 a{
  color: #000;
}
.details h5{
  margin: 10px 0;
}
  .details p a{
    color: #ccc;
    font-size: 16px;
  }
.contents_part{
  width: 23%;
  min-width: 300px;
  min-height: 442px;
  border: 1px solid #000;
  margin: 0 4px;
  padding: 15px;
}
.shopInfo{
  width: 23%;
}
 .imgbox{
    width: 90%;
    margin: 10px auto;
  }
 .imgbox img{
   width: 100%;
 }
  /*色号*/
  .sel-color{
    width: 25px;
    height:25px;
    background: red;
    margin: 5px;
    display: inline-block;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }
  .grade{
    display: flex;
    justify-content: space-around;
  }
   .price{
    margin: 0 10px;
  }
  .content-img{
    width: 100%;
  }
  .content-img img{
    width: 100%;
  }
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 80%;
    height: 100%;
    /*height: 300px;*/
  }
  .swiper-slide {
    width: 33%;
    text-align: center;
    font-size: 18px;
    background: #fff;
    /*border: 1px solid #000;*/

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
