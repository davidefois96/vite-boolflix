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

  <main>
  

    <div class="container text-center py-5 text-white ">

      
      
      <h2>{{ title }}</h2>

      <div class="row row-cols-4">

        <Card v-for="card in store[type]" :key="card.id" 
        :cardObject=card
        />


      </div>


      

    </div>


  </main>

  
</template>



<style lang="scss" scoped>


main{background-color: #1f1f1f}


</style>