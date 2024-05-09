<template>
  <!-- $route.params.name digfunakan untuk mendapatkan parameter yang nama nya :name -->
  <!-- /user/:name -->
  <h1>Ini Adalah Halaman User Detail {{ $route.params.name }}</h1>
  <br>
  <RouterLink :to="`/user/${$route.params.name}/posts`">{{ $route.params.name }}'s Posts</RouterLink>
  <br>
  <RouterLink :to="`/user/${$route.params.name}/profile`">{{ $route.params.name }}'s Profile</RouterLink>
</template>