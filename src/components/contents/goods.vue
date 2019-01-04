<template>
  <div class="types">
    <div class="goods">
      <div class="operate_add">
        <!--上传文件-->
          <input type="file" name="file" id="file" @change="getsrc"><br>
          商品类型: <input type="post" name="type" class="type" v-model="type"><br>
          商品编号：<input type="post" name="id" class="bh" v-model="id"><br>
          商品名称：<input type="post" name="name" class="mc" v-model="name"><br>
          商品介绍：<input type="post" name="des" class="jes" v-model="des"><br>
          商品价格：<input type="post" name="price" class="jg" v-model="price"><br>
          <input type="submit" value="提交" name="upload" id="upload" @click="uploadfn">
      </div>
      <div class="wrap" :onload="load"></div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    name: "goods",
    data(){
      return{
        type:'',
        id:'',
        name:'',
        des:'',
        price:'',
        src:'',
        array:[],
        objs:{}
      }
    },
    methods: {
      getsrc() {
        var fs = file.files[0];
        this.src = fs.name;
        console.log(fs);
      },
      uploadfn() {
        this.$axios.post('http://localhost/lancomephp/upload.php', qs.stringify({
          'type': this.type,
          'id': this.id,
          'name': this.name,
          'des': this.des,
          'price': this.price,
          'src': 'http://localhost/lancomeimgs/' + this.src
        })).then(res => {
          console.log(res);
          if(res.data=='#0'){
            alert('商品上架成功');
          }
        });
      },
    }
  }
</script>

<style scoped>
  .types{
    width: 100%;
    display: flex;
    height: 100%;
  }
  .select_user,.select_goods{
    width: 50%;
    text-align: center;
    line-height: 50px;
    border-bottom: 2px solid #8A2BE2;
    color: black;
    text-decoration: none;
    font-size: 22px;
  }
  .select_goods{
    background: #6495ED;
  }
  /* 用户管理 */
  .operateHead{
    width:100%;
    height: 30px;
    display: flex;
  }
  .operateHead div{
    width: 23%;
    line-height: 30px;
    border-bottom: 1px solid;
    background:lightgray;
    border-left: 1px solid;
    text-align: center;
  }
  .users{
    width: 80%;
    height: 30px;
    display: none;
  }
  .user input{
    width: 23%;
    margin: 0;
    padding: 0;
    height: 25px;
    outline: none;
    border: none;
    border-bottom: 1px solid;
    border-left: 1px solid;
  }
  /* 商品信息录入 */
  .goods{
    width: 100%;
    margin: 20px auto;
    display: flex;
    flex-flow: wrap;
  }
  .operate_add{
    width: 30%;
    margin: 0 50px;
  }
  .addG{
    width: 150px;
    height: 25px;
    background: green;
    color: white;
  }
  #photo{
    margin-left: 10px;
  }
  .goodsArea{
    width: 15%;
    background: white;
    text-align: right;
    padding:0 30px;
    border: 1px solid;
    margin: 10px 5px;
  }
  #imgG{
    width: 90%;
    margin: 5%;
    min-height: 175px;
    border: 1px solid;
  }
  .goodsArea img{
    width: 100%;
  }
  .goodsArea input{
    width: 49%;
    height:30px;
    margin: 5px auto;
    outline: none;
    border: 1px solid;
  }
  #operates{
    width: 100%;
    display: flex;
    flex-flow: nowrap;
    justify-content: space-between;
  }
  #operates input{
    width:25%;
    margin: 2px;
    border: none;
  }
  .operate_add input{
    outline: none;
    width: 55%;
  }
  form{
    width:18%;
    border: 1px solid;
    margin: 0 auto;
  }
  .imgArea{
    width: 80%;
    height: 100px;
    border: 1px solid;
  }
  .wrap{
    width: 100%;
    display: flex;
    flex-flow: wrap;
  }
</style>
