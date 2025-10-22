/**
 * Automated Blog Post Generator for Chowboy
 * 
 * Generates SEO-optimized blog posts every 2-3 days to attract organic traffic.
 * Uses OpenRouter API for content generation with food/cooking focus.
 */

const fs = require('fs');
const path = require('path');

// Blog topics optimized for SEO and organic traffic
const BLOG_TOPICS = [
  // Recipe & Cooking Guides
  "How to meal prep for the week on a budget",
  "Quick 15-minute dinner recipes for busy weeknights",
  "Beginner's guide to knife skills in the kitchen",
  "How to cook perfect rice every time (all types)",
  "Essential pantry staples every home cook needs",
  "How to read and understand recipes like a pro",
  "Common cooking mistakes and how to avoid them",
  "Guide to cooking temperatures for meat and poultry",
  
  // Food Technology & Apps
  "Best recipe organizer apps for home cooks in 2025",
  "How to digitize your family recipe collection",
  "AI vs traditional recipe apps: which is better?",
  "How to share recipes with friends and family online",
  "Digital meal planning: apps that actually work",
  "Recipe apps with offline access for camping and travel",
  
  // Ingredient Guides
  "Ultimate guide to olive oil types and uses",
  "How to choose the best cooking oil for every dish",
  "What spices should I buy first? A starter guide",
  "Fresh vs dried herbs: when to use each",
  "Guide to Asian cooking ingredients for beginners",
  "Understanding flour types and their uses",
  
  // Dietary & Health
  "How to make any recipe vegetarian: substitution guide",
  "Beginner's guide to meal planning for weight loss",
  "High-protein meals that actually taste good",
  "Gluten-free cooking tips and ingredient swaps",
  "How to reduce sodium in your favorite recipes",
  "Anti-inflammatory foods and easy recipes",
  
  // Kitchen Equipment & Tools
  "Essential kitchen tools every home cook needs",
  "Best affordable kitchen gadgets under $30",
  "How to choose the right knife for cooking",
  "Cast iron vs nonstick: which pan should you buy?",
  "Kitchen tools that are actually worth the money",
  
  // Food Waste & Sustainability
  "Creative ways to use vegetable scraps",
  "How to store fresh herbs to make them last longer",
  "Guide to freezing meals for later: dos and don'ts",
  "Best containers for meal prep and food storage",
  "How to revive stale bread and other foods",
  
  // International Cuisine
  "Introduction to Italian cooking for beginners",
  "Essential Thai ingredients and where to find them",
  "How to make authentic Mexican salsa at home",
  "Japanese cooking basics: ingredients and techniques",
  "Middle Eastern spices and how to use them",
  
  // Seasonal Cooking
  "What's in season? Monthly produce guide",
  "Best summer recipes for hot weather cooking",
  "Cozy fall comfort food recipes",
  "Fresh spring recipes with seasonal ingredients",
  "Winter warming soups and stews",
  
  // Special Occasions
  "Easy impressive recipes for dinner parties",
  "How to meal plan for holiday gatherings",
  "Budget-friendly recipes for feeding a crowd",
  "Romantic dinner ideas for date night at home",
  
  // Wine & Beverages
  "Beginner's guide to cooking with wine",
  "How to pair wine with everyday meals",
  "Best budget wines for cooking (under $10)",
  "Non-alcoholic wine alternatives for recipes",
  
  // Cooking Techniques
  "How to properly season cast iron cookware",
  "Guide to different cooking methods: sauté, braise, roast",
  "How to make perfect caramelized onions",
  "The science of baking: why recipes work",
  "How to properly brown meat for maximum flavor",
  
  // Grocery & Shopping
  "How to save money on groceries without coupons",
  "Guide to reading nutrition labels correctly",
  "Best times to buy organic vs conventional produce",
  "How to shop for groceries online efficiently",
  
  // Meal Planning
  "How to meal plan when you hate meal planning",
  "Flexible meal planning for unpredictable schedules",
  "How to batch cook for the whole week",
  "One-pot meal ideas for easy cleanup",
];

// OpenAI API configuration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

/**
 * Select a random blog topic that hasn't been used recently
 */
function selectBlogTopic() {
  const blogDir = path.join(__dirname, '../content/blog');
  
  // Get existing blog post titles
  const existingFiles = fs.readdirSync(blogDir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
      const titleMatch = content.match(/title:\s*"([^"]+)"/);
      return titleMatch ? titleMatch[1].toLowerCase() : '';
    });
  
  // Filter out similar topics (basic similarity check)
  const availableTopics = BLOG_TOPICS.filter(topic => {
    const topicWords = topic.toLowerCase().split(' ');
    return !existingFiles.some(existingTitle => {
      const existingWords = existingTitle.split(' ');
      const commonWords = topicWords.filter(word => 
        existingWords.includes(word) && word.length > 4
      );
      return commonWords.length > 2; // Avoid very similar topics
    });
  });
  
  if (availableTopics.length === 0) {
    console.log('⚠️  All topics have been used. Recycling topics...');
    return BLOG_TOPICS[Math.floor(Math.random() * BLOG_TOPICS.length)];
  }
  
  return availableTopics[Math.floor(Math.random() * availableTopics.length)];
}

