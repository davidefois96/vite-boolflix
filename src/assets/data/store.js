import { reactive } from "vue";

export const store = reactive({

  apiMovies:'https://api.themoviedb.org/3/search/movie',
  api_key:'2e8c5e487f5df8c8fd765054cff8e795',
  
  apiParams:{
    query:''


  }
 
});