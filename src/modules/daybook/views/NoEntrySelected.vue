<template>
  <div class="d-flex justify-content-center">
      <h1 class="align-self-center" > No hay nada seleccionado </h1>
  </div>

  <float-action-button/>
</template>

<script>
import FloatActionButton from '../components/FloatActionButton.vue'
export default {
  components:{
    FloatActionButton

  }  
}
</script>

<style lang="scss" scoped>
    div{
        height:100%
    }
</style>