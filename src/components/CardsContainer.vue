<script>
import Card from './Card.vue';
import {store} from '../assets/data/store.js'

  export default {

    
    props:{
      type: String


    },
    
    components:{
      Card


    },
    data() {
      return {
        store
      }
    },
    
    computed:{

      
      title(){

         return  this.type == 'movie' ? 'Film' : 'Serie tv'
      }

    }

  }
</script>

<template>
  <div class="container text-center my-5">

    
    
    <h2>{{ title }}</h2>

    <div class="row row-cols-4">

      <Card v-for="card in store[type]" :key="card.id" 
      :cardObject=card
      />


    </div>


    

  </div>
</template>



<style lang="scss" scoped>

</style>