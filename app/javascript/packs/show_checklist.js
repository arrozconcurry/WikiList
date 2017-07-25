import Vue from 'vue/dist/vue.js'
import App from './app.vue'
import sweetalert from 'sweetalert';

document.addEventListener('DOMContentLoaded', () => {
  var checkmark = new Vue({
    el: '#checking',
    methods: {
      animationMessage() {
        if(allChecked) {
          sweetalert('Success!', 'Checklist completed!', 'success');
        }
      }
    }
  }
})
