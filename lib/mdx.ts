import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDirectory = path.join(process.cwd(), 'content');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  tags?: string[];
  content: string;
  readingTime: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(contentDirectory, 'blog');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.mdx') || file.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '');
    const filePath = path.join(blogDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'Chowboy Team',
      image: data.image,
      tags: data.tags || [],
      content,
      readingTime: readingTime(content).text,
    };
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const blogDir = path.join(contentDirectory, 'blog');
  const filePath = path.join(blogDir, `${slug}.mdx`);
  const fallbackPath = path.join(blogDir, `${slug}.md`);

  let finalPath = filePath;
  if (!fs.existsSync(filePath) && fs.existsSync(fallbackPath)) {
    finalPath = fallbackPath;
  } else if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(finalPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    author: data.author || 'Chowboy Team',
    image: data.image,
    tags: data.tags || [],
    content,
    readingTime: readingTime(content).text,
  };
}

