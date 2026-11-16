function UserCard({
  name = 'Guest',
  role = 'Community Member',
  bio = 'A CommunityHub member sharing ideas and updates.',
  avatarUrl = '',
}) {
  const initials = name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <article className="user-card">
      {avatarUrl ? (
        <img className="user-card__avatar" src={avatarUrl} alt={`${name}'s profile`} />
      ) : (
        <div className="user-card__avatar user-card__avatar--placeholder" aria-hidden="true">
          {initials || 'G'}
        </div>
      )}

      <div className="user-card__details">
        <h3 className="user-card__name">{name}</h3>
        <p className="user-card__role">{role}</p>
        <p className="user-card__bio">{bio}</p>
      </div>
    </article>
  )
}

export default UserCard
