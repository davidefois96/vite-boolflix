<script>

import {store} from './assets/data/store.js'
import Header from './components/Header.vue'
import CardsContainer from './components/CardsContainer.vue'
import axios from 'axios'


  export default {

    
    components:{

      Header,
      CardsContainer



    },
    data() {
      return {
        store,
        
      }
    },
    methods: {

      
      getApi(type){

        
        axios.get( store.api + type, {

          
          params:store.apiParams


        } )
        .then(res=> {

          console.log(res.data);
          store[type]=res.data.results
        })




      },
      
      search(){

        this.getApi('movie'),
        this.getApi('tv')


      }
      
    },
    
    computed:{
      



    },
    mounted() {

      this.search()

      
    },


  }
</script>

<template>
  <div>

    <Header
    @search="search"
    
    />
    <CardsContainer type="movie" v-if="store.movie.length>0"/>
    <CardsContainer type="tv" v-if="store.tv.length>0"/>

  </div>
</template>



<style lang="scss" >

@use './assets/scss/main.scss';


*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;



}
</style>