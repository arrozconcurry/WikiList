import Vue from 'vue/dist/vue.js'
import App from './app.vue'
import sweetalert from 'sweetalert'

document.addEventListener('DOMContentLoaded', () => {
  var cked = new Vue({
    el: '#mark',
    data: {
      totalSteps: $("#mark").find("input[type=checkbox]").length,
      checkedSteps: []
    },
    watch: {
      'checkedSteps': function() {
        if (this.$data.checkedSteps.length == this.$data.totalSteps) {
          swal("Good job!", "You completed this checklist!", "success")
        }
      }
    }
  })
})
