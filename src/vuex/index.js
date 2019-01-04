// 导入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 全局使用vuex
Vue.use(Vuex);
const state ={
  status:'',//用户登录状态
  count:0,//购物车商品数量
  shopCarShow:false,
  inf:false//购物车商品数量显示
};
const mutations = {
  status(state,payload){
    state.status=payload;
  },
  change(state){
    state.shopCarShow=true;
  },
  changere(state){
    state.shopCarShow=false;
  },
  inf(state){
    state.inf=true;
  },
  add(state,payload){
    state.count=payload;
  }
}
export default new Vuex.Store({
  state,
  mutations
})
