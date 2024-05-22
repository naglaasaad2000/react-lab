// import React, { useEffect, useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { addBook, editBook, getBooksById } from '../api/Api';
// import { useNavigate, useParams } from 'react-router-dom';
// import '../css/shared.css';

// export function AddBook() {
//     const [book, setBook] = useState({
//         id: "",
//         title: "",
//         desc: "",
//         price: "",
//         img: ""
//     });

//     const [idError, setIdError] = useState(""); 
//     const [titleError, setTitleError] = useState(""); 
//     const [priceError, setPriceError] = useState(""); 
//     const [descError, setDescError] = useState(""); 
//     const { id } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (id !== "0") {
//             const fetchData = async () => {
//                 try {
//                     const response = await getBooksById(id);
//                     setBook(response.data);
//                 } catch (error) {
//                     console.log(error);
//                 }
//             };
//             fetchData();
//         }
//     }, [id]);

//     const changeHandler = (e) => {
//         const { name, value } = e.target;
//         setBook({
//             ...book,
//             [name]: value
//         });

//         // Clear previous error messages
//         if (name === 'id') setIdError("");
//         if (name === 'title') setTitleError("");
//         if (name === 'price') setPriceError("");
//         if (name === 'desc') setDescError("");

//         // Validation for title (minimum 2 characters)
//         if (name === 'title' && value.length < 2) {
//             setTitleError("Title must be at least 2 characters long.");
//         }

//         // Validation for desc (minimum 2 characters)
//         if (name === 'desc' && value.length < 2) {
//             setDescError("Description must be at least 2 characters long.");
//         }

//         // Validation for price (minimum 10)
//         if (name === 'price' && parseInt(value) < 10) {
//             setPriceError("Price must be at least 10.");
//         }
//     };

//     const fileChangeHandler = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const fileName = file.name;
//             setBook({
//                 ...book,
//                 img: `images/${fileName}`
//             });
//         }
//     };

//     const submitHandler = async (e) => {
//         e.preventDefault();
//         try {
//             // Validation checks before submitting
//             if (!validateForm()) {
//                 return; // Exit if form is not valid
//             }

//             if (id === "0") {
//                 await addBook(book);
//             } else {
//                 await editBook(book, id);
//             }
//             navigate('/all_books');
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     // Function to validate the form
//     const validateForm = () => {
//         let valid = true;

//         // Validation for id (must be a non-negative integer)
//         if (!book.id || parseInt(book.id) < 0) {
//             setIdError("ID must be a non-negative integer.");
//             valid = false;
//         }

//         // Validation for title (minimum 2 characters)
//         if (book.title.length < 2) {
//             setTitleError("Title must be at least 2 characters long.");
//             valid = false;
//         }

//         // Validation for desc (minimum 2 characters)
//         if (book.desc.length < 2) {
//             setDescError("Description must be at least 2 characters long.");
//             valid = false;
//         }

//         // Validation for price (minimum 10)
//         if (parseInt(book.price) < 10) {
//             setPriceError("Price must be at least 10.");
//             valid = false;
//         }

//         // Clear previous error messages only if the form is valid
//         if (valid) {
//             setIdError("");
//             setTitleError("");
//             setDescError("");
//             setPriceError("");
//         }

//         return valid;
//     };

//     return (
//         <div className='container margin'>
//             <Form onSubmit={submitHandler}>
//                 <Form.Group className="mb-3" controlId="formBasicId">
//                     <Form.Label>Id</Form.Label>
//                     <Form.Control
//                         placeholder="Enter Book ID"
//                         type="text"
//                         name="id"
//                         value={book.id}
//                         onChange={changeHandler}
//                     />
//                     {idError && <span style={{ color: 'red' }}>{idError}</span>} {/* Display ID error message */}
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Title</Form.Label>
//                     <Form.Control
//                         placeholder="Enter Book Title"
//                         type="text"
//                         name="title"
//                         value={book.title}
//                         onChange={changeHandler}
//                     />
//                     {titleError && <span style={{ color: 'red' }}>{titleError}</span>} {/* Display title error message */}
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Description</Form.Label>
//                     <Form.Control
//                         type="text"
//                         placeholder="Enter Description"
//                         name="desc"
//                         onChange={changeHandler}
//                         value={book.desc}
//                     />
//                     {descError && <span style={{ color: 'red' }}>{descError}</span>} {/* Display description error message */}
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicDesc">
//                     <Form.Label>Price</Form.Label>
//                     <Form.Control
//                         type="text"
//                         placeholder="Enter Price"
//                         name="price"
//                         onChange={changeHandler}
//                         value={book.price}
//                     />
//                     {priceError && <span style={{ color: 'red' }}>{priceError}</span>} {/* Display price error message */}
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formFile">
//                     <Form.Label>Image</Form.Label>
//                     <Form.Control
//                         type="file"
//                         name="img"
//                         onChange={fileChangeHandler}
//                     />
//                 </Form.Group>
//                 <Button variant="dark" type="submit">
//                     {id === "0" ? "Add New Book" : 'Edit Book'}
//                 </Button>
//             </Form>
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createBook, fetchBookById, updateBook } from '../features/books/BookSlice';
import '../css/shared.css';

