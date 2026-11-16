import { useState } from 'react'

function CreatePost({ onAddPost, author = 'Hellen Wamucii Njue' }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    const trimmedContent = content.trim()

    if (!trimmedTitle || !trimmedContent) {
      setError('Please enter both a title and post content.')
      return
    }

    if (typeof onAddPost !== 'function') {
      setError('The post form is not connected yet.')
      return
    }

    onAddPost({
      id: Date.now(),
      title: trimmedTitle,
      content: trimmedContent,
      excerpt:
        trimmedContent.length > 120
          ? `${trimmedContent.slice(0, 120)}...`
          : trimmedContent,
      author,
      date: new Date().toLocaleDateString(),
      likes: 0,
    })

    setTitle('')
    setContent('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="create-post">
      <h2>Create a post</h2>

      <label htmlFor="post-title">Title</label>
      <input
        id="post-title"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Give your post a title"
      />

      <label htmlFor="post-content">Content</label>
      <textarea
        id="post-content"
        name="content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="Share something with the community"
        rows={5}
      />

      {error && <p role="alert">{error}</p>}

      <button type="submit">Publish post</button>
    </form>
  )
}

export default CreatePost
