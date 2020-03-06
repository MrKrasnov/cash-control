import Vue from 'vue'
import App from './App.vue'
import dateFilter from './filters/date.filter';
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/fonts/FontStyle/stylesheet.css';

Vue.config.productionTip = false

Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
