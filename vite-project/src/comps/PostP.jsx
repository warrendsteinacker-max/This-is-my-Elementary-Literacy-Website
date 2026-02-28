import React, { useState, useEffect } from 'react';

const PostP = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ name: '', title: '', descript: '' });
  const [editingId, setEditingId] = useState(null);
  const BASE_URL = 'https://this-is-my-elementary-literacy-webs.vercel.app';

  // 1. GET: Fetch all posts on load
  useEffect(() => {
    fetch(`${BASE_URL}/api/getall`)
      .then(res => res.json())
      .then(result => setPosts(result.data))
      .catch(err => console.error("Fetch Error:", err));
  }, []);

  // 2. CREATE (POST) & UPDATE (PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingId ? `${BASE_URL}/api/edit/${editingId}` : `${BASE_URL}/api/make`;
    const method = editingId ? 'PUT' : 'POST';

    await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    // Reset and Refresh
    setEditingId(null);
    setFormData({ name: '', title: '', descript: '' });
    const res = await fetch(`${BASE_URL}/api/getall`);
    const data = await res.json();
    setPosts(data.data);
  };

  // 3. DELETE
  const handleDelete = async (id) => {
    await fetch(`${BASE_URL}/api/delete/${id}`, { method: 'DELETE' });
    setPosts(posts.filter(p => p._id !== id));
  };

  // Setup form for editing
  const startEdit = (post) => {
    setEditingId(post._id);
    setFormData({ name: post.name, title: post.title, descript: post.descript });
  };

  return (
    <div className="mod-container">
      <h2 className="mod-title">{editingId ? "Edit Post" : "Community Board"}</h2>

      {/* Form handles both Create and Update */}
      <form onSubmit={handleSubmit} className="post-form-glass">
        <input className="post-input" placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
        <input className="post-input" placeholder="Post Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
        <textarea className="post-input" rows="3" placeholder="Description..." value={formData.descript} onChange={e => setFormData({...formData, descript: e.target.value})} required />
        <button type="submit" className="download-btn">{editingId ? "Update Post" : "Publish Post"}</button>
        {editingId && <button onClick={() => setEditingId(null)} className="download-btn" style={{backgroundColor: '#444'}}>Cancel</button>}
      </form>

      {/* Post Feed */}
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-meta">Posted by: {post.name}</p>
            <p>{post.descript}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => startEdit(post)} className="download-btn" style={{ padding: '5px 15px', fontSize: '14px' }}>Edit</button>
              <button onClick={() => handleDelete(post._id)} className="download-btn" style={{ padding: '5px 15px', fontSize: '14px', backgroundColor: '#ff4757' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostP;
// <div style={{widht: '100vw', height: '100vh', backgroundColor: 'white', position: 'relitive'}}><div className='cir'></div></div>
 