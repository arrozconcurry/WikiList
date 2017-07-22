import Vue from 'vue/dist/vue.js'
import App from './app.vue'

document.addEventListener('DOMContentLoaded', () => {
  var app = new Vue({
    el: '#app',
    data: {
      steps: [],
      newStep: {step: ''},
      titling: 'Title'
    },
    methods: {
      addNewStep(newStep) {
        this.steps.push(newStep)
        this.newStep = {step: ''}
      },
      deleteStep(step) {
        this.steps.splice(step, 1)
      }
    }
  })
})
