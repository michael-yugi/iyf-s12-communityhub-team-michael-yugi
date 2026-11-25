import { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '320px' }}>
      <h2>Daily Challenge 1: Timer</h2>
      <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.75rem 0' }}>
        {seconds}s
      </p>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button type="button" onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button type="button" onClick={handlePause} disabled={!isRunning}>
          Pause
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
