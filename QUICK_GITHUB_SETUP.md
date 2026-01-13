# ⚡ Quick GitHub Setup (3 Minutes)

You've added the API key! Now just 2 more steps to enable auto-posting:

---

## Step 1: Enable Write Permissions ⚙️

**This lets the bot commit blog posts automatically!**

1. Go to your repo on GitHub.com
2. Click **Settings** (top tab)
3. Click **Actions** → **General** (left sidebar)
4. Scroll to **"Workflow permissions"** section
5. Select: ⭐ **"Read and write permissions"**
6. Check: ⭐ **"Allow GitHub Actions to create and approve pull requests"**
7. Click **Save**

**Why?** Without this, GitHub Actions can't push new blog posts to your repo!

---

## Step 2: Push the Workflow File 📤

Make sure the automation files are in GitHub:

```bash
cd chowboy-website

# Add all the files
git add .

# Commit
git commit -m "Add automated blog system with OpenAI"

# Push to GitHub
git push origin main
```

---

## Step 3: Test It! 🧪

1. Go to your repo on GitHub
2. Click **"Actions"** tab
3. Click **"Auto-Generate Blog Posts"** (left side)
4. Click **"Run workflow"** button (top right)
5. Click green **"Run workflow"** button
6. Watch it run! (takes ~30-60 seconds)

If it succeeds (green checkmark ✅):
- Check `content/blog/` for a new post
- Your site will redeploy automatically
- You're done! 🎉

---

## That's It!

From now on:
- **Every Monday at 10 AM UTC** → New blog post
- **Every Thursday at 10 AM UTC** → New blog post
- **Zero manual work required!**

---

## Quick Troubleshooting

**"Workflow failed with permission error"**
→ Go back to Step 1, enable write permissions

**"OPENAI_API_KEY not found"**
→ Settings → Secrets → Actions → Add `OPENAI_API_KEY`

**"npm ci failed"**
→ Make sure `package.json` and `package-lock.json` are committed

---

## Visual Guide

```
Your GitHub Repo
    ↓
Settings (tab)
    ↓
Actions → General (sidebar)
    ↓
Scroll to "Workflow permissions"
    ↓
Select "Read and write permissions" ✅
    ↓
Check "Allow GitHub Actions..." ✅
    ↓
Click Save
    ↓
DONE! ✨
```

---

**See detailed instructions**: `GITHUB_ACTIONS_SETUP.md`












