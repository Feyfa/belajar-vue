<template>
  <h1>Ini Adalah Halaman User</h1>
  
  <h2>List User</h2>

  <ul>
    <li v-for="user in users">
      <RouterLink :to="`/user/${user.name}`">{{ user.fullName }}</RouterLink>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        users: [
          { name: 'meg', fullName: 'Meg Hui' },
          { name: 'ben', fullName: 'Ben Aur' },
          { name: 'greg', fullName: 'Greg Cuy' },
        ]
      }
    }
  }
</script> 