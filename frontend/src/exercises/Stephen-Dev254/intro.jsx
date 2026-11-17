function Intro() {
  const name = "Stephen-Dev254";
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>I am Member 4 in CommunityHub. I handle state, shared components and testing.</p>
      <p>I am learning React and building the frontend with my team.</p>
      <p>I like building things that actually work, not just look good.</p>
      <p>Today is {now.toDateString()}</p>
      {greeting && <p>{greeting}, welcome to my intro!</p>}
    </div>
  );
}
export default Intro;