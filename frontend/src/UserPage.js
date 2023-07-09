import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function UserPage() {
  const [posts, setPosts] = useState([]);
  const [dbPosts, setDbPosts] = useState([])
  const [val, setVal] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/contentuserback")
      .then((res) => {
         console.log(res)
        setPosts(res.data);
        setDbPosts(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleClick = (event) => {

    event.preventDefault()
    // if(posts.class==val){ 
    //     setPosts(posts);
    // }
    console.log(val);
    debugger;
   const jsonObject= dbPosts.filter((post) => {
    debugger;
     return post.classes==val;
    });
     setPosts(jsonObject);
  };
  const handleChange = (event) => {

    setVal(event.target.value);
  
 };
  return (
    <div className="contact-top contactcolor">
      <div className="fluid-container">
        <h1>UserPage</h1>
        <form onSubmit={handleClick}>
          <label htmlFor="dropdown">Select a value:</label>
          <select onChange={handleChange} id="selectedValue" name="selectedValue">
            <option value="">Select your Class</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <button>Submit</button>
        </form>
        <div>
          {posts.map((post) => {
            if (post.isAccepted) {
              return (
                <div>
                    <br></br>
                <table key={post._id}>
                  <tr>
                    <td>Heading: {post.title}</td>
                  </tr>
                  <tr>
                    <td>Link: <a href={post.url}>{post.url}</a></td>
                  </tr>
                  <tr>
                    <td>Summary: {post.summary}</td>
                  </tr>
                  <tr>
                    <td>tags: {post.tags}</td>
                  </tr>
                  <tr>
                    <td>Class: {post.classes}</td>
                  </tr>
                </table>
                <br></br>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default UserPage;
