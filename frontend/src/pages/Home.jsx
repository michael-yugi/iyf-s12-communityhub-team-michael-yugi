import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to CommunityHub</h1>
      <p>Explore community discussions and posts.</p>
      <Link to="/posts">Browse all posts</Link>
    </div>
  );
}
