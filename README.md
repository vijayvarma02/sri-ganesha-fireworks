# Sri Ganesha Fireworks

Premium responsive React + TypeScript demonstration storefront for Hyderabad. Built with Vite, Tailwind CSS, React Router, Lucide, and Framer Motion. Includes 60 fictional sample products, mock INR prices, and a cash-on-delivery checkout simulation.

## Run

```sh
npm install
npm run dev
```

`npm run build` checks TypeScript and produces `dist/`. Use `npm run preview` to preview that output. A production host must route unknown page URLs to `index.html` for React Router.

## Owner setup before launch

Edit `src/catalog.ts` to maintain sample products, `mockPrice`, and sample pack sizes. All actual `price` fields remain null and availability remains unverified. No live sale or payment is enabled. Cart controls save a **demo cart**, with localStorage persistence, bounded quantities, removal, and mock-price subtotals. Search, price filters, and sorting use sample data. Category illustrations are shared by related sample variants and do not represent exact stocked products. Hyderabad availability has not been researched or claimed.

`/checkout` demonstrates delivery-form validation, a review step, cash on delivery as its only payment preview, and an explicit demo-completion screen. Delivery details remain in component memory, never enter localStorage or a URL, and are discarded on completion or navigation away. No order is sent, reserved, or stored. The demo does not establish delivery fees, tax treatment, service coverage, or timelines. Use fictional form values during testing.

Review the draft policy pages and publish actual business policies and compliance details. Confirm local restrictions independently before sales. No reviews, discounts, delivery promises, or certifications are fabricated. The Best Sellers navigation displays a preview notice until sales-based merchandising is available. Categories shown are explicitly labeled proposed collection previews, not live stock.

## Features

Homepage, ten proposed categories (expandable), 60-product searchable catalog, category and mock-price filters, sorting, reset, load more in batches of 12, empty results, product details, related products, demo cart drawer, local persistence, COD checkout simulation, configurable inquiry message, contact, about, policy and 404 pages. Keyboard focus styles, skip link, reduced-motion support, drawer Escape handling and focus trap, responsive navigation, image fallback and lazy loading included.

## Generated assets

Built-in imagegen created original illustrative assets, stored locally as optimized WebP images under `public/images/`. These depict concepts, not actual stocked products. `scripts/prepare-images.mjs` optimizes the hero and slices the ten-tile product atlas. `sharp` is an asset preparation dev dependency, not required in the browser.

Prompt set:

- Hero: photorealistic premium Diwali night sky, midnight navy, fine gold chrysanthemum fireworks on the right, smaller saffron/burgundy bursts, dark negative space on the left for HTML text, subtle distant Indian architectural lights, no lettering or logos.
- Product atlas: ten coordinated ivory studio photographs in a five-column/two-row contact sheet: classic sparklers, color sparklers, conical flower pots, flat chakras, stick rockets, aerial cylinder cartons, bundled crackers, family assortment, premium navy gift box, colorful novelty assortment. Unlit products, no people, no brands, no lettering.
