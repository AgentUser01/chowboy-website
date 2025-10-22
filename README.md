# Chowboy Website - Next.js SEO-Optimized Version

This is the modernized, SEO-optimized version of the Chowboy website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

### SEO Optimization
- **Server-Side Rendering (SSR)** - Proper crawlable pages (no HashRouter)
- **Structured Data** - Schema.org markup for Organization, WebSite, SoftwareApplication, Recipe, and Article
- **Dynamic Sitemap** - Auto-generated sitemap.xml with all pages, blog posts, and recipes
- **Meta Tags** - Comprehensive Open Graph and Twitter Card tags on every page
- **Clean URLs** - SEO-friendly URLs without hash routing

### Content System
- **Blog with MDX** - Write rich blog posts with Markdown and React components
- **Recipe System** - JSON-based recipe content with full Schema.org markup
- **Static Site Generation** - Fast, pre-rendered pages for optimal performance

### Modern Tech Stack
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations (ready to implement)
- **MDX** for rich blog content

## 📁 Project Structure

```
chowboy-website-next/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Home page
│   ├── blog/                # Blog pages
│   │   ├── page.tsx         # Blog listing
│   │   └── [slug]/page.tsx  # Individual blog post
│   ├── recipes/             # Recipe pages
│   │   ├── page.tsx         # Recipe listing
│   │   └── [slug]/page.tsx  # Individual recipe
│   ├── features/page.tsx    # Features page
│   ├── support/page.tsx     # Support page
│   ├── privacy/page.tsx     # Privacy policy
│   ├── terms/page.tsx       # Terms of service
│   ├── cookies/page.tsx     # Cookie policy
│   ├── sitemap.ts           # Dynamic sitemap generator
│   └── robots.ts            # Robots.txt generator
├── components/
│   ├── seo/                 # SEO components
│   │   └── StructuredData.tsx  # Schema.org markup components
│   └── ui/                  # UI components
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── AppStoreBadge.tsx
├── content/
│   ├── blog/                # MDX blog posts
│   └── recipes/             # JSON recipe files
├── lib/
│   ├── mdx.ts              # MDX processing utilities
│   └── recipes.ts          # Recipe data utilities
└── public/                  # Static assets
    └── images/              # Image files
```

## 🛠 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd chowboy-website-next
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

This generates a static site in the `out/` directory.

### Preview Production Build

```bash
npm run build
npx serve@latest out
```

## 📝 Content Management

### 🤖 Automated Blog Posts (NEW!)

**Generate blog posts automatically every 2-3 days using AI!**

- ✅ 8 posts per month (96 per year)
- ✅ 1200-1800 words each
- ✅ SEO-optimized content
- ✅ Costs ~$1/month (OpenAI GPT-4)
- ✅ Zero manual work

