<template>
  <h1>Ini Adalah Halaman Todo List</h1>

  {{ todoStore.count }}
  <br><br>
  
  <button @click="todoStore.increment">add</button>
  <br><br>

  {{ todoStore.doubleCount }}
  <br><br>
</template>

<!-- menggunakan teknik Composition API -->
<script>
  import { useTodoStore } from '../stores/todoStore.js';

  export default {
    setup() {
      const todoStore = useTodoStore()

      return { todoStore }  
    },
  }
</script>