# HOME LINE — Official Company Website

A modern, responsive single-page business website designed for **HOME LINE** (Civil Engineering, Construction & Interior Design), based in Kasganj, Uttar Pradesh, India.

---

## 🏛️ Brand & Business Information

- **Company Name:** HOME LINE
- **Category:** Civil Engineering, Construction & Interior Design
- **Tagline:** Construction • Design • Innovation • Interior
- **Phone Numbers:**
  - `+91 8920952451` (Primary / WhatsApp)
  - `+91 9220140524`
- **Office Address:** Office No. 58, Village Devkali, Kasganj, Uttar Pradesh, India.
- **Operating Hours:** Monday – Saturday, 9:00 AM – 7:00 PM

---

## 🎨 Brand Color System

| Token | Hex Value | Application |
|---|---|---|
| **Primary Background** | `#0A0A0A` | Deep luxury dark page canvas |
| **Secondary Background** | `#141414` / `#171717` | Card & alternate section backgrounds |
| **Card Hover** | `#202020` | Subtle elevation on hover |
| **Premium Orange** | `#FF6B20` | Primary buttons, active indicators, accents |
| **Golden Yellow** | `#FFC400` | Subtitle highlights, badges, borders |
| **White** | `#FFFFFF` | Primary headings & high-contrast typography |
| **Silver Gray** | `#C5C5C5` | Paragraph body text & secondary links |
| **Muted Silver** | `#8E8E93` | Metadata, timestamps, and subtle hints |

---

## 📁 Directory Structure

```
Home Line Civil Engineer/
├── index.html                   # Master single-page website
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # XML sitemap for SEO
├── README.md                    # Project documentation
└── assets/
    ├── css/
    │   └── styles.css           # Master CSS design system & animations
    ├── js/
    │   └── main.js              # Interactivity (Sticky nav, modals, WhatsApp, filters)
    └── images/
        ├── logo.svg             # Official HOME LINE vector logo (Orange, Gold, Silver, House & Skyscraper)
        ├── favicon.svg          # High-resolution architectural favicon
        ├── emblem.svg           # Compact circular badge emblem
        ├── hero-bg.jpg          # Cinematic architectural hero background
        ├── about.jpg            # Architectural cantilever & craft photo
        ├── why-choose.jpg       # Blueprint & structural engineering visual
        ├── cta-bg.jpg           # Architectural night facade for CTA banner
        ├── services/            # 4 Main Service Photography Cards
        │   ├── interior.jpg     # Interior Design
        │   ├── renovation.jpg   # Home & Building Renovation
        │   ├── construction.jpg # Residential & Commercial Construction
        │   └── demolition.jpg   # Building Demolition
        └── projects/            # 8 Curated Architectural Concept Images
            ├── project-1.jpg
            ├── project-2.jpg
            ├── project-3.jpg
            ├── project-4.jpg
            ├── project-5.jpg
            ├── project-6.jpg
            ├── project-7.jpg
            └── project-8.jpg
```

---

## 🚀 How to Run & View

### Option 1: Direct File Open
Double-click `index.html` or open it with any web browser (Chrome, Edge, Firefox, Safari). All assets, styling, and icons work offline without requiring a build step.

### Option 2: Local HTTP Server
If using terminal or VS Code / Antigravity:
```powershell
python -m http.server 8088
```
Then visit: `http://localhost:8088/`

---

## 📱 Features Included

1. **Sticky Header with Glassmorphism**: Smooth scroll spy, active link indicators, quick call button, and responsive mobile sliding drawer.
2. **Cinematic Hero**: Full-width architectural backdrop, gradient typography, direct call button, and verified business pillars.
3. **About Section**: High-resolution architectural photography, official emblem badge, verbatim company profile, and 4 core operational pillars.
4. **Interactive Services**: 4 distinct cards with hover zoom effects, "Learn More" modal dialogs with detailed breakdowns, and quote pre-fill actions.
5. **Project Portfolio with Live Filtering**: Categorized by *All*, *Construction*, *Interior*, and *Renovation*. Full-screen Lightbox with keyboard navigation. Clearly labeled as sample concepts until actual project photos are uploaded.
6. **Why Choose Us & 4-Step Process**: Architectural timeline and 6 core value cards highlighting planning, engineering, and communication.
7. **Transparent WhatsApp Inquiry Dispatch**: Validated contact form that generates a structured message and opens WhatsApp with `+91 8920952451`. Includes fallback copy and call options.
8. **Floating WhatsApp Button**: Sticky click-to-chat button in bottom right with default inquiry text.
9. **SEO & Accessibility**: Semantic HTML5, Schema.org JSON-LD LocalBusiness markup, OpenGraph metadata, and WCAG AA contrast compliance.

---

## 📸 How to Replace Project Photos Later

When genuine HOME LINE project photographs are ready:
1. Copy your completed project photos into `assets/images/projects/` (e.g., as `project-1.jpg`, `project-2.jpg`, etc.).
2. In `assets/js/main.js`, update the `PROJECTS_DATA` array titles, descriptions, and locations to match your completed works.

