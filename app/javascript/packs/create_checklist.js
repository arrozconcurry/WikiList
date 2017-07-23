import Vue from 'vue/dist/vue.js'
import App from './app.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

document.addEventListener('DOMContentLoaded', () => {
  Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  var app = new Vue({
    el: '#app',
    data: {
      items: [],
      newStep: {step: ''},
      title: 'Title'
    },
    methods: {
      addNewStep(newStep) {
        this.items.push(newStep)
        this.newStep = {step: ''}
      },
      deleteStep(item) {
        this.items.splice(item, 1)
      },
      saveChecklist() {
        // TODO: Disable all buttons on form
        console.log("Save checklist");
        // Docs for $http -> https://github.com/pagekit/vue-resource
        this.$http.post('/checklists', { checklist: this.$data })
          .then(successResponse => {
            // TODO: Redirect to checklist's show page
            console.log(successResponse.body._id.$oid)
          }, errorResponse => {
            // TODO: Handle error
          })
      }
    }
  })
})
