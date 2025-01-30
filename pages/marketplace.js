// pages/marketplace.js
import React, { useEffect, useState } from 'react';

const Marketplace = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data from the API for products (this is just an example)
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching product data:', error));
    }, []);

    return ( <
        div >
        <
        h1 > Marketplace < /h1> <
        h2 > Buy Gardening Tools < /h2> <
        ul > {
            products.map((product, index) => ( <
                li key = { index } >
                <
                p > { product.name } - $ { product.price } < /p> <
                button > Add to Cart < /button> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
};

export default Marketplace;