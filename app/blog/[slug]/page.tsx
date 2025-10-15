import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/lib/mdx';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import MDXContent from '@/components/blog/MDXContent';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://chowboy.io/blog/${params.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${params.slug}` },
  ];

  return (
    <div className="pt-20">
      <ArticleSchema article={post} url={`/blog/${params.slug}`} />
      <BreadcrumbSchema items={breadcrumbs} />

      <article className="container mx-auto px-6 py-20 max-w-4xl">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-slate-700 mb-4">{post.title}</h1>
          <p className="text-xl text-slate-600 mb-6">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-slate-300">
            <span className="font-medium text-slate-600">{post.author}</span>
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
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="max-w-none">
          <MDXContent content={post.content} />
        </div>
        
        {/* CTA at end of post */}
        <div className="mt-16 p-8 bg-sage-50 rounded-2xl border-2 border-sage-200 text-center">
          <h3 className="text-2xl font-bold text-slate mb-4">Love cooking smarter?</h3>
          <p className="text-slate-600 mb-6">
            Download Chowboy for AI-powered recipe recommendations, smart grocery lists, and more.
          </p>
          <a
            href="https://apps.apple.com/ca/app/chowboy/id6741332753"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sage text-white px-8 py-3 rounded-full font-semibold hover:bg-sage-600 transition-colors shadow-lg"
          >
            Download Chowboy
          </a>
        </div>
      </article>
    </div>
  );
}