export function AddBook() {
  const [book, setBook] = useState({
    id: "",
    title: "",
    desc: "",
    price: "",
    img: ""
  });

  const [idError, setIdError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [descError, setDescError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const existingBook = useSelector((state) => 
    state.books.books.find((b) => b.id === parseInt(id))
  );

  useEffect(() => {
    if (id !== "0" && !existingBook) {
      dispatch(fetchBookById(id));
    } else if (existingBook) {
      setBook(existingBook);
    } else {
      setBook({
        id: "",
        title: "",
        desc: "",
        price: "",
        img: ""
      });
    }
  }, [id, dispatch, existingBook]);

  const changeHandler = (e) => {
  const { name, value } = e.target;
  setBook((prevBook) => ({
    ...prevBook,
    [name]: value
  }));

  // Clear previous error messages
  if (name === 'id') setIdError("");
  if (name === 'title') setTitleError("");
  if (name === 'price') setPriceError("");
  if (name === 'desc') setDescError("");

  // Validation for title (minimum 2 characters)
  if (name === 'title' && value.length < 2) {
    setTitleError("Title must be at least 2 characters long.");
  }

  // Validation for desc (minimum 2 characters)
  if (name === 'desc' && value.length < 2) {
    setDescError("Description must be at least 2 characters long.");
  }

  // Validation for price (minimum 10)
  if (name === 'price' && parseInt(value) < 10) {
    setPriceError("Price must be at least 10.");
  }
};


  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name;
      setBook({
        ...book,
        img: `images/${fileName}`
      });
    }
  };

  const submitHandler = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  if (id === "0") {
    dispatch(createBook(book));
  } else {
    // Check if a new image file is selected
    const newImageFile = e.target.img.files[0];
    if (!newImageFile) {
      // If no new image file is selected, remove the 'img' property from the book object
      const { img, ...updatedBook } = book;
      dispatch(updateBook({ id, book: updatedBook }));
    } else {
      dispatch(updateBook({ id, book }));
    }
  }
  navigate('/all_books');
};

  const validateForm = () => {
    let valid = true;

    if (!book.id || parseInt(book.id) < 0) {
      setIdError("ID must be a non-negative integer.");
      valid = false;
    }

    if (book.title.length < 2) {
      setTitleError("Title must be at least 2 characters long.");
      valid = false;
    }

    if (book.desc.length < 2) {
      setDescError("Description must be at least 2 characters long.");
      valid = false;
    }

    if (parseInt(book.price) < 10) {
      setPriceError("Price must be at least 10.");
      valid = false;
    }

    if (valid) {
      setIdError("");
      setTitleError("");
      setDescError("");
      setPriceError("");
    }

    return valid;
  };

  return (
    <div className='container margin'>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>Id</Form.Label>
          <Form.Control
            placeholder="Enter Book ID"
            type="text"
            name="id"
            value={book.id}
            onChange={changeHandler}
          />
          {idError && <span style={{ color: 'red' }}>{idError}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder="Enter Book Title"
            type="text"
            name="title"
            value={book.title}
            onChange={changeHandler}
          />
          {titleError && <span style={{ color: 'red' }}>{titleError}</span>}
           </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            name="desc"
            onChange={changeHandler}
            value={book.desc}
          />
          {descError && <span style={{ color: 'red' }}>{descError}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDesc">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Price"
            name="price"
            onChange={changeHandler}
            value={book.price}
          />
          {priceError && <span style={{ color: 'red' }}>{priceError}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="img"
            onChange={fileChangeHandler}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          {id === "0" ? "Add New Book" : 'Edit Book'}
        </Button>
      </Form>
    </div>
  );
}
