import { Outlet, NavLink, useNavigate } from 'react-router-dom';

export default function RouterLayout() {
  const navigate = useNavigate();

  const linkStyle = ({ isActive }) => ({
    marginRight: '1rem',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <div>
      <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <nav>
          <NavLink to="/" end style={linkStyle}>Home</NavLink>
          <NavLink to="/posts" style={linkStyle}>Posts</NavLink>
          <NavLink to="/about" style={linkStyle}>About</NavLink>
          <button type="button" onClick={() => navigate('/posts/1')}>
            Featured Post #1
          </button>
        </nav>
      </header>

      <main style={{ padding: '1.5rem' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '1rem', borderTop: '1px solid #ddd' }}>
        <p>CommunityHub — Week 9 React Router</p>
      </footer>
    </div>
  );
}
