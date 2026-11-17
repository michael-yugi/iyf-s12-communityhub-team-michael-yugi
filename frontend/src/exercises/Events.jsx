import { useState } from "react";
import PostList from "../../components/Post/PostList";

const SAMPLE_POSTS = [
  {
    id: 1,
    title: "Welcome to CommunityHub",
    excerpt: "Share updates, ask questions, and connect with peers.",
    author: "Florence Gitau",
    date: "Nov 17, 2026",
    likes: 3,
  },
  {
    id: 2,
    title: "React Props & Keys Guide",
    excerpt: "Why unique keys matter when rendering dynamic lists in React.",
    author: "Alma Otieno",
    date: "Nov 17, 2026",
    likes: 5,
  },
];

function Task16_2Events() {
  const [posts, setPosts] = useState(SAMPLE_POSTS);

  function handleLikePost(postId) {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  }

  function handleClearPosts() {
    setPosts([]);
  }

  function handleResetPosts() {
    setPosts(SAMPLE_POSTS);
  }

  return (
    <div>
      <h2>Task 16.2: Event Handler Patterns</h2>
      <div className="controls">
        <button type="button" onClick={handleClearPosts}>
          Clear All (Test Empty State)
        </button>
        <button type="button" onClick={handleResetPosts}>
          Reset Posts
        </button>
      </div>
      <PostList posts={posts} onLike={handleLikePost} />
    </div>
  );
}

export default Task16_2Events;
