# HEXSONIX — Cinematic Software Company Website

A responsive React + Vite + Tailwind website featuring a scroll-driven zoom-through effect powered by GSAP ScrollTrigger. Uses the HEXSONIX logo supplied for this project.

## Quick start

```bash
npm install
npm run dev
```

Open the local address Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Customize

- `src/App.jsx` — navigation, page sections, service information, contact details, scroll animation timeline.
- `src/styles.css` — visual styles, responsive layouts, gradients.
- `src/assets/hexsonix-logo.png` — transparent full HEXSONIX logo derived from your JPEG.
- `src/assets/hexsonix-mark.png` — HEXSONIX symbol for navigation and accents.

### Scroll-through animation

The `scroll-scene` is pinned for **190% of the viewport scroll distance** while a single GSAP timeline:
1. Moves and fades the opening text.
2. Enlarges the supplied logo up to 15×.
3. Expands a circular clip mask into the next dark scene.
4. Brings the next screen forward from blur and scale.

Adjust the `end: '+=190%'`, the `scale: 15`, and the timeline positions in `App.jsx` to vary intensity and duration.

The website observes `prefers-reduced-motion` and swaps to a static introduction for users who have requested less motion.

**Note:** The sample email `hello@hexsonix.com` is a placeholder. Replace it with your actual business contact address before deploying.
