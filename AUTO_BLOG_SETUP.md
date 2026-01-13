# Automated Blog Post Generation System

## 🎯 Overview

This system automatically generates SEO-optimized blog posts every 2-3 days to attract organic traffic to the Chowboy website. It uses AI (Claude 3.5 Sonnet via OpenRouter) to create high-quality, original content focused on cooking, recipes, meal planning, and food technology.

## ✨ Features

- **Automatic Content Generation**: Creates 1200-1800 word blog posts using AI
- **SEO Optimization**: Generates keyword-rich titles, descriptions, and tags
- **Smart Topic Selection**: Avoids repeating similar topics
- **Automated Publishing**: Commits and deploys new posts automatically
- **70+ Topic Ideas**: Diverse range of cooking-related subjects
- **GitHub Actions Integration**: Runs on schedule with no manual intervention

## 🚀 Quick Start

### 1. Prerequisites

- OpenRouter API account ([openrouter.ai](https://openrouter.ai))
- GitHub repository with Actions enabled
- Node.js 18+ (for local testing)

### 2. Setup OpenRouter API Key

1. Sign up at [openrouter.ai](https://openrouter.ai)
2. Generate an API key
3. Add funds to your account (~$5 should generate 50+ blog posts)
4. Add the API key to your GitHub repository:
   - Go to: Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `OPENROUTER_API_KEY`
   - Value: Your API key

### 3. Enable GitHub Actions

1. Go to your repository's Actions tab
2. Enable workflows if prompted
3. The workflow will run automatically every Monday and Thursday at 10 AM UTC

### 4. Verify Setup

Test the system manually:

```bash
# Install dependencies
npm install

# Set your API key
export OPENROUTER_API_KEY="your-key-here"

# Generate a test blog post
node scripts/generate-blog-post.js
```

Check the `content/blog/` directory for the new `.mdx` file.

## 📅 Schedule

**Automatic runs**: Monday & Thursday at 10 AM UTC (~every 3 days)

This schedule:
- Creates 8 blog posts per month
- Avoids weekend publishing (lower engagement)
- Spreads content consistently for SEO

**Manual runs**: Go to Actions → "Auto-Generate Blog Posts" → "Run workflow"

## 📊 Cost Estimate

Using Claude 3.5 Sonnet via OpenRouter:

- **Per blog post**: ~$0.15-0.25 (2 API calls: content + metadata)
- **Per month**: ~$1.50-2.00 (8 posts)
- **Per year**: ~$18-24

Much cheaper than hiring a content writer (~$50-200 per post)!

## 🎨 How It Works

### 1. Topic Selection
- Selects from 70+ pre-defined SEO topics
- Checks existing posts to avoid duplication
- Focuses on long-tail keywords and search intent

### 2. Content Generation
- Generates 1200-1800 words of original content
- Uses Claude 3.5 Sonnet for high quality
- Includes practical tips, examples, and actionable advice
- Naturally mentions Chowboy features

### 3. SEO Metadata
- Creates compelling title (50-60 chars)
- Writes meta description (140-160 chars)
- Generates relevant tags for categorization

### 4. Publishing
- Saves as `.mdx` file in `content/blog/`
- Auto-commits to main branch
- GitHub Pages deploys automatically
- New post appears on website within minutes

## 🛠 Customization

### Add New Topics

Edit `scripts/generate-blog-post.js` and add to `BLOG_TOPICS` array:

```javascript
const BLOG_TOPICS = [
  // Your new topics
  "Your new blog topic here",
  "Another interesting topic",
  // ... existing topics
];
```

### Change AI Model

Different models have different costs and quality:

```javascript
// In generate-blog-post.js
model: 'anthropic/claude-3.5-sonnet',  // Current (best quality)
// or
model: 'anthropic/claude-3-haiku',     // Cheaper, faster
// or
model: 'openai/gpt-4-turbo',           // Alternative high-quality
```

### Adjust Schedule

Edit `.github/workflows/auto-blog-posts.yml`:

```yaml
schedule:
  # Every 2 days at 10 AM UTC
  - cron: '0 10 */2 * *'
  
  # Or daily at 9 AM UTC
  - cron: '0 9 * * *'
  
  # Or weekly on Monday
  - cron: '0 10 * * 1'
```

### Change Content Style

Modify the prompt in `generateBlogContent()` function:

```javascript
const prompt = `You are a professional food blogger...

Write a comprehensive blog post about: "${topic}"

Requirements:
1. [Your custom requirements]
2. [Adjust tone, length, style]
...`;
```

## 📈 SEO Best Practices

The system follows these SEO principles:

1. **Long-tail keywords**: Targets specific searches like "how to meal prep on a budget"
2. **Search intent**: Answers real questions people ask Google
3. **Content length**: 1200-1800 words (ideal for SEO)
4. **Internal linking**: Mentions Chowboy features naturally
5. **Consistent publishing**: Regular content signals active site to Google
6. **Semantic keywords**: Uses related terms and variations

## 🔍 Monitoring & Analytics

### Check Generated Posts

View all blog posts:
```bash
ls -la content/blog/
```

### Monitor GitHub Actions

1. Go to Actions tab in your repository
2. View workflow runs and logs
3. Check for errors or failures

### Track SEO Performance

Use these tools to monitor organic traffic:

1. **Google Search Console**: Track impressions and clicks
2. **Google Analytics**: Monitor blog traffic and engagement
3. **Ahrefs/SEMrush**: Track keyword rankings (optional)

Expected results:
- **Weeks 1-4**: Minimal traffic (Google indexing)
- **Months 2-3**: Growing impressions
- **Months 4-6**: Steady organic traffic increase
- **Months 6+**: Compound growth from multiple posts

## 🐛 Troubleshooting

### "OpenRouter API error"

**Solution**: Check your API key and account balance
```bash
# Test API key
curl https://openrouter.ai/api/v1/auth/key \
  -H "Authorization: Bearer YOUR_KEY"
```

### "No topics available"

**Solution**: The script has used all 70+ topics. Either:
1. Add more topics to `BLOG_TOPICS` array
2. The script will automatically recycle topics
3. Edit existing posts to free up topics

### Workflow not running

**Solution**: 
1. Check Actions are enabled in repository settings
2. Verify `OPENROUTER_API_KEY` secret is set
3. Check GitHub Actions minutes quota (free tier: 2000 min/month)

### Generated content is low quality

**Solution**:
1. Use a higher quality model (Claude 3.5 Sonnet is best)
2. Increase `temperature` for more creativity (0.7-0.9)
3. Modify the prompt for more specific instructions

## 🔐 Security

- API keys stored as GitHub secrets (encrypted)
- Bot commits are clearly labeled
- No sensitive data in generated posts
- Rate limiting prevents API abuse

## 📝 Content Quality

The AI generates:
- ✅ Original, unique content
- ✅ Grammatically correct
- ✅ SEO-optimized
- ✅ Factually accurate (most of the time)
- ⚠️ May need occasional manual review
- ⚠️ Should be fact-checked for technical accuracy

**Recommendation**: Review 1-2 posts per month to ensure quality standards.

## 🎯 Success Metrics

Track these KPIs:

1. **Blog posts published**: Target 8/month
2. **Organic traffic growth**: +10-30% month over month after 3 months
3. **Google impressions**: Growing in Search Console
4. **App downloads from blog**: Track with UTM parameters
5. **Time on page**: 2-4 minutes = engaged readers

## 🚀 Advanced Features (Future)

Possible enhancements:

- **Auto image generation**: Generate featured images with AI
- **Social media posting**: Auto-share to Twitter/Instagram
- **Newsletter integration**: Email new posts to subscribers
- **A/B testing**: Generate multiple titles, publish best performer
- **Trending topics**: Scrape Google Trends for timely content
- **User comments**: Enable Disqus or similar

## 📚 Additional Resources

- [OpenRouter Documentation](https://openrouter.ai/docs)
- [Next.js Blog Tutorial](https://nextjs.org/learn/basics/create-nextjs-app)
- [MDX Documentation](https://mdxjs.com/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [SEO Best Practices](https://developers.google.com/search/docs)

## 💡 Tips for Maximum Impact

1. **Quality over quantity**: Better to post every 3 days with great content than daily with poor content
2. **Target search intent**: Write for what users are actually searching
3. **Internal linking**: Link blog posts to app download page
4. **Update old posts**: Refresh top-performing posts every 6 months
5. **Analyze competitors**: See what topics rank well for similar apps
6. **Use schema markup**: Already implemented in your site for rich snippets
7. **Promote best posts**: Share top performers on social media

## 🎉 Conclusion

This system will:
- Save 10-15 hours per month of content creation
- Generate 96 blog posts per year automatically
- Drive increasing organic traffic over time
- Cost less than $25/year to operate
- Require minimal maintenance

**Set it and forget it!** The system will keep your blog active and attract organic traffic while you focus on building Chowboy.

---

**Questions or issues?** Check the troubleshooting section or review the GitHub Actions logs for detailed error messages.












