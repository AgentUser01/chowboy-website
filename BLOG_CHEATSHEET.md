# 🚀 Auto-Blog Cheat Sheet

## Quick Commands

```bash
# Test the system
npm run blog:test

# Generate one blog post
npm run blog:generate

# Run development server
npm run dev

# Build & deploy
npm run deploy
```

## Setup Checklist

- [ ] Sign up at [platform.openai.com](https://platform.openai.com)
- [ ] Generate API key (starts with `sk-`)
- [ ] Add $10 credits to account
- [ ] Add key to GitHub: Settings → Secrets → Actions → `OPENAI_API_KEY`
- [ ] Enable workflow: Actions → "Auto-Generate Blog Posts"
- [ ] Test: Run workflow manually
- [ ] Done! It runs automatically every Monday & Thursday

## File Locations

```
📁 Scripts
  scripts/generate-blog-post.js      # Main generator
  scripts/test-blog-generator.js     # Test suite

📁 Content
  content/blog/*.mdx                 # Generated posts appear here

📁 Automation
  .github/workflows/auto-blog-posts.yml  # GitHub Actions workflow

📁 Docs
  BLOG_QUICKSTART.md                 # 5-min setup guide
  AUTO_BLOG_SETUP.md                 # Full documentation
  AUTO_BLOG_IMPLEMENTATION_SUMMARY.md  # What was built
```

## GitHub Actions

**Schedule**: Monday & Thursday, 10 AM UTC  
**Cost**: ~$0.20 per post (~$1.60/month)  
**Output**: 8 SEO-optimized posts per month

**Manual Run**:
1. Go to Actions tab
2. Click "Auto-Generate Blog Posts"
3. Click "Run workflow"
4. Select branch (usually `main`)
5. Click "Run workflow"

## Environment Variables

```bash
# For local testing
export OPENAI_API_KEY="sk-YOUR-KEY-HERE"

# For GitHub Actions
# Add as repository secret: OPENAI_API_KEY
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| API error | Check key & balance at platform.openai.com |
| Workflow not running | Verify secret is set in GitHub |
| Low quality content | Using GPT-4 Turbo? (check script) |
| Out of topics | Add more to BLOG_TOPICS array |

## Key Numbers

- **70+ topics** in rotation
- **1200-1800 words** per post
- **8 posts per month** automatically
- **96 posts per year** total
- **~$8-12 per year** in API costs
- **288 hours saved** annually

## Customization Quick Reference

### Change Schedule
Edit: `.github/workflows/auto-blog-posts.yml`
```yaml
schedule:
  - cron: '0 10 * * 1,4'  # Current: Mon & Thu
  - cron: '0 9 * * *'     # Daily at 9 AM
  - cron: '0 10 */2 * *'  # Every 2 days
```

### Add Topics
Edit: `scripts/generate-blog-post.js`
```javascript
const BLOG_TOPICS = [
  "Your new topic here",
  // ... existing topics
];
```

### Change AI Model
Edit: `scripts/generate-blog-post.js`
```javascript
model: 'gpt-4-turbo-preview',  // Best quality (current)
model: 'gpt-4',                // Good quality
model: 'gpt-3.5-turbo',        // Cheapest (~$0.50/year)
```

## Monitoring

**Weekly** (5 min):
- [ ] Check GitHub Actions for errors
- [ ] Skim 1 generated post

**Monthly** (30 min):
- [ ] Review Google Search Console
- [ ] Check OpenAI usage at platform.openai.com
- [ ] Share best posts on social

**Quarterly** (2 hrs):
- [ ] Analyze SEO performance
- [ ] Update top-performing posts
- [ ] Add new topic ideas

## Expected SEO Timeline

| Month | Posts | Impressions | Clicks |
|-------|-------|-------------|--------|
| 1     | 8     | 100-500     | 5-25   |
| 2     | 16    | 500-2K      | 25-100 |
| 3     | 24    | 2K-5K       | 100-250|
| 6     | 48    | 10K-25K     | 500-1K |
| 12    | 96    | 50K-100K    | 2.5K-5K|

## Support

- 📘 **Quick Start**: `BLOG_QUICKSTART.md`
- 🔑 **OpenAI Setup**: `OPENAI_SETUP_GUIDE.md`
- 📚 **Full Docs**: `AUTO_BLOG_SETUP.md`
- 📊 **Summary**: `AUTO_BLOG_IMPLEMENTATION_SUMMARY.md`
- 🔗 **OpenAI Platform**: [platform.openai.com](https://platform.openai.com)
- 🔗 **GitHub Actions**: [docs.github.com/actions](https://docs.github.com/actions)

## Emergency: Pause System

```bash
# Option 1: Disable workflow in GitHub
# Go to: Actions → Auto-Generate Blog Posts → "..." → Disable

# Option 2: Delete workflow file
rm .github/workflows/auto-blog-posts.yml
git commit -am "Pause auto-blog"
git push
```

## Emergency: Delete Bad Post

```bash
# Delete the .mdx file
rm content/blog/bad-post-slug.mdx

# Commit and deploy
git add content/blog/
git commit -m "Remove low-quality post"
npm run deploy
```

---

**Remember**: This is a "set it and forget it" system. Just let it run! 🚀

