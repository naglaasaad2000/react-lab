import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/books/BookSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
