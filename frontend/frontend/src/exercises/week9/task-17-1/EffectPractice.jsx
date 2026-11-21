import { useState, useEffect } from 'react';

export default function EffectPractice() {
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Runs once on mount ([]) to track window resize and cleans up on unmount
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Runs when `count` changes and cleans up the previous interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div>
      <h2>Task 17.1: useEffect Practice</h2>
      <p>Timer Count: {count}</p>
      <p>Window Width: {windowWidth}px</p>
      <button type="button" onClick={() => setCount(0)}>
        Reset Count
      </button>
    </div>
  );
}
