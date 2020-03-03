import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/error/img-error.jpg',
  loading: '/loading/1.svg',
  attempt: 1
})
