import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookClubs() {
    const [bookClubs, setBookClubs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/book-clubs/')
            .then(response => setBookClubs(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Book Clubs</h1>
            <ul>
                {bookClubs.map(club => (
                    <li key={club.id}>{club.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default BookClubs;
