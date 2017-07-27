import Vue from 'vue/dist/vue.js'
import App from './app.vue'
import KonamiCode from 'vue-konami-code'
import sweetalert from 'sweetalert'
// import VueResource from 'vue-resource'

// Vue.use(VueResource)
Vue.use(KonamiCode, {callback: function() {
  swal({
    title: "Konami Powers Ignite!",
    text: "It's a party!",
    imageUrl: "http://cultofthepartyparrot.com/parrots/hd/discoparrot.gif",
    showConfirmButton: false
  },
  function() {
    var styling = document.getElementById('colors').style,
    f = false,
    c1 = '#d78cff',
    c2 = '#88ff89',
    c3 = '#ff8cff',
    c4 = '#8bb5fe';

    setInterval(function() {
      styling.backgroundColor = f ? c2 : c1;
      styling.color = f ? c3 : c4;
      f = !f;
    }, 500);
  }());
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
