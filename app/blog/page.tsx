import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/mdx';
import NewsletterSignup from '@/components/blog/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest cooking tips, recipe guides, and food technology insights from the Chowboy team.',
  alternates: {
    canonical: 'https://chowboy.io/blog/',
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="pt-20">
      <section className="hero-gradient-bg container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center animate-slideUp">
          <h1 className="text-5xl font-bold mb-6">
            The <span className="gradient-text">Chowboy</span> Blog
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Cooking tips, recipe guides, and insights to help you cook smarter.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="glass-card px-4 py-2 rounded-full text-sm font-medium text-slate-700">
              🔥 Cooking Tips
            </span>
            <span className="glass-card px-4 py-2 rounded-full text-sm font-medium text-slate-700">
              📖 Recipe Guides
            </span>
            <span className="glass-card px-4 py-2 rounded-full text-sm font-medium text-slate-700">
              🤖 Food Tech
            </span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">

          {posts.length === 0 ? (
            <div className="glass-card p-12 rounded-3xl text-center">
              <div className="text-5xl mb-4">📝</div>
              <p className="text-slate-600 text-lg mb-4">
                Blog posts coming soon!
              </p>
              <p className="text-slate-500">
                We&apos;re working on amazing content about cooking, recipes, and food technology.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block glass-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-slate-700 mb-3 group-hover:text-sage transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-lg text-slate-600 mb-4 line-clamp-2">{post.description}</p>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sage to-icy flex items-center justify-center text-white font-bold text-xs">
                            {post.author[0]}
                          </div>
                          <span className="font-medium">{post.author}</span>
                        </div>
                        <span>•</span>
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          ⏱️ {post.readingTime}
                        </span>
                      </div>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-gradient-to-r from-sage-100 to-icy-100 text-sage-700 px-3 py-1 rounded-full text-xs font-semibold"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="text-sage-400 group-hover:text-sage group-hover:translate-x-2 transition-all text-2xl">
                      →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <NewsletterSignup />
    </div>
  );
}

