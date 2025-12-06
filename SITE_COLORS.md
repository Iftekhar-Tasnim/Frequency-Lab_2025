# F Lab Website - Complete Color Palette

This document lists all colors used throughout the F Lab website.

## Color Families

### 1. Yale Blue (Primary Blue)
**Hex Values:**
- `yale-blue-50`: #e9f5fc
- `yale-blue-100`: #d2ebf9
- `yale-blue-200`: #a5d8f3
- `yale-blue-300`: #78c4ed
- `yale-blue-400`: #4bb0e7
- `yale-blue-500`: #1f9de0 (Primary - Most Used)
- `yale-blue-600`: #187db4
- `yale-blue-700`: #125e87
- `yale-blue-800`: #0c3f5a
- `yale-blue-900`: #061f2d
- `yale-blue-950`: #04161f

**Usage in Site:**
- Buttons (bg-yale-blue-500, hover:bg-yale-blue-600)
- Navigation hover states (hover:text-yale-blue-600, hover:text-yale-blue-400)
- Accent highlights (text-yale-blue-600, border-yale-blue-500)
- Background highlights (bg-yale-blue-100, bg-yale-blue-50)
- Footer social icons (hover:bg-yale-blue-500)
- Gradient backgrounds

---

### 2. Prussian Blue (Dark Blue)
**Hex Values:**
- `prussian-blue-50`: #edf1f8
- `prussian-blue-100`: #dae4f1
- `prussian-blue-200`: #b5c8e3
- `prussian-blue-300`: #90add5
- `prussian-blue-400`: #6b91c7
- `prussian-blue-500`: #4676b9
- `prussian-blue-600`: #385e94
- `prussian-blue-700`: #2a476f (Text - Most Used)
- `prussian-blue-800`: #1c2f4a (Headings - Most Used)
- `prussian-blue-900`: #0e1825 (Footer Background)
- `prussian-blue-950`: #0a111a (Footer Background)

**Usage in Site:**
- Navigation text (text-prussian-blue-700)
- Headings (text-prussian-blue-800)
- Footer background (from-prussian-blue-900, to-prussian-blue-950)
- Footer social icons (bg-prussian-blue-800)
- Borders (border-prussian-blue-800)
- Background highlights (bg-prussian-blue-100)
- Text accents (text-prussian-blue-600)

---

### 3. Fresh Sky (Light Blue)
**Hex Values:**
- `fresh-sky-50`: #e8f6fc
- `fresh-sky-100`: #d1edfa
- `fresh-sky-200`: #a3dbf5
- `fresh-sky-300`: #75c9f0
- `fresh-sky-400`: #47b7eb
- `fresh-sky-500`: #19a5e6
- `fresh-sky-600`: #1484b8
- `fresh-sky-700`: #0f638a
- `fresh-sky-800`: #0a425c
- `fresh-sky-900`: #05212e
- `fresh-sky-950`: #041720

**Usage in Site:**
- Hero carousel gradients (via-fresh-sky-500, to-fresh-sky-600, to-fresh-sky-400)
- Focus area cards (border-fresh-sky-500, bg-fresh-sky-100, text-fresh-sky-600)
- Gradient backgrounds

---

### 4. Platinum (Gray/Neutral)
**Hex Values:**
- `platinum-50`: #eef3f6 (Background - Most Used)
- `platinum-100`: #dde7ee
- `platinum-200`: #bbcfdd (Borders - Most Used)
- `platinum-300`: #99b8cc
- `platinum-400`: #77a0bb
- `platinum-500`: #5588aa
- `platinum-600`: #446d88 (Text - Most Used)
- `platinum-700`: #335266 (Text - Most Used)
- `platinum-800`: #223644
- `platinum-900`: #111b22
- `platinum-950`: #0c1318

**Usage in Site:**
- Section backgrounds (bg-platinum-50, from-platinum-50, to-platinum-50)
- Borders (border-platinum-200)
- Text (text-platinum-600, text-platinum-700)
- Footer text (text-platinum-100, text-platinum-300, text-platinum-400)
- Hero carousel gradients (to-platinum-500, via-platinum-400)

