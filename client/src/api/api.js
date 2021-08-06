import axios from "axios";

const url_posts = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url_posts);
export const createPost = (post) => axios.post(url_posts, post);
