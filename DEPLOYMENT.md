# Deployment Guide

## Static Export

This Next.js application is configured for static export, making it easy to deploy to any static hosting service.

### Build for Production

```bash
npm run build
```

This will create an `out` directory with all static files.

## Deployment Options

### 1. Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Custom domain can be added in project settings

### 2. Netlify

1. Push code to GitHub
2. Create new site in Netlify
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy

### 3. GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d out"
   ```
3. Build: `npm run build`
4. Deploy: `npm run deploy`

### 4. Traditional Hosting (cPanel, etc.)

1. Build: `npm run build`
2. Upload contents of `out` directory to public_html
3. Ensure .htaccess is configured for clean URLs

## Environment Setup

### Domain Configuration

Update the base URL in:
- `app/layout.tsx` - metadataBase
- `app/sitemap.ts` - baseUrl
- `public/robots.txt` - Sitemap URL

### Custom Domain

After deployment, configure your custom domain:
1. Add domain in hosting provider
2. Update DNS records (A record or CNAME)
3. Enable SSL certificate
4. Update all URLs in the code

## Pre-Deployment Checklist

- [ ] Update school name and contact details
- [ ] Replace placeholder images
- [ ] Update Google Maps embed with actual location
- [ ] Configure contact form backend (if needed)
- [ ] Test all pages and links
- [ ] Verify mobile responsiveness
- [ ] Check SEO meta tags
- [ ] Test page load speed
- [ ] Verify sitemap.xml is accessible
- [ ] Check robots.txt

## Post-Deployment

1. Submit sitemap to Google Search Console
2. Verify site in Google Search Console
3. Set up Google Analytics (optional)
4. Test all forms and CTAs
5. Monitor site performance

## Performance Optimization

- Images should be optimized (WebP format recommended)
- Enable CDN if available
- Configure caching headers
- Enable Gzip compression
- Minify CSS/JS (done automatically by Next.js)

## Maintenance

- Update content regularly
- Monitor site analytics
- Keep dependencies updated
- Backup site regularly
- Monitor uptime

## Support

For deployment issues, refer to:
- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [Netlify Deployment Docs](https://docs.netlify.com/)
