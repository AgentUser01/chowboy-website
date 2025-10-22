# 🚀 Auto-Blog Quick Start Guide

Get your automated blog running in **5 minutes**.

## Step 1: Get OpenAI API Key (2 minutes)

1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up or log in to your account
3. Click "API Keys" → "Create new secret key"
4. Copy your key (starts with `sk-...`)
5. Add $5-10 credits (generates 40-80 blog posts)

## Step 2: Add API Key to GitHub (1 minute)

1. Go to your GitHub repo
2. Click: **Settings** → **Secrets and variables** → **Actions**
3. Click: **New repository secret**
4. Name: `OPENAI_API_KEY`
5. Value: Paste your API key
6. Click: **Add secret**

## Step 3: Test Locally (Optional)

```bash
# Set your API key
export OPENAI_API_KEY="sk-YOUR-KEY-HERE"

# Test the system
npm run blog:test

# Generate a blog post
npm run blog:generate
```

Check `content/blog/` for the new post!

## Step 4: Enable GitHub Actions (1 minute)

1. Go to **Actions** tab in your repo
2. Find "Auto-Generate Blog Posts" workflow
3. Click **Enable workflow** (if needed)
4. Click **Run workflow** → **Run workflow** to test

## Step 5: Done! 🎉

The system now runs automatically:
- **Every Monday & Thursday** at 10 AM UTC
- **Generates** 1200-1800 word blog posts
- **Auto-commits** to your repo
- **Auto-deploys** to your website

## What You Get

✅ **8 blog posts per month** (automatically)  
✅ **SEO-optimized content** with keywords  
✅ **70+ diverse topics** about cooking & recipes  
✅ **Costs ~$2/month** in API fees  
✅ **Zero maintenance** after setup  

## Monitor Performance

- **GitHub Actions**: Check workflow runs for any errors
- **Google Search Console**: Monitor organic traffic growth
- **Website Analytics**: Track blog page views

Expected timeline:
- **Month 1**: Posts indexed by Google
- **Month 2-3**: Growing impressions
- **Month 4-6**: Steady traffic increase

## Customize (Optional)

Want to change something?

- **Schedule**: Edit `.github/workflows/auto-blog-posts.yml`
- **Topics**: Edit `scripts/generate-blog-post.js`
- **Style**: Modify AI prompt in generation script

See `AUTO_BLOG_SETUP.md` for detailed customization guide.

## Troubleshooting

**Workflow failing?**
- Check API key is set correctly in GitHub Secrets
- Verify you have OpenAI credits (check usage at platform.openai.com)

**No traffic yet?**
- SEO takes 2-3 months to show results
- Keep publishing consistently
- Share best posts on social media

**Content quality issues?**
- Review AI model in script (Claude 3.5 Sonnet is best)
- Adjust temperature for more/less creativity
- Manually edit posts if needed

## Need Help?

- **Full docs**: See `AUTO_BLOG_SETUP.md`
- **GitHub Actions logs**: Check Actions tab for errors
- **OpenRouter docs**: [openrouter.ai/docs](https://openrouter.ai/docs)

---

**That's it!** Your blog will now grow automatically, attracting organic traffic while you focus on building Chowboy. 🍳

