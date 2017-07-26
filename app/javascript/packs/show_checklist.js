import Vue from 'vue/dist/vue.js'
import App from './app.vue'
import sweetalert from 'sweetalert';

document.addEventListener('DOMContentLoaded', () => {
  var cked = new Vue({
    el: '#mark',
    data: {
      checked: false
    },
    watch: {
      'checked': function() {
        if (this.$data.checked) {
          swal("Good job!", "You completed this checklist!", "success")
        }
      }
    }
  })
})
