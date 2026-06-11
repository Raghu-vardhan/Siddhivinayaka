# Siddhivinayak Dyes & Chemical Industries — React Website

Built with **React 18 + Vite + React Router**. Six pages, shared layout, reusable
components, animated counters, scroll-reveal, and the teal brand design system.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production
```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Deploy to Netlify
- Connect the repo (or drag the project folder into Netlify).
- Build command: `npm run build`   ·   Publish directory: `dist`
- `public/_redirects` is already included so client-side routing works
  (all routes fall back to index.html).

## Project structure
```
src/
  main.jsx              App entry + Router
  App.jsx               Routes + scroll management
  index.css             Design system (teal brand)
  data/site.js          Nav, products, company info (edit content here)
  components/
    Layout.jsx          TopBar + Header + MobileMenu + Footer + WhatsApp
    Reveal.jsx          Scroll-reveal wrapper (IntersectionObserver)
    Counter.jsx         Animated number counter
    Icon.jsx            Shared SVG icon set
    Bits.jsx            PageHero, SectionHead, ProductCard, Stat, CTA
  pages/                Home, About, Products, Manufacturing, Career, Contact
public/assets/          logo.png, team.jpeg
```

## Before going live (same notes as the static version)
- Product / facility / client-logo IMAGES load from siddhivinayakind80.com.
  Download them into /public/assets and update the URLs in src/data/site.js
  and the pages, so the site doesn't depend on the old WordPress host.
- The CONTACT and CAREER forms are front-end only (show a success message).
  Wire them to Formspree, a Netlify Form, or your own API to receive email.
- Replace footer social links ("#") with real URLs.
- Swap the generic Google Map embed for the exact office location.

## Edit content
Most text lives directly in the page components under src/pages/.
Products and navigation live in src/data/site.js.
