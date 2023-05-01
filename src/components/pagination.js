import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviePage } from '../redux/actions/movieAction';

const PaginationComponent = () => {

  const [PageNumber, setPageNumber] = useState(0)

    const dispatch = useDispatch()

    const pages = useSelector((state) => state.pageCount)

    useEffect(()=>{
      setPageNumber(pages)
    }, [])



    const handlePageClick = (data)=>{
        dispatch(getMoviePage(data.selected + 1))
    }
  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={PageNumber}
    previousLabel="< previous"
    containerClassName={'pagination justify-content-center p-2'}
    pageClassName={'page-item'}
    pageLinkClassName={'page-link'}
    previousLinkClassName={'page-link'}
    previousClassName={'page-item'}
    nextClassName={'page-item'}
    nextLinkClassName={'page-link'}
    breakClassName='page-item'
    breakLinkClassName='page-link'
    activeClassName='active'
  />
  )
}

export default PaginationComponent