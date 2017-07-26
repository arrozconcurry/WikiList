import Vue from 'vue/dist/vue.js'
import App from './app.vue'
import KonamiCode from 'vue-konami-code'
// import VueResource from 'vue-resource'

// Vue.use(VueResource)
Vue.use(KonamiCode, {callback: function() {
  alert('Snake? Snake!? Snaaaaake!')
}})

// document.addEventListener('DOMContentLoaded', () => {
  // Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  // var app = new Vue({
    // TODO
    // updateChecklist() {
    //   console.log("Update checklist");
    //   this.$http.put('/checklists/:id', { checklist: this.$data })
    //     .then(successResponse => {
    //       // TODO: Redirect to checklist's show page
    //       console.log(successResponse.body._id.$oid)
    //       window.location = "/checklists/" + successResponse.body._id.$oid
    //     }, errorResponse => {
    //       // TODO: Handle error
    //     })
    // }
  // })
// })
