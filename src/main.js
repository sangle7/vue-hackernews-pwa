// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Spinner from 'vue-simple-spinner';
import App from './App';
import router from './router';
import Navbar from './components/Navbar';

Vue.config.productionTip = false;

Vue.component('my-navbar', {
  template: '<Navbar/>',
  components: { Navbar },
});
Vue.component('spin', Spinner);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
