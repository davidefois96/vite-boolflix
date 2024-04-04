<script>
  export default {
    
    props:{
      cardObject: Object


    }
  }
</script>

<template>
  <div class="col my-3">
    <div class="card">
  <div class="card-body">
    
    
    <h5 class="card-title">{{cardObject.title || cardObject.name }}</h5>

    <h6 class="card-subtitle mb-2 text-body-secondary">{{ cardObject.original_title || cardObject.original_name }}</h6>
    
    <p class="card-text">{{cardObject.original_language  }}</p>

    <p class="card-text">{{cardObject.vote_average  }}</p>

   
  </div>
</div>

  </div>
</template>



<style lang="scss" scoped>

</style>