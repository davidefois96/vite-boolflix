<script>
import Card from './Card.vue';
import {store} from '../assets/data/store.js'

  export default {

    
    components:{
      Card


    },
    data() {
      return {
        store
      }
    },
  }
</script>

<template>
  <div>

    <Card />

  </div>
</template>



<style lang="scss" scoped>

</style>