# Altitude Technologies — Website Implementation

> Premium, modern, white glassmorphism tech company website.
> Stack: **React 19 + Vite 8 + Tailwind CSS v4 + Lucide React**

---

## Project Structure

```
altitude-technologies/
├── index.html                        # Entry HTML (fonts, meta, root mount)
├── vite.config.js                    # Vite config with @tailwindcss/vite plugin
├── package.json
│
└── src/
    ├── main.jsx                      # React root
    ├── index.css                     # Tailwind v4 @import + @theme + @utility
    ├── App.jsx                       # Root component — assembles all sections
    │
    ├── hooks/
    │   └── useScrollReveal.js        # IntersectionObserver scroll-reveal hook
    │
    └── components/
        ├── Navbar.jsx                # Sticky glassmorphism nav + mobile menu
        ├── Hero.jsx                  # Full-viewport hero, stats bar, dual CTAs
        ├── Services.jsx              # 2×2 service cards (AI card dark-highlighted)
        ├── About.jsx                 # Split layout: copy + 4-step process visual
        ├── WhyUs.jsx                 # 5-column "why choose us" card row
        ├── AISection.jsx             # Dark navy AI & Automation highlight section
        ├── Industries.jsx            # 6-column industry icon grid
        ├── CTABand.jsx               # Full-bleed red CTA banner
        ├── Contact.jsx               # Form + contact info panel
        └── Footer.jsx                # Dark multi-column footer + social links
```

---

## Brand Colors

| Token            | Hex       | Usage                              |
|------------------|-----------|------------------------------------|
| `--color-navy`   | `#0D1230` | Primary text, backgrounds, footer  |
| `--color-brand`  | `#E61E2A` | CTAs, accents, icon highlights     |
| `--color-brand-dark` | `#C41820` | Button hover states            |
| White / Glass    | `rgba(255,255,255,0.65–0.72)` | Card backgrounds   |

---

## Typography

| Font                  | Weights      | Usage                        |
|-----------------------|-------------|------------------------------|
| **Plus Jakarta Sans** | 700–900     | Headlines, display text      |
| **Inter**             | 300–700     | Body, labels, UI elements    |

---

## Key Design Patterns

### Glassmorphism Cards
```css
/* @utility glass-card in index.css */
background: rgba(255, 255, 255, 0.65);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.90);
box-shadow: 0 4px 32px rgba(13, 18, 48, 0.07);
```

### Scroll Reveal
All sections use `.fade-up` + `.fade-up-visible` toggled by the shared
`useScrollReveal` hook (IntersectionObserver, threshold 0.1, 40px rootMargin offset).

### Section Label Pattern
```jsx
<span className="section-label">Section Name</span>
```
Renders as a small red uppercase label with a 24px red bar prefix — used above
every section headline to maintain visual hierarchy.

---

## Development Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

---

## Sections Overview

| Section         | Component        | Key Features                                                    |
|-----------------|------------------|-----------------------------------------------------------------|
| Navbar          | `Navbar.jsx`     | Sticky glass, scroll shadow, mobile hamburger, smooth-scroll    |
| Hero            | `Hero.jsx`       | Mesh gradient bg, animated badge, stats bar, dual CTAs          |
| Services        | `Services.jsx`   | 4 cards: Dev, Design, Growth, AI (AI card dark-themed)          |
| About           | `About.jsx`      | Split layout, mission/vision cards, 4-step process, badge       |
| Why Choose Us   | `WhyUs.jsx`      | 5 glassmorphism cards, alternating accent colors                |
| AI & Automation | `AISection.jsx`  | **Dark section**, dot-grid bg, 4 solution cards, benefits row   |
| Industries      | `Industries.jsx` | 6-column icon grid                                              |
| CTA Band        | `CTABand.jsx`    | Full-bleed brand-red gradient, two CTAs                         |
| Contact         | `Contact.jsx`    | 5-col grid: info panel + reactive form (loading/success states) |
| Footer          | `Footer.jsx`     | Dark navy, brand col + 2 link cols + social icons               |

---

## Standalone HTML Reference

