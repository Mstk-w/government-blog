import Link from 'next/link'
import { ArrowRight, BookOpen, Zap, FileText, Users, Calendar, Clock, Tag } from 'lucide-react'
import { getAllPosts } from '@/lib/blog'

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3) // 最新3件を表示
  
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'DX推進',
      description: '自治体のデジタル変革を実践的にサポート',
      href: '/dx'
    },
    {
      icon: <FileText className="h-8 w-8 text-green-600" />,
      title: '条例改正',
      description: '条例・要綱改正の実務ノウハウを提供',
      href: '/regulations'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: '契約知識',
      description: '自治体契約・入札に関する専門知識',
      href: '/contracts'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-orange-600" />,
      title: 'ブログ',
      description: '最新の業務効率化情報をお届け',
      href: '/blog'
    }
  ]

  return (
    <div className="bg-white">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              自治体DX・業務効率化
              <br />
              <span className="text-blue-300">実践情報サイト</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              現場経験に基づいた実践的なノウハウで、
              <br />
              あなたの業務改善をサポートします
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                ブログを読む
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
              >
                サイトについて
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              専門分野
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              実務経験に基づいた4つの専門分野で、あなたの業務をサポートします
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 最新記事セクション */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              最新記事
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              DX・業務効率化に関する最新の実践情報をお届けします
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                記事はまだありません。最初の記事をお楽しみに！
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 text-gray-900">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
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
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
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

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              すべての記事を見る
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            最新情報をお届けします
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            DX・業務効率化の実践的なノウハウを定期的に配信しています
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            最新記事を読む
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}