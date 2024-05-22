import React, { useEffect, useState } from 'react'
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getBooksById } from '../api/Api'
import { useParams } from 'react-router-dom'
import '../css/shared.css'

export default function BookDetails() {
  let [book, setBook]= useState({})
  const {id}=useParams();
  useEffect( ( )=> {
    const fetchData= async ()=>{
       try{
            const response = await getBooksById(id)
            setBook(response.data)
          }catch(error){
              console.log(error)
            }
    }
    fetchData()
  }, [])
  return (
    <>
    <div className="container margin">
      <div className="row">
        <div className="d-flex justify-content-center ">
          <Card style={{ width: '18rem' }} className='my-5'>
      <Card.Img variant="top" src={`/${book.img}`}/>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          {book.desc}
        </Card.Text>
        <Card.Text>
          {book.price}
        </Card.Text>
        <Link to="/all_books" className="btn btn-success">Back to books</Link>
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>
    </>
  )
}
