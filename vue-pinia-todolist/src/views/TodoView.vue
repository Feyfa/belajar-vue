<template>
  <h1>Ini Adalah Halaman TodoList</h1>

  <form @submit.prevent="todoStore.addTodo(newTodo)">
    <input type="text" v-model="newTodo" placeholder="add new todo ...">
    <button type="submit">add</button>
  </form>

  <div>
    <h2>My Todo List</h2>
  </div>

  <div class="getters-button">
    <button @click="show = 'all'">Show All</button>
    <button @click="show = 'done only'">Done Only</button>
    <button @click="show = 'un done only'">UnDone Only</button>
  </div>

  <!-- ini show all todolist -->
  <div v-show="show === 'all'">
    <ul>
      <li v-for="list in todoStore.showAll">
        <span :class="{ 'done': list.isDone }">{{ list.name }} {{ index }}</span>
        <button v-if="!list.isDone" @click="todoStore.toggleDone(list.name)">set as done</button>
        <button v-if="list.isDone" @click="todoStore.toggleDone(list.name)">set as undone</button>
      </li>
    </ul>
  </div>

  <!-- ini done only todolist -->
  <div v-show="show === 'done only'">
    <ul>
      <li v-for="list in todoStore.doneOnly">
        <span :class="{ 'done': list.isDone }">{{ list.name }} {{ index }}</span>
        <button v-if="!list.isDone" @click="todoStore.toggleDone(list.name)">set as done</button>
        <button v-if="list.isDone" @click="todoStore.toggleDone(list.name)">set as undone</button>
      </li>
    </ul>
  </div>

  <!-- ini undone only todolist -->
  <div v-show="show === 'un done only'">
    <ul>
      <li v-for="list in todoStore.undoneOnly">
        <span :class="{ 'done': list.isDone }">{{ list.name }} {{ index }}</span>
        <button v-if="!list.isDone" @click="todoStore.toggleDone(list.name)">set as done</button>
        <button v-if="list.isDone" @click="todoStore.toggleDone(list.name)">set as undone</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 50%;
  }
  
  form {
    width: 50%;
    padding: 10px;
    display: flex;
    box-sizing: border-box;
    gap: 10px
  }

  h2 {
    width: 50%;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
  }

  .getters-button {
    width: 50%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between
  }

  .getters-button button {
    padding: .5rem;
  }

  input {
    width: 80%;
    padding: .5rem
  } 
  button[type="submit"] {
    width: 20%;
    padding: .5rem
  }

  .done {
    color: red;
    text-decoration: line-through;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #777;
    margin: 10px;
    padding: 10px;
    border-radius: .3rem;
    box-shadow: 2px 2px 2px rgba(0,0,0,.1);
  }
</style>

<script>
  import { useTodoStore } from '@/stores/todoStore';

  export default {
    setup() {
      const todoStore = useTodoStore();

      return { todoStore }
    },
    data() {
      return {
        newTodo: '',
        show: 'all',
      }
    }
  }
</script> 