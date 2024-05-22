import axios from "axios"
const baseUrl="http://localhost:3005/books"
const getAllBooks = () => axios.get(baseUrl)
const getBooksById=(bookId) => axios.get(`${baseUrl}/${bookId}`)
const addBook= (book) => axios.post(baseUrl, book)
const editBook= (book, bookId) => axios.put(`${baseUrl}/${bookId}`, book)
const deleteBook= (bookId) => axios.delete(`${baseUrl}/${bookId}`)

export{
    getAllBooks,
    getBooksById,
    addBook,
    editBook,
    deleteBook
}