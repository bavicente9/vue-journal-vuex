<template>
  <div
  class='entry-container mb3 pointer p-2'
  @click="$router.push({name:'entry', params:{id:10}})"
  >
    <div class="entry-title d-flex">
        <span class="text-succes fs-5 fw-bold">julio </span>
        <span class="mx-1 fs-5">15 </span>
        <span class="mx-2 fw-light">2021, Jueves</span>
    </div>

    <div class="entry-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id veritatis quo libero dicta aliquam cum sequi maxime ea? Cupiditate, laboriosam magnam nostrum assumenda cum quae id vitae sed nemo obcaecati.
    </div>

  </div>

</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.entry-container{
    border-bottom:1px solid #2c3e50;
    transition:0.2 all ease-in;
    
    &:hover{
        background-color: lighten($color:grey, $amount:30);
    }

    .entry-description{
     font-size: 12px;   
    }
}

</style>