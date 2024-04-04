<script>

import {store} from './assets/data/store.js'
import Main from './components/Main.vue'
import Header from './components/Header.vue'


  export default {

    
    components:{

      Main,
      Header



    },
    data() {
      return {
        store
      }
    },
    methods: {
      
    },
    
    computed:{



    },
    mounted() {
      
    },


  }
</script>

<template>
  <div>

    <Header/>
    <Main />

  </div>
</template>



<style lang="scss" >

@use './assets/scss/main.scss';

</style>