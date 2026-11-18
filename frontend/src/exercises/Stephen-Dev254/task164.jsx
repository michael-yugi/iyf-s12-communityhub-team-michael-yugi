import { useState } from 'react'

function PostCard({ post, onLike, onDelete }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '12px', margin: '8px 0' }}>
      <h4>{post.title}</h4>
      <p>{post.excerpt}</p>
      <p>By {post.author} | ❤️ {post.likes}</p>
      <button onClick={() => onLike(post.id)}>Like ❤️</button>
      <button onClick={() => onDelete(post.id)}>Delete</button>
    </div>
  )
}

function PostList({ posts, onLike, onDelete }) {
  if (posts.length === 0) return <p>No posts yet.</p>
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} onLike={onLike} onDelete={onDelete} />
      ))}
    </div>
  )
}

function Stats({ posts }) {
  const totalLikes = posts.reduce((sum, p) => sum + p.likes, 0)
  return <p>{posts.length} posts | {totalLikes} total likes</p>
}

export default function Task164() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', excerpt: 'Welcome', author: 'Amina', likes: 0 },
    { id: 2, title: 'Second Post', excerpt: 'Learn React', author: 'Brian', likes: 0 },
  ])

  const handleLike = (id) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p))
  }
  const handleDelete = (id) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  return (
    <div>
      <h2>Task 164 - Lifting State Up</h2>
      <Stats posts={posts} />
      <PostList posts={posts} onLike={handleLike} onDelete={handleDelete} />
    </div>
  )
}