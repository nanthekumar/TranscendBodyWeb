# TranscendBody — Fitness Transformation Website

**Transcend Within. From Victim to Creator.**

A modern, responsive fitness website that showcases the TranscendBody approach across Workouts, Nutrition, Recovery, and Mindset. Built with HTML, CSS, and JavaScript, designed for GitHub Pages, and optimized for clean UX, accessibility, and performance.

This website is the public-facing home for the TranscendBody ecosystem (daily tracker app, coaching, and programs). It's built to be fast, clear, and brand-consistent—and future-ready for AI automation and personal coaching agents.

## ✨ Highlights

- Mobile-first, responsive UI with clean typography (Inter), modern layout (Grid/Flex), and smooth micro-interactions.
- Clear conversion flow: hero CTA → programs → testimonials → contact.
- Interactive details: hover states, smooth scrolling, animated counters, and active menu highlights.
- Performance-minded: lazy assets, throttled scroll handlers, Intersection Observer for reveal animations.
- Accessible by default: semantic HTML, ARIA where needed, focus states, and color-contrast checks.
- Pages-ready: zero build tools, works on any static host; GitHub Pages in minutes.

## 🧭 Information Architecture

- **Hero** — Power headline, subhead, CTA
- **About** — What TranscendBody is, who it's for
- **Programs** — Beginner / Pro / Master tiers (pricing optional)
- **Services** — Coaching, assessments, routines, recovery protocols
- **Testimonials** — Social proof with star ratings
- **Stats** — Animated counters (e.g., sessions, lbs lost, habits built)
- **CTA** — Book a consult / Start 90-day plan
- **Contact** — Validated form + socials
- **Footer** — Links, legal, brand note

## 🧩 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Layout**: CSS Grid + Flexbox
- **Icons**: Font Awesome (or local SVGs)
- **Charts** (optional): Chart.js if you add lightweight dashboards later
- **Hosting**: GitHub Pages (no server dependencies)

## 🚀 Quick Start

### 1) Run locally

```bash
# Clone
git clone https://github.com/<your-username>/TranscendBodyWeb.git
cd TranscendBodyWeb

# Open locally
# Option A: double-click index.html
# Option B: simple static server (Python3)
python3 -m http.server 8080
# Visit http://localhost:8080
```

## 🗂️ Project Structure

```
TranscendBodyWeb/
├─ index.html                   # Landing + all sections
├─ styles.css                   # Base styles, variables, utilities, components
├─ script.js                    # Interactions (menu, counters, scroll, form)
├─ /assets
│  ├─ /images                   # Hero, testimonials, logos, icons
│  └─ /icons                    # SVGs (preferred)
├─ /docs
│  └─ transcendbody_website_prd.docx  # Product requirements (reference)
└─ README.md                    # You are here
```

## 🔧 Feature Details

### Navigation
- Sticky, auto-highlighted links; accessible hamburger on mobile; reduced motion support.

### Hero
- Compelling headline + subhead; primary CTA → Programs; secondary CTA → Contact.

### Programs & Services
- Three clear tiers (Beginner, Pro, Master) with bullets, inclusions, and an action button.

### Testimonials
- Cards with avatar, rating stars, brief quote (2–3 lines), name, and result.

### Stats / Counters
- Intersection Observer triggers count-ups; numbers are data-attributes for easy edits.

### Forms
- Client-side validation, basic sanitization, success/error states.

## ⚙️ Configuration & Customization

- **SEO**: Update `<title>`, meta description, and Open Graph/Twitter tags in `index.html`.
- **Favicon & App Icons**: Place in `/assets/icons/` and reference in head.
- **Analytics** (optional): Add your Plausible/GA snippet in `index.html` before `</head>`.
- **Copy**: All headlines, CTAs, and program bullets live in `index.html` for fast iteration.

### Performance:
- Compress images (WebP/AVIF), add explicit width/height.
- Use `loading="lazy"` on non-hero images.
- Defer non-critical JS.

## ♿ Accessibility Checklist

- **Landmarks**: `<header>` `<nav>` `<main>` `<section>` `<footer>`
- **Keyboard**: focus states, skip-to-content link
- **Color contrast**: WCAG AA minimum
- **Alt text**: descriptive, not decorative
- **Reduced motion**: honor `prefers-reduced-motion`

## 🧠 Roadmap (Website)

- **AI Automation (n8n)**: auto-capture newsletter signups to CRM; trigger onboarding emails; schedule habit reminders.
- **AI Agent (Coach)**: lightweight on-site chat that suggests routines, swaps, and grocery lists based on user inputs.
- Blog / Articles & SEO hub
- Multi-language i18n
- Dark/Light theme toggle
- Mini progress widgets (if embedding app data)

For deeper product automation, the daily tracking web app continues separately (Express + EJS + Postgres). This website remains a fast, public marketing surface.

## 🤝 Contributing

This is a personal project; suggestions are welcome.

1. Fork → 2) Create feature branch → 3) Commit → 4) PR.
- Use conventional commits when possible (e.g., `feat: add hero gradient option`).

## 📝 License

MIT — see [LICENSE](LICENSE).

## 🙏 Acknowledgements

- **Design inspiration**: Superlife-style modern fitness landing patterns.
- **Icons**: Font Awesome / local SVGs.
- **Type**: Inter by Rasmus Andersson.

## 📬 Contact

Questions, collabs, or coaching inquiries: use the Contact form on the site or reach me via my socials linked in the footer.

**Tagline to remember**: *Transcend Within. Build daily. Become your own proof.*
