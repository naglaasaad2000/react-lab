import React, {useEffect,useState}from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllBooks } from '../api/Api';
import '../css/shared.css'
export  function SampleOfBooks() {
 
   const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await getAllBooks();
                setBooks(response.data.slice(0, 3)); // Get the first 3 books
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <Container className="margin">
            <Row>
              <h3 className='text-center mb-3'>Lates Books</h3>
                {books.map((book) => (
                    <Col key={book.id} md={4} className="mb-3">
                        <Card>
                            <Card.Img variant="top" className='img-card-sample' src={book.img} alt={book.title} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>{book.desc}</Card.Text>
                                <Card.Text><strong>Price: </strong>${book.price}</Card.Text>
                                <Link to={`/all_books/${book.id}`}><Button variant="dark">View Details</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
  )
}
