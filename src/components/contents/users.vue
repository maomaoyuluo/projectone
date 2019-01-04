<template>
    <div class="types">
      <div class="users">
        <!-- 表头 -->
        <div class="operateHead">
          <div>账号</div>
          <div>屏蔽账号</div>
          <div>解除屏蔽</div>
          <div>删除账号</div>
        </div>
        <div v-for="x in usersArr">
          <div class="contents">
            <input type="post" class="names" name="id" v-model="x.id">
            <input type="text" placeholder="屏蔽账号" class="shield">
            <input type="text" placeholder="解除屏蔽" class="unshield">
            <input type="text" placeholder="删除账号" class="deleteName">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "users",
      data(){
        return{
          usersArr:[]
        }
      },
      methods:{

      },
      created(){
        this.$axios.post('http://localhost/lancomephp/getusers.php').then(res=>{
          console.log(res.data);
          this.usersArr=res.data;
        });
      }

    }
</script>

<style scoped>
  .types{
    width: 100%;
    height: 100%;
    display: flex;
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
  /*.names{*/
    /*width:23%;*/
    /*border: 1px solid #ccc;*/
  /*}*/
  .contents input{
    width: 22%;
    margin-right:9px;
  }
</style>
