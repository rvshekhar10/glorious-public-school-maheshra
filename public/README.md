# Asset Folder Structure

This directory contains all the static assets for the Glorious Public School website.

## Directory Structure

- `/public/logo.png`: Main school logo.
- `/public/images/`: General images for the website.
  - `hero/`: Background images and featured images for the Hero section.
  - `gallery/`: Event and campus photos for the gallery page.
  - `staff/`: Photos of the Principal, faculty, and administration.
- `/public/videos/`: Promotional videos and virtual campus tours.
- `/public/docs/`: PDF documents such as:
  - Admission Forms
  - Prospectus
  - Fee Structure
  - Academic Calendar

## Asset Requirements

- **Images**: Prefer WebP or optimized PNG/JPEG.
- **Videos**: Use MP4 (H.264) for best compatibility.
- **Documents**: Always use PDF format for consistency across devices.

## How to use in code

In Next.js, files in the `public` folder can be referenced starting from the base URL (`/`).

Example:
```jsx
<img src="/images/hero/hero-bg.png" alt="Hero Image" />
```
