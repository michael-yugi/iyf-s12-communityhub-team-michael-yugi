function ChildrenCard({ title, children }) {
  return (
    <section className="card">
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__body">{children}</div>
    </section>
  )
}

export default ChildrenCard
