import logo from './logo.svg';
import './App.css';
import { Books } from './components/Books';
import { Slider } from './components/Slider';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { SharedLayout } from './layouts/sharedLayout';
import {Home} from './pages/Home';
import NotFound from './pages/NotFound';
import { About } from './components/About';
import {SampleOfBooks} from './components/SampleOfBooks';
import BookDetails from './components/BookDetails';
import { AddBook } from './components/AddBook';
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>}/>
        <Route path='sample' element={<SampleOfBooks/>}/>
        <Route path='all_books' element={<Books/>}/>
        <Route path='all_books/:id' element={<BookDetails/>}/>
         {/* <Route path='all_books/:id/edit' element={<AddBook/>}/> */}
        <Route path='all_books/:id/edit' element={<AddBook/>}/>
      </Route>
      <Route path='*' element={<NotFound/>} />
      </>
    )
  )
  return (
    <>
    <RouterProvider router={router}/>
    </>

  );
}

export default App;
