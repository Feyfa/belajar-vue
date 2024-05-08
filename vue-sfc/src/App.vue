<template>
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
</template>

<!-- menggunakan teknik Option API -->
<script>
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
</script>


<!-- menggunakan teknik Composition API -->
<!-- <script setup>
  import Student from './components/Student.vue';
</script> -->