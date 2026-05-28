# Rupeshseth Hemantji Gugle — Premium Portfolio Website

A cinematic, luxury personal brand portfolio built with React + Vite + Tailwind CSS + Framer Motion.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) to view the site.
Open [http://localhost:5173/admin](http://localhost:5173/admin) for the Admin Panel.

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed navigation with mobile menu
│   ├── Hero.jsx            # Cinematic fullscreen hero section
│   ├── About.jsx           # Life journey storytelling
│   ├── Timeline.jsx        # Animated milestone timeline
│   ├── Spiritual.jsx       # Spirituality & values section
│   ├── Family.jsx          # Family showcase cards
│   ├── Business.jsx        # Business verticals + achievement counters
│   ├── SocialWork.jsx      # Community impact section
│   ├── Gallery.jsx         # Masonry gallery with filters & lightbox
│   ├── Quotes.jsx          # Cinematic Hindi + English quote banners
│   ├── Events.jsx          # Events & memories wall
│   ├── Documents.jsx       # Certificates & documents with modal
│   ├── VisitingCards.jsx   # 3D flip visiting card showcase
│   ├── Sections.jsx        # News, Activities, Testimonials, Vision
│   ├── Contact.jsx         # Contact form + footer
│   └── Admin.jsx           # Admin panel for content management
├── data/
│   └── siteData.js         # ✅ ALL CONTENT IS HERE — EDIT THIS FILE
├── index.css               # Design system, variables, global styles
├── App.jsx                 # Root app, routing, preloader
└── main.jsx                # React entry point
```

---

## ✏️ How to Update Content

All content is centralized in **`src/data/siteData.js`**.

| Section | Variable | What to edit |
|---|---|---|
| Basic Info | `CLIENT` | Name, title, contact |
| About Story | `ABOUT` | Biography paragraphs |
| Timeline | `TIMELINE` | Years, milestones, descriptions |
| Spirituality | `SPIRITUALITY` | Beliefs, quotes, values |
| Family | `FAMILY` | Family member cards |
| Business | `BUSINESSES` | Business verticals |
| Social Work | `SOCIAL_WORK` | Impact stats & descriptions |
| Achievements | `ACHIEVEMENTS` | Counter numbers & labels |
| Quotes | `QUOTES` | Hindi/English quote banners |
| Testimonials | `TESTIMONIALS` | Reviews & appreciation |
| News | `NEWS_ARTICLES` | Media coverage |
| Activities | `ACTIVITIES` | Events & contributions |
| Vision | `VISION` | Future goals |

---

## 🎨 Design System

**Color Palette**
- Green (growth, legacy): `#1a5c2a` → `#2d8a47` → `#4caf65`
- Orange (energy, leadership): `#c45200` → `#e86a1a` → `#f5891d`
- Gold (heritage, premium): `#d4a843` → `#f0c96a`

**Typography**
- Cinzel — Section headings, logo, names
- Playfair Display — Body titles, quotes, italic accents
- Poppins — Body text, UI elements
- Montserrat — Labels, uppercase nav, badges

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 5 | Build tool & dev server |
| Tailwind CSS | 4 | Utility styling |
| Framer Motion | 11 | Animations & transitions |
| GSAP | 3 | Scroll-based animations |
| Swiper.js | 11 | Testimonials carousel |
| React CountUp | 6 | Animated counters |
| Lucide React | 0.383 | Icon library |
| Lenis | 1 | Smooth scroll |

---

## 📱 Admin Panel

Navigate to `/admin` to access the content management panel.

**Supported uploads:**
- 📸 Photos (Gallery, Family, Events)
- 📰 News articles & clippings
- 🎬 Videos
- 📄 PDFs (Documents, Certificates)
- 💬 Testimonials
- 🗓️ Timeline events
- 🪪 Visiting cards
- 🏆 Awards & Certificates

> **Note:** The Admin Panel UI is included. For production, connect it to a backend (Firebase, Supabase, or custom Node.js API) to persist uploaded files and content.

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload /dist folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload contents of /dist to your server's public_html
```

---

## 🔧 Customisation Checklist

- [ ] Update `src/data/siteData.js` with real content
- [ ] Replace placeholder emojis in Gallery with real photos
- [ ] Upload certificates to Documents section via Admin
- [ ] Add real WhatsApp number in `CLIENT.whatsapp`
- [ ] Add real email in `CLIENT.email`
- [ ] Update social media links in Contact section
- [ ] Add Google Maps embed for office location
- [ ] Connect Admin Panel to backend for real uploads
- [ ] Add Google Analytics / Meta Pixel
- [ ] Update `public/sitemap.xml` with real domain

---

## 📞 Support

For customisation or technical support:
- Email: contact@rupeshsethgugle.com

---

*Built with ❤️, Faith & Fire — for a life lived with purpose.*
