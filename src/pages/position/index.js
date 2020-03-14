import App from './position.vue'
import Vue from 'vue'

const app = new Vue(App)

app.$mount()

export default {
  config: {
    navigationBarBackgroundColor: '#2E60FE',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: '定位选择',
    backgroundColor: '#2E60FE'
  }
}