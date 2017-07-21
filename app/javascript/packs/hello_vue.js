/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> and
// <%= stylesheet_pack_tag 'hello_vue' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

// import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
import App from './app.vue'

document.addEventListener('DOMContentLoaded', () => {
  var vm = new Vue({
    el: '#vue-instance',
    data: {
      titling: 'Title'
    }
  })
  // document.body.appendChild(document.createElement('hello'))
  // const app = new Vue(App).$mount('hello')
  //
  // console.log(app)
})
