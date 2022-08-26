import axios from 'axios';

// URL pointing to our backend route
const url = 'http://localhost:4242/posts'; // using port 4242 because 5000 is being used for something else

export const fetchPosts = () => axios.get(url);