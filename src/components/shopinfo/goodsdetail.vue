<template>
    <div class="goodsdetail">
      <div class="products">
        <!--网页进程-->
        <!--<artical class="progress"></artical>-->
        <!--商品详情-->
        <div class="goodsinfo">
          <!--左侧-->
          <div class="leftside">
            <!--小图-->
            <div class="smallpic">
              <ul>
                <li>
                  <img :src="$route.query.src" alt="兰蔻小黑瓶">
                </li>
                <li>
                  <img :src="$route.query.src" alt="兰蔻小黑瓶">
                </li>
                <li>
                  <img :src="$route.query.src" alt="兰蔻小黑瓶">
                </li>
                <li>
                  <img :src="$route.query.src" alt="兰蔻小黑瓶">
                </li>
              </ul>
            </div>
            <!--大图,放大镜效果-->
            <div class="bigpic">
              <img :src="$route.query.src" alt="">
            </div>
          </div>
          <!--右侧-->
          <div class="rightside">
            <div class="goodsintro">
              <div class="goodsname">
                <h3>Advanced Genifique Youth Activating Concentrate</h3>
                <h1>兰蔻小黑瓶精华肌底液</h1>
              </div>
              <div class="estimate">
                <Icon type="ios-star" />
                <Icon type="ios-star" />
                <Icon type="ios-star" />
                <Icon type="ios-star" />
                <Icon type="ios-star" />
                <a href="">132条评价</a>
              </div>
            </div>
            <!--选择规格-->
            <div class="operate">
              <!--规格-->
              <div class="standard">
                <ul>
                  <li>
                    <p>30ml</p>
                    <p>￥{{$route.query.price}}</p>
                  </li>
                  <li>
                    <p>30ml</p>
                    <p>￥{{$route.query.price}}</p>
                  </li>
                  <li>
                    <p>30ml</p>
                    <p>￥{{$route.query.price}}</p>
                  </li>
                  <li>
                    <p>30ml</p>
                    <p>￥{{$route.query.price}}</p>
                  </li>
                </ul>
                <div class="joinAndBuy">
                  <div class="goodsPrice">
                    <span>￥760</span>
                    <div class="counts">
                      1
                      <Icon type="ios-arrow-down" />
                    </div>
                  </div>
                  <!--加入购物车过购买-->
                  <div class="both">
                    <!--<a href="" @click="joincar">加入购物袋</a>-->
                    <div @click="joincar">加入购物袋</div>
                    <!--<a href="">立即购买</a>-->
                    <div>立即购买</div>
                  </div>
                </div>
                <!--产品简介-->
                <div class="goods_introduce">
                  <p>产品简介</p>
                  <p>* 因数量有限，同一个收货地址或者同一手机号码限购5件，敬请谅解。</p>
                  <p>从深层强韧肌底，一瓶有效改善肌肤问题，肌底修护从小黑瓶精华开始。</p>
                  <a href="">查看更多</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--商品描述-->
        <div class="goodsdes"></div>
      </div>
      <footers/>
      <active/>
    </div>
</template>

