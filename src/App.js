import React, { useEffect, useState } from "react";
import {Container} from 'react-bootstrap';
import NavBar from "./components/NavBar";
import MoviesContainer from "./components/moviesContainer";
import axios from './../node_modules/axios/lib/axios';
import MoviesDeatails from "./components/moviesDeatails";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getAllMovie } from "./redux/actions/movieAction";

function App() {
 

  // const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(getAllMovie())
  // },[])

  // const dataMovies = useSelector((state) => state.movies)

  // useEffect(()=>{
  //   setMovies(dataMovies)
  // },[dataMovies])

  // const getAllMovies = async ()=>{
  //   const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7b959cc85d45dd410d7b76297592d11c&language=en-US')
  //   setMovies(res.data.results)
  //   setPageNumber(res.data.total_pages)
  // }

  // useEffect(()=>{
  //   getAllMovies()
  // }, [])



  return (
    <div className="font">
      <NavBar/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <MoviesContainer/>}/>
            <Route path="/movie/:id" element={<MoviesDeatails/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
