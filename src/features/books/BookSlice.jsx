// src/features/books/booksSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllBooks, getBooksById, addBook, editBook, deleteBook } from '../../api/Api';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await getAllBooks();
  return response.data;
});

export const fetchBookById = createAsyncThunk('books/fetchBookById', async (id) => {
  const response = await getBooksById(id);
  return response.data;
});

export const createBook = createAsyncThunk('books/createBook', async (book) => {
  const response = await addBook(book);
  return response.data;
});

export const updateBook = createAsyncThunk('books/updateBook', async ({ id, book }) => {
  const response = await editBook(book, id);
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await deleteBook(id);
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        const index = state.books.findIndex(book => book.id === action.payload.id);
        if (index !== -1) {
          state.books[index] = action.payload;
        }
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter(book => book.id !== action.payload);
      });
  },
});

export default booksSlice.reducer;
