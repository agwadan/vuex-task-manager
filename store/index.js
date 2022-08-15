//STATE
//------------
export const state = () => {
  tasks: []
}

//MUTATIONS
//------------
export const mutations = {
  ADD_TASK(state, task) {//------------------------------------------------------ takes the state and the task to be added.
    state.tasks = [{ content: task, done: false }, ...state.tasks]; //----------- use spread operator to keep what is already in state and add new things
  },

  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },

  TOGGLE_TASK(state, task) {
    task.done = !task.done;
  }
}