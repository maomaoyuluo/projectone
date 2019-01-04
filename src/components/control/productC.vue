<template>
    <div class="control">
      <router-link :to="{name:'homepage'}">返回主页</router-link>
      <Layout>
        <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
          <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
            <MenuItem name="1-1" :to="{name:'users'}">
              <span>用户信息管理</span>
            </MenuItem>
            <MenuItem name="1-2" :to="{name:'goods'}">
              <span>商品上架管理</span>
            </MenuItem>
            <MenuItem name="1-3" :to="{name:'goodsfixed'}">
              <span>商品信息管理</span>
            </MenuItem>
          </Menu>
          <div slot="trigger"></div>
        </Sider>
        <Layout>
          <Header class="layout-header-bar">
            <h4>管理员：{{user}}登录</h4>
          </Header>
          <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </div>
</template>

<script>
    export default {
      name: "productC",
      data(){
        return{
          isCollapsed:false,
          user:''
        }
      },
      computed: {
        menuitemClasses: function () {
        }
      },
      mounted(){
        this.user = this.$route.query.obj;
      }
    }
</script>

<style scoped>
  .control{
    width: 80%;
    height: 100%;
    margin: 100px auto;
  }
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size:22px;
  }
</style>
