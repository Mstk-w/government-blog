import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'

export const metadata = {
  title: 'ブログ',
  description: 'DX・業務効率化に関する最新情報をお届けします',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
          ブログ
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          DX・業務効率化・条例改正・契約知識に関する実践的な情報をお届けします
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            記事はまだありません。最初の記事をお楽しみに！
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="card overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 line-clamp-2 text-primary-dark">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-base text-gray-700 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('ja-JP')}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readingTime}分で読める</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-primary rounded-full text-sm"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}