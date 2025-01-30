// pages/gardeners.js
import React, { useEffect, useState } from 'react';

const Gardeners = () => {
    const [gardeners, setGardeners] = useState([]);

    useEffect(() => {
        // Fetch data from the API for gardeners (this is just an example)
        fetch('/api/gardeners')
            .then(response => response.json())
            .then(data => setGardeners(data))
            .catch(error => console.error('Error fetching gardener data:', error));
    }, []);

    return ( <
        div >
        <
        h1 > Find Professional Gardeners < /h1> <
        div >
        <
        h2 > Available Gardeners < /h2> <
        ul > {
            gardeners.map((gardener, index) => ( <
                li key = { index } >
                <
                p > { gardener.name } - Specialization: { gardener.specialization } < /p> <
                button > Book { gardener.name } < /button> <
                /li>
            ))
        } <
        /ul> <
        /div> <
        /div>
    );
};

export default Gardeners;