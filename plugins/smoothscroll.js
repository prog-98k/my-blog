import Vue from 'vue'
import smoothscroll from 'smoothscroll-polyfill'

Vue.prototype.$smoothScrollInit = () => smoothscroll.polyfill()
