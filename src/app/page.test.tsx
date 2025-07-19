import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomePage from './page'

// Mock the blog functions
jest.mock('@/lib/blog', () => ({
  getAllPosts: jest.fn(() => [
    {
      slug: 'test-post',
      title: 'テスト記事',
      excerpt: 'これはテスト記事です',
      content: 'テストコンテンツ',
      date: '2024-01-15',
      tags: ['DX', 'テスト'],
      readingTime: 5,
    },
  ]),
}))

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />)
    expect(screen.getByText(/自治体DX・業務効率化/)).toBeInTheDocument()
  })

  it('renders the features section', () => {
    render(<HomePage />)
    expect(screen.getByText('専門分野')).toBeInTheDocument()
    expect(screen.getByText('DX推進')).toBeInTheDocument()
    expect(screen.getByText('条例改正')).toBeInTheDocument()
    expect(screen.getByText('契約知識')).toBeInTheDocument()
    expect(screen.getByText('ブログ')).toBeInTheDocument()
  })

  it('renders the latest posts section', () => {
    render(<HomePage />)
    expect(screen.getByText('最新記事')).toBeInTheDocument()
    expect(screen.getByText('テスト記事')).toBeInTheDocument()
  })
}) 