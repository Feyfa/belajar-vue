<template>
    <!-- >slot></slot> digunakan untuk menampilkan hasil dari child elemen <Student></Student/> -->
    <!-- misal seperti ini <Student><strong>Halo Semuanya</strong></Student> -->
    <!-- maka elemen dari <strong>Halo Semuanya</strong> akan masuk ke dalam slot -->
    <!-- tetapi jika jika bentuknya hanya seperti ini <Student /> saja, maka menggunakan value default nya -->
    <slot>INI ADALAH SLOT DEFAULT KARENA PARENT KOMPONEN TIDAK MEMBERIKAN DATA</slot> <br>
    ini adalah data dari siswa bernama {{ studentName }} <button @click="showData">Show Detail</button> <br>
</template>

<script>
    export default {
        // props digunakann untuk mendapatkan value ketika elemen <Student studentName="Jidan" /> digunakan
        // dengan cara seperti itu lah props digunakan
        props: {
            studentName: String
        },

        // emit itu intinya kita mempunya data di child, dalam hal ini adalah Student.vue, lalu akan dikirimkan ke parent nya yang menggunakan elemen <Student/>
        // jadi saya ingin mengirimkan value dari child yaitu studentName yang dikirimkan ke parentnya/luar
        emits: ['response'],
        methods: {
            showData() {
                this.$emit('response', this.studentName);
            }
        },
    }
</script>