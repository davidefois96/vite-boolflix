import { reactive } from "vue";

export const store = reactive({

  api:'https://api.themoviedb.org/3/search/',
  
  
  apiParams:{

    api_key:'2e8c5e487f5df8c8fd765054cff8e795',
    query:''


  },
  
  movie:[],
  tv:[]


 
});