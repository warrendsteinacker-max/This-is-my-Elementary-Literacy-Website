import React, { useState, useEffect, useRef } from 'react';

const PostP = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ name: '', title: '', descript: '' });
  const [editingId, setEditingId] = useState(null);
  const formRef = useRef(null); 
  const BASE_URL = 'https://this-is-my-elementary-literacy-webs.vercel.app';

  useEffect(() => {
    fetch(`${BASE_URL}/api/getall`)
      .then(res => res.json())
      .then(result => setPosts(result.data))
      .catch(err => console.error("Fetch Error:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingId ? `${BASE_URL}/api/edit/${editingId}` : `${BASE_URL}/api/make`;
    const method = editingId ? 'PUT' : 'POST';

    await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    setEditingId(null);
    setFormData({ name: '', title: '', descript: '' });
    
    const res = await fetch(`${BASE_URL}/api/getall`);
    const data = await res.json();
    setPosts(data.data);
  };

  // FIXED: Now calls the server controller
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/api/delete/${id}`, { 
        method: 'DELETE' 
      });

      if (response.ok) {
        // Only remove from UI if the server confirms deletion
        setPosts(posts.filter(p => p._id !== id));
      } else {
        console.error("Server failed to delete the post.");
      }
    } catch (error) {
      console.error("Delete request error:", error);
    }
  };

  const startEdit = (post) => {
    setEditingId(post._id);
    setFormData({ name: post.name, title: post.title, descript: post.descript });
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mod-container">
      <div ref={formRef}></div>
      <h2 className="mod-title">{editingId ? "Edit Post" : "Post page"}</h2>

      <form onSubmit={handleSubmit} className="post-form-glass">
        <input className="post-input" placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
        <input className="post-input" placeholder="Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
        <textarea className="post-input" rows="3" placeholder="Description..." value={formData.descript} onChange={e => setFormData({...formData, descript: e.target.value})} required />
        <button type="submit" className="download-btn">{editingId ? "Update Post" : "Publish Post"}</button>
        {editingId && <button type="button" onClick={() => setEditingId(null)} className="download-btn" style={{backgroundColor: '#444', marginLeft: '10px'}}>Cancel</button>}
      </form>

      <div className="posts-list">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-meta">Posted by: {post.name}</p>
            <p>{post.descript}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => startEdit(post)} className="download-btn" style={{ padding: '5px 15px' }}>Edit</button>
              <button onClick={() => handleDelete(post._id)} className="download-btn" style={{ padding: '5px 15px', backgroundColor: '#ff4757' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostP;