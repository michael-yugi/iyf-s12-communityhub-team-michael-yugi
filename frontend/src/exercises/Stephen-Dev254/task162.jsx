import { useState } from 'react'

export function EventExamples() {
  const handleClick = () => console.log('Button clicked!')
  const handleInput = (event) => console.log('Input value:', event.target.value)
  const handleItemClick = (itemId) => console.log('Item clicked:', itemId)

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <input onChange={handleInput} />
      <button onClick={() => handleItemClick(123)}>Item 123</button>
      <form onSubmit={(e) => { e.preventDefault(); console.log('Form submitted') }}>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data:', formData)
    setFormData({ name: '', email: '', message: '' })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" />
      <button type="submit">Send</button>
    </form>
  )
}

export default function Task162() {
  return <div><EventExamples /><ContactForm /></div>
}