import React from 'react';
import PostCard from './PostCard';

export default function PostList({ posts = [], onLike }) {
  // Empty-state handling (Day 3 challenge requirement)
  if (!posts || posts.length === 0) {
    return (
      <div className="post-list-empty" role="status">
        <p>📭 No posts available at the moment. Check back later!</p>
      </div>
    );
  }

  return (
    <section className="post-list" aria-label="Blog Posts">
      {posts.map((post) => (
        <PostCard
          key={post.id} // Unique key requirement
          id={post.id}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          date={post.date}
          likes={post.likes}
          onLike={onLike}
        />
      ))}
    </section>
  );
}
