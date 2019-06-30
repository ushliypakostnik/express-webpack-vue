import Vue from 'vue/dist/vue';

import Favicon from './images/favicon.jpg'; // eslint-disable-line no-unused-vars

import './styles/_stylebase.scss';
// import someimage from './images/layout/someimagе.png';
// import somescript from './js/somescript';

import app from './components/app.vue';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { app },
  template: '<app/>',
});

if (module.hot) {
  module.hot.accept();
}
