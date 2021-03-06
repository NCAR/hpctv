import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics';
import Autoplay from './Autoplay';

Vue.config.productionTip = false;

// global Autoplay logic
Vue.mixin(Autoplay);

Vue.use(VueAnalytics, {
  id: 'UA-134131143-1',
  router,
  debug: {
    enabled: false,
    sendHitTask: true
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
