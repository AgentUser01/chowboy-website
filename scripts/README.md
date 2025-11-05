# Blog Generation Scripts

## Scripts in this directory

### 🤖 `generate-blog-post.js`
**Main blog generation script**

Automatically generates SEO-optimized blog posts using AI (Claude 3.5 Sonnet via OpenRouter).

**Features:**
- 70+ pre-defined SEO topics
- Smart topic selection (avoids duplicates)
- 1200-1800 word blog posts
- Automatic SEO metadata generation
- Featured image assignment

**Usage:**
```bash
export OPENROUTER_API_KEY="sk-or-v1-..."
node scripts/generate-blog-post.js
```

or

```bash
npm run blog:generate
```

**Output:** Creates a new `.mdx` file in `content/blog/`

---

### 🧪 `test-blog-generator.js`
**Testing suite for blog generation**

Comprehensive tests to verify the blog generation system is working correctly.

**Tests:**
1. API key configuration
2. Blog directory structure
3. AI content generation
4. SEO metadata generation
5. Full blog post creation

**Usage:**
```bash
export OPENROUTER_API_KEY="sk-or-v1-..."
node scripts/test-blog-generator.js
```

or

```bash
npm run blog:test
```

**Output:** Detailed test results and quality checks

---

### 🛠️ `fix-github-pages.js`
**GitHub Pages build fixer**

Ensures Next.js static export works properly with GitHub Pages by adding necessary files.

**Usage:**
```bash
npm run build:gh
```

(Automatically runs this script after build)

---

## Quick Start

### First Time Setup

1. **Get API Key**
   ```bash
   # Sign up at openrouter.ai
   # Generate API key
   # Add credits ($5 recommended)
   ```

2. **Set Environment Variable**
   ```bash
   export OPENROUTER_API_KEY="sk-or-v1-YOUR-KEY-HERE"
   ```

3. **Test the System**
   ```bash
   npm run blog:test
   ```

4. **Generate a Post**
   ```bash
   npm run blog:generate
   ```

5. **Check Output**
   ```bash
   ls -la ../content/blog/
   ```

### Production Use

For production, the `generate-blog-post.js` script runs automatically via GitHub Actions every Monday and Thursday. No manual execution needed!

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENROUTER_API_KEY` | Yes | OpenRouter API key for AI generation |
| `GITHUB_ACTIONS` | No | Set automatically by GitHub Actions |

---

## Error Handling

All scripts include comprehensive error handling:

- ✅ API key validation
- ✅ Rate limit handling
- ✅ Network error recovery
- ✅ File system checks
- ✅ Detailed error messages

If a script fails, check:
1. API key is set correctly
2. OpenRouter account has credits
3. Network connection is stable
4. File permissions are correct

---

## Adding Your Own Scripts

To add new automation scripts to this directory:

1. Create `your-script.js` in this folder
2. Add script to `package.json`:
   ```json
   "scripts": {
     "your-command": "node scripts/your-script.js"
   }
   ```
3. Document usage in this README

---

## Documentation

For complete documentation, see:

- **Quick Start**: `../BLOG_QUICKSTART.md`
- **Full Guide**: `../AUTO_BLOG_SETUP.md`
- **Implementation**: `../AUTO_BLOG_IMPLEMENTATION_SUMMARY.md`
- **Cheat Sheet**: `../BLOG_CHEATSHEET.md`

---

## Troubleshooting

**"OPENROUTER_API_KEY environment variable is not set"**
→ Run: `export OPENROUTER_API_KEY="your-key"`

**"OpenRouter API error: 401"**
→ API key is invalid. Check your key at openrouter.ai

**"OpenRouter API error: 429"**
→ Rate limit exceeded. Wait a few minutes and try again.

**"Insufficient credits"**
→ Add more credits to your OpenRouter account

**"No topics available"**
→ All topics used. Add more topics or system will recycle.

---

**Questions?** See the main documentation files in the parent directory.








