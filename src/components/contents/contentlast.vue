<template>
    <div class="contentlast">
      <!--该网页顶部图片-->
      <div class="content-img">
        <a href="">
          <img src="@/assets/12.jpg">
        </a>
      </div>
      <h2>官网特别服务</h2>
      <p>SPECIAL SERVICES</p>
      <!--中间内容区域-->
      <div class="contentcenter">
        <ul>
          <li class="shopcell" v-for="item in shopinfo">
            <div  @click="jumpPage(item.name,item.src,item.des,item.price,item.id)">
              <div class="imgbox">
                <a href="">
                  <img :src="item.src">
                </a>
              </div>
              <div class="contents">
                <h4><a href="">{{item.name}}</a></h4>
                <p><a href="">{{item.des}}</a></p>
                <a href="" class="clickBtn">{{item.price}}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--该网页底部图片-->
      <div class="content-img">
        <a href="">
          <img src="@/assets/last2.jpg">
        </a>
      </div>
    </div>
</template>

<script>
  import qs from 'qs'
    export default {
      name: "contentlast",
      data(){
        return{
          shopinfo:null
        }
      },
      methods:{
        jumpPage(name,src,des,price,id){
          this.$router.push({path:'/goodsdetail',query:{name:name,src:src,des:des,price:price,id:id}});

        }
      },
      // created(){
      //   // 请求数据
      //   this.$axios.get('../../static/imgs.json').then(res=>{
      //     console.log(res);
      //     this.shopinfo=res.data.contentlast;
      //   })
      // },
      created(){
        //    请求数据
        // var fd = new FormData();
        // fd.append('roser');
        // this.$axios.get('http://localhost/lancomephp/getinfo.php',fd).then(res=>{
        //   console.log(res.data);
        //   this.shopinfo=res.data;
        // })
        this.$axios.get('http://localhost/lancomephp/getinfo.php',qs.stringify({'type':'lb'})).then(res=>{
          console.log(res.data);
          this.shopinfo=res.data;
        })
      },
    }
</script>

<style scoped>
  .contentlast{
    text-align: center;
  }
  .content-img{
    width: 100%;
    margin:50px 0;
  }
  .content-img img{
    width: 100%;
  }
  /*中间内容区域*/
  .contentcenter{
    width: 100%;
    padding: 20px 15%;
    margin:50px 0;
    display: flex;
  }
  .contentcenter ul{
    width: 100%;
    display: flex;
  }

  .shopcell{
    width: 32%;
    list-style: none;
    margin: 0 10px;
  }
  .contentcenter .imgbox{
    width: 100%;
    margin-bottom: 30px;

  }
  .contentcenter .imgbox img{
    width: 100%;
    vertical-align: middle;
  }
  .contents h4 a{
    color: #000;
    margin: 20px 0;
    font-size: 20px;
  }
  .contents p a{
    color: darkgray;
    font-size: 18px;
  }
  .contents a{
    text-decoration: none;
  }

  .clickBtn{
    color: #fff;
    width: 40%;
    height: 50px;
    background: #000;
    display: inline-block;
    text-align: center;
    line-height: 50px;

  }
  .clickBtn:hover{
    background: #d51d51;
  }

</style>