<script>
  import qs from 'qs'
  import active from '@/components/active/active'
  import footers from '@/components/footers/footers'
    export default {
      name: "goodsdetail",
      data(){
        return{
          storeGoods:[],//存储购物车商品
          // cars:false,
          id:'',
          goodsinfo:null,
          users:'',
          arr:[],
          count:1//商品数量默认为1
        }
      },
      components:{
        active,
        footers
      },
      methods:{
        joincar(){
          // 购物车状态管理
          // this.$store.commit('change');
          this.$store.commit('inf');//显示商品数量;
          this.id = this.$route.query.id;
          console.log(this.id);
          // 从商品数据库取商品信息
          this.$axios.post('http://localhost/lancomephp/shopinfo.php',qs.stringify({'id':this.$route.query.id})).then(res=>{
            console.log(res.data);
            this.goodsinfo=res.data;
            // 判断是否有用户登录,
            // 1.如果没有登录直接将商品信息渲染到购物车页面，
            // 2.如果登录，将商品信息存储到购物车数据库，从购物车数据库拿到商品信息进行渲染；
            //获取登录用户的用户名，显示在首页
            this.users = this.$store.state.status;//获取用户账号
            if(this.users){
              //  存在登录用户,进行购物车数据库操作
              // console.log(this.goodsinfo);
            //  并且从购物车数据库获取该用户加入的商品信息，渲染至购物车页面
              this.$axios.post('http://localhost/lancomephp/addcar.php',qs.stringify({'users':this.users})).then(res=>{
              //  加入购物车成功,
                let arrs = [];
                console.log(res.data);
                if(res.data != ''){
                  let nums=0;
                  for(let i=0;i<res.data.length;i++){
                    if(res.data[i].id == this.goodsinfo.id){
                      // console.log(i);//下标
                      var counts = Number(this.goodsinfo.count)+1;
                      this.goodsinfo.count = counts;
                      // console.log(this.goodsinfo.count);
                      res.data.splice(i,1,this.goodsinfo);
                      let str = JSON.stringify(res.data);
                      // 已经加入过购物车，将商品数量+1
                      this.$axios.post('http://localhost/lancomephp/updata_car.php',qs.stringify({'users':this.users,'goods':str})).then(res=>{
                        console.log(res);
                      })
                      break;
                    }else{
                      nums++;
                    }
                  }
                //  没有重复数据
                  if(nums == res.data.length){
                    // console.log(res.data);
                    res.data.push(this.goodsinfo);
                    let str = JSON.stringify(res.data);
                    this.$axios.post('http://localhost/lancomephp/updata_car.php',qs.stringify({'users':this.users,'goods':str})).then(res=>{
                      // console.log(res);
                    })
                  }else{
                    alert("商品重复");
                  }
                }else{

                  let info = this.goodsinfo;
                //  没有往期商品
                  arrs.push(info);
                 var datas = JSON.stringify(arrs);
                 this.$axios.post('http://localhost/lancomephp/updata_car.php',qs.stringify({'users':this.users,'goods':datas})).then(res=>{
                   console.log(res.data);
                 })
                }
              })
            }
            else{
              // 没有登录用户
              //将商品数据传递到购物车页面进行渲染
              //判断该商品是否加入过
              var history =sessionStorage.getItem('goods');
              console.log(JSON.parse(history));
              if(history){
                // 查找是否已经存在该商品的信息
                for(let i=0;i<JSON.parse(history).length;i++){
                  this.storeGoods.push(JSON.parse(history)[i]);
                  if(this.goodsinfo.id === JSON.parse(history)[i].id){
                    return;
                  }
                }
                this.storeGoods.push(this.goodsinfo);
                sessionStorage.setItem('goods',JSON.stringify(this.storeGoods));
              }else{
                this.storeGoods.push(this.goodsinfo);
                sessionStorage.setItem('goods',JSON.stringify(this.storeGoods));
              }
            }
          })
        }
      }
    }
</script>

<style scoped>
  .goodsdetail{
    width: 100%;
    margin-top: 100px;
  }
  .products{
    width: 100%;
    padding:0px 10%;
  }
  .progress{
    width: 100%;
    height: 100px;
    background: #000;
  }
  .goodsinfo{
    display: flex;
  }
  .leftside,.rightside{
    width: 48%;
    /*border: 1px solid red;*/
    padding: 30px;
  }
  .leftside{
    display: flex;
    justify-content: space-between;
  }
  .smallpic{
    width: 18%;
    /*border: 1px solid #000;*/
  }
  .smallpic ul li{
    width: 100%;
    margin: 10px 0;
    border: 1px solid #000;

  }
  .smallpic ul li img{
    width: 100%;
  }
  li{
    list-style: none;
  }
  .bigpic{
    width: 80%;
    border: 1px solid #ccc;
  }
  .estimate{
    width: 100%;
    margin: 20px 0;
  }
  /*规格*/
  .operate{

  }
  .standard ul{
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
  }
  .standard ul li{
    width: 30%;
    height: 60px;
    text-align: center;
    /*line-height: 60px;*/
    color: #000;
    font-size: 16px;
    border: 1px solid #ccc;
    margin: 10px;
  }
  .standard ul li p{
    margin: 5px 0;
  }
  .joinAndBuy{
    display: flex;
    flex-flow: nowrap;
  }
  .goodsPrice{
    width: 40%;

  }
  .both{
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
  .both div{
    width: 40%;
    height: 50px;
    background: #000;;
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height:50px;
    padding:0 10px;
  }
  .goodsPrice{
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  .counts{
    width: 40%;
    height: 50px;
    border: 1px solid #ccc;
    font-size: 18px;
    text-align: center;
    line-height:50px;
    padding:0 10px;
  }

</style>
