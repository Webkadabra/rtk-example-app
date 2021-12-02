import React from 'react';

import { Books } from './features';
import './App.css';
import Header from "./features/layout/components/Header/Header";
import {Route, Routes} from "react-router-dom";
import About from "./features/about/About";
import Error404 from "./features/errors/Error404";
import BookDetails from "./features/books/BookDetails";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/book/:bookTitle" element={<BookDetails />} />
            <Route path="/author/:authorName" element={<Books />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={ <Error404 /> } />
        </Routes>
    </div>
  );
}

export default App;
