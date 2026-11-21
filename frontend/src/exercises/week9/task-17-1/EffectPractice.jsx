import { useState, useEffect } from 'react';

export default function EffectPractice() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('communityhub-theme') || 'light';
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log('EffectPractice mounted');
  }, []);

  useEffect(() => {
    document.title = `Count: ${count}`;

    const timer = setInterval(() => {
      console.log('Active count during tick:', count);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  useEffect(() => {
    localStorage.setItem('communityhub-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Task 17.1: useEffect Practice</h2>

      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Increment Count
      </button>

      <div style={{ marginTop: '1rem' }}>
        <p>Saved Theme: {theme}</p>
        <button
          type="button"
          onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
        >
          Toggle Theme
        </button>
      </div>

      <p style={{ marginTop: '1rem' }}>Current Window Width: {windowWidth}px</p>
    </div>
  );
}
