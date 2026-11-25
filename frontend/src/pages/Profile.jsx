import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthUser, fakeLogout } from "../components/ProtectedRoute";
import styles from "./Profile.module.css";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => getAuthUser());
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("posts");
  const [form, setForm] = useState({ name: "", email: "" });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (user) setForm({ name: user.name, email: user.email });
  }, [user]);

  // Task 17.1: useEffect with cleanup
  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        setError("");
        const [pRes, tRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`),
          fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`),
        ]);
        if (!pRes.ok || !tRes.ok) throw new Error("Failed to fetch");
        const p = await pRes.json();
        const t = await tRes.json();
        if (!cancelled) { setPosts(p); setTodos(t); }
      } catch {
        if (!cancelled) setError("Could not load posts and todos. Please try again.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [user]);

  const handleSave = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return setError("Name is required");
    const updated = { ...user, ...form };
    setUser(updated);
    localStorage.setItem("user", JSON.stringify(updated));
    setMsg("Profile updated successfully.");
    setError("");
  };

  const handleLogout = () => {
    fakeLogout();
    navigate("/login");
  };

  if (!user) return <p role="status">Please log in to view your profile.</p>;
  const completed = todos.filter((t) => t.completed).length;

  return (
    <main className={styles.page}>
      <a href="#profile-content" className={styles.skipLink}>Skip to profile content</a>
      <section className={styles.card} aria-labelledby="profile-heading">
        <div className={styles.header}>
          <div className={styles.avatar} aria-hidden="true">{user.name.charAt(0)}</div>
          <div>
            <h1 id="profile-heading">{user.name}</h1>
            <p>@{user.username} • {user.email}</p>
            <p>{user.company?.name} • {user.address?.city}, {user.address?.street}</p>
            <p>{user.phone} • {user.website}</p>
          </div>
          <button onClick={handleLogout} className={styles.logoutBtn}>Logout ({user.username})</button>
        </div>

        <div className={styles.stats} role="list" aria-label="Profile stats">
          <div role="listitem"><strong>{posts.length}</strong><span>Posts</span></div>
          <div role="listitem"><strong>{todos.length}</strong><span>Todos</span></div>
          <div role="listitem"><strong>{completed}/{todos.length}</strong><span>Completed</span></div>
        </div>

        <div id="profile-content">
          <h2>Edit Profile</h2>
          <div aria-live="polite" role="status" className={styles.srOnly}>{msg}</div>
          {error && <p role="alert" className={styles.error}>{error}</p>}
          {msg && <p role="status" className={styles.success}>{msg}</p>}
          <form onSubmit={handleSave} aria-label="Edit profile form">
            <div className={styles.group}>
              <label htmlFor="p-name">Full Name *</label>
              <input id="p-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required aria-required="true" />
            </div>
            <div className={styles.group}>
              <label htmlFor="p-email">Email *</label>
              <input id="p-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
            <button type="submit" className={styles.saveBtn}>Save Changes</button>
          </form>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="Profile content">
          <button role="tab" aria-selected={activeTab === "posts"} aria-controls="tab-posts" id="btn-posts" onClick={() => setActiveTab("posts")} className={activeTab === "posts" ? styles.tabActive : styles.tab}>Posts ({posts.length})</button>
          <button role="tab" aria-selected={activeTab === "todos"} aria-controls="tab-todos" id="btn-todos" onClick={() => setActiveTab("todos")} className={activeTab === "todos" ? styles.tabActive : styles.tab}>Todos ({todos.length})</button>
        </div>

        {loading ? <p role="status">Loading posts and todos...</p> : error ? <p role="alert">{error}</p> : (
          <>
            {activeTab === "posts" && (
              <div role="tabpanel" id="tab-posts" aria-labelledby="btn-posts">
                {posts.map((p) => <article key={p.id} className={styles.post}><h3>{p.title}</h3><p>{p.body}</p></article>)}
              </div>
            )}
            {activeTab === "todos" && (
              <ul role="tabpanel" id="tab-todos" aria-labelledby="btn-todos" className={styles.todoList}>
                {todos.map((t) => (
                  <li key={t.id}>
                    <input type="checkbox" checked={t.completed} readOnly id={`todo-${t.id}`} />
                    <label htmlFor={`todo-${t.id}`} className={t.completed ? styles.done : ""}>{t.title}</label>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </section>
    </main>
  );
}