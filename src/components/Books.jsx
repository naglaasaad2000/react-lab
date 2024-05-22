// import React, { useEffect, useState } from 'react'
// import {Table} from 'react-bootstrap'
// import { FaEdit } from "react-icons/fa";
// import { IoEye } from "react-icons/io5";
// import { MdDeleteForever } from "react-icons/md";
// import { IoIosAddCircle } from "react-icons/io";
// import { deleteBook, getAllBooks } from '../api/Api';
// import { Link } from 'react-router-dom';
// import '../css/shared.css'
// export function Books(){
//    let [books,setBooks]=useState([])
    
//     useEffect(()=>{
//         const fetchData= async ()=>{
//             try{
//                 const response = await getAllBooks()
//                 setBooks(response.data)
//             }catch(error){
//                 console.log(error)
//             }
//         }
//         fetchData()
//     },[])

//     const deleteHandler = async (bookId)=> {
//         try {
//              const response = await deleteBook(bookId)
//              const newList= books.filter(book=> book.id !== bookId)
//              setBooks([...newList])
//         } catch (error) {
//             console.log(error)
//         }
       
//     }
//     return(
//         <div className="container margin">
//             <div className="row">
//                 <Link to='/all_books/0/edit'>
//                     <i className='text-primary fs-3'><IoIosAddCircle/></i>
//                 </Link>
//                  <Table striped bordered hover className='mt-3'>
//                     <thead>
//                         <tr className="text-capitalize">
//                         <th>#</th>
//                         <th>title</th>
//                         <th>description</th>
//                         <th>price</th>
//                         <th >actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <>
//                             {books && books.map(book=>{
//                                 return(
//                                     <tr key={book.id}>
//                                         <td>{book.id}</td>
//                                         <td>{book.title}</td>
//                                         <td>{book.desc}</td>
//                                         <td>{book.price}</td>
//                                         <td className='text-center'>
//                                             <Link to={`/all_books/${book.id}`}>
//                                                 <i  className=' me-2 fs-5'>< IoEye /></i>
//                                             </Link>
//                                             <Link to={`/all_books/${book.id}/edit`}>
//                                                 <i className=' me-2 fs-5 text-warning'><FaEdit /></i> 
//                                             </Link>
//                                             <Link >
//                                                 <i onClick={()=>deleteHandler(book.id)} className='text-danger fs-5  me-2'><MdDeleteForever/></i>
//                                             </Link>
//                                         </td>
//                                     </tr>
//                                 )
//                             })}
//                         </>
                
//                     </tbody>
//                 </Table>
//             </div>
//         </div>
        
//     )
// }

// src/components/Books.js
import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { FaEdit } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, removeBook } from '../features/books/BookSlice';
import '../css/shared.css';

export function Books() {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const deleteHandler = (bookId) => {
    dispatch(removeBook(bookId));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container margin">
      <div className="row">
        <Link to='/all_books/0/edit'>
          <i className='text-primary fs-3'><IoIosAddCircle /></i>
        </Link>
        <Table striped bordered hover className='mt-3'>
          <thead>
            <tr className="text-capitalize">
              <th>#</th>
              <th>title</th>
              <th>description</th>
              <th>price</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.desc}</td>
                <td>{book.price}</td>
                <td className='text-center'>
                  <Link to={`/all_books/${book.id}`}>
                    <i className='me-2 fs-5'><IoEye /></i>
                  </Link>
                  <Link to={`/all_books/${book.id}/edit`}>
                    <i className='me-2 fs-5 text-warning'><FaEdit /></i>
                  </Link>
                  <i onClick={() => deleteHandler(book.id)} className='text-danger fs-5 me-2'><MdDeleteForever /></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
