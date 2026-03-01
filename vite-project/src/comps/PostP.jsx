import React, { useState, useEffect, useRef } from 'react';

const PostP = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ name: '', title: '', descript: '' });
  const [editingId, setEditingId] = useState(null);
  const formRef = useRef(null); // Ref for auto-scrolling
  const BASE_URL = 'https://this-is-my-elementary-literacy-webs.vercel.app';

  useEffect(() => {
    fetch(`${BASE_URL}/api/getall`)
      .then(res => res.json())
      .then(result => setPosts(result.data))
      .catch(err => console.error("Fetch Error:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dynamically chooses PUT (for edit) or POST (for new)
    const url = editingId ? `${BASE_URL}/api/edit/${editingId}` : `${BASE_URL}/api/make`;
    const method = editingId ? 'PUT' : 'POST';

    await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    setEditingId(null);
    setFormData({ name: '', title: '', descript: '' });
    
    // Refresh the list after the API call
    const res = await fetch(`${BASE_URL}/api/getall`);
    const data = await res.json();
    setPosts(data.data);
  };

  const handleDelete = async (id) => {
    // API call to the deleteP controller
    const response = await fetch(`${BASE_URL}/api/delete/${id}`, { method: 'DELETE' });
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
  );
};

export default PostP;