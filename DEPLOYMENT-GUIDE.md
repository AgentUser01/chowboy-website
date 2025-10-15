# Chowboy Website Deployment Guide

## Quick Start: Deploy to Production

### Option 1: GitHub Pages (Current Setup)

#### Initial Setup
1. Make sure gh-pages package is installed:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json` with deployment script:
```json
{
  "scripts": {
    "deploy": "npm run build && touch out/.nojekyll && cp public/CNAME out/CNAME && gh-pages -d out -t true"
  }
}
```

#### Deploy
```bash
npm run deploy
```

This will:
- Build the static site
- Copy CNAME file to preserve custom domain
- Deploy to gh-pages branch
- Update chowboy.io automatically

### Option 2: Vercel (Recommended for Next.js)

Vercel provides the best experience for Next.js apps with automatic deployments, preview URLs, and analytics.

#### Setup

1. **Install Vercel CLI** (optional):
```bash
npm i -g vercel
```

2. **Deploy via Dashboard** (easier):
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub: `ChowboyTogether/chowboy-website-next`
   - Configure:
     - Framework Preset: Next.js
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `out`
   - Add Environment Variable: `NEXT_PUBLIC_SITE_URL=https://chowboy.io`
   - Click Deploy

3. **Configure Custom Domain**:
   - In Project Settings → Domains
   - Add `chowboy.io` and `www.chowboy.io`
   - Update DNS records as instructed by Vercel
   - SSL certificate will be auto-generated

#### Deploy via CLI (after initial setup)
```bash
vercel --prod
```

### Option 3: Netlify

1. **Via Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Deploy

2. **Configure Custom Domain**:
   - Site settings → Domain management
   - Add custom domain: `chowboy.io`
   - Update DNS records as instructed

## Post-Deployment Checklist

### 1. Verify Deployment

- [ ] Homepage loads: https://chowboy.io
- [ ] Blog page works: https://chowboy.io/blog/
- [ ] Recipe page works: https://chowboy.io/recipes/
- [ ] Features page loads: https://chowboy.io/features/
- [ ] All blog posts accessible
- [ ] All recipes accessible
- [ ] Mobile responsive design works
- [ ] Images load correctly
- [ ] App Store badge links work

### 2. SEO Setup

- [ ] Submit sitemap to Google Search Console
  - URL: `https://chowboy.io/sitemap.xml`
  - Go to: https://search.google.com/search-console
  - Add property: `chowboy.io`
  - Verify ownership (DNS or HTML file)
  - Submit sitemap

- [ ] Submit sitemap to Bing Webmaster Tools
  - URL: `https://chowboy.io/sitemap.xml`
  - Go to: https://www.bing.com/webmasters
  - Add site and verify
  - Submit sitemap

- [ ] Verify robots.txt is accessible
  - Check: `https://chowboy.io/robots.txt`
  - Should return:
    ```
    User-agent: *
    Allow: /
    Disallow: /api/
    Disallow: /admin/
    Sitemap: https://chowboy.io/sitemap.xml
    ```

### 3. Analytics Setup

- [ ] Set up Google Analytics 4
  - Create GA4 property at https://analytics.google.com
  - Add tracking code to `app/layout.tsx`
  - Example:
    ```typescript
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
      strategy="afterInteractive"
    />
    ```

- [ ] Configure Google Search Console
  - Verify: Property type (Domain or URL prefix)
  - Link to Google Analytics
  - Enable email reports

- [ ] (Optional) Set up Vercel Analytics
  - Automatically available if using Vercel
  - No configuration needed

### 4. Performance Monitoring

- [ ] Test Core Web Vitals
  - Use: https://pagespeed.web.dev/
  - Target: All green scores
  - Check both mobile and desktop

- [ ] Verify structured data
  - Use: https://search.google.com/test/rich-results
  - Test homepage, blog posts, and recipes
  - Ensure no errors in Schema.org markup

- [ ] Check mobile usability
  - Use: Google Search Console → Mobile Usability
  - Fix any issues reported

### 5. Social Media Verification

- [ ] Test Open Graph tags
  - Use: https://www.opengraph.xyz/
  - Or Facebook's Sharing Debugger: https://developers.facebook.com/tools/debug/
  - Verify image, title, and description appear correctly

- [ ] Test Twitter Cards
  - Use: https://cards-dev.twitter.com/validator
  - Verify card preview looks good

## Domain Configuration

### DNS Settings for chowboy.io

If using **GitHub Pages**:
```
A     @       185.199.108.153
A     @       185.199.109.153
A     @       185.199.110.153
A     @       185.199.111.153
CNAME www     yourusername.github.io
```

If using **Vercel**:
```
A     @       76.76.21.21
CNAME www     cname.vercel-dns.com
```

If using **Netlify**:
```
A     @       75.2.60.5
CNAME www     YOUR-SITE.netlify.app
```

## Troubleshooting

### Issue: 404 on refresh for dynamic routes

**Solution**: Ensure `trailingSlash: true` is set in `next.config.ts` and `output: 'export'` is configured.

### Issue: Images not loading

**Solution**: 
1. Check images are in `public/images/` directory
2. Verify `next.config.ts` has `images: { unoptimized: true }`
3. Use relative paths: `/images/your-image.png`

### Issue: Sitemap not generating

**Solution**:
1. Ensure `content/blog/` and `content/recipes/` directories exist
2. Check that content files have correct frontmatter/JSON structure
3. Rebuild: `npm run build`

### Issue: CSS not loading

**Solution**:
1. Verify `@tailwind` directives are in `app/globals.css`
2. Check `tailwind.config.ts` is configured correctly
3. Clear `.next` cache: `rm -rf .next && npm run build`

## Continuous Deployment

### GitHub Actions (Automated Deployment)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
          cname: chowboy.io
```

## Monitoring & Maintenance

### Weekly Tasks
- [ ] Check Google Search Console for errors
- [ ] Review analytics for traffic patterns
- [ ] Check Core Web Vitals scores

### Monthly Tasks
- [ ] Publish 8-12 new blog posts/recipes
- [ ] Review and update outdated content
- [ ] Check backlink profile
- [ ] Monitor keyword rankings

### Quarterly Tasks
- [ ] Full SEO audit
- [ ] Update dependencies: `npm update`
- [ ] Review and optimize images
- [ ] Analyze conversion funnel

## Support

Questions about deployment?
- Email: support@chowboy.io
- Check README.md for additional documentation

---

Happy deploying! 🚀

