import Vue from 'vue/dist/vue.js'
import App from './app.vue'

document.addEventListener('DOMContentLoaded', () => {
  var app = new Vue({
    el: '#app',
    data: {
      todos: [],
      newTodo: {step: ''},
      titling: 'Title'
    },
    methods: {
      addNewTodo(newTodo) {
        this.todos.push(newTodo)
        this.newTodo = {step: ''}
      },
      deleteTodo(todo) {
        this.todos$remove(todo)
      }
    }
  })
})