**Quick Setup** (5 minutes):
1. Get OpenAI API key: [platform.openai.com](https://platform.openai.com)
2. Add as GitHub Secret: `OPENAI_API_KEY`
3. Enable GitHub Actions workflow
4. Done! Posts generate automatically

**Commands**:
```bash
npm run blog:generate  # Generate one blog post
npm run blog:test      # Test the system
```

**Documentation**:
- 📘 **Quick Start**: See `BLOG_QUICKSTART.md` (5-min setup)
- 🔑 **OpenAI Setup**: See `OPENAI_SETUP_GUIDE.md` (API key setup)
- 📚 **Full Guide**: See `AUTO_BLOG_SETUP.md` (detailed docs)
- 📊 **Summary**: See `AUTO_BLOG_IMPLEMENTATION_SUMMARY.md`

---

### Adding Blog Posts Manually

Create a new MDX file in `content/blog/`:

```markdown
---
title: "Your Blog Post Title"
description: "SEO-friendly description"
date: "2025-01-15"
author: "Chowboy Team"
tags: ["cooking", "recipes", "tips"]
image: "/images/your-image.png"
---

# Your Blog Post Content

Write your content here with full Markdown support...
```

### Adding Recipes

Create a new JSON file in `content/recipes/`:

```json
{
  "title": "Recipe Name",
  "description": "Recipe description",
  "prepTime": 15,
  "cookTime": 30,
  "totalTime": 45,
  "servings": 4,
  "difficulty": "Easy",
  "cuisine": "Italian",
  "category": "Dinner",
  "tags": ["quick meals", "healthy"],
  "ingredients": [
    { "amount": "1 cup", "item": "ingredient name" }
  ],
  "instructions": [
    { "step": 1, "instruction": "Step instructions" }
  ],
  "nutrition": {
    "calories": 350,
    "protein": "20g",
    "carbohydrates": "45g",
    "fat": "10g"
  },
  "author": "Chowboy Team",
  "datePublished": "2025-01-15"
}
```

## 🚀 Deployment

### Deploy to GitHub Pages

1. Update `package.json` to add deployment script:

```json
"scripts": {
  "deploy": "npm run build && touch out/.nojekyll && echo 'chowboy.io' > out/CNAME && gh-pages -d out -t true"
}
```

2. Deploy:

```bash
npm run deploy
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Configure build settings:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
4. Deploy

## 📊 SEO Checklist

### ✅ Implemented

- [x] Proper HTML semantic structure
- [x] Unique meta titles and descriptions for every page
- [x] Open Graph tags for social sharing
- [x] Twitter Card metadata
- [x] Schema.org structured data (Organization, WebSite, SoftwareApplication, Recipe, Article)
- [x] Dynamic sitemap.xml
- [x] Robots.txt
- [x] Canonical URLs
- [x] Mobile-responsive design
- [x] Fast page load times (static generation)
- [x] Clean, crawlable URLs (no hash routing)
- [x] Image optimization with Next.js Image component
- [x] Breadcrumb navigation markup

### 🎯 Next Steps for Maximum SEO Impact

1. **Submit to Search Engines**
   - Google Search Console: Submit sitemap at `https://chowboy.io/sitemap.xml`
   - Bing Webmaster Tools: Submit sitemap
   - Verify domain ownership

2. **Create More Content**
   - ✅ **Automated blog system** generates 8 posts/month (see `BLOG_QUICKSTART.md`)
   - Target: 50+ blog posts in first 6 months (auto-generates 48!)
   - Focus on long-tail keywords (e.g., "how to save instagram recipes", "best recipe organizer app")
   - Target: 30+ recipe pages with full Schema.org markup

3. **Build Backlinks**
   - Guest post on cooking blogs
   - Get featured in app directories
   - Food blogger outreach program

4. **Technical SEO**
   - Add Google Analytics 4
   - Set up Google Search Console
   - Monitor Core Web Vitals
   - Track keyword rankings

5. **Content Calendar**
   - Week 1-2: 10 blog posts on recipe organization tips
   - Week 3-4: 10 recipes with full markup
   - Ongoing: 2-3 new pieces per week

## 🎨 Customization

### Updating Metadata

Edit `app/layout.tsx` to update global metadata:

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ... other metadata
};
```

### Styling

Tailwind CSS is configured. Update `tailwind.config.ts` for theme customization.

Global styles are in `app/globals.css`.

## 📈 Success Metrics

### Target (3-6 months)

- **Organic Traffic**: 500+ monthly visitors from search
- **Keyword Rankings**: Top 10 for 10+ target keywords
- **Indexed Pages**: 50+ pages in Google index
- **Backlinks**: 20+ quality backlinks
- **Core Web Vitals**: All metrics in "Good" range
- **App Downloads from Organic**: 15%+ increase

### Current Status

- ✅ Modern Next.js architecture
- ✅ Full SEO infrastructure
- ✅ 2 blog posts
- ✅ 3 recipes
- ✅ All legal pages
- ✅ Dynamic sitemap
- ✅ Structured data on all pages

## 🔗 Important URLs

- **Production**: https://chowboy.io
- **App Store**: https://apps.apple.com/ca/app/chowboy/id6741332753
- **Sitemap**: https://chowboy.io/sitemap.xml
- **Robots.txt**: https://chowboy.io/robots.txt

## 📞 Support

For questions or issues:
- Email: support@chowboy.io

---

Built with ❤️ in Montreal
