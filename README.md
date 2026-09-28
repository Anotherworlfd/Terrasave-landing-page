# TerraSave - Green Energy Consulting Landing Page

A high-converting, modern B2B landing page for a green energy consulting and audit services firm. Built with Next.js 15, React 19, Tailwind CSS v4, and Motion.

## Setup & Installation

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Edit .env.local and replace G-XXXXXXXXXX with your actual GA4 measurement ID
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  ├── layout.tsx           # Root layout, fonts, GA4, metadata
  ├── page.tsx             # Home page (composes all sections)
  ├── globals.css          # Tailwind config, theme tokens, reduced-motion
  └── sections/
      ├── hero.tsx         # Hero section with asymmetric split layout
      ├── logo-marquee.tsx # Logo wall with monogram marks
      ├── services.tsx     # Service cards (Energy Consulting, Audits)
      ├── why-us.tsx       # Value propositions grid
      ├── lead-form.tsx    # Contact form
      └── footer.tsx       # Footer with contact details

components/
  └── ui/
      ├── button.tsx       # Primary/secondary CTA buttons
      ├── input.tsx        # Text input with label above
      └── select.tsx       # Dropdown select with underline style

lib/
  └── utils.ts            # Utility functions (cn helper)
```

## Design System

### Colors
- **Primary**: Emerald #059669 (headings, CTAs, accents)
- **Sage**: Emerald-50 #ecfdf5 (section backgrounds, form areas)
- **Text**: Charcoal #1F2937 (body text)
- **Surfaces**: White #FFFFFF, Gray-50 #F9FAFB

### Typography
- **Headings**: Syne (bold, geometric sans-serif)
- **Body**: Plus Jakarta Sans (clean, legible)

### Components
- **Cards**: `rounded-2xl` (16px radius), `shadow-lg` default, `hover:shadow-xl` on interactive cards
- **Buttons**: `rounded-full` (pill style), emerald background, white text, active `scale-[0.98]`
- **Inputs**: Underline-only border style, label above, focus emerald

### Motion
- **Entry**: Fade-up stagger on load and scroll reveal
- **Hover**: Card elevation `-translate-y-2`, icon scale `1.1`
- **CTA Active**: Button scale `0.98`
- **Reduced Motion**: All animations disabled via `prefers-reduced-motion: reduce`

## Key Features

✅ **B2B SEO-Optimized**: Metadata API, OG tags, structured for enterprise keywords  
✅ **GA4 Integration**: Ready for analytics (set `NEXT_PUBLIC_GA_ID` in .env.local)  
✅ **Responsive**: Mobile-first design, tested at 320px, 768px, 1024px+, 1440px+  
✅ **Accessibility**: WCAG AA contrast, semantic HTML, labels above inputs, focus rings  
✅ **Performance**: LCP < 2.5s, next/image priority, no layout shift  
✅ **Dark Mode Ready**: System-preference dark mode with CSS variables  
✅ **Motion**: Fluid animations with Motion library, respects reduced-motion  
✅ **Zero Fluff**: No em-dashes, generic names, fake numbers, or AI tells  

## SEO & Metadata

The page targets:
- "Commercial Green Energy Consulting"
- "B2B Energy Audit Services"
- "Enterprise Sustainability"
- "ESG Roadmap"
- "Renewable Energy Transition"

Update title, description, and keywords in `app/layout.tsx` to match your brand.

## Form Handling

The lead form (`app/sections/lead-form.tsx`) includes:
- Full Name
- Company Name
- Work Email
- Company Size (dropdown)
- Service of Interest (dropdown)
- Success state after submission

Currently shows a mock success message. To connect a real backend:
1. Replace the `handleSubmit` function in `lead-form.tsx`
2. Add API endpoint logic in `app/api/contact/route.ts` (or similar)
3. Update the form state to handle API response

## Analytics

Google Analytics 4 is configured in `app/layout.tsx`. To enable:
1. Replace `G-XXXXXXXXXX` in `.env.local` with your GA4 Measurement ID
2. Events will auto-track on page load

To add custom events, import and call:
```typescript
import { useEffect } from 'react'

useEffect(() => {
  if (window.gtag) {
    window.gtag('event', 'view_consultation_cta')
  }
}, [])
```

## Testing

### Manual Testing
- **Responsive**: Resize browser to 320px, 768px, 1024px widths
- **Theme**: Toggle OS dark mode (`Settings > Display > Dark mode`)
- **Motion**: Enable `Prefers reduced motion` in OS settings; animations should disable
- **Forms**: Tab through fields, verify focus rings and validation
- **Contrast**: Use browser DevTools Lighthouse audit for WCAG compliance

### Build Verification
```bash
npm run build
npm run lint
```

## Performance Optimization

- Hero image uses `next/image` with `priority` flag for LCP
- Fonts loaded via `next/font/google` with `display: swap`
- Tailwind v4 CSS-first (no runtime overhead)
- Motion animations use GPU-optimized `transform` and `opacity`
- Scripts loaded `afterInteractive` to prevent blocking

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```bash
docker build -t terrasave-landing .
docker run -p 3000:3000 terrasave-landing
```

### Standard Node.js
```bash
npm run build
npm start
```

## Customization

### Brand Name
Replace "TerraSave" throughout:
- `app/layout.tsx` (metadata, GA ID)
- `app/sections/footer.tsx` (company name, contact details)
- `app/sections/logo-marquee.tsx` (placeholder company names)

### Colors
Edit CSS variables in `app/globals.css`:
```css
--color-primary: #059669;       /* emerald-600 */
--color-sage: #A7F3D0;          /* emerald-200 */
--color-charcoal: #1F2937;      /* gray-800 */
```

### Copy
All section headlines, descriptions, and CTAs are in the component files under `app/sections/`.

### Contact Info
Update in `app/sections/footer.tsx`:
- Phone number
- Email address
- Physical address

## License

Private project. All rights reserved.

## Support

For issues or questions, refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Motion Documentation](https://motion.dev/)
- [Phosphor Icons](https://phosphoricons.com/)
