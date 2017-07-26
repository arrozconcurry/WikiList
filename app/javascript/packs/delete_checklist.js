import Vue from 'vue/dist/vue.js'
import App from './app.vue'
import sweetalert from 'sweetalert'
import VueResource from 'vue-resource'

Vue.use(VueResource)

document.addEventListener('DOMContentLoaded', () => {
  Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  var deleteList = new Vue({
    el: '#remove',
    methods: {
      deleteWarning(deleteUrl) {
        var instance = this;

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
          instance.$http.delete(deleteUrl).then(successResponse => {
            swal({
              title: "Deleted!",
              text: "This checklist has been deleted.",
              type: "error"
            }, function() {
              window.location.reload();
            });

          }, errorResponse => {
            // TODO: Error Handling
            console.log("Hmm, what happened...");
          })
        })
      }
    }
  })
})
