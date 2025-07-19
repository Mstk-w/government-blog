import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { remark } from 'remark'
import html from 'remark-html'
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params
    const post = getPostBySlug(slug)
    return {
      title: post.title,
      description: post.excerpt,
    }
  } catch {
    return {
      title: '記事が見つかりません',
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  let post
  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }

  const processedContent = await remark()
    .use(html)
    .process(post.content)
  const contentHtml = processedContent.toString()

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow-lg border border-gray-100">
      {/* 戻るボタン */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-8 transition-colors"
      >
        <ArrowLeft size={20} />
        ブログ一覧に戻る
      </Link>

      {/* 記事ヘッダー */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-6 text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <span>{post.readingTime}分で読める</span>
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
      </header>

      {/* 記事本文 */}
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  )
}