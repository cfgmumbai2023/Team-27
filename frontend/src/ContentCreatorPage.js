import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const ContentCreatorPage = () => {
  const [title, setTitle] = useState('');
  const [url, setURL] = useState('');
  const [summary, setSummary] = useState('');
  const [tags, setTags] = useState('');
  const [classes, setClasses] = useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/posts",{title,url,summary,tags,classes})
    .then(res=>{
      //console.log(res)
      alert("Data Submitted");
    })
    .catch(err=>{
        console.log(err);
    })
  };

  return (
    
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h2 className="text-center mb-4">Enter the details for the content to be Uploaded</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title:</label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="url" className="form-label">URL:</label>
            <input
              type="url"
              name="url"
              className="form-control"
              id="url"
              value={url}
              onChange={(e) => setURL(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="summary" className="form-label">Summary:</label>
            <textarea
              className="form-control"
              name="summary"
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">Tags:</label>
            <input
              type="text"
              name="tags"
              className="form-control"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="class" className="form-label">Content of which class:</label>
            <input
              type="Number"
              name="classes"
              className="form-control"
              id="classes"
              value={classes}
              onChange={(e) => setClasses(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  


  );
};

export default ContentCreatorPage;