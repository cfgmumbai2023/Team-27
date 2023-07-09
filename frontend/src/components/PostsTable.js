import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./PostStyles.css"

function PostTable() {
  const [posts, setPosts] = useState([]);

  const handleAccept = (postId) => {
    console.log(postId  );
    axios.put(`http://localhost:5000/post/${postId}`)
      .then(response => {
        console.log("Post accepted:", postId);
        // Handle successful response if needed
        window.location.reload();

      })
      .catch(error => {
        console.log(error);
        // Handle error if needed
      });
  };

  const handleReject = (postId) => {
    axios.delete(`http://localhost:5000/post/${postId}`)
      .then(response => {
        console.log("Post rejected:", postId);
        // Handle successful response if needed
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
        // Handle error if needed
      });
  };
  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/post');
        console.log(response);
        const data = response.data;
        console.log(data);
        setPosts(data.filter((post) => !post.isAccepted));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  
  

  const PostItem = ({ post }) => {
    return (
      <div className="post-card">
        <h3>{post.title}</h3>
        <a href={post.url} target="_blank" rel="noopener noreferrer">{post.url}</a>
        <p>Summary: {post.summary}</p>
      </div>
    );
  };

  return (
    <div>
      <h2>Post Table</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <PostItem post={post} />
          <button onClick={() => handleAccept(post._id)}>Accept</button>
          <button onClick={() => handleReject(post._id)}>Reject</button>
        </div>
      ))}
    </div>
  );
}

export default PostTable;