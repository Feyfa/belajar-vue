import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todoList: [
      { name: 'Belajar HTML', isDone: false },
      { name: 'Belajar CSS', isDone: false },
      { name: 'Belajar Javascript', isDone: false },
      { name: 'Belajar PHP', isDone: false },
    ]
  }),

  getters: {
    showAll(state) {
      return state.todoList
    },
    doneOnly(state) {
      return state.todoList.filter(item => item.isDone);
    },
    undoneOnly(state) {
      return state.todoList.filter(item => !item.isDone);
    }
  },
  
  actions: {
    toggleDone(name) {
      // jika item.name sama dengan name, maka ubah isDone nya itu kebalikan dari nilai awalnya, true menjadi false, false menjadi true
      // jika item.nam tidak sama dengan name, maka kembalikan object biasanya 
      this.todoList = this.todoList.map((item) => (item.name === name) ? {...item, isDone: !item.isDone } : {...item} );
    },
    addTodo(newTodo) {
      // some() itu ketika satu data kondisinya terpenuhi, maka akan berhenti melakukan eksekusi berikutnya
      let nameExists = this.todoList.some(item => item.name.trim().toLowerCase() === newTodo.trim().toLowerCase());

      if(!nameExists) {
        this.todoList.push({ name: newTodo, isDone: false });
      }
      else 
        alert('Todo List Sudah Ada');
    }
  }
})