# Pinnacle Aerospace Website

A production-ready, modern aerospace corporate website built with Next.js 15, TailwindCSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── layout.tsx                # Root layout with SEO metadata
│   └── page.tsx                  # Home page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Fixed nav with mobile menu
│   │   └── Footer.tsx            # Footer with links and certifications
│   ├── sections/
│   │   ├── HeroSection.tsx       # Hero with parallax background
│   │   ├── CertificationSection.tsx # FAA/EASA cert display
│   │   ├── ServicesSection.tsx   # Services grid + mobile horizontal scroll
│   │   ├── AboutSection.tsx      # Company about with image grid
│   │   ├── GallerySection.tsx    # Operations photo gallery
│   │   ├── LeadershipSection.tsx # Directors with placeholder images
│   │   └── ContactSection.tsx    # Email contact form
│   └── ui/
│       ├── AnimatedBackground.tsx # Canvas particle + grid animation
│       ├── ScrollProgress.tsx     # Scroll progress bar
│       └── ScrollMarquee.tsx      # Capabilities ticker
├── lib/
│   ├── animations.ts             # Framer Motion variant presets
│   ├── data.ts                   # All site content (services, directors, etc.)
│   └── images.ts                 # Image URL constants — REPLACE THESE
└── styles/
    └── globals.css               # Global styles, CSS variables, animations
```

---

## Replacing Images

All images are centralized in `src/lib/images.ts`.

To replace with your own images:

1. Add your images to `public/images/` or import from `src/assets/`
2. Open `src/lib/images.ts`
3. Replace each `placehold.co` URL with your image path or import:

```typescript
// Option A: Static path (put image in /public/images/)
HERO_AIRCRAFT: '/images/hero-aircraft.jpg',

// Option B: Import (recommended for optimization)
import heroAircraft from '@/assets/images/hero-aircraft.jpg'
export const IMAGES = {
  HERO_AIRCRAFT: heroAircraft.src,
  ...
}
```

### Image Slots Available

| Key | Description | Recommended Size |
|-----|-------------|-----------------|
| `HERO_AIRCRAFT` | Hero section background | 1920×1080 |
| `AIRCRAFT_HANGAR_1` | Gallery - hangar shot | 800×600 |
| `AIRCRAFT_HANGAR_2` | Gallery - maintenance bay | 800×600 |
| `AIRCRAFT_MAINTENANCE` | About section - maintenance | 800×600 |
| `AIRCRAFT_OVERHAUL` | Gallery - engine overhaul | 800×600 |
| `ENGINEER_1` | About - engineer working | 600×800 |
| `ENGINEER_2` | Gallery - avionics tech | 600×800 |
| `ENGINEER_TEAM` | Gallery - team shot | 1200×600 |
| `DIRECTOR_1` | **Director photo 1** | 400×500 |
| `DIRECTOR_2` | **Director photo 2** | 400×500 |
| `FACILITY_EXTERIOR` | Facility exterior | 1200×700 |
| `FACILITY_INTERIOR` | About - facility interior | 1200×700 |
| `SERVICE_AVIONICS` | Gallery - avionics | 700×500 |
| `SERVICE_INSPECTION` | Gallery - inspection | 700×500 |
| `SERVICE_ENGINEERING` | Gallery - engineering | 700×500 |

---

## Email Configuration

The contact form sends to your email via the API route at `/api/contact`.

To enable real email sending, edit `src/app/api/contact/route.ts`:

### Using Resend (Recommended)

```bash
npm install resend
```

Add to `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=operations@pinnacleaerospace.aero
```

Uncomment the Resend block in `route.ts`.

### Other Options
- **Nodemailer** (SMTP/Gmail)
- **SendGrid**
- **Mailgun**
- **Postmark**

---

## Customization

### Company Details
Edit `src/lib/data.ts` → `SITE_CONFIG` for name, email, address, certifications.

### Services
Edit `src/lib/data.ts` → `SERVICES` array.

### Directors
Edit `src/lib/data.ts` → `DIRECTORS` array (name, title, bio, credentials).

### Colors
Edit `src/styles/globals.css` → CSS variables section.

---

## Design Principles

- **No shadows** anywhere in the codebase
- **No hover effects**
- **No border-radius** (all elements are sharp/square)
- **No emojis** in content
- **Black & white** with `#c8b89a` gold accent
- **Mobile horizontal scroll** for services on small screens (no card stacking)
- All animations use Framer Motion with `once: true` viewport triggers