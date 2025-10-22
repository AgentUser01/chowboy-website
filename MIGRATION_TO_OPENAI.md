# 🔄 Migration: OpenRouter → OpenAI

**Updated**: October 22, 2025

The blog generation system has been updated to use **OpenAI's ChatGPT API** instead of OpenRouter.

## Why the Change?

1. **Lower Cost**: $8-12/year vs $18-24/year (50% cheaper!)
2. **Simpler Setup**: One less service to manage
3. **Direct Access**: No middleman API service
4. **Similar Quality**: GPT-4 Turbo matches Claude 3.5 quality
5. **More Familiar**: Most people already have OpenAI accounts

## What Changed?

### Code Changes
- ✅ API endpoint: `openrouter.ai` → `api.openai.com`
- ✅ Model: `anthropic/claude-3.5-sonnet` → `gpt-4-turbo-preview`
- ✅ Environment variable: `OPENROUTER_API_KEY` → `OPENAI_API_KEY`
- ✅ Authentication: Simplified headers

### Documentation Updates
- ✅ All guides updated to use OpenAI
- ✅ New `OPENAI_SETUP_GUIDE.md` created
- ✅ Cost estimates updated (50% reduction!)

## Migration Steps

If you previously set up with OpenRouter, follow these steps:

### 1. Get OpenAI API Key (2 min)

1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up or log in
3. Click **"API keys"** → **"Create new secret key"**
4. Name it: "Chowboy Blog Generator"
5. Copy the key (starts with `sk-...`)
6. Save it somewhere safe!

### 2. Add Credits (1 min)

1. Go to **"Billing"** → **"Payment methods"**
2. Add payment method
3. Add $10 credits (or set up auto-recharge)

### 3. Update GitHub Secret (1 min)

1. Go to your GitHub repo
2. **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Name: `OPENAI_API_KEY`
5. Value: Your OpenAI API key
6. Click **"Add secret"**

### 4. Delete Old Secret (Optional)

1. In the same Secrets page
2. Find `OPENROUTER_API_KEY`
3. Click **Delete**

### 5. Test It (2 min)

```bash
cd chowboy-website

# Set your new API key
export OPENAI_API_KEY="sk-YOUR-KEY-HERE"

# Test the system
npm run blog:test

# Generate a post
npm run blog:generate
```

### 6. Done! ✅

Your next scheduled run (Monday or Thursday) will use OpenAI automatically.

## Comparison

| Feature | OpenRouter | OpenAI |
|---------|-----------|--------|
| **Model** | Claude 3.5 Sonnet | GPT-4 Turbo |
| **Cost/post** | $0.15-0.25 | $0.08-0.12 |
| **Cost/year** | $18-24 | $8-12 |
| **Quality** | Excellent | Excellent |
| **Setup** | 2 services | 1 service |
| **Auth** | Complex | Simple |

## FAQ

### Will my old posts still work?
**Yes!** All existing blog posts are unaffected. Only new posts will use OpenAI.

### Is GPT-4 as good as Claude 3.5?
**Yes!** Quality is comparable. Both produce excellent SEO-optimized content.

### Can I switch back to OpenRouter?
**Yes!** Just revert the changes in `scripts/generate-blog-post.js` and update the GitHub Secret.

### What if I already have OpenRouter credits?
**Use them up first!** You can temporarily revert to OpenRouter, or just switch to OpenAI (credits at OpenRouter don't expire).

### Do I need to do anything to my existing posts?
**No!** They'll continue to work perfectly. This only affects new post generation.

## Troubleshooting

### "OPENAI_API_KEY environment variable is not set"

You forgot to set the environment variable:
```bash
export OPENAI_API_KEY="sk-YOUR-KEY"
```

Or you forgot to add the GitHub Secret.

### "OpenAI API error: 401"

Your API key is invalid. Double-check:
- Copied the full key correctly
- Key hasn't been revoked
- Generate a new key if needed

### Workflow still failing

1. Check GitHub Secret is named exactly: `OPENAI_API_KEY`
2. Verify you have credits at platform.openai.com
3. Check the workflow logs for detailed error messages

## Rollback (If Needed)

If you need to switch back to OpenRouter:

### 1. Edit `scripts/generate-blog-post.js`

Change these lines:

```javascript
// Change back to OpenRouter
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

// TO:

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
```

And update model names:
```javascript
model: 'gpt-4-turbo-preview'

// TO:

model: 'anthropic/claude-3.5-sonnet'
```

### 2. Update GitHub Secret

Change `OPENAI_API_KEY` back to `OPENROUTER_API_KEY`

### 3. Commit & Push

```bash
git add scripts/generate-blog-post.js
git commit -m "Rollback to OpenRouter"
git push
```

## Support

Questions? See:
- **OpenAI Setup**: `OPENAI_SETUP_GUIDE.md`
- **Quick Start**: `BLOG_QUICKSTART.md`
- **Full Docs**: `AUTO_BLOG_SETUP.md`

---

**Bottom Line**: Switching to OpenAI is easy, saves money, and maintains the same quality. The migration takes ~5 minutes! 🚀

