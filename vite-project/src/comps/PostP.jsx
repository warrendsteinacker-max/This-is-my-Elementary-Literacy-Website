import React, { useState, useEffect, useRef } from 'react';
import {Link} from "react-router-dom"

const PostP = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ name: '', title: '', descript: '' });
  const [editingId, setEditingId] = useState(null);
  const formRef = useRef(null); // Ref for auto-scrolling
  const BASE_URL = 'https://this-is-my-elementary-literacy-webs.vercel.app';
  const tokan = JSON.stringfy(localStorage.getItem("data"))

  useEffect(() => {
    fetch(`${BASE_URL}/api/getall`)
      .then(res => res.json())
      .then(result => setPosts(result.data))
      .catch(err => console.error("Fetch Error:", err));
  }, []);
///
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dynamically chooses PUT (for edit) or POST (for new)
    const url = editingId ? `${BASE_URL}/api/edit/${editingId}` : `${BASE_URL}/api/make`;
    const method = editingId ? 'PUT' : 'POST';

    const rez = await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json', authorization: 'Beare ${tokan}'},
      body: JSON.stringify(formData)
    });

    if(rez.status === 401){

      window.location.href = ""

    }

    setEditingId(null);
    setFormData({ name: '', title: '', descript: '' });
    
    // Refresh the list after the API call
    const res = await fetch(`${BASE_URL}/api/getall`);
    const data = await res.json();
    setPosts(data.data);
  };

  const handleDelete = async (id) => {
    // API call to the deleteP controller
    const response = await fetch(`${BASE_URL}/api/delete/${id}`, { method: 'DELETE', authorization: 'Beare ${tokan}'});
    if(response.status === 401){

      window.location.href = ""

    }
    if (response.ok) {
      setPosts(posts.filter(p => p._id !== id));
    }
  };

  const startEdit = (post) => {
    setEditingId(post._id);
    setFormData({ name: post.name, title: post.title, descript: post.descript });
    // Scrolls to form automatically
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <>
                    <div style={{backgroundColor: 'black', padding: '30px'}}> 
                    <p style={{fontWeight: 'bold' , color: 'whitesmoke'}}>
                    Navigation
                    </p>
                    </div>
                    <nav style={{
                      borderRadius: '10px', 
                      position: 'sticky', 
                      top: 0,  
                      zIndex: 1000,
                      display: 'flex', 
                      gap: '20px', 
                      justifyContent: 'center', 
                      background: 'linear-gradient(to right, orange, pink)', 
                      padding: '10px', 
                      alignItems: 'center',
                      marginTop: '5px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
                        {/* Using the imported logo variable ensures the image shows up */}
                        {/* <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} /> */}
                        <p style={{ margin: 0, fontSize: '14px', color: 'black' }}>
                          Welcome to the Post Page!
                        </p>
                      </div>
                      <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Home</Link>
                    </nav>
    <div className="mod-container">
      <div ref={formRef}></div> {/* Anchor for scroll */}
      <h2 className="mod-title">{editingId ? "Edit Post" : "Post page"}</h2>

      <form onSubmit={handleSubmit} className="post-form-glass">
        <input className="post-input" placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
        <input className="post-input" placeholder="Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
        <textarea className="post-input" rows="3" placeholder="Description..." value={formData.descript} onChange={e => setFormData({...formData, descript: e.target.value})} required />
        <button type="submit" className="download-btn">{editingId ? "Update Post" : "Publish Post"}</button>
      </form>

      <div className="posts-list">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <h3>{post.title}</h3>
            <p>Posted by: {post.name}</p>
            <p>{post.descript}</p>
            <button onClick={() => startEdit(post)} className="download-btn" style={{ padding: '5px 15px' }}>Edit</button>
            <button onClick={() => handleDelete(post._id)} className="download-btn" style={{ padding: '5px 15px', backgroundColor: '#ff4757', marginLeft: '10px' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PostP;
