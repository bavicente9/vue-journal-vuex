<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>

  <h1>Hola Mundo </h1>
  <button @click="goToDaybook" class="btn btn-primary">daybook </button>
  <button @click="goToDaybook" class="btn btn-secondary">button </button>
  <button @click="goToDaybook" class="btn btn-success">button </button>
</template>

<script>
export default {
  methods:{
    goToDaybook(){
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>
