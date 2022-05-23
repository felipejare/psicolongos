<script>
import { RouterLink, RouterView } from "vue-router";

export default{
  components:{RouterLink, RouterView,}
}

</script>

<template>
  <RouterLink to="navbar">Home</RouterLink>
  <RouterLink to="saas">Login</RouterLink>

  <RouterView />
</template>

<style></style>