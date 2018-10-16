import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use( Vuex )

const store = new Vuex.Store({
  state:{
    products: [
      {name: '鼠标', price: 10},
      {name: '键盘', price: 40},
      {name: '耳机', price: 60},
      {name: '显示屏', price: 110}
    ]
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
