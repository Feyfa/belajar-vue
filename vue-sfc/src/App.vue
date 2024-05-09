<!-- -------------------------------------------------------------------------- -->
<!-- <template>
  <Student @response="showData" studentName="Andy">
    ini adalah nilai slot dari parent
  </Student> 
  <br>
  
  <Student @response="showData" studentName="Budi">
    <strong>ini adalah nilai slot dari parent</strong>
  </Student> 
  <br>
  
  <Student @response="showData" studentName="Ani">
    
  </Student>
  
  <p>
    student yang dipilih adalah {{ selectedStudent }}
  </p>
</template> -->

<!-- menggunakan teknik Option API -->
<!-- <script>
  import Student from './components/Student.vue';
  
  export default {
    components : {
      Student
    },
    data() {
      return {
        selectedStudent: ''
      }
    },
    methods: {
      showData(whatever) {
        this.selectedStudent = whatever
      }
    },
  }
</script> -->


<!-- menggunakan teknik Composition API -->
<!-- <script setup>
  import Student from './components/Student.vue';
</script> -->
<!-- -------------------------------------------------------------------------- -->


















<!-- -------------------------------------------------------------------------- -->
<template>
  <div class="menu">
    <Navbar />
  </div>

  <!-- RouteView digunakan untuk menampilkan view bedasarkan router nya -->
  <div class="main">
    <RouterView />
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';

  export default {
    // component yang akan digunakan setelah di import, maka dimasukan ke dalam sini
    components: {
      Navbar
    }
  }
</script>

<style>
  body {
    margin: 0
  }
</style>

<style scoped>
  .menu {
    background-color: #ddd;
    line-height: 2;
    padding: .6rem
  }

  .main {
    padding: 10px
  }
</style>

<!-- -------------------------------------------------------------------------- -->