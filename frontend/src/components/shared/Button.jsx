export default function Button({ text = "Click me", onClick, variant = "primary", size = "medium", disabled = false, loading = false, children }) {
  return (
    <button className={`btn btn-${variant} btn-${size}`} onClick={onClick} disabled={disabled || loading}>
      {loading ? "Loading..." : (children || text)}
    </button>
  )
}
