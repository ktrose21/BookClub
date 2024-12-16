import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Discussions() {
    const [discussions, setDiscussions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/discussions/')
            .then(response => setDiscussions(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Discussions</h1>
            <ul>
                {discussions.map(discussion => (
                    <li key={discussion.id}>{discussion.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Discussions;
