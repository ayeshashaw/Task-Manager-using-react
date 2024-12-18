

import axios from 'axios';

const BASE_URL ="https://jsonplaceholder.typicode.com"; // Replace with your actual API endpoint

export const getPost = () => {
  return axios.get(`${BASE_URL}/posts`);
};

export const deletePost = (id) => {
  return axios.delete(`${BASE_URL}/posts/${id}`);
};

export const createPost = (postData) => {
  return axios.post(`${BASE_URL}/posts`, postData);
};

export const updatePost = (id, postData) => {
  return axios.put(`${BASE_URL}/posts/${id}`, postData);
};