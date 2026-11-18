export function sortNewestFirst(posts) {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function searchPosts(posts, query) {
  if (!query.trim()) return posts
  const q = query.toLowerCase()
  return posts.filter(p => p.title.toLowerCase().includes(q) || p.author.toLowerCase().includes(q))
}

export function formatPostDate(date) {
  return new Date(date).toDateString()
}
