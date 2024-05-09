<template>
    <!-- ini digunakan untuk melakukan perpindahan router, sama seperti <a> -->
    <RouterLink to="/">Dashboaard</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/user">User</RouterLink>
</template>

<!-- scoped artinya css ini hanya dikenali di file ini saja, diluar file ini maka tidak dikenali -->
<style scoped>
    a {
        margin-right: 1rem;
        text-decoration: none;
        color: rgb(21, 21, 245);
    }
    a:hover {
        color: red
    }
</style>