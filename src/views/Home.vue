<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Principal msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Principal from '../components/Principal.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Principal
}
}
</script>
