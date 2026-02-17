# Glorious Public School - Hazaribagh

Premium residential and day boarding school website built with Next.js, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This is the official website for Glorious Public School, Maheshra, Hazaribagh - a premier residential and day boarding school established in 1999, providing quality English medium education for Grades 1 to 10.

## ✨ Features

- **SEO Optimized**: Complete meta tags, OpenGraph, structured data (JSON-LD)
- **Hyperlocal Keywords**: Targeted for Hazaribagh, Jharkhand
- **Responsive Design**: Mobile-first approach, works on all devices
- **Premium UI**: Professional design with smooth animations
- **Static Export**: No backend required, can be deployed anywhere
- **Performance**: Optimized for fast loading

## 🏗️ Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Static Export Compatible

## 📁 Project Structure

```
saraswati-school/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── admissions/         # Admissions page
│   ├── facilities/         # Facilities page
│   ├── results/            # Results page
│   ├── blog/               # Blog page
│   ├── contact/            # Contact page
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── CTASection.tsx
│   ├── ResultsSection.tsx
│   ├── PrincipalMessage.tsx
│   ├── FacilitiesGrid.tsx
│   └── Testimonials.tsx
└── public/
    └── robots.txt
```

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Export static site:
```bash
npm run build
```

The static files will be in the `out` directory.

## 🎨 Design Features

- **Color Scheme**: Deep Royal Blue (Primary), Saffron (Accent), White (Background)
- **Typography**: Playfair Display (Headings), Inter (Body)
- **Animations**: Smooth scroll, hover effects, transitions
- **Components**: Sticky navbar, floating WhatsApp button, mobile call button

## 📱 Pages

1. **Home**: Hero, Why Choose Us, Results, Principal Message, Facilities, Testimonials, Location
2. **About**: School story, Vision & Mission, CBSE affiliation, Leadership, Core values
3. **Admissions**: Eligibility, Documents, Fee structure, Enquiry form, FAQ
4. **Facilities**: Detailed facility cards with features
5. **Results**: Year-wise results, Toppers, Achievements
6. **Blog**: 3 sample articles on education topics
7. **Contact**: Contact form, Info, Map

## 🔍 SEO Features

- Unique title and meta description for each page
- OpenGraph tags for social sharing
- Structured data (School, Organization, LocalBusiness, FAQ)
- Dynamic sitemap generation
- Robots.txt included
- Hyperlocal keywords naturally integrated

## 📊 Performance

- Static export for fast loading
- Optimized images (unoptimized for static export)
- Minimal JavaScript
- CSS optimized with Tailwind

## 🌐 Deployment

Can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📝 Customization

To customize for another school:
1. Update school name and details in `layout.tsx`
2. Modify colors in `tailwind.config.ts`
3. Update content in page files
4. Replace placeholder images in `/public/images/`
5. Update contact information and location

## 📄 License

This is a demo project for educational purposes.

## 🤝 Support

For questions or support, contact the development team.
