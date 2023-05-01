import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../images/logo.png'
import { getAllMovie, getMovieSearch } from '../redux/actions/movieAction'
import { useDispatch } from 'react-redux'

const NavBar = () => {

  
 const onSearch = (word)=>{
  search(word)
 }

 const dispatch = useDispatch()

 const search = async (word)=>{
  if(word ===''){
    dispatch(getAllMovie())
  }else{
  // setPageNumber(searchResult.data.total_pages)
  dispatch(getMovieSearch(word))
  }
}
   return (
    <div className='nav-style'>
      <Container>
        <Row className='p-2 d-flex justify-content-between'>
          <Col xs='2' lg='1'>
            <a href='/'>
              <img src={logo}  className='logo' alt='img Movie'/>
            </a>
          </Col>
          <Col xs='9' lg='8' className='d-flex align-items-center'>
            <div className='search '>
              <i class="fa fa-search"></i>
              <input onChange={(e)=> onSearch(e.target.value)} type='text' className='form_input' placeholder='Search'/>
              <button className='btn-style px-2'>Search</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NavBar