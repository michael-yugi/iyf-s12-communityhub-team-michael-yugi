import React from 'react';

export default function PostCard({ title, excerpt, author, date, likes }) {
  return (
    <article className="post-card">
      <header className="post-header">
        <h3>{title}</h3>
        <p>
          By {author} • <time>{date}</time>
        </p>
      </header>

      <p>{excerpt}</p>

      <footer>
        <span>❤️ {likes} Likes</span>
      </footer>
    </article>
  );
}
