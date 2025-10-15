import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/mdx';

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
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Blog</h1>
          <p className="text-xl text-gray-600 mb-12">
            Cooking tips, recipe guides, and insights to help you cook smarter.
          </p>

          {posts.length === 0 ? (
            <div className="bg-gray-50 p-12 rounded-2xl text-center">
              <p className="text-gray-600 text-lg">
                Blog posts coming soon! We&apos;re working on amazing content about cooking, recipes, and food technology.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{post.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span>•</span>
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <span>•</span>
                        <span>{post.readingTime}</span>
                      </div>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

