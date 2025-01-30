// pages/dashboard.js
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        // Fetch data from the API for plant health or history (this is just an example)
        fetch('/api/plants')
            .then(response => response.json())
            .then(data => setPlants(data))
            .catch(error => console.error('Error fetching plant data:', error));
    }, []);

    return ( <
        div >
        <
        h1 > Welcome to Your Garden Dashboard < /h1> <
        div >
        <
        h2 > Your Plants < /h2> <
        ul > {
            plants.map((plant, index) => ( <
                li key = { index } >
                <
                p > { plant.name } - Health: { plant.health } < /p> <
                /li>
            ))
        } <
        /ul> <
        /div> <
        /div>
    );
};

export default Dashboard;