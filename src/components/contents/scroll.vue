<template>
    <div class="scroll">
      <!--轮播图架构-->
      <div class="swiper-container gallery-top">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="x in imgUrls">
            <a href="">
              <img :src="x">
            </a>
          </div>
        </div>
        <!-- Add Arrows -->
        <!--<div class="swiper-button-next swiper-button-white"></div>-->
        <!--<div class="swiper-button-prev swiper-button-white"></div>-->
      </div>
      <!--<div class="swiper-container gallery-thumbs">-->
        <!--<div class="swiper-wrapper">-->
          <!--<div class="swiper-slide bottom_slide" v-for="x in imgUrls">-->
            <!--<div class="swiper-nav">-->
              <!--<a href="">-->
                <!--{{x.title}}-->
              <!--</a>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
</template>

<script>
import Swiper from 'swiper'
    export default {
      name: "scroll",
      data(){
          return{
            imgUrls:['@/assets/12.jpg', '@/assets/last1.jpg', '@/assets/15447808533438250.jpg'],
          }
      },
      created(){
      //    请求数据
      //   this.$axios.get('../../static/imgs.json').then(res=>{
      //     console.log(res.data);
      //     this.imgUrls=res.data.imgs;
      //   })
      },
      updated(){
        var galleryThumbs = new Swiper('.gallery-thumbs', {
          // autoplay:true,
          spaceBetween: 10,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.gallery-top', {
          autoplay:true,
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          thumbs: {
            swiper: galleryThumbs
          }
        });

      }
    }
</script>

<style scoped>
  /*导入swiper.css */
  @import "../../../node_modules/swiper/dist/css/swiper.css";
  .scroll{
  }
  .swiper-container{
    width: 100%;
    height: 573px;
    /*margin-top: 100px;*/
    z-index: -100;
  }
  .swiper-container img{
    width: 100%;
    height: 100%;
  }
  .swiper-wrapper{
    display: flex;
  }
  .swiper-nav{
    width:33%;
    padding: 20px;
    text-align: center;
    background: #b51b51;
  }
  .swiper-nav a{
    color: #fff;
    font-size:22px;
    text-decoration: none;
  }
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #000;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  /*.swiper-slide {*/
    /*display: inline-block;*/
    /*background-size: cover;*/
    /*background-position: center;*/
  /*}*/
  .gallery-top {
    height: 80%;
    width: 100%;
  }
  .gallery-thumbs {
    width: 100%;
    padding: 10px 10%;
    height: 20%;
    box-sizing: border-box;
    background: #000;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-thumb-active {
    opacity: 1;
  }

</style>
