// services/api.js

/**
 * Fetch data from the backend API.
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @returns {Promise<Object>} - The JSON response from the server.
 */
export const fetchData = async(endpoint) => {
    try {
        const response = await fetch(`http://localhost:5000/api/${endpoint}`);

        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};