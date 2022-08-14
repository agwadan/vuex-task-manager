//import axios from "axios";

// STATE
const state = {
  todos: [
    {
      id: 1,
      title: 'To Do One'
    },
    {
      id: 2,
      title: 'To Do Two'
    }
  ]
}

// GETTERS
const getters = {
  allTodos: (state) => state.todos
}

//ACTIONS
const actions = {

}

//MUTATIONS
const mutations = {

}

export default {
  state, getters, actions, mutations
}