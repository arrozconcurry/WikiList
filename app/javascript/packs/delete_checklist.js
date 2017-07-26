import Vue from 'vue/dist/vue.js'
import App from './app.vue'
import sweetalert from 'sweetalert'
// import VueResource from 'vue-resource'
//
// Vue.use(VueResource)

document.addEventListener('DOMContentLoaded', () => {
  var deleteList = new Vue({
    el: '#remove',
    methods: {
      deleteChecklist() {
        swal({
          title: "Are you sure?",
          text: "You will not be able to recover this checklist!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          closeOnConfirm: false
        },
        function(){
          swal("Deleted!", "This checklist has been deleted.", "error");
        });
      }
    }
  })
})
