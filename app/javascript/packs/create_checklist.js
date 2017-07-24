import Vue from 'vue/dist/vue.js'
import App from './app.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

document.addEventListener('DOMContentLoaded', () => {
  Vue.http.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  var app = new Vue({
    el: '#app',
    data: {
      items_attributes: [],
      newStep: {step: ''},
      title: 'Title'
    },
    methods: {
      addNewStep(newStep) {
        this.items_attributes.push(newStep)
        this.newStep = {step: ''}
      },
      deleteStep(item) {
        this.items_attributes.splice(item, 1)
      },
      saveChecklist() {
        // TODO: Disable all buttons on form
        console.log("Save checklist");
        // Docs for $http -> https://github.com/pagekit/vue-resource
        this.$http.post('/checklists', { checklist: this.$data })
          .then(successResponse => {
            console.log(successResponse.body._id.$oid)
            window.location = "/checklists/" + successResponse.body._id.$oid
          }, errorResponse => {
            // TODO: Handle error
          })
      }
    }
  })
})
