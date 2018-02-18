import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App :parametro="parametro" />',
  data: {
    parametro: null
  },
  beforeMount: function () {
    this.parametro = this.$el.attributes['parametro'].value;
  }
});