> This self-contained file requires **no build step** — paste into any `.html` file
> and open in a browser. Uses Tailwind CDN + Lucide CDN.

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Altitude Technologies — Next-Gen Digital Solutions</title>
  <meta name="description" content="Altitude Technologies builds powerful websites, intelligent applications, and AI-driven solutions that transform your ideas into scalable digital success.">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            navy:        '#0D1230',
            'navy-light':'#1a2050',
            brand:       '#E61E2A',
            'brand-dark':'#C41820',
          },
          fontFamily: {
            sans:    ['Inter', 'system-ui', 'sans-serif'],
            display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
          },
        }
      }
    }
  </script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

  <style>
    html { scroll-behavior: smooth; }
    body { margin: 0; font-family: 'Inter', system-ui, sans-serif; background: #fff; color: #0D1230; -webkit-font-smoothing: antialiased; }

    .glass      { background: rgba(255,255,255,0.72); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.85); }
    .glass-card { background: rgba(255,255,255,0.65); backdrop-filter: blur(10px);  -webkit-backdrop-filter: blur(10px);  border: 1px solid rgba(255,255,255,0.90); box-shadow: 0 4px 32px rgba(13,18,48,0.07); }

    .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1); }
    .fade-up.in-view { opacity: 1; transform: translateY(0); }
    .d1 { transition-delay: 0.08s; } .d2 { transition-delay: 0.16s; } .d3 { transition-delay: 0.24s; } .d4 { transition-delay: 0.32s; } .d5 { transition-delay: 0.40s; }

    .text-gradient { background: linear-gradient(135deg, #0D1230 30%, #E61E2A 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .section-label { display: inline-flex; align-items: center; gap: 8px; font-size: .75rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: #E61E2A; }
    .section-label::before { content:''; display:block; width:24px; height:2px; background:#E61E2A; border-radius:1px; }
    .grid-pattern { background-image: linear-gradient(rgba(13,18,48,.04) 1px,transparent 1px), linear-gradient(90deg,rgba(13,18,48,.04) 1px,transparent 1px); background-size: 48px 48px; }
    .card-lift { transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s ease; }
    .card-lift:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(13,18,48,.13) !important; }
    .btn-red { display:inline-flex; align-items:center; gap:8px; padding:14px 28px; background:#E61E2A; color:#fff; font-weight:600; border-radius:8px; text-decoration:none; transition:all .2s; box-shadow:0 4px 16px rgba(230,30,42,.25); }
    .btn-red:hover { background:#C41820; transform:translateY(-1px); box-shadow:0 6px 24px rgba(230,30,42,.35); }
    .btn-outline { display:inline-flex; align-items:center; gap:8px; padding:14px 28px; background:transparent; color:#0D1230; font-weight:600; border-radius:8px; border:1.5px solid rgba(13,18,48,.2); text-decoration:none; transition:all .2s; }
    .btn-outline:hover { border-color:#0D1230; background:rgba(13,18,48,.05); transform:translateY(-1px); }
    .btn-white { display:inline-flex; align-items:center; gap:8px; padding:14px 28px; background:#fff; color:#E61E2A; font-weight:700; border-radius:8px; text-decoration:none; transition:all .2s; box-shadow:0 4px 16px rgba(0,0,0,.15); }
    .btn-white:hover { background:rgba(255,255,255,.95); transform:translateY(-1px); }
    .btn-outline-white { display:inline-flex; align-items:center; gap:8px; padding:14px 28px; background:transparent; color:#fff; font-weight:600; border-radius:8px; border:1.5px solid rgba(255,255,255,.35); text-decoration:none; transition:all .2s; }
    .btn-outline-white:hover { border-color:rgba(255,255,255,.7); background:rgba(255,255,255,.10); transform:translateY(-1px); }
    ::-webkit-scrollbar { width:5px; } ::-webkit-scrollbar-track { background:#f1f5f9; } ::-webkit-scrollbar-thumb { background:#0D1230; border-radius:10px; }
    @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:.4} }
    .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
  </style>
</head>
<body>

<!-- ══════════════════════════════════════
     NAVBAR
══════════════════════════════════════ -->
<nav id="navbar" class="fixed top-0 left-0 right-0 z-50 glass transition-all duration-300">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="#" class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-lg bg-[#E61E2A] flex items-center justify-center shadow-sm">
        <i data-lucide="triangle" class="w-4 h-4 text-white" style="fill:white"></i>
      </div>
      <span class="font-display font-extrabold text-[#0D1230] text-xl tracking-tight">altitude<span class="text-[#E61E2A]">.</span></span>
    </a>
    <div class="hidden md:flex items-center gap-8">
      <a href="#services"      class="text-sm font-medium text-[#0D1230]/60 hover:text-[#0D1230] transition-colors">Services</a>
      <a href="#about"         class="text-sm font-medium text-[#0D1230]/60 hover:text-[#0D1230] transition-colors">About</a>
      <a href="#ai-automation" class="text-sm font-medium text-[#0D1230]/60 hover:text-[#0D1230] transition-colors">AI &amp; Automation</a>
      <a href="#industries"    class="text-sm font-medium text-[#0D1230]/60 hover:text-[#0D1230] transition-colors">Industries</a>
      <a href="#contact"       class="text-sm font-medium text-[#0D1230]/60 hover:text-[#0D1230] transition-colors">Contact</a>
    </div>
    <div class="flex items-center gap-3">
      <a href="#contact" class="btn-red hidden sm:inline-flex" style="padding:10px 20px;font-size:.875rem;">
        Get Started <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </a>
      <button id="mob-btn" class="md:hidden p-2 rounded-lg hover:bg-black/5">
        <i data-lucide="menu" class="w-5 h-5 text-[#0D1230]" id="mob-icon"></i>
      </button>
    </div>
  </div>
  <div id="mob-menu" class="hidden md:hidden px-6 pb-4 border-t border-black/5">
    <div class="flex flex-col gap-1 pt-3">
      <a href="#services"      class="py-2.5 px-3 text-sm font-medium text-[#0D1230]/70 hover:text-[#0D1230] hover:bg-black/5 rounded-lg">Services</a>
      <a href="#about"         class="py-2.5 px-3 text-sm font-medium text-[#0D1230]/70 hover:text-[#0D1230] hover:bg-black/5 rounded-lg">About</a>
      <a href="#ai-automation" class="py-2.5 px-3 text-sm font-medium text-[#0D1230]/70 hover:text-[#0D1230] hover:bg-black/5 rounded-lg">AI &amp; Automation</a>
      <a href="#industries"    class="py-2.5 px-3 text-sm font-medium text-[#0D1230]/70 hover:text-[#0D1230] hover:bg-black/5 rounded-lg">Industries</a>
      <a href="#contact"       class="py-2.5 px-3 text-sm font-medium text-[#0D1230]/70 hover:text-[#0D1230] hover:bg-black/5 rounded-lg">Contact</a>
      <a href="#contact" class="mt-2 btn-red justify-center">Get Started <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
    </div>
  </div>
</nav>

<!-- ══════════════════════════════════════
     HERO
══════════════════════════════════════ -->
<section class="min-h-screen flex items-center pt-20 pb-20 relative overflow-hidden" style="background:radial-gradient(ellipse 70% 60% at 10% 50%,rgba(230,30,42,.06) 0%,transparent 70%),radial-gradient(ellipse 50% 70% at 90% 10%,rgba(13,18,48,.05) 0%,transparent 70%),linear-gradient(180deg,#F8FAFB 0%,#fff 100%)">
  <div class="absolute inset-0 grid-pattern opacity-50 pointer-events-none"></div>
  <div class="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#E61E2A]/5 blur-3xl pointer-events-none"></div>
  <div class="max-w-7xl mx-auto px-6 w-full">
    <div class="max-w-4xl mx-auto text-center">
      <div class="fade-up inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
        <span class="w-2 h-2 rounded-full bg-[#E61E2A] pulse-dot"></span>
        <span class="text-xs font-semibold text-[#0D1230]/55 tracking-widest uppercase">Next-Gen Technology Partner</span>
      </div>
      <h1 class="fade-up d1 font-display font-black text-5xl sm:text-6xl lg:text-7xl text-[#0D1230] leading-[1.08] tracking-tight mb-6">
        Elevate Your Business<br>
        <span class="text-gradient">with Next-Gen</span><br>Technology
      </h1>
      <p class="fade-up d2 text-lg sm:text-xl text-[#0D1230]/55 leading-relaxed max-w-2xl mx-auto mb-10">
        We build powerful websites, intelligent applications, and AI-driven solutions that transform your ideas into scalable digital success.
      </p>
      <div class="fade-up d3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <a href="#contact" class="btn-red w-full sm:w-auto justify-center">Get Started <i data-lucide="arrow-right" class="w-5 h-5"></i></a>
        <a href="#contact" class="btn-outline w-full sm:w-auto justify-center"><i data-lucide="calendar" class="w-5 h-5"></i> Book Free Consultation</a>
      </div>
      <div class="fade-up d4 glass rounded-2xl p-6 inline-grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6 text-center">
        <div><div class="font-display font-black text-3xl text-[#0D1230]">150<span class="text-[#E61E2A]">+</span></div><div class="text-xs text-[#0D1230]/45 font-medium mt-1">Projects Delivered</div></div>
        <div><div class="font-display font-black text-3xl text-[#0D1230]">80<span class="text-[#E61E2A]">+</span></div><div class="text-xs text-[#0D1230]/45 font-medium mt-1">Happy Clients</div></div>
        <div><div class="font-display font-black text-3xl text-[#0D1230]">5<span class="text-[#E61E2A]">+</span></div><div class="text-xs text-[#0D1230]/45 font-medium mt-1">Years of Excellence</div></div>
        <div><div class="font-display font-black text-3xl text-[#0D1230]">12<span class="text-[#E61E2A]">+</span></div><div class="text-xs text-[#0D1230]/45 font-medium mt-1">Countries Served</div></div>
      </div>
    </div>
  </div>
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35 pointer-events-none">
    <span class="text-[10px] text-[#0D1230] font-semibold tracking-widest uppercase">Scroll</span>
    <div class="w-px h-10 bg-gradient-to-b from-[#0D1230] to-transparent"></div>
  </div>
</section>

<!-- ══════════════════════════════════════
     SERVICES
══════════════════════════════════════ -->
<section id="services" class="py-24 bg-white relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16 fade-up">
      <span class="section-label justify-center">What We Do</span>
      <h2 class="font-display font-black text-4xl sm:text-5xl text-[#0D1230] tracking-tight mt-4">Our Core Services</h2>
      <p class="text-[#0D1230]/55 mt-4 max-w-xl mx-auto text-lg">End-to-end digital solutions engineered for performance, scale, and measurable growth.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Development -->
      <div class="glass-card rounded-2xl p-8 card-lift fade-up d1 relative overflow-hidden group">
        <div class="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-[#E61E2A]/5 group-hover:bg-[#E61E2A]/10 transition-colors duration-300"></div>
        <div class="w-12 h-12 rounded-xl bg-[#E61E2A]/10 flex items-center justify-center mb-6"><i data-lucide="code-2" class="w-6 h-6 text-[#E61E2A]"></i></div>
        <h3 class="font-display font-bold text-xl text-[#0D1230] mb-2">Development</h3>
        <p class="text-[#0D1230]/55 text-sm mb-6">Fast, secure, and SEO-friendly digital products built with modern frameworks.</p>
        <ul class="space-y-2.5">
          <li class="flex items-center gap-2.5 text-sm text-[#0D1230]/65"><i data-lucide="globe" class="w-4 h-4 text-[#E61E2A] flex-shrink-0"></i>Website Development (Static, Dynamic, E-commerce)</li>
          <li class="flex items-center gap-2.5 text-sm text-[#0D1230]/65"><i data-lucide="smartphone" class="w-4 h-4 text-[#E61E2A] flex-shrink-0"></i>Mobile App Development (Android &amp; iOS)</li>
          <li class="flex items-center gap-2.5 text-sm text-[#0D1230]/65"><i data-lucide="cpu" class="w-4 h-4 text-[#E61E2A] flex-shrink-0"></i>Custom Software Solutions</li>
          <li class="flex items-center gap-2.5 text-sm text-[#0D1230]/65"><i data-lucide="layers" class="w-4 h-4 text-[#E61E2A] flex-shrink-0"></i>SaaS Product Development</li>
        </ul>
      </div>
      <!-- UI/UX -->
      <div class="glass-card rounded-2xl p-8 card-lift fade-up d2 relative overflow-hidden group">
        <div class="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-[#0D1230]/5 group-hover:bg-[#0D1230]/8 transition-colors duration-300"></div>
        <div class="w-12 h-12 rounded-xl bg-[#0D1230]/8 flex items-center justify-center mb-6"><i data-lucide="palette" class="w-6 h-6 text-[#0D1230]"></i></div>
        <h3 class="font-display font-bold text-xl text-[#0D1230] mb-2">UI/UX Design</h3>
        <p class="text-[#0D1230]/55 text-sm mb-6">Designs that elevate user experience and increase engagement.</p>
        <ul class="space-y-2.5">
          <li class="flex items-center gap-2.5 text-sm text-[#0D1230]/65"><i data-lucide="compass" class="w-4 h-4 text-[#0D1230]/50 flex-shrink-0"></i>User Experience Strategy</li>
          <li class="flex items-center gap-2.5 text-sm text-[#0D1230]/65"><i data-lucide="layout" class="w-4 h-4 text-[#0D1230]/50 flex-shrink-0"></i>Interface Design</li>
          <li class="flex items-center gap-2.5 text-sm text-[#0D1230]/65"><i data-lucide="pen-tool" class="w-4 h-4 text-[#0D1230]/50 flex-shrink-0"></i>Prototyping &amp; Wireframing</li>
        </ul>
      </div>
      <!-- Digital Growth -->
      <div class="glass-card rounded-2xl p-8 card-lift fade-up d3 relative overflow-hidden group">
        <div class="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-[#0D1230]/5 group-hover:bg-[#0D1230]/8 transition-colors duration-300"></div>
        <div class="w-12 h-12 rounded-xl bg-[#0D1230]/8 flex items-center justify-center mb-6"><i data-lucide="trending-up" class="w-6 h-6 text-[#0D1230]"></i></div>
        <h3 class="font-display font-bold text-xl text-[#0D1230] mb-2">Digital Growth</h3>
        <p class="text-[#0D1230]/55 text-sm mb-6">Data-driven strategies to grow your online presence and conversions.</p>
        <ul class="space-y-2.5">
          <li class="flex items-center gap-2.5 text-sm text-[#0D1230]/65"><i data-lucide="search" class="w-4 h-4 text-[#0D1230]/50 flex-shrink-0"></i>SEO Optimization</li>
          <li class="flex items-center gap-2.5 text-sm text-[#0D1230]/65"><i data-lucide="share-2" class="w-4 h-4 text-[#0D1230]/50 flex-shrink-0"></i>Social Media Marketing</li>
          <li class="flex items-center gap-2.5 text-sm text-[#0D1230]/65"><i data-lucide="bar-chart-2" class="w-4 h-4 text-[#0D1230]/50 flex-shrink-0"></i>Performance Marketing</li>
          <li class="flex items-center gap-2.5 text-sm text-[#0D1230]/65"><i data-lucide="star" class="w-4 h-4 text-[#0D1230]/50 flex-shrink-0"></i>Branding &amp; Creative Design</li>
        </ul>
      </div>
      <!-- AI & Automation (dark) -->
      <div class="rounded-2xl p-8 card-lift fade-up d4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D1230 0%,#1a2050 100%);border:1px solid rgba(255,255,255,.08)">
        <div class="absolute top-0 right-0 w-44 h-44 rounded-bl-full bg-[#E61E2A]/15 pointer-events-none"></div>
        <div class="w-12 h-12 rounded-xl bg-[#E61E2A] flex items-center justify-center mb-6 relative z-10 shadow-sm"><i data-lucide="bot" class="w-6 h-6 text-white"></i></div>
        <h3 class="font-display font-bold text-xl text-white mb-2 relative z-10">AI &amp; Automation</h3>
        <p class="text-white/50 text-sm mb-6 relative z-10">Intelligent systems that automate workflows and scale your business faster.</p>
        <ul class="space-y-2.5 relative z-10">
          <li class="flex items-center gap-2.5 text-sm text-white/65"><i data-lucide="message-circle" class="w-4 h-4 text-[#E61E2A] flex-shrink-0"></i>AI Chatbots &amp; Assistants</li>
          <li class="flex items-center gap-2.5 text-sm text-white/65"><i data-lucide="git-branch" class="w-4 h-4 text-[#E61E2A] flex-shrink-0"></i>Business Process Automation</li>
          <li class="flex items-center gap-2.5 text-sm text-white/65"><i data-lucide="brain" class="w-4 h-4 text-[#E61E2A] flex-shrink-0"></i>AI Marketing Systems</li>
          <li class="flex items-center gap-2.5 text-sm text-white/65"><i data-lucide="zap" class="w-4 h-4 text-[#E61E2A] flex-shrink-0"></i>Workflow Automation Tools</li>
        </ul>
        <a href="#ai-automation" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#E61E2A] hover:gap-3 transition-all relative z-10">
          Explore AI Solutions <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     ABOUT
══════════════════════════════════════ -->
<section id="about" class="py-24 relative overflow-hidden" style="background:#F8FAFB">
  <div class="absolute inset-0 grid-pattern opacity-60 pointer-events-none"></div>
  <div class="max-w-7xl mx-auto px-6 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="fade-up">
        <span class="section-label">About Us</span>
        <h2 class="font-display font-black text-4xl sm:text-5xl text-[#0D1230] tracking-tight mt-4 mb-6">We Build Digital<br><span class="text-gradient">Growth Ecosystems</span></h2>
        <p class="text-[#0D1230]/60 text-lg leading-relaxed mb-5">Altitude Technologies is a modern technology company focused on delivering innovative digital solutions using AI, automation, and cutting-edge development frameworks.</p>
        <p class="text-[#0D1230]/55 leading-relaxed mb-8">We don't just build products — we create growth ecosystems powered by technology, tailored to your unique business goals.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div class="glass-card rounded-xl p-5"><div class="w-8 h-8 rounded-lg bg-[#E61E2A]/10 flex items-center justify-center mb-3"><i data-lucide="target" class="w-4 h-4 text-[#E61E2A]"></i></div><h4 class="font-display font-semibold text-sm text-[#0D1230] mb-1">Our Mission</h4><p class="text-xs text-[#0D1230]/55 leading-relaxed">Empower businesses with smart, scalable digital solutions that drive growth.</p></div>
          <div class="glass-card rounded-xl p-5"><div class="w-8 h-8 rounded-lg bg-[#0D1230]/8 flex items-center justify-center mb-3"><i data-lucide="eye" class="w-4 h-4 text-[#0D1230]"></i></div><h4 class="font-display font-semibold text-sm text-[#0D1230] mb-1">Our Vision</h4><p class="text-xs text-[#0D1230]/55 leading-relaxed">To become a global leader in AI-powered digital transformation.</p></div>
        </div>
        <a href="#contact" class="btn-red">Work With Us <i data-lucide="arrow-right" class="w-5 h-5"></i></a>
      </div>
      <div class="fade-up d2 relative">
        <div class="glass-card rounded-2xl p-8">
          <h3 class="font-display font-bold text-lg text-[#0D1230] mb-8">Our Approach</h3>
          <div class="space-y-0">
            <div class="flex gap-4 items-start pb-8 relative"><div class="absolute left-5 top-10 bottom-0 w-px bg-gradient-to-b from-[#E61E2A]/25 to-transparent"></div><div class="w-10 h-10 rounded-full bg-[#E61E2A] flex items-center justify-center flex-shrink-0 shadow-sm"><span class="text-white text-xs font-bold">01</span></div><div class="pt-1"><h4 class="font-semibold text-[#0D1230] mb-1 text-sm">Understand Your Business</h4><p class="text-xs text-[#0D1230]/55 leading-relaxed">Deep-dive into your goals, audience, and competitive landscape.</p></div></div>
            <div class="flex gap-4 items-start pb-8 relative"><div class="absolute left-5 top-10 bottom-0 w-px bg-gradient-to-b from-[#E61E2A]/25 to-transparent"></div><div class="w-10 h-10 rounded-full bg-[#0D1230]/10 flex items-center justify-center flex-shrink-0"><span class="text-[#0D1230] text-xs font-bold">02</span></div><div class="pt-1"><h4 class="font-semibold text-[#0D1230] mb-1 text-sm">Design Scalable Solutions</h4><p class="text-xs text-[#0D1230]/55 leading-relaxed">Architect systems built to handle your growth for years ahead.</p></div></div>
            <div class="flex gap-4 items-start pb-8 relative"><div class="absolute left-5 top-10 bottom-0 w-px bg-gradient-to-b from-[#E61E2A]/25 to-transparent"></div><div class="w-10 h-10 rounded-full bg-[#0D1230]/10 flex items-center justify-center flex-shrink-0"><span class="text-[#0D1230] text-xs font-bold">03</span></div><div class="pt-1"><h4 class="font-semibold text-[#0D1230] mb-1 text-sm">Develop with Latest Technologies</h4><p class="text-xs text-[#0D1230]/55 leading-relaxed">Leverage cutting-edge frameworks and AI to build robust products.</p></div></div>
            <div class="flex gap-4 items-start"><div class="w-10 h-10 rounded-full bg-[#E61E2A] flex items-center justify-center flex-shrink-0 shadow-sm"><span class="text-white text-xs font-bold">04</span></div><div class="pt-1"><h4 class="font-semibold text-[#0D1230] mb-1 text-sm">Optimize for Growth</h4><p class="text-xs text-[#0D1230]/55 leading-relaxed">Continuously refine performance, conversions, and user experience.</p></div></div>
          </div>
        </div>
        <div class="absolute -bottom-5 -right-4 glass-card rounded-xl p-4 shadow-xl hidden lg:flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center"><i data-lucide="check" class="w-5 h-5 text-green-600"></i></div><div><div class="text-xs font-semibold text-[#0D1230]">Project Success Rate</div><div class="text-xl font-black text-[#0D1230] font-display">98<span class="text-[#E61E2A]">%</span></div></div></div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     WHY CHOOSE US
══════════════════════════════════════ -->
<section class="py-24 bg-white relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16 fade-up"><span class="section-label justify-center">Our Edge</span><h2 class="font-display font-black text-4xl sm:text-5xl text-[#0D1230] tracking-tight mt-4">Why Choose Altitude</h2></div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      <div class="glass-card rounded-2xl p-6 text-center card-lift fade-up d1"><div class="w-12 h-12 rounded-xl bg-[#E61E2A]/10 flex items-center justify-center mx-auto mb-4"><i data-lucide="brain" class="w-6 h-6 text-[#E61E2A]"></i></div><h4 class="font-display font-semibold text-sm text-[#0D1230] mb-2">Advanced AI &amp; ML Integration</h4><p class="text-xs text-[#0D1230]/50">Cutting-edge intelligence built into every product we deliver.</p></div>
      <div class="glass-card rounded-2xl p-6 text-center card-lift fade-up d2"><div class="w-12 h-12 rounded-xl bg-[#0D1230]/8 flex items-center justify-center mx-auto mb-4"><i data-lucide="maximize-2" class="w-6 h-6 text-[#0D1230]"></i></div><h4 class="font-display font-semibold text-sm text-[#0D1230] mb-2">Scalable &amp; Future-Proof</h4><p class="text-xs text-[#0D1230]/50">Built to grow with your business, not against it.</p></div>
      <div class="glass-card rounded-2xl p-6 text-center card-lift fade-up d3"><div class="w-12 h-12 rounded-xl bg-[#E61E2A]/10 flex items-center justify-center mx-auto mb-4"><i data-lucide="tag" class="w-6 h-6 text-[#E61E2A]"></i></div><h4 class="font-display font-semibold text-sm text-[#0D1230] mb-2">Affordable Pricing</h4><p class="text-xs text-[#0D1230]/50">Enterprise-grade quality without the enterprise-grade price tag.</p></div>
      <div class="glass-card rounded-2xl p-6 text-center card-lift fade-up d4"><div class="w-12 h-12 rounded-xl bg-[#0D1230]/8 flex items-center justify-center mx-auto mb-4"><i data-lucide="boxes" class="w-6 h-6 text-[#0D1230]"></i></div><h4 class="font-display font-semibold text-sm text-[#0D1230] mb-2">End-to-End Development</h4><p class="text-xs text-[#0D1230]/50">From concept to deployment — everything under one roof.</p></div>
      <div class="glass-card rounded-2xl p-6 text-center card-lift fade-up d5"><div class="w-12 h-12 rounded-xl bg-[#E61E2A]/10 flex items-center justify-center mx-auto mb-4"><i data-lucide="timer" class="w-6 h-6 text-[#E61E2A]"></i></div><h4 class="font-display font-semibold text-sm text-[#0D1230] mb-2">Fast Delivery &amp; Support</h4><p class="text-xs text-[#0D1230]/50">Rapid timelines with dedicated post-launch support.</p></div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     AI & AUTOMATION  (dark section)
══════════════════════════════════════ -->
<section id="ai-automation" class="py-24 relative overflow-hidden" style="background:linear-gradient(135deg,#0D1230 0%,#16203a 50%,#0f1635 100%)">
  <div class="absolute inset-0 pointer-events-none" style="background-image:radial-gradient(circle at 1px 1px,rgba(255,255,255,.04) 1px,transparent 0);background-size:40px 40px"></div>
  <div class="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#E61E2A]/10 blur-3xl pointer-events-none"></div>
  <div class="max-w-7xl mx-auto px-6 relative z-10">
    <div class="text-center mb-16 fade-up">
      <div class="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style="background:rgba(230,30,42,.15);border:1px solid rgba(230,30,42,.30)"><i data-lucide="sparkles" class="w-4 h-4 text-[#E61E2A]"></i><span class="text-xs font-semibold text-[#E61E2A] tracking-widest uppercase">Our Strongest Capability</span></div>
      <h2 class="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">Smarter Business with<br><span style="background:linear-gradient(135deg,#E61E2A,#ff6b73);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">AI &amp; Automation</span></h2>
      <p class="text-white/50 text-lg max-w-2xl mx-auto">We help businesses automate repetitive tasks, improve productivity, and scale faster using AI-powered systems built for modern workflows.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      <div class="rounded-xl p-6 fade-up d1" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);backdrop-filter:blur(8px)"><div class="w-10 h-10 rounded-lg bg-[#E61E2A] flex items-center justify-center mb-4"><i data-lucide="message-circle" class="w-5 h-5 text-white"></i></div><h4 class="font-semibold text-white mb-2 text-sm">AI Chatbots</h4><p class="text-white/45 text-xs leading-relaxed">Intelligent conversational agents for customer support, 24/7.</p></div>
      <div class="rounded-xl p-6 fade-up d2" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);backdrop-filter:blur(8px)"><div class="w-10 h-10 rounded-lg bg-[#E61E2A] flex items-center justify-center mb-4"><i data-lucide="filter" class="w-5 h-5 text-white"></i></div><h4 class="font-semibold text-white mb-2 text-sm">Lead Generation Automation</h4><p class="text-white/45 text-xs leading-relaxed">Automated pipelines that capture, qualify, and nurture leads.</p></div>
      <div class="rounded-xl p-6 fade-up d3" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);backdrop-filter:blur(8px)"><div class="w-10 h-10 rounded-lg bg-[#E61E2A] flex items-center justify-center mb-4"><i data-lucide="megaphone" class="w-5 h-5 text-white"></i></div><h4 class="font-semibold text-white mb-2 text-sm">AI Marketing Systems</h4><p class="text-white/45 text-xs leading-relaxed">Data-driven campaigns powered by machine learning insights.</p></div>
      <div class="rounded-xl p-6 fade-up d4" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10);backdrop-filter:blur(8px)"><div class="w-10 h-10 rounded-lg bg-[#E61E2A] flex items-center justify-center mb-4"><i data-lucide="git-branch" class="w-5 h-5 text-white"></i></div><h4 class="font-semibold text-white mb-2 text-sm">Workflow Automation</h4><p class="text-white/45 text-xs leading-relaxed">Eliminate manual bottlenecks with intelligent process automation.</p></div>
    </div>
    <div class="rounded-2xl p-8 fade-up d5" style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10)">
      <h3 class="font-display font-bold text-white mb-8 text-center text-lg">Why Businesses Choose Our AI Solutions</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="text-center"><div class="w-12 h-12 rounded-xl bg-[#E61E2A]/20 flex items-center justify-center mx-auto mb-3"><i data-lucide="minus-circle" class="w-6 h-6 text-[#E61E2A]"></i></div><div class="text-white font-semibold text-sm">Reduce Manual Work</div><div class="text-white/40 text-xs mt-1">Up to 80% task reduction</div></div>
        <div class="text-center"><div class="w-12 h-12 rounded-xl bg-[#E61E2A]/20 flex items-center justify-center mx-auto mb-3"><i data-lucide="clock" class="w-6 h-6 text-[#E61E2A]"></i></div><div class="text-white font-semibold text-sm">Save Time &amp; Cost</div><div class="text-white/40 text-xs mt-1">Faster ops, lower overhead</div></div>
        <div class="text-center"><div class="w-12 h-12 rounded-xl bg-[#E61E2A]/20 flex items-center justify-center mx-auto mb-3"><i data-lucide="rocket" class="w-6 h-6 text-[#E61E2A]"></i></div><div class="text-white font-semibold text-sm">Increase Efficiency</div><div class="text-white/40 text-xs mt-1">Streamlined processes</div></div>
        <div class="text-center"><div class="w-12 h-12 rounded-xl bg-[#E61E2A]/20 flex items-center justify-center mx-auto mb-3"><i data-lucide="smile" class="w-6 h-6 text-[#E61E2A]"></i></div><div class="text-white font-semibold text-sm">Improve CX</div><div class="text-white/40 text-xs mt-1">24/7 intelligent support</div></div>
      </div>
    </div>
    <div class="text-center mt-10 fade-up"><a href="#contact" class="btn-red">Explore AI Solutions <i data-lucide="arrow-right" class="w-5 h-5"></i></a></div>
  </div>
</section>

<!-- ══════════════════════════════════════
     INDUSTRIES
══════════════════════════════════════ -->
<section id="industries" class="py-24 bg-white relative">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16 fade-up"><span class="section-label justify-center">Our Reach</span><h2 class="font-display font-black text-4xl sm:text-5xl text-[#0D1230] tracking-tight mt-4">Industries We Serve</h2><p class="text-[#0D1230]/55 mt-4 max-w-lg mx-auto">Delivering tailored digital solutions across diverse sectors.</p></div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      <div class="glass-card rounded-2xl p-6 text-center card-lift fade-up d1"><div class="w-12 h-12 rounded-xl bg-[#E61E2A]/10 flex items-center justify-center mx-auto mb-3"><i data-lucide="graduation-cap" class="w-6 h-6 text-[#E61E2A]"></i></div><span class="font-medium text-sm text-[#0D1230]">Education</span></div>
      <div class="glass-card rounded-2xl p-6 text-center card-lift fade-up d2"><div class="w-12 h-12 rounded-xl bg-[#0D1230]/8 flex items-center justify-center mx-auto mb-3"><i data-lucide="activity" class="w-6 h-6 text-[#0D1230]"></i></div><span class="font-medium text-sm text-[#0D1230]">Healthcare</span></div>
      <div class="glass-card rounded-2xl p-6 text-center card-lift fade-up d3"><div class="w-12 h-12 rounded-xl bg-[#E61E2A]/10 flex items-center justify-center mx-auto mb-3"><i data-lucide="building-2" class="w-6 h-6 text-[#E61E2A]"></i></div><span class="font-medium text-sm text-[#0D1230]">Real Estate</span></div>
      <div class="glass-card rounded-2xl p-6 text-center card-lift fade-up d4"><div class="w-12 h-12 rounded-xl bg-[#0D1230]/8 flex items-center justify-center mx-auto mb-3"><i data-lucide="shopping-bag" class="w-6 h-6 text-[#0D1230]"></i></div><span class="font-medium text-sm text-[#0D1230]">E-commerce</span></div>
      <div class="glass-card rounded-2xl p-6 text-center card-lift fade-up d5"><div class="w-12 h-12 rounded-xl bg-[#E61E2A]/10 flex items-center justify-center mx-auto mb-3"><i data-lucide="rocket" class="w-6 h-6 text-[#E61E2A]"></i></div><span class="font-medium text-sm text-[#0D1230]">Startups</span></div>
      <div class="glass-card rounded-2xl p-6 text-center card-lift fade-up" style="transition-delay:.40s"><div class="w-12 h-12 rounded-xl bg-[#0D1230]/8 flex items-center justify-center mx-auto mb-3"><i data-lucide="briefcase" class="w-6 h-6 text-[#0D1230]"></i></div><span class="font-medium text-sm text-[#0D1230]">Corporate</span></div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     CTA BAND
══════════════════════════════════════ -->
<section class="py-20 relative overflow-hidden" style="background:linear-gradient(135deg,#E61E2A 0%,#c41820 100%)">
  <div class="absolute inset-0 pointer-events-none" style="background-image:radial-gradient(circle at 1px 1px,rgba(255,255,255,.07) 1px,transparent 0);background-size:32px 32px"></div>
  <div class="max-w-4xl mx-auto px-6 text-center relative z-10 fade-up">
    <h2 class="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">Let's Build Something<br>Extraordinary Together</h2>
    <p class="text-white/70 text-lg mb-10 max-w-2xl mx-auto">Ready to transform your business with cutting-edge technology? Let's talk about your vision.</p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="#contact" class="btn-white w-full sm:w-auto justify-center">Start Your Project Today <i data-lucide="arrow-right" class="w-5 h-5"></i></a>
      <a href="#contact" class="btn-outline-white w-full sm:w-auto justify-center"><i data-lucide="calendar" class="w-5 h-5"></i> Book Free Consultation</a>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     CONTACT
══════════════════════════════════════ -->
<section id="contact" class="py-24 relative overflow-hidden" style="background:#F8FAFB">
  <div class="absolute inset-0 grid-pattern opacity-40 pointer-events-none"></div>
  <div class="max-w-7xl mx-auto px-6 relative z-10">
    <div class="text-center mb-16 fade-up"><span class="section-label justify-center">Get in Touch</span><h2 class="font-display font-black text-4xl sm:text-5xl text-[#0D1230] tracking-tight mt-4">Start Your Project</h2><p class="text-[#0D1230]/55 mt-4 max-w-lg mx-auto">Tell us about your goals and we'll get back to you within 24 hours.</p></div>
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div class="lg:col-span-2 fade-up d1">
        <div class="glass-card rounded-2xl p-8 h-full flex flex-col">
          <h3 class="font-display font-bold text-xl text-[#0D1230] mb-8">Contact Information</h3>
          <div class="space-y-6 flex-1">
            <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg bg-[#E61E2A]/10 flex items-center justify-center flex-shrink-0"><i data-lucide="phone" class="w-5 h-5 text-[#E61E2A]"></i></div><div><div class="text-xs text-[#0D1230]/40 font-medium uppercase tracking-wide mb-1">Phone</div><a href="tel:+1234567890" class="text-[#0D1230] font-medium text-sm hover:text-[#E61E2A] transition-colors">+1 (234) 567-890</a></div></div>
            <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg bg-[#E61E2A]/10 flex items-center justify-center flex-shrink-0"><i data-lucide="mail" class="w-5 h-5 text-[#E61E2A]"></i></div><div><div class="text-xs text-[#0D1230]/40 font-medium uppercase tracking-wide mb-1">Email</div><a href="mailto:hello@altitudetech.com" class="text-[#0D1230] font-medium text-sm hover:text-[#E61E2A] transition-colors">hello@altitudetech.com</a></div></div>
            <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg bg-[#E61E2A]/10 flex items-center justify-center flex-shrink-0"><i data-lucide="map-pin" class="w-5 h-5 text-[#E61E2A]"></i></div><div><div class="text-xs text-[#0D1230]/40 font-medium uppercase tracking-wide mb-1">Location</div><span class="text-[#0D1230] font-medium text-sm">Remote-First · Worldwide</span></div></div>
          </div>
          <div class="mt-8 pt-6 border-t border-black/8"><div class="flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-green-500"></div><span class="text-sm font-medium text-[#0D1230]">Currently accepting new projects</span></div></div>
        </div>
      </div>
      <div class="lg:col-span-3 fade-up d2">
        <div class="glass-card rounded-2xl p-8">
          <form id="contact-form" onsubmit="submitForm(event)">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div><label class="block text-xs font-semibold text-[#0D1230]/55 uppercase tracking-wide mb-2">Full Name</label><input type="text" name="name" required placeholder="Your name" class="w-full px-4 py-3 rounded-xl text-sm text-[#0D1230] placeholder-[#0D1230]/30 border border-black/10 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#E61E2A]/30 focus:border-[#E61E2A]/50 transition-all"></div>
              <div><label class="block text-xs font-semibold text-[#0D1230]/55 uppercase tracking-wide mb-2">Email Address</label><input type="email" name="email" required placeholder="you@company.com" class="w-full px-4 py-3 rounded-xl text-sm text-[#0D1230] placeholder-[#0D1230]/30 border border-black/10 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#E61E2A]/30 focus:border-[#E61E2A]/50 transition-all"></div>
            </div>
            <div class="mb-5"><label class="block text-xs font-semibold text-[#0D1230]/55 uppercase tracking-wide mb-2">Service Interested In</label><select name="service" class="w-full px-4 py-3 rounded-xl text-sm text-[#0D1230] border border-black/10 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#E61E2A]/30 focus:border-[#E61E2A]/50 transition-all appearance-none cursor-pointer"><option value="">Select a service...</option><option>Web Development</option><option>Mobile App Development</option><option>AI &amp; Automation</option><option>UI/UX Design</option><option>Digital Marketing</option><option>Other</option></select></div>
            <div class="mb-6"><label class="block text-xs font-semibold text-[#0D1230]/55 uppercase tracking-wide mb-2">Message</label><textarea name="message" rows="4" required placeholder="Tell us about your project..." class="w-full px-4 py-3 rounded-xl text-sm text-[#0D1230] placeholder-[#0D1230]/30 border border-black/10 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#E61E2A]/30 focus:border-[#E61E2A]/50 transition-all resize-none"></textarea></div>
            <button id="submit-btn" type="submit" class="btn-red w-full justify-center"><i data-lucide="send" class="w-5 h-5"></i><span id="btn-txt">Send Message</span></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════
     FOOTER
══════════════════════════════════════ -->
<footer style="background:#0D1230">
  <div class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
      <div class="lg:col-span-2">
        <a href="#" class="flex items-center gap-2 mb-5"><div class="w-8 h-8 rounded-lg bg-[#E61E2A] flex items-center justify-center"><i data-lucide="triangle" class="w-4 h-4 text-white" style="fill:white"></i></div><span class="font-display font-extrabold text-white text-xl tracking-tight">altitude<span class="text-[#E61E2A]">.</span></span></a>
        <p class="text-white/40 text-sm leading-relaxed max-w-xs mb-6">Building the next generation of digital products — powered by AI, designed for scale, and built for businesses that mean business.</p>
        <div class="flex items-center gap-3">
          <a href="#" aria-label="Twitter"   class="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors" style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.10)"><i data-lucide="twitter"   class="w-4 h-4 text-white/55"></i></a>
          <a href="#" aria-label="LinkedIn"  class="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors" style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.10)"><i data-lucide="linkedin"  class="w-4 h-4 text-white/55"></i></a>
          <a href="#" aria-label="Instagram" class="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors" style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.10)"><i data-lucide="instagram" class="w-4 h-4 text-white/55"></i></a>
          <a href="#" aria-label="GitHub"    class="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors" style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.10)"><i data-lucide="github"    class="w-4 h-4 text-white/55"></i></a>
        </div>
      </div>
      <div>
        <h5 class="text-white font-semibold text-sm mb-5 tracking-wide">Services</h5>
        <ul class="space-y-3">
          <li><a href="#services"      class="text-white/40 text-sm hover:text-white transition-colors">Web Development</a></li>
          <li><a href="#services"      class="text-white/40 text-sm hover:text-white transition-colors">Mobile Apps</a></li>
          <li><a href="#services"      class="text-white/40 text-sm hover:text-white transition-colors">UI/UX Design</a></li>
          <li><a href="#ai-automation" class="text-white/40 text-sm hover:text-white transition-colors">AI &amp; Automation</a></li>
          <li><a href="#services"      class="text-white/40 text-sm hover:text-white transition-colors">Digital Marketing</a></li>
        </ul>
      </div>
      <div>
        <h5 class="text-white font-semibold text-sm mb-5 tracking-wide">Company</h5>
        <ul class="space-y-3">
          <li><a href="#about"      class="text-white/40 text-sm hover:text-white transition-colors">About Us</a></li>
          <li><a href="#industries" class="text-white/40 text-sm hover:text-white transition-colors">Industries</a></li>
          <li><a href="#contact"    class="text-white/40 text-sm hover:text-white transition-colors">Contact</a></li>
          <li><a href="#contact"    class="text-white/40 text-sm hover:text-white transition-colors">Free Consultation</a></li>
        </ul>
      </div>
    </div>
    <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-white/25 text-xs">© 2025 Altitude Technologies. All rights reserved.</p>
      <div class="flex items-center gap-6"><a href="#" class="text-white/25 text-xs hover:text-white/55 transition-colors">Privacy Policy</a><a href="#" class="text-white/25 text-xs hover:text-white/55 transition-colors">Terms of Service</a></div>
    </div>
  </div>
</footer>

<!-- ══════════════════════════════════════
     JAVASCRIPT
══════════════════════════════════════ -->
<script>
  // Init icons
  lucide.createIcons()

  // Navbar scroll shadow
  const navbar = document.getElementById('navbar')
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 20 ? '0 2px 32px rgba(13,18,48,.10)' : ''
  }, { passive: true })

  // Mobile menu
  let open = false
  document.getElementById('mob-btn').addEventListener('click', () => {
    open = !open
    document.getElementById('mob-menu').classList.toggle('hidden', !open)
    document.getElementById('mob-icon').setAttribute('data-lucide', open ? 'x' : 'menu')
    lucide.createIcons()
  })
  document.querySelectorAll('#mob-menu a').forEach(a => a.addEventListener('click', () => {
    open = false; document.getElementById('mob-menu').classList.add('hidden')
  }))

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'))
    if (!t) return; e.preventDefault()
    window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - (navbar.offsetHeight + 16), behavior: 'smooth' })
  }))

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); observer.unobserve(e.target) } })
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))

  // Form
  function submitForm(e) {
    e.preventDefault()
    const btn = document.getElementById('submit-btn')
    const txt = document.getElementById('btn-txt')
    btn.disabled = true; txt.textContent = 'Sending...'
    setTimeout(() => {
      txt.textContent = 'Message Sent!'
      btn.style.background = '#16a34a'
      setTimeout(() => { txt.textContent = 'Send Message'; btn.style.background = ''; btn.disabled = false; e.target.reset() }, 3500)
    }, 1500)
  }
</script>
</body>
</html>
```
