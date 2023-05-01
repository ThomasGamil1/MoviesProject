import axios from 'axios';
import { AllMovies, movieApi } from './../types/moviesType';


export const getAllMovie=()=>{

    return async (dispatch)=>{

        const res =await axios.get(movieApi)
        
        dispatch( {type: AllMovies, data: res.data.results, pages: res.data.total_pages})
    }
}

export const getMovieSearch= (word) =>{

    return async (dispatch)=>{
        
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7b959cc85d45dd410d7b76297592d11c&query=${word}&language=en-US`)

        dispatch({type: AllMovies, data: res.data.results, pages: res.data.total_pages})
    }
}



export const getMoviePage= (page) =>{

    return async (dispatch)=>{

        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7b959cc85d45dd410d7b76297592d11c&language=en-US&page=${page}`)

        dispatch({type: AllMovies, data: res.data.results, pages: res.data.total_pages})
    }
}

