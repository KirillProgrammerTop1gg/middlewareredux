import axios from "axios";

export const getPostsFunc = () => axios.get('https://jsonplaceholder.typicode.com/posts');