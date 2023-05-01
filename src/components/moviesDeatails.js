import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const MoviesDeatails = () => {
  const [movie, setMovie] = useState([])
  
  const param = useParams()

  const MovieDatiles =async ()=>{
    const res =await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=7b959cc85d45dd410d7b76297592d11c&language=en-US`)
    setMovie(res.data)
  }

  useEffect(()=>{
    MovieDatiles()
  }, [])

//  const  Type  = [...new Set(movie.genres.map((type)=>type.name)),]

  return (
    <div>
      <Row className='justify-content-center'>
        <Col md='12' sm='12' xs='12' className='mt-4'>
        <div className='card-details d-flex align-items-center'>
          <img className='img-movie w-30' src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt='photo'/>
          <div className='justify-content-center text-center mx-auto'>
            <p className='card-text-details border-bottom'>
              Movie Name : {movie.title}
            </p>
            <p className='card-text-details border-bottom'>
              Movie Date : {movie.release_date}
            </p>
            <p className='card-text-details border-bottom'>
              Movie Language  : {movie.original_language}
            </p>
            <p className='card-text-details border-bottom'>
              Rate : {movie.vote_average}
            </p>
            {/* <p className='card-text-details border-bottom'>
              Type : {Type}
            </p> */}
          </div>
        </div>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col md='12' sm='12' xs='12' className='mt-1'>
        <div className='card-story d-flex flex-column align-items-start' >
          <div className='text-end p-4'>
            <h1 className='card-text-title border-bottom'>story:</h1>
          </div>
          <div className=' px-2'>
            <p className='card-text-story'>{movie.overview}</p>
          </div>
        </div>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col md='10' xs='12' sm='12' className='mt-2 d-flex justify-content-center'>
          <Link to='/'>
          <button style={{backgroundColor: '#b45b35', border: 'none'}} className='btn btn-primary m-2'>
            Back
          </button>
          </Link>
          <a href={movie.homepage}>
          <button style={{backgroundColor: '#b45b35', border: 'none'}} className='btn btn-primary m-2'>
            Watch Movie
          </button>
          </a>
          <button style={{backgroundColor: '#b45b35', border: 'none'}} className='btn btn-primary m-2'>
            Download
          </button>
        </Col>
      </Row>
    </div>
  )
}

export default MoviesDeatails

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
