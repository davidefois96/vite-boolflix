<script>


  export default {
    
    props:{
      cardObject: Object


    },
    data() {
      return {

        

        

        
      }
    },
    methods: {

      fullStars(vote) { return Math.floor(vote / 2);},

      emptyStars(vote) {return Math.ceil(5 - (vote / 2))}
      
      
    },
   

    
  }
</script>

<template>
  <div class="col my-3">

    <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img :src="`https://image.tmdb.org/t/p/w300${cardObject.poster_path}`" alt="Avatar" >
          </div>
          
          <div class="flip-card-back p-3 ">
            <h4 class="card-title mb-2 ">{{cardObject.title || cardObject.name }}</h4>
            <h6 class="card-subtitle mb-2 ">{{ cardObject.original_title || cardObject.original_name }}</h6>
            <img class="flag mb-2 " v-if="cardObject.original_language=='en'" src="/public/en.png" alt="en">
            <img class="flag mb-2 " v-if="cardObject.original_language=='it'" src="/public/it.png" alt="it">

            
            <p  v-if="cardObject.original_language!='it'&&cardObject.original_language!='en'"  class="card-text mb-2 ">{{cardObject.original_language  }}</p>

            
            <i v-for="star in fullStars(cardObject.vote_average)" :key="star" class="fa-solid fa-star text-white"></i>
            <i v-for="star in emptyStars(cardObject.vote_average)" :key="star" class="fa-regular fa-star"></i>
            
            

            <!-- <p class="card-text">{{cardObject.vote_average  }}</p> -->
          </div>
        </div>
    </div> 
    
  </div>
</template>



<style lang="scss" scoped>

.flip-card {
  
  background-color: transparent;
  width: 300px;
 
  
  
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  
  transform-style: preserve-3d;
  transition: transform 0.8s;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  
  width: 100%;
  height: 100%;

  backface-visibility: hidden;

}

/* Style the front side (fallback if image is missing) */
.flip-card-front {

  color: black;

}

/* Style the back side */
.flip-card-back {
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  color: white;
  transform: rotateY(180deg);
}


.flag{
height: 8%;

}

.img{

 object-fit: cover;


}



</style>