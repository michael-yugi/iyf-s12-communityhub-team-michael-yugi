function Greeting({ name = 'Guest', timeOfDay = 'morning' }) {
  const greetings = {
    morning: 'Good morning',
    afternoon: 'Good afternoon',
    evening: 'Good evening',
  }

  const greeting = greetings[timeOfDay] || 'Hello'

  return (
    <section>
      <h2>
        {greeting}, {name}!
      </h2>
      <p>Welcome to CommunityHub.</p>
    </section>
  )
}

export default Greeting
