<template>
    <div class="goodsfixed">
      <div class="wrap" v-for="x in infosarr">
        <div class="operate_add">
          <!--上传文件-->
          <div class="imgbox">
            <img src="" alt="">
          </div>
          <input type="file" name="file" id="file"><br>
          商品类型：<input type="post" name="type" class="type inp" v-model="x.type"><br>
          商品编号：<input type="post" name="id" class="bh inp" v-model="x.id"><br>
          商品名称：<input type="post" name="name" class="mc inp" v-model="x.name"><br>
          商品介绍：<input type="post" name="des" class="jes inp" v-model="x.des"><br>
          商品价格：<input type="post" name="price" class="jg inp" v-model="x.price"><br>
          <input type="button" value="修改" name="upload" id="fixed">
          <input type="button" value="删除" name="upload" id="delete">
        </div>
      </div>
    </div>
</template>

<script>
  import qs from 'qs'
    export default {
      name: "goodsfixed",
      data(){
        return{
          infosarr:[],
          type:'',
          id:'',
          name:'',
          des:'',
          price:'',
          src:''
        }
      },
      methods:{
      },
      created(){
        this.$axios.post('http://localhost/lancomephp/getinfo.php').then(res=>{
          // console.log(res);
          console.log(res.data);
          this.infosarr=res.data;
        });
      },
      updated(){
        // 删除
        let dels = document.querySelectorAll('#delete');
        for(let x=0;x<dels.length;x++){
          var _this = this;
          dels[x].onclick=function(){
            _this.id=_this.infosarr[x].id;
            var sure = confirm("确定要删除该商品吗？");
            if(sure){
              //  删除当前页面渲染元素
              // _this.parentNode.remove();
              _this.$axios.post('http://localhost/lancomephp/delete.php',qs.stringify({'id': _this.id})).then(res=>{
                console.log(res);
                if(res.data=="#0"){
                  alert("删除成功");
                }else if(res.data=='#1'){
                  alert("删除失败");
                }
              })

            }
          }
        }
        // 修改
        let fix = document.querySelectorAll('#fixed');
        for(let x=0;x<fix.length;x++){
          var _this = this;
          fix[x].onclick=function(){
            _this.id=_this.infosarr[x].id;
            _this.name=_this.infosarr[x].name;
            _this.des=_this.infosarr[x].des;
            _this.price=_this.infosarr[x].price;
            _this.src=_this.infosarr[x].src;
            console.log(_this.id,_this.name,_this.src);
            var sure = confirm("确定要修改该商品吗？");
            if(sure){
              //  修改当前页面渲染元素
              // _this.parentNode.remove();
              _this.$axios.post('http://localhost/lancomephp/fixed.php',qs.stringify({
                'type': _this.type,
                'id': _this.id,
                'name': _this.name,
                'des': _this.des,
                'price': _this.price,
                'src': _this.src
              })).then(res=>{
                console.log(res);
                if(res.data=="#0"){
                  alert("修改成功");
                }else if(res.data=='#1'){
                  alert("修改失败");
                }
              })

            }
          }
        }
      }
    }
</script>

<style scoped>
  .goodsfixed{
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }
  .operate_add{
    border: 1px solid #000;
    padding: 20px;
    margin: 20px 0;
  }
  .operate_add .inp{
    width: 60%;
    margin: 5px 0;
  }
  .imgbox{
    width: 70%;
    /*height: ;*/
    border: 1px solid #000;
  }
  .imgbox img{
    width: 100%;
  }
  #fixed,#delete{
    width: 40%;
    height: 40px;
    margin: 0 10px;
    outline: none;
    background: #000;
    color: #fff;
    border: none;

  }

</style>
