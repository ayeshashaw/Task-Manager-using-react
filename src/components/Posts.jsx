import React, { useEffect, useState } from "react";
import { deletePost, getPost, createPost, updatePost } from "../api/PostApi";
import './Posts.css';

export const Posts = () => {
  const [data, setData] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  // Fetch Posts
  const getPostData = async () => {
    try {
      const res = await getPost();
      setData(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  // Delete Post
  const handleDelete = async (id) => {
    try {
      const response = await deletePost(id);
      if (response.status === 200) {
        const newUpdate = data.filter((currentPost) => currentPost.id !== id);
        setData(newUpdate);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // Handle Add/Create Post
  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      const response = await createPost(newPost);
      if (response.status === 201) {
        setData([...data, response.data]);
        setNewPost({ title: '', body: '' }); // Reset form
      }
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  // Handle Edit Post
  const handleEditClick = (post) => {
    setEditingPost(post);
    setNewPost({ title: post.title, body: post.body });
  };

  // Handle Update Post
  const handleUpdatePost = async (e) => {
    e.preventDefault();
    if (!editingPost) return;

    try {
      const response = await updatePost(editingPost.id, newPost);
      if (response.status === 200) {
        // Update the data array with the updated post
        const updatedData = data.map(post => 
          post.id === editingPost.id ? { ...post, ...newPost } : post
        );
        setData(updatedData);
        
        // Reset editing state
        setEditingPost(null);
        setNewPost({ title: '', body: '' });
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="task-manager-container">
      <h1 className="task-manager-title">Task Manager</h1>
      
      <section className="form-section">
        <form onSubmit={editingPost ? handleUpdatePost : handleAddPost}>
          <input
            type="text"
            name="title"
            placeholder="Post Title"
            value={newPost.title}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="body"
            placeholder="Post Content"
            value={newPost.body}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="submit-btn">
            {editingPost ? 'Update Post' : 'Add Post'}
          </button>
          {editingPost && (
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => {
                setEditingPost(null);
                setNewPost({ title: '', body: '' });
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </section>

      <section className="posts-section">
        <ul className="posts-list">
          {data.map((currentElement) => {
            const { id, title, body } = currentElement;
            return (
              <li key={id} className="post-item">
                <div className="post-content">
                  <h2>{title}</h2>
                  <p>{body}</p>
                </div>
                <div className="post-actions">
                  <button 
                    className="btn-edit"
                    onClick={() => handleEditClick(currentElement)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Posts;