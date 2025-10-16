import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/lib/mdx';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import MDXContent from '@/components/blog/MDXContent';
import ShareButtons from '@/components/blog/ShareButtons';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://chowboy.io/blog/${slug}/`,
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
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` },
  ];

  return (
    <div className="pt-20">
      <ArticleSchema article={post} url={`/blog/${slug}`} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 pt-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <a href="/" className="hover:text-sage transition-colors">Home</a>
          <span>›</span>
          <a href="/blog" className="hover:text-sage transition-colors">Blog</a>
          <span>›</span>
          <span className="text-slate-700 font-medium line-clamp-1">{post.title}</span>
        </nav>
      </div>

      <article className="container mx-auto px-6 py-12 max-w-4xl">
        <header className="mb-12 animate-slideUp">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-700 mb-6 leading-tight">{post.title}</h1>
          <p className="text-2xl text-slate-600 mb-8 leading-relaxed">{post.description}</p>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage to-icy flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {post.author[0]}
            </div>
            <div className="flex-1">
              <p className="font-bold text-slate-700">{post.author}</p>
              <div className="flex items-center gap-3 text-sm text-slate-500">
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
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="glass-card bg-gradient-to-r from-sage-100 to-icy-100 text-sage-700 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="h-1 w-20 bg-gradient-to-r from-sage to-icy rounded-full" />
        </header>

        <div className="max-w-none">
          <MDXContent content={post.content} />
        </div>
        
        {/* CTA at end of post */}
        <div className="mt-20 hero-gradient-bg p-12 rounded-3xl">
          <div className="glass-card max-w-2xl mx-auto p-8 rounded-3xl text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold text-slate-700 mb-4">Love cooking smarter?</h3>
            <p className="text-lg text-slate-600 mb-6">
              Download Chowboy for <span className="font-bold text-sage">AI-powered</span> recipe recommendations, smart grocery lists, and more.
            </p>
            <a
              href="https://apps.apple.com/ca/app/chowboy/id6741332753"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sage text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-sage-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Download Free 🎉
            </a>
            <p className="text-sm text-slate-500 mt-4">Join 15,000+ home cooks • Free to start</p>
          </div>
        </div>

        {/* Share section */}
        <div className="mt-12">
          <ShareButtons 
            title={post.title}
            url={`/blog/${slug}`}
            description={post.description}
          />
        </div>
      </article>
    </div>
  );
}

