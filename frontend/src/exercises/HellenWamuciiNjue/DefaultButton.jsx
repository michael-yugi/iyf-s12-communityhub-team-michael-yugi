function DefaultButton({
  text = 'Click me',
  variant = 'primary',
  size = 'medium',
  disabled = false,
}) {
  return (
    <button
      className={`button button--${variant} button--${size}`}
      disabled={disabled}
      type="button"
    >
      {text}
    </button>
  )
}

export default DefaultButton
