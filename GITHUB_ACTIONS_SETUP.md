# GitHub Actions Setup for Auto-Blog

## ✅ You've Already Done:
- [x] Created the workflow file (`.github/workflows/auto-blog-posts.yml`)
- [x] Added `OPENAI_API_KEY` to GitHub Secrets

## 🔧 What You Still Need to Do:

### Step 1: Enable GitHub Actions (1 minute)

1. Go to your repository on GitHub
2. Click the **"Actions"** tab
3. If you see a message about workflows, click **"I understand my workflows, go ahead and enable them"**

### Step 2: Configure Workflow Permissions (IMPORTANT!)

**Without this, the bot can't commit blog posts!**

1. Go to your repo on GitHub
2. Click **"Settings"**
3. In the left sidebar, click **"Actions"** → **"General"**
4. Scroll down to **"Workflow permissions"**
5. Select: **"Read and write permissions"** ✅
6. Check: **"Allow GitHub Actions to create and approve pull requests"** ✅
7. Click **"Save"**

**This allows the bot to commit new blog posts!**

### Step 3: Push Your Workflow File (if not already)

Make sure the workflow file is in your repository:

```bash
cd chowboy-website

# Check if workflow file exists
ls -la .github/workflows/

# If it exists, commit and push everything
git add .
git commit -m "Add automated blog generation system"
git push origin main
```

### Step 4: Test It! (1 minute)

Run the workflow manually to make sure everything works:

1. Go to **"Actions"** tab in GitHub
2. Click **"Auto-Generate Blog Posts"** in the left sidebar
3. Click **"Run workflow"** button (top right)
4. Select branch: **main**
5. Click green **"Run workflow"** button

Watch it run! It should:
- ✅ Generate a blog post using OpenAI
- ✅ Commit it to your repo
- ✅ Push to main branch
- ✅ Trigger GitHub Pages deployment

### Step 5: Verify It Worked

1. Check the workflow run completed successfully (green checkmark)
2. Go to your repo's main page
3. Look in `content/blog/` - you should see a new `.mdx` file!
4. Check your website in a few minutes to see the new post

---

## 🗓️ Automatic Schedule

Once set up, the workflow runs automatically:

- **Every Monday at 10 AM UTC**
- **Every Thursday at 10 AM UTC**
- That's **8 blog posts per month!**

No manual intervention needed!

---

## 🔍 How It Works

Here's what happens automatically:

```
Monday/Thursday 10 AM UTC
    ↓
GitHub Actions wakes up
    ↓
Runs generate-blog-post.js
    ↓
OpenAI generates blog content
    ↓
Saves to content/blog/new-post.mdx
    ↓
Bot commits: "🤖 Auto-generated blog post: [Title]"
    ↓
Pushes to main branch
    ↓
GitHub Pages rebuilds website
    ↓
New post is LIVE! ✨
```

**Total time: ~30-60 seconds**

---

## 🐛 Troubleshooting

### "Workflow not showing up in Actions tab"

**Solution**: Make sure the workflow file is committed and pushed:
```bash
git add .github/workflows/auto-blog-posts.yml
git commit -m "Add blog workflow"
git push origin main
```

### "Workflow runs but doesn't commit"

**Solution**: You need to enable write permissions (Step 2 above)
1. Settings → Actions → General
2. Workflow permissions → "Read and write permissions"
3. Save

### "Permission denied" error

**Solution**: Check workflow permissions:
```yaml
# In .github/workflows/auto-blog-posts.yml
permissions:
  contents: write        # This allows committing
  pull-requests: write   # This allows PRs
```

### "npm ci failed"

**Solution**: Your `package.json` or `package-lock.json` might be missing. Make sure both are committed:
```bash
git add package.json package-lock.json
git commit -m "Add package files"
git push
```

### "OpenAI API error"

**Solution**: Double-check your API key:
1. Settings → Secrets → Actions
2. Verify `OPENAI_API_KEY` is set correctly
3. Check you have credits at platform.openai.com

---

## 📊 Monitoring

### Check Workflow Runs

1. Go to **"Actions"** tab
2. See all past runs
3. Click any run to see detailed logs
4. Green checkmark = success! ✅
5. Red X = something went wrong ❌

### Get Email Notifications

GitHub will email you if a workflow fails. You can also:
1. Go to your GitHub settings (not repo settings)
2. Click **"Notifications"**
3. Configure how you want to be notified

---

## 📝 Quick Checklist

Before the first automatic run, verify:

- [ ] Workflow file is in `.github/workflows/auto-blog-posts.yml`
- [ ] Workflow file is committed and pushed to GitHub
- [ ] GitHub Actions are enabled in your repo
- [ ] Workflow permissions set to "Read and write"
- [ ] `OPENAI_API_KEY` is added to GitHub Secrets
- [ ] You have OpenAI credits
- [ ] Manual test run completed successfully
- [ ] New blog post appeared in `content/blog/`

---

## 🎉 You're All Set!

Once you complete these steps, the system runs 100% automatically:

✅ No manual blog writing  
✅ No manual commits  
✅ No manual deployments  
✅ Just automatic organic content every 2-3 days!

---

## 🆘 Still Stuck?

If you're having issues:

1. **Check the workflow logs** - Actions tab → Click failed run → See error messages
2. **Verify permissions** - Settings → Actions → General → Workflow permissions
3. **Check the secret** - Settings → Secrets → Actions → OPENAI_API_KEY
4. **Test locally first** - `npm run blog:test` to verify API key works
5. **Manual run** - Actions → Run workflow → See what happens

Most issues are either:
- Missing workflow permissions (Step 2)
- Missing/wrong API key (check GitHub Secrets)
- Missing package.json/package-lock.json

---

**Once it's working, you never have to think about it again!** 🚀












