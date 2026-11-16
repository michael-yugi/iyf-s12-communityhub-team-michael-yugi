import { useState } from 'react'

function UserForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')

  return (
    <form>
      <label htmlFor="user-name">Name</label>
      <input
        id="user-name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Your name"
      />

      <label htmlFor="user-email">Email</label>
      <input
        id="user-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
      />

      <label htmlFor="user-age">Age</label>
      <input
        id="user-age"
        type="number"
        min="0"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Your age"
      />

      <p>
        Preview: {name || 'Name'}, {email || 'email'}, {age || 'age'}
      </p>
    </form>
  )
}

export default UserForm
