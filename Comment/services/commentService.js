import axios from "axios";

// Use an environment variable for the base URL if desired
const url = process.env.API_URL || 'http://comment-service-backend.onrender.com';

export async function getCommentByID(id) {
    try {
        const res = await axios.get(`${url}/comments/${id}`);
        return res.data;
    } catch (error) {
        // Handle errors (optional)
        console.error('Error fetching comment:', error);
        throw error; // Re-throw the error for further handling if needed
    }
}
