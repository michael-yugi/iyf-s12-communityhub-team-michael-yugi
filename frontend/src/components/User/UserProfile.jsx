import UserCard from './UserCard'

function UserProfile({ user = {} }) {
  const profile = {
    name: user.name || 'Guest',
    role: user.role || 'Community Member',
    bio: user.bio || 'A CommunityHub member sharing ideas and updates.',
    avatarUrl: user.avatarUrl || '',
    location: user.location || 'Location not provided',
    interests: user.interests || [],
  }

  return (
    <section className="user-profile" aria-label={`${profile.name}'s profile`}>
      <UserCard
        name={profile.name}
        role={profile.role}
        bio={profile.bio}
        avatarUrl={profile.avatarUrl}
      />

      <div className="user-profile__details">
        <h4>Location</h4>
        <p>{profile.location}</p>

        <h4>Interests</h4>
        {profile.interests.length > 0 ? (
          <ul>
            {profile.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        ) : (
          <p>No interests added yet.</p>
        )}
      </div>
    </section>
  )
}

export default UserProfile
