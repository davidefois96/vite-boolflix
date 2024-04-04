<script>
import {store} from '../assets/data/store.js'
  export default {
    data() {
      return {
        store
      }
    },
    
  }
</script>

<template>
  <div class="d-flex justify-content-between p-3 bg-black">

    <h1 class="text-danger ">BOOLFLIX</h1>


    <div class="d-flex justify-content-center align-items-center ">
      
      <input class=" me-2 " type="text" v-model.trim="store.apiParams.query">
      <button @click="$emit('search')" type="button" class="btn btn-success">Search</button>


    </div>

    
    



  </div>
</template>



<style lang="scss" scoped>

</style>