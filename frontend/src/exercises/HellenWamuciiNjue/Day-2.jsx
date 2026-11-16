const variantStyles = {
  primary: {
    backgroundColor: '#eff6ff',
    borderColor: '#3b82f6',
    color: '#1e3a8a',
  },
  secondary: {
    backgroundColor: '#f1f5f9',
    borderColor: '#94a3b8',
    color: '#334155',
  },
  outlined: {
    backgroundColor: 'transparent',
    borderColor: '#64748b',
    color: '#0f172a',
  },
}

function VariantCard({ title = 'Card', children, variant = 'primary' }) {
  const style = variantStyles[variant] || variantStyles.primary

  return (
    <section
      style={{
        border: '1px solid',
        borderRadius: '12px',
        padding: '16px',
        ...style,
      }}
    >
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  )
}

export default VariantCard