/**
 * Generate blog post content using OpenAI ChatGPT
 */
async function generateBlogContent(topic) {
  if (!OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY environment variable is not set');
  }

  const prompt = `You are a professional food blogger and SEO expert writing for Chowboy, a modern recipe and cooking app.

Write a comprehensive, SEO-optimized blog post about: "${topic}"

Requirements:
1. Write 1200-1800 words of high-quality, original content
2. Use a friendly, conversational tone that appeals to home cooks
3. Include practical tips, specific examples, and actionable advice
4. Structure with clear H2 and H3 headings (use ## and ###)
5. Add bullet points and numbered lists where appropriate
6. Include a strong introduction and conclusion
7. Naturally mention Chowboy app features where relevant (but don't be overly promotional)
8. Use long-tail keywords for SEO
9. Write in a way that answers common Google searches
10. Include real, specific examples and measurements

Format: Write ONLY the blog post content in Markdown. Do NOT include the frontmatter (title, description, etc.) - I'll add that separately.

Start with a compelling H1 headline (# Title), then write the full article.`;

  console.log('🤖 Generating blog content with AI...');
  
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4-turbo-preview', // High-quality model for blog content
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.8, // Creative but coherent
      max_tokens: 4000
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenAI API error: ${response.status} ${error}`);
  }

  const data = await response.json();
  const content = data.choices[0].message.content;
  
  console.log('✅ Blog content generated successfully');
  return content;
}

/**
 * Generate SEO-friendly metadata using OpenAI
 */
async function generateMetadata(content, topic) {
  const prompt = `Based on this blog post content and topic, generate SEO-optimized metadata:

Topic: ${topic}

Content preview:
${content.substring(0, 500)}...

Generate:
1. A compelling, SEO-friendly title (50-60 characters, include main keyword)
2. A meta description (140-160 characters, enticing and keyword-rich)
3. 4-6 relevant tags (lowercase, hyphenated, SEO-focused)

Format your response EXACTLY as follows:
TITLE: [your title here]
DESCRIPTION: [your description here]
TAGS: tag1, tag2, tag3, tag4`;

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 300
    })
  });

  const data = await response.json();
  const metadataText = data.choices[0].message.content;
  
  // Parse the metadata
  const titleMatch = metadataText.match(/TITLE:\s*(.+)/);
  const descMatch = metadataText.match(/DESCRIPTION:\s*(.+)/);
  const tagsMatch = metadataText.match(/TAGS:\s*(.+)/);
  
  return {
    title: titleMatch ? titleMatch[1].trim() : topic,
    description: descMatch ? descMatch[1].trim() : topic,
    tags: tagsMatch ? tagsMatch[1].split(',').map(t => t.trim()) : []
  };
}

/**
 * Create slug from title
 */
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Save blog post to file
 */
function saveBlogPost(metadata, content) {
  const slug = createSlug(metadata.title);
  const date = new Date().toISOString().split('T')[0];
  
  const frontmatter = `---
title: "${metadata.title}"
description: "${metadata.description}"
date: "${date}"
author: "Chowboy Team"
tags: [${metadata.tags.map(t => `"${t}"`).join(', ')}]
image: "/images/cooking-tips 3.png"
---

`;

  const fullContent = frontmatter + content;
  const filePath = path.join(__dirname, '../content/blog', `${slug}.mdx`);
  
  fs.writeFileSync(filePath, fullContent, 'utf8');
  console.log(`\n✅ Blog post saved: ${slug}.mdx`);
  console.log(`📄 Title: ${metadata.title}`);
  console.log(`📝 Word count: ~${content.split(' ').length} words`);
  
  return { slug, filePath };
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('🚀 Starting automated blog post generation...\n');
    
    // Select topic
    const topic = selectBlogTopic();
    console.log(`📌 Selected topic: "${topic}"\n`);
    
    // Generate content
    const content = await generateBlogContent(topic);
    
    // Generate metadata
    console.log('🏷️  Generating SEO metadata...');
    const metadata = await generateMetadata(content, topic);
    
    // Save to file
    const result = saveBlogPost(metadata, content);
    
    console.log('\n✨ Blog post generation complete!');
    console.log(`\n🔗 View at: /blog/${result.slug}`);
    
    // Output for GitHub Actions
    if (process.env.GITHUB_ACTIONS) {
      console.log(`\n::set-output name=slug::${result.slug}`);
      console.log(`::set-output name=title::${metadata.title}`);
    }
    
  } catch (error) {
    console.error('❌ Error generating blog post:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateBlogContent, generateMetadata, saveBlogPost };

