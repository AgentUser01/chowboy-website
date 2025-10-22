# Using OpenAI ChatGPT for Blog Generation

## ✅ Updated to Use OpenAI

The blog generation system now uses **OpenAI's ChatGPT API** (GPT-4 Turbo) instead of OpenRouter.

## 🚀 Quick Setup

### 1. Get OpenAI API Key

1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up or log in
3. Click **"API keys"** in left sidebar
4. Click **"Create new secret key"**
5. Name it (e.g., "Chowboy Blog Generator")
6. Copy the key (starts with `sk-...`)
7. **Important**: Save it somewhere safe - you can't see it again!

### 2. Add Credits to Your Account

1. Go to **"Billing"** → **"Payment methods"**
2. Add a payment method
3. Set up **"Auto-recharge"** or add credits manually
4. Recommended: Start with $10 (generates 80-100 blog posts)

### 3. Add API Key to GitHub

1. Go to your GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Name: `OPENAI_API_KEY`
5. Value: Paste your OpenAI API key
6. Click **"Add secret"**

### 4. Test Locally (Optional)

```bash
cd chowboy-website

# Set your API key
export OPENAI_API_KEY="sk-YOUR-KEY-HERE"

# Test it
npm run blog:test

# Generate a post
npm run blog:generate
```

### 5. Done!

The GitHub Actions workflow will now use your OpenAI API key to generate blog posts every Monday and Thursday.

## 💰 Cost Comparison

### OpenAI Pricing (GPT-4 Turbo)

| Metric | Cost |
|--------|------|
| Per 1K tokens (input) | $0.01 |
| Per 1K tokens (output) | $0.03 |
| Per blog post | ~$0.08-0.12 |
| Per month (8 posts) | ~$0.64-0.96 |
| Per year (96 posts) | ~$8-12 |

### Comparison

| Provider | Model | Cost/Year |
|----------|-------|-----------|
| **OpenAI** | GPT-4 Turbo | **$8-12** |
| OpenRouter | Claude 3.5 Sonnet | $18-24 |
| Freelance Writer | Human | $5,000-19,000 |

**OpenAI is actually cheaper!** 🎉

## 🎯 Model Options

The script is configured to use **GPT-4 Turbo** which gives excellent quality. You can change models by editing `scripts/generate-blog-post.js`:

```javascript
// Current (best quality)
model: 'gpt-4-turbo-preview'

// Alternatives:
model: 'gpt-4'              // Slightly older, similar quality
model: 'gpt-3.5-turbo'      // Much cheaper (~$0.50/year) but lower quality
```

### Recommendation

Stick with **GPT-4 Turbo** for the best quality. At $8-12/year, it's incredibly cheap for the value you get.

## 🔐 Security

- API keys are stored as **GitHub Secrets** (encrypted)
- Keys are never exposed in logs or code
- Only GitHub Actions can access them
- You can rotate keys anytime at platform.openai.com

## 📊 Monitor Usage

Check your OpenAI usage:

1. Go to [platform.openai.com](https://platform.openai.com)
2. Click **"Usage"** in sidebar
3. See daily/monthly costs
4. Set up usage limits if desired

### Set Usage Limits (Recommended)

To avoid unexpected charges:

1. Go to **"Billing"** → **"Usage limits"**
2. Set **Monthly budget**: $5
3. You'll get email alerts if you approach the limit

## 🧪 Testing

Test that everything works:

```bash
# Set your API key
export OPENAI_API_KEY="sk-..."

# Run full test suite
npm run blog:test

# Generate a test post
npm run blog:generate

# Check the output
ls -la content/blog/
```

## 🚨 Troubleshooting

### "OPENAI_API_KEY environment variable is not set"

**Solution**: Set the environment variable:
```bash
export OPENAI_API_KEY="sk-YOUR-KEY-HERE"
```

### "OpenAI API error: 401 Unauthorized"

**Solution**: Your API key is invalid. Double-check:
- Key copied correctly (including all characters)
- Key hasn't been revoked
- Generate a new key at platform.openai.com

### "OpenAI API error: 429 Too Many Requests"

**Solution**: You've hit the rate limit. Wait a few minutes and try again.

### "OpenAI API error: 400 Bad Request"

**Solution**: Check that the model name is correct in `scripts/generate-blog-post.js`:
```javascript
model: 'gpt-4-turbo-preview'  // Must be exact
```

### "Insufficient credits"

**Solution**: Add more credits:
1. Go to platform.openai.com
2. **Billing** → **Payment methods**
3. Add credits or set up auto-recharge

## 🎨 Customization

### Change the Model

Edit `scripts/generate-blog-post.js`:

```javascript
// For best quality (recommended)
model: 'gpt-4-turbo-preview'

// For lowest cost
model: 'gpt-3.5-turbo'

// For balanced quality/cost
model: 'gpt-4'
```

### Adjust Creativity

```javascript
temperature: 0.8  // Current (good balance)
temperature: 0.7  // More focused and consistent
temperature: 0.9  // More creative and varied
```

## 🔄 Migration from OpenRouter

If you were previously using OpenRouter:

1. ✅ **Script updated** - Now uses OpenAI API
2. ✅ **Workflow updated** - Now uses `OPENAI_API_KEY`
3. ✅ **Model changed** - From Claude 3.5 to GPT-4 Turbo
4. ✅ **Costs reduced** - 50% cheaper!

**All you need to do:**
- Get OpenAI API key
- Add as GitHub Secret: `OPENAI_API_KEY`
- Old `OPENROUTER_API_KEY` secret can be deleted

## 📈 Expected Quality

GPT-4 Turbo produces:
- ✅ 1200-1800 word blog posts
- ✅ Natural, conversational tone
- ✅ SEO-optimized content
- ✅ Proper formatting with headers
- ✅ Practical tips and examples
- ✅ Grammatically correct
- ✅ Factually accurate (mostly)

Quality is **excellent** and comparable to Claude 3.5 Sonnet.

## 💡 Pro Tips

1. **Set a monthly budget** ($5-10 is plenty)
2. **Monitor usage** weekly for first month
3. **Review posts** occasionally for quality
4. **Use GPT-4 Turbo** for best results
5. **Keep API key secure** - never commit to git

## 📚 Additional Resources

- **OpenAI Platform**: [platform.openai.com](https://platform.openai.com)
- **OpenAI Documentation**: [platform.openai.com/docs](https://platform.openai.com/docs)
- **Pricing**: [openai.com/pricing](https://openai.com/pricing)
- **Usage Dashboard**: [platform.openai.com/usage](https://platform.openai.com/usage)

## ✅ Checklist

Before going live:

- [ ] OpenAI account created
- [ ] API key generated
- [ ] Credits added ($10 recommended)
- [ ] GitHub Secret set: `OPENAI_API_KEY`
- [ ] Local test successful: `npm run blog:test`
- [ ] First post generated successfully
- [ ] Usage limit set (optional but recommended)
- [ ] GitHub Actions workflow runs successfully

## 🎉 You're All Set!

The system will now automatically generate blog posts using OpenAI's GPT-4 Turbo every Monday and Thursday. Enjoy your automated content marketing! 🚀

---

**Next Steps:**
- See `BLOG_QUICKSTART.md` for overall setup
- See `AUTO_BLOG_SETUP.md` for customization
- See `BLOG_CHEATSHEET.md` for quick reference

