import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store/index';
import 'vuetify/dist/vuetify.min.css';
// eslint-disable-next-line
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: 'fa',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
