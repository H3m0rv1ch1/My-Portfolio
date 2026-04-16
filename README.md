# Mohammed Alghanam Portfolio

A sleek, dark-themed portfolio site built with **React + Vite**, inspired by David Rodriguez's design.

## Features

- **Custom Cursor** - Miro-style cursor with hover effects
- **Dark/Light Theme** - Toggle between themes with persistent storage
- **Smooth Animations** - GSAP-like entrance animations
- **Project Cards** - Beautiful gradient cards with hover effects
- **Responsive Design** - Mobile-first approach
- **Preloader** - Animated name reveal on load
- **Scroll Navigation** - Floating nav on scroll

## Tech Stack

- React 18
- Vite 5
- GSAP (for advanced animations)
- Custom CSS with CSS Variables
- Inter & Syne fonts

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
vite-project/
├── src/
│   ├── components/
│   │   ├── CustomCursor.tsx
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── Work.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── BackToTop.tsx
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useScrollNav.ts
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Credits

Design inspiration from David Rodriguez's portfolio (dvdrod.com)
Built for Mohammed Alghanam - Full Stack Engineer & Digital Architect
