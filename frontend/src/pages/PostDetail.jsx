import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  if (!post) return <p>Loading post #{postId}...</p>;

  return (
    <article>
      <Link to="/posts">← Back to Posts</Link>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
}
