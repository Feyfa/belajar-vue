import { defineStore } from "pinia";

// 'todo' itu adalah sebuah id, tidak boleh sama
export const useTodoStore = defineStore('todo', {
  // state itu mirip seperti data() {} jika menggunakan createApp
  state: () => ({ count: 5, name: 'Eduardo' }),

  // getters itu mirip seperti computed: {} jika menggunakan createApp
  getters: {
    doubleCount: (state) => state.count * 2,
  },

  // actions itu mirip seperti methods: {} jika menggunakan createApp
  actions: {
    increment() {
      this.count++;
    }
  }
});