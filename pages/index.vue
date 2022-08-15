<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of tasks</p>

<!-- Input for adding a task -->
    <div class="create-new">
      <input 
      type="text"  
      v-model="newTask"
      placeholder="Add a new task"  
      @keypress.enter="addTask"
      />
      <!-- <input type="text" v-model="newTask" placeholder="Add a new task" @keypress.enter="addTask"> -->
      <button @click="addTask">Add</button>
    </div>

    <div class="tasks">
{{$store.state.tasks}}
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return { 
      newTask: ''
    }
  },

  methods: {
    addTask() {
      try {
        if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
      } catch (error) {
        console.log(error);
      }
      
    }
  }
}
</script>
