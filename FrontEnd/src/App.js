import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookClubs from './components/BookClubs';
import Discussions from './components/Discussions';
import Books from './components/Books';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/books" element={<Books />} />
                <Route path="/book-clubs" element={<BookClubs />} />
                <Route path="/discussions" element={<Discussions />} />
            </Routes>
        </Router>
    );
}

export default App;