---

## Standard Colors

### White
- `white`: #ffffff
- `white/95`: rgba(255, 255, 255, 0.95) - Navbar background
- `white/50`: rgba(255, 255, 255, 0.5) - Carousel indicators
- `white/80`: rgba(255, 255, 255, 0.8) - Carousel indicators hover

### Black
- `black/30`: rgba(0, 0, 0, 0.3) - Hero overlay

### Yellow
- `yellow-400`: #facc15 - Star ratings in testimonials

---

## Color Usage by Component

### Navigation Bar
- Background: `bg-white/95` (with backdrop-blur)
- Text: `text-prussian-blue-700`
- Hover: `hover:text-yale-blue-600`
- Mobile menu hover: `hover:bg-yale-blue-50`
- Border: `border-platinum-200`

### Footer
- Background: `bg-gradient-to-b from-prussian-blue-900 to-prussian-blue-950`
- Text: `text-platinum-100`, `text-platinum-300`, `text-platinum-400`
- Accents: `text-yale-blue-400`
- Social icons: `bg-prussian-blue-800`, `hover:bg-yale-blue-500`
- Borders: `border-prussian-blue-800`

### Buttons
- Primary: `bg-yale-blue-500`, `hover:bg-yale-blue-600`
- Text: `text-white`

### Hero Section
- Gradients:
  - `from-yale-blue-500 via-fresh-sky-500 to-platinum-500`
  - `from-prussian-blue-600 via-yale-blue-600 to-fresh-sky-600`
  - `from-platinum-400 via-yale-blue-400 to-fresh-sky-400`
- Overlay: `bg-black/30`
- Text: `text-white`
- Indicators: `bg-white/50`, `hover:bg-white/80`, `text-prussian-blue-700`

### Section Backgrounds
- Light sections: `bg-gradient-to-b from-white to-platinum-50`
- Alternating: `bg-gradient-to-b from-platinum-50 to-white`

### Focus Area Cards
- Coding: `border-yale-blue-500`, `bg-yale-blue-100`, `text-yale-blue-600`
- Electronics: `border-fresh-sky-500`, `bg-fresh-sky-100`, `text-fresh-sky-600`
- Robotics: `border-prussian-blue-500`, `bg-prussian-blue-100`, `text-prussian-blue-600`

### Headings
- Main: `text-prussian-blue-800`
- Accent lines: `bg-yale-blue-500`

### Text
- Body: `text-platinum-700`, `text-platinum-600`
- Headings: `text-prussian-blue-800`
- Links: `text-prussian-blue-700`
- Footer: `text-platinum-100`, `text-platinum-300`, `text-platinum-400`

### Testimonials
- Star ratings: `text-yellow-400`
- Card borders: `border-platinum-200`, `hover:border-yale-blue-300`

---

## DaisyUI Theme Colors (f-lab theme)
- Primary: `#1f9de0` (yale-blue-500)
- Secondary: `#5588aa` (platinum-500)
- Accent: `#19a5e6` (fresh-sky-500)
- Neutral: `#335266` (platinum-700)
- Base-100: `#ffffff` (white)
- Info: `#1f9de0` (yale-blue-500)
- Success: `#10b981` (green)
- Warning: `#f59e0b` (amber)
- Error: `#ef4444` (red)

---

## Most Frequently Used Colors

1. **Yale Blue 500** (#1f9de0) - Primary buttons, accents
2. **Prussian Blue 800** (#1c2f4a) - Headings
3. **Prussian Blue 700** (#2a476f) - Navigation text
4. **Platinum 50** (#eef3f6) - Section backgrounds
5. **Platinum 200** (#bbcfdd) - Borders
6. **Platinum 600/700** (#446d88, #335266) - Body text
7. **Yale Blue 600** (#187db4) - Hover states
8. **Prussian Blue 900/950** (#0e1825, #0a111a) - Footer background

