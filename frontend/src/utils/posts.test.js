import { describe, it, expect } from 'vitest'
import { sortNewestFirst, searchPosts, formatPostDate } from './posts'

describe('posts utils', () => {
  it('sorts newest first', () => {
    const posts = [{ title: 'Old', date: 'Jan 10, 2026' }, { title: 'New', date: 'Jan 15, 2026' }]
    expect(sortNewestFirst(posts)[0].title).toBe('New')
  })
  it('searches by title', () => {
    expect(searchPosts([{ title: 'React Basics', author: 'Amina' }], 'react')).toHaveLength(1)
  })
  it('searches by author', () => {
    expect(searchPosts([{ title: 'Hello', author: 'Brian Kamau' }], 'brian')).toHaveLength(1)
  })
  it('returns all on empty query', () => {
    expect(searchPosts([{ title: 'A', author: 'B' }], '')).toHaveLength(1)
  })
  it('formats date', () => {
    expect(formatPostDate('Jan 15, 2026')).toContain('2026')
  })
})
