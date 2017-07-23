import Vue from 'vue/dist/vue.js'
import App from './app.vue'

document.addEventListener('DOMContentLoaded', () => {
  var app = new Vue({
    el: '#app',
    data: {
      items: [],
      newStep: {step: ''},
      titling: 'Title'
    },
    methods: {
      addNewStep(newStep) {
        this.items.push(newStep)
        // this.newStep = {step: ''}
      },
      deleteStep(item) {
        this.items.splice(item, 1)
      }
    }
  })
})
