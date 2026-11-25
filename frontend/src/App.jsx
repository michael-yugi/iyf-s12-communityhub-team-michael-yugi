import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Sidebar from './components/Layout/Sidebar'
import Card from './components/shared/Card'
import Button from './components/shared/Button'
import { searchPosts, sortNewestFirst } from './utils/posts'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import { getAuthUser, fakeLogout } from './components/ProtectedRoute'
import './App.css'

function Home() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", excerpt: "Welcome to CommunityHub", author: "Amina Otieno", date: "Jan 15, 2026", likes: 0 },
    { id: 2, title: "Second Post", excerpt: "Learn React with us", author: "Brian Kamau", date: "Jan 10, 2026", likes: 0 },
  ])
  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleLike = (id) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p))
  }
  const handleDelete = (id) => {
    setPosts(posts.filter(p => p.id !== id))
  }
  const handleAddPost = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    const newPost = { id: Date.now(), title: title, excerpt: content || "New post", author: "Stephen-Dev254", date: new Date().toDateString(), likes: 0 }
    setPosts([newPost, ...posts])
    setTitle('')
    setContent('')
  }

  const visiblePosts = sortNewestFirst(searchPosts(posts, search))
  const totalLikes = posts.reduce((sum, p) => sum + p.likes, 0)

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <Sidebar />
      <main style={{ flex: 1 }}>
        <p>{posts.length} posts | {totalLikes} total likes</p>
        <label htmlFor="search-posts" className="sr-only">Search posts</label>
        <input id="search-posts" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search posts by title or author..." style={{ width: '100%', padding: '8px', marginBottom: '16px' }} />
        <Card title="Create Post">
          <form onSubmit={handleAddPost}>
            <label htmlFor="post-title">Post title</label>
            <input id="post-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post title" style={{ width: '100%', padding: '8px', marginBottom: '8px' }} />
            <label htmlFor="post-content">Post content</label>
            <textarea id="post-content" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Post content" style={{ width: '100%', padding: '8px', marginBottom: '8px' }} />
            <Button text="Add Post" variant="primary" />
          </form>
        </Card>
        {visiblePosts.length === 0 ? <p>No posts found.</p> : visiblePosts.map(post => (
          <Card key={post.id} title={post.title}>
            <p>{post.excerpt}</p>
            <p>By {post.author} | {post.date} | ❤️ {post.likes}</p>
            <Button text={`Like ❤️ ${post.likes}`} onClick={() => handleLike(post.id)} />
            <Button text="Delete" variant="danger" onClick={() => handleDelete(post.id)} />
          </Card>
        ))}
      </main>
    </div>
  )
}

function App() {
  const navigate = useNavigate()
  const user = getAuthUser()

  const handleLogout = () => {
    fakeLogout()
    navigate('/login')
  }

  return (
    <div className="app">
      <Header />
      {/* Member 4 - A11y + Auth Nav */}
      <nav aria-label="Main navigation" style={{ display: 'flex', gap: '1rem', padding: '1rem 20px', background: '#fff', borderBottom: '1px solid #eee', alignItems: 'center' }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {user ? (
          <>
            <span>Hi, {user.username}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="*" element={<><h1 style={{ padding: '2rem', textAlign: 'center' }}>404 - Page Not Found</h1><p style={{ textAlign: 'center' }}><Link to="/">Go Home</Link></p></>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App