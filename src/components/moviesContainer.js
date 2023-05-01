import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import MoviesBox from './moviesBox'
import PaginationComponent from './pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovie } from '../redux/actions/movieAction'

const MoviesContainer = ({ getPage, PageNumber}) => {

  const [movies, setMovies] = useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllMovie())
  },[])

  const dataMovies = useSelector((state) => state.movies)

  useEffect(()=>{
    setMovies(dataMovies)
  },[dataMovies])

  return (
    <Row className='mt-3'>
    {
      movies.length>=1 ? (movies.map((mov) =>{
        return (
            <MoviesBox key={mov.id} mov={mov}/>
            )
          })) : <h1>movie not found </h1>
        }
        {movies.length>=1 ? (<PaginationComponent getPage={getPage} PageNumber={PageNumber}/>) : null}
        
      </Row> 
  )
}

export default MoviesContainer





// https://api.themoviedb.org/3/movie/popular?api_key=7b959cc85d45dd410d7b76297592d11c&language=en-US&page=1