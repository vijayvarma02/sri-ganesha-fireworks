import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Flame,
  Gift,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { business, categories, money, products, type Product } from "./catalog";
import "./styles.css";
import { DemoCheckout } from "./DemoCheckout";
import { mockSubtotal } from "./cart";

type Item = { id: string; quantity: number };
const CartContext = React.createContext<{
  items: Item[];
  add: (id: string, quantity?: number) => void;
  setQuantity: (id: string, q: number) => void;
  open: () => void;
}>({ items: [], add: () => {}, setQuantity: () => {}, open: () => {} });
const useCart = () => React.useContext(CartContext);
function ProductImage({
  index,
  alt,
  className = "",
}: {
  index: number;
  alt: string;
  className?: string;
}) {
  return (
    <img
      className={`product-image ${className}`}
      src={`/images/product-${index}.webp`}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = "/images/fallback.svg";
      }}
    />
  );
}
function Logo() {
  return (
    <Link to="/" className="brand" aria-label="Sri Ganesha Fireworks home">
      <span className="brand-mark">
        <Flame size={30} />
        <Sparkles size={15} />
      </span>
      <span>
        <strong>SRI GANESHA</strong>
        <small>F I R E W O R K S</small>
      </span>
    </Link>
  );
}
function AnnouncementBar() {
  return (
    <div className="announcement">
      <span>
        <Sparkles size={12} /> Demo store · 60 sample products · Mock prices
      </span>
      <span className="announcement-right">
        <MapPin size={12} /> Hyderabad, Telangana <i />{" "}
        <Link to="/contact">
          Let’s talk celebrations <ArrowUpRight size={12} />
        </Link>
      </span>
    </div>
  );
}
function Navbar() {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const cart = useCart();
  const location = useLocation();
  useEffect(() => {
    setMenu(false);
    setSearch(false);
  }, [location]);
  return (
    <>
      <AnnouncementBar />
      <header className="navbar">
        <Logo />
        <nav className={menu ? "nav-links mobile-open" : "nav-links"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop Fireworks</NavLink>
          <Link to="/#categories">Categories</Link>
          <Link to="/shop?collection=featured">Best Sellers</Link>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button"
            aria-label="Search products"
            onClick={() => setSearch(!search)}
          >
            <Search size={20} />
          </button>
          <button
            className="icon-button bag"
            aria-label={`Open demo cart, ${cart.items.reduce((n, i) => n + i.quantity, 0)} items`}
            onClick={cart.open}
          >
            <ShoppingBag size={20} />
            <b>{cart.items.reduce((n, i) => n + i.quantity, 0)}</b>
          </button>
          <Link className="button nav-cta" to="/shop">
            Explore Collection <ArrowUpRight size={15} />
          </Link>
          <button
            className="icon-button mobile-toggle"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {search && (
        <form className="header-search" action="/shop">
          <Search size={20} />
          <input
            autoFocus
            name="q"
            aria-label="Search fireworks"
            placeholder="Find a little celebration…"
          />
          <button className="button">
            Search <ArrowRight size={16} />
          </button>
        </form>
      )}
    </>
  );
}
function HeroSection() {
  const reduced = useReducedMotion();
  return (
    <section className="hero">
      <div className="hero-image" />
      <div className="hero-overlay" />
      <motion.div
        className="hero-content"
        initial={reduced ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="eyebrow">
          <span /> A LITTLE SPARK. A LOT OF JOY.
        </div>
        <h1>
          Make Every
          <br />
          Celebration
          <br />
          <em>Brighter.</em>
        </h1>
        <p>
          Discover a festive collection of fireworks for Diwali,
          <br className="desktop" /> family celebrations, and special occasions
          in Hyderabad.
        </p>
        <div className="hero-buttons">
          <Link className="button" to="/shop">
            Explore Fireworks <ArrowRight size={18} />
          </Link>
          <a className="button button-outline" href="#categories">
            Browse Categories <ChevronDown size={16} />
          </a>
        </div>
        <div className="hero-caption">
          <span className="caption-line" /> LIGHT UP EVERY CELEBRATION.
        </div>
      </motion.div>
      <div className="hero-side">MADE FOR MOMENTS THAT MATTER</div>
      <div className="hero-bottom">
        <span>
          <MapPin size={14} /> Celebrating with Hyderabad
        </span>
        <span>
          Thoughtful celebrations. Unforgettable memories.{" "}
          <Sparkles size={14} />
        </span>
      </div>
    </section>
  );
}
function TrustStrip() {
  return (
    <div className="trust-strip">
      <div>
        <Sparkles />
        <span>
          <strong>A world of celebration</strong>
          <small>Explore your festive favorites</small>
        </span>
      </div>
      <div>
        <Gift />
        <span>
          <strong>Something for every moment</strong>
          <small>Discover assorted collections</small>
        </span>
      </div>
      <div>
        <MessageCircle />
        <span>
          <strong>A personal touch</strong>
          <small>Enquire before you celebrate</small>
        </span>
      </div>
      <div>
        <ShieldCheck />
        <span>
          <strong>Celebrate responsibly</strong>
          <small>Safety comes first, always</small>
        </span>
      </div>
    </div>
  );
}
function SectionHeading({
  label,
  title,
  description,
  link,
  href = "/shop",
}: {
  label: string;
  title: string;
  description?: string;
  link?: string;
  href?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">{label}</div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {link && (
        <Link className="text-link" to={href}>
          {link} <ArrowRight size={17} />
        </Link>
      )}
    </div>
  );
}
function CategoryGrid() {
  const [all, setAll] = useState(false);
  return (
    <section className="section categories-section" id="categories">
      <SectionHeading
        label="FIND YOUR FESTIVE SPARK"
        title="Every kind of celebration."
        description="From little golden sparks to a sky full of wonder. Explore the possibilities."
      />
      <div className="category-grid">
        {categories.slice(0, all ? 10 : 5).map((c) => (
          <Link
            className="category-card"
            to={`/shop?category=${c.id}`}
            key={c.id}
          >
            <div className="category-photo">
              <ProductImage
                index={c.image}
                alt={`${c.name} — illustrative collection`}
              />
              <span className="round-arrow">
                <ArrowUpRight size={19} />
              </span>
            </div>
            <h3>{c.name}</h3>
            <p>{c.note}</p>
          </Link>
        ))}
      </div>
      <div className="category-bottom">
        <p>
          Collection preview · Categories and availability await shop
          confirmation.
        </p>
        <button className="text-link" onClick={() => setAll(!all)}>
          {all ? "Show less" : "Explore all 10 categories"}{" "}
          <ChevronDown size={15} />
        </button>
      </div>
    </section>
  );
}
function ProductCard({ product: p }: { product: Product }) {
  const cart = useCart();
  return (
    <article className="product-card">
      <Link className="product-photo" to={`/product/${p.id}`}>
        <ProductImage
          index={p.image}
          alt={`${p.name}, generated demonstration imagery`}
        />
        <span className="image-tag">COLLECTION PREVIEW</span>
        <span className="product-view">
          View details <ArrowUpRight size={16} />
        </span>
      </Link>
      <div className="product-meta">
        {categories.find((c) => c.id === p.category)?.name}
      </div>
      <Link to={`/product/${p.id}`} className="product-name">
        {p.name}
      </Link>
      <p className="sample-pack">{p.pack} · illustrative contents</p>
      <p className="availability">
        {p.verified && p.available
          ? "Availability confirmed"
          : "Availability to be confirmed"}
      </p>
      <div className="product-card-bottom">
        <span>
          {money(p.mockPrice)} <small className="mock-label">mock price</small>
        </span>
        <button
          className="add-button"
          aria-label={`Add ${p.name} to demo cart`}
          onClick={() => cart.add(p.id)}
        >
          <Plus size={18} />
        </button>
      </div>
    </article>
  );
}
function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="product-grid">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
function ComboSection() {
  return (
    <section className="combo-section section">
      <div className="combo-copy">
        <div className="eyebrow">MORE JOY, BEAUTIFULLY TOGETHER</div>
        <h2>
          One box.
          <br />
          <em>Endless possibilities.</em>
        </h2>
        <p>
          A little sparkle, a little color, a whole lot of celebration. Discover
          our proposed festive assortments for moments worth coming together.
        </p>
        <Link className="button" to="/shop?category=combos">
          Discover Festival Combos <ArrowRight size={17} />
        </Link>
        <small>
          Illustrative collection · Contents and availability to be confirmed
        </small>
      </div>
      <Link
        className="combo-photo"
        to="/product/premium-combo"
        aria-label="Explore Premium Celebration Combo"
      >
        <ProductImage
          index={8}
          alt="Illustrative navy and gold celebration gift box"
        />
        <span className="combo-photo-label">
          THE CELEBRATION EDIT <Sparkles size={18} />
        </span>
      </Link>
    </section>
  );
}
function SafetySection() {
  return (
    <section className="safety-section section">
      <div className="safety-title">
        <ShieldCheck size={30} />
        <div className="eyebrow">A LITTLE CARE GOES A LONG WAY</div>
        <h2>Celebrate Responsibly.</h2>
        <p>
          Make beautiful memories. Keep everyone’s wellbeing at the heart of
          your celebration.
        </p>
      </div>
      <div className="safety-points">
        <div>
          <span>01</span>
          <h3>Read. Prepare. Celebrate.</h3>
          <p>
            Follow product-specific instructions, keep a safe distance, and use
            appropriate adult supervision.
          </p>
        </div>
        <div>
          <span>02</span>
          <h3>Be thoughtful of your surroundings.</h3>
          <p>
            Avoid use around children, pets, flammable materials, and crowded
            areas.
          </p>
        </div>
        <div>
          <span>03</span>
          <h3>Know the local guidelines.</h3>
          <p>
            Buy legally permitted products from authorized sellers. Follow
            current Telangana and Hyderabad restrictions, including noise and
            time limits.
          </p>
        </div>
      </div>
    </section>
  );
}
function ContactSection() {
  return (
    <section className="contact-band section">
      <div>
        <div className="eyebrow">
          ROOTED IN HYDERABAD. INSPIRED BY CELEBRATION.
        </div>
        <h2>Your celebration starts with a conversation.</h2>
        <p>
          Let’s help you explore the possibilities for your next festive moment.
        </p>
      </div>
      <Link className="button button-outline" to="/contact">
        Get in Touch <ArrowUpRight size={18} />
      </Link>
    </section>
  );
}
function Footer() {
  return (
    <footer>
      <div className="footer-main section">
        <div>
          <Logo />
          <p>Light Up Every Celebration.</p>
          <small>
            A local celebration collection
            <br />
            for Hyderabad, Telangana.
          </small>
        </div>
        <div>
          <h4>Explore the collection</h4>
          {categories.slice(0, 5).map((c) => (
            <Link to={`/shop?category=${c.id}`} key={c.id}>
              {c.name}
            </Link>
          ))}
        </div>
        <div>
          <h4>A little more about us</h4>
          <Link to="/about">Our story</Link>
          <Link to="/contact">Contact & enquiries</Link>
          <Link to="/#safety">Celebrate responsibly</Link>
          <Link to="/shop?category=combos">Festival collections</Link>
        </div>
        <div>
          <h4>Let’s stay connected</h4>
          <span className="footer-location">
            <MapPin size={15} /> Hyderabad, Telangana
          </span>
          <p>
            Shop contact & business hours
            <br />
            await owner confirmation.
          </p>
          <Link className="text-link" to="/contact">
            Enquiry information <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sri Ganesha Fireworks.</span>
        <div>
          <Link to="/policy/privacy">Privacy</Link>
          <Link to="/policy/terms">Terms & conditions</Link>
          <Link to="/policy/returns">Returns & refunds</Link>
        </div>
        <span>
          Made for moments of joy. <Sparkles size={12} />
        </span>
      </div>
    </footer>
  );
}
function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <CategoryGrid />
      <section className="section featured">
        <SectionHeading
          label="A FEW FESTIVE FAVORITES"
          title="Small sparks. Big celebrations."
          description="A glimpse into the collection. Find a little magic for your next celebration."
          link="View the collection"
        />
        <div className="demo-note">
          <span /> Demonstration catalog · Illustrative images · Prices and
          availability await verification
        </div>
        <ProductGrid
          items={[products[0], products[2], products[3], products[7]]}
        />
      </section>
      <ComboSection />
      <div id="safety">
        <SafetySection />
      </div>
      <ContactSection />
    </>
  );
}
function Shop() {
  const [params, setParams] = useSearchParams();
  const [limit, setLimit] = useState(12);
  const q = params.get("q") || "";
  const category = params.get("category") || "";
  const sort = params.get("sort") || "featured";
  const ceiling = params.get("max") || "";
  const collection = params.get("collection");
  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    setParams(next);
    setLimit(12);
  }
  let filtered = products.filter(
    (p) =>
      (!q || p.name.toLowerCase().includes(q.toLowerCase())) &&
      (!category || p.category === category) &&
      (!ceiling || p.mockPrice <= Number(ceiling)),
  );
  if (sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "low" || sort === "high")
    filtered.sort((a, b) =>
      sort === "low" ? a.mockPrice - b.mockPrice : b.mockPrice - a.mockPrice,
    );
  return (
    <main className="section shop-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / The collection
      </div>
      <SectionHeading
        label="A WORLD OF FESTIVE POSSIBILITIES"
        title={
          collection === "featured"
            ? "Your next festive favorite."
            : "Find your celebration."
        }
        description="60 sample products to explore. Mock prices, illustrative category images, and unverified availability."
      />
      {collection === "featured" && (
        <div className="demo-note">
          This is a collection preview. Sales-based best sellers will appear
          after verification.
        </div>
      )}
      <div className="filter-panel">
        <label className="search-field">
          <Search size={18} />
          <input
            placeholder="Search the collection…"
            aria-label="Search by product name"
            value={q}
            onChange={(e) => update("q", e.target.value)}
          />
        </label>
        <label>
          Category
          <select
            aria-label="Category"
            value={category}
            onChange={(e) => update("category", e.target.value)}
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option value={c.id} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Price range
          <select
            aria-label="Maximum mock price"
            value={ceiling}
            onChange={(e) => update("max", e.target.value)}
          >
            <option value="">All prices</option>
            <option value="500">Up to ₹500</option>
            <option value="1000">Up to ₹1,000</option>
            <option value="2500">Up to ₹2,500</option>
          </select>
        </label>
        <label>
          Sort by
          <select
            aria-label="Sort products"
            value={sort}
            onChange={(e) => update("sort", e.target.value)}
          >
            <option value="featured">Collection order</option>
            <option value="name">Product name A–Z</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </label>
      </div>
      <div className="results-bar">
        <span>
          {filtered.length} {filtered.length === 1 ? "product" : "products"} to
          explore
        </span>
        <button
          className="text-link"
          onClick={() => {
            setParams({});
            setLimit(12);
          }}
        >
          Clear all filters <X size={14} />
        </button>
      </div>
      {ceiling && (
        <p className="filter-explanation">
          Filters use mock prices for demonstration only, not current shop
          prices.
        </p>
      )}
      {filtered.length ? (
        <ProductGrid items={filtered.slice(0, limit)} />
      ) : (
        <div className="empty-state">
          <Sparkles size={36} />
          <h2>
            {category === "garlands"
              ? "This collection is yet to bloom."
              : "No sparks found this time."}
          </h2>
          <p>
            {category === "garlands"
              ? "No verified products are available in this proposed category."
              : "Try another search or reset your filters to explore the collection."}
          </p>
          <button className="button" onClick={() => setParams({})}>
            Reset filters <ArrowRight size={16} />
          </button>
        </div>
      )}
      {filtered.length > limit && (
        <div className="load-more">
          <button
            className="button button-outline"
            onClick={() => setLimit((v) => v + 12)}
          >
            Explore more <Plus size={16} />
          </button>
        </div>
      )}
    </main>
  );
}
function Quantity({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="quantity">
      <button
        aria-label="Decrease quantity"
        disabled={value <= 1}
        onClick={() => onChange(value - 1)}
      >
        <Minus size={15} />
      </button>
      <span aria-live="polite">{value}</span>
      <button
        aria-label="Increase quantity"
        disabled={value >= 99}
        onClick={() => onChange(value + 1)}
      >
        <Plus size={15} />
      </button>
    </div>
  );
}
function ProductDetails() {
  const { id } = useParams();
  const p = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const cart = useCart();
  useEffect(() => setQuantity(1), [id]);
  if (!p) return <NotFound />;
  return (
    <main className="section detail-page">
      <div className="breadcrumb">
        <Link to="/shop">The collection</Link> / {p.name}
      </div>
      <div className="detail-grid">
        <div>
          <ProductImage
            className="detail-image"
            index={p.image}
            alt={`${p.name} — illustrative generated photography`}
          />
          <p className="image-disclaimer">
            Generated demonstration image. Exact product and packaging may
            differ.
          </p>
        </div>
        <div className="detail-copy">
          <div className="eyebrow">
            {categories.find((c) => c.id === p.category)?.name}
          </div>
          <h1>{p.name}</h1>
          <span className="status">Demonstration product</span>
          <p>{p.description}</p>
          <h3>
            {money(p.mockPrice)}{" "}
            <small className="mock-label">mock price</small>
          </h3>
          <dl>
            <div>
              <dt>Pack size</dt>
              <dd>{p.pack || "To be confirmed"}</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>
                {p.verified && p.available
                  ? "Confirmed"
                  : "Awaiting shop confirmation"}
              </dd>
            </div>
          </dl>
          <div className="detail-actions">
            <Quantity value={quantity} onChange={setQuantity} />
            <button
              className="button"
              onClick={() => {
                cart.add(p.id, quantity);
                cart.open();
              }}
            >
              Add to demo cart <Plus size={17} />
            </button>
          </div>
          <p className="fine-print">
            This adds a sample to your demo cart. All prices are fictional;
            checkout is a simulation.
          </p>
          <div className="detail-safety">
            <ShieldCheck size={21} />
            <p>
              Follow product instructions and local restrictions. Maintain a
              safe distance and appropriate adult supervision. Keep away from
              children, pets, flammable materials, and crowds.
            </p>
          </div>
        </div>
      </div>
      <section className="related">
        <SectionHeading
          label="KEEP EXPLORING"
          title="A little more festive inspiration."
        />
        <ProductGrid
          items={products.filter((x) => x.id !== p.id).slice(0, 4)}
        />
      </section>
    </main>
  );
}
function Contact() {
  return (
    <main className="section info-page">
      <SectionHeading
        label="LET’S TALK CELEBRATIONS"
        title="A little conversation. A brighter celebration."
        description="Sri Ganesha Fireworks · Hyderabad, Telangana"
      />
      <div className="info-grid">
        <div className="info-card">
          <MessageCircle />
          <h3>Contact the shop</h3>
          <p>
            Our verified business contact details will appear here once supplied
            by the owner.
          </p>
          {business.whatsapp ? (
            <a
              className="button"
              href={`https://wa.me/${business.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hello Sri Ganesha Fireworks. Please share current pricing, availability, and service coverage.")}`}
              target="_blank"
              rel="noreferrer"
            >
              Enquire on WhatsApp <ArrowUpRight size={16} />
            </a>
          ) : (
            <div className="pending">WhatsApp contact awaiting setup</div>
          )}
          {business.phone && (
            <a href={`tel:${business.phone}`}>{business.phone}</a>
          )}
          {business.email && (
            <a href={`mailto:${business.email}`}>{business.email}</a>
          )}
          <p>
            <strong>Business hours</strong>
            <br />
            {business.hours || "Awaiting owner confirmation"}
          </p>
        </div>
        <div className="info-card">
          <MapPin />
          <h3>Celebrating with Hyderabad</h3>
          <p>
            Helping Hyderabad customers explore festive celebration products,
            one thoughtful conversation at a time.
          </p>
          <p>
            <strong>Confirmed service coverage</strong>
            <br />
            {business.serviceAreas.length
              ? business.serviceAreas.join(", ")
              : "Specific service areas await confirmation."}
          </p>
          <p>
            Delivery and pickup depend on confirmed service coverage and
            applicable local rules. Please confirm details with the business
            before making plans.
          </p>
          {business.address && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`}
              target="_blank"
              rel="noreferrer"
            >
              View shop location
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
function About() {
  return (
    <main className="section info-page">
      <div className="about-layout">
        <div>
          <div className="eyebrow">
            YOUR FESTIVAL. YOUR COLORS. YOUR CELEBRATION.
          </div>
          <h1>
            For moments
            <br />
            that <em>shine brighter.</em>
          </h1>
          <p>
            Sri Ganesha Fireworks is a local business focused on helping
            Hyderabad customers explore festive celebration products.
          </p>
          <p>
            From the quiet anticipation of a festive evening to the joy of
            coming together, we believe celebrations deserve a thoughtful touch.
            Explore our collection concepts and connect with the shop to confirm
            the right products for your occasion.
          </p>
          <Link className="button" to="/shop">
            Explore the collection <ArrowRight size={17} />
          </Link>
        </div>
        <ProductImage
          index={7}
          alt="Illustrative festive celebration assortment"
        />
      </div>
      <SafetySection />
    </main>
  );
}
function Policy() {
  const { kind } = useParams();
  const title =
    kind === "privacy"
      ? "Privacy policy"
      : kind === "returns"
        ? "Returns & refunds"
        : "Terms & conditions";
  return (
    <main className="section info-page policy">
      <div className="eyebrow">BUSINESS INFORMATION</div>
      <h1>{title}</h1>
      <span className="status">
        Draft · Owner review required before launch
      </span>
      {kind === "privacy" ? (
        <>
          <h3>Information on this demonstration</h3>
          <p>
            The demo cart is stored locally in your browser. Checkout preview
            details remain only in page memory and are not saved or transmitted.
            This frontend does not collect payments or submit your list to a
            server. The search and filter selections appear in the page URL.
          </p>
          <p>
            When configured, WhatsApp links open an external service with your
            selected inquiry message. That service’s privacy practices apply.
            Google Fonts may receive browser connection information when fonts
            load.
          </p>
          <h3>Before launch</h3>
          <p>
            The owner must supply the business contact, confirm hosting and
            analytics practices, and review a complete privacy policy covering
            the actual operation.
          </p>
        </>
      ) : (
        <>
          <h3>Collection and enquiries</h3>
          <p>
            Products and generated images in this preview are illustrative.
            Prices, pack sizes, legal eligibility, supply coverage, and
            availability require business confirmation. Saving an inquiry does
            not confirm a purchase, payment, booking, or reservation.
          </p>
          <h3>
            {kind === "returns"
              ? "Returns, cancellations & refunds"
              : "Business terms"}
          </h3>
          <p>
            {kind === "returns"
              ? "No returns or refund conditions have been supplied. The owner must publish reviewed terms for eligible returns, cancellations, refunds, and support before accepting orders."
              : "The owner must review and publish actual sales terms, seller details, applicable compliance information, service coverage, and support procedures before enabling ordering."}
          </p>
        </>
      )}
      <Link className="text-link" to="/contact">
        Business contact information <ArrowRight size={16} />
      </Link>
    </main>
  );
}
function NotFound() {
  return (
    <main className="empty-state section">
      <Sparkles size={36} />
      <h1>A little off the festive path.</h1>
      <p>We couldn’t find that page.</p>
      <Link className="button" to="/">
        Back to home <ArrowRight size={17} />
      </Link>
    </main>
  );
}
function ShoppingCart({ close }: { close: () => void }) {
  const { items, setQuantity } = useCart();
  const panel = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const valid = items.flatMap((i) => {
    const p = products.find((p) => p.id === i.id);
    return p ? [{ ...i, p }] : [];
  });
  const total = mockSubtotal(items);

  const message = `Hello Sri Ganesha Fireworks! I would like to enquire about:\n${valid.map((i) => `• ${i.p.name} × ${i.quantity}`).join("\n")}\nPlease confirm current pricing, pack sizes, availability, legal supply eligibility, and Hyderabad service coverage. This is an inquiry, not a confirmed order.`;
  useEffect(() => {
    const previous = document.activeElement as HTMLElement;
    panel.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        const focusable = panel.current?.querySelectorAll<HTMLElement>(
          'button:not(:disabled),a[href],[tabindex="0"]',
        );
        if (!focusable?.length) return;
        const first = focusable[0],
          last = focusable[focusable.length - 1];
        if (
          e.shiftKey &&
          (document.activeElement === first ||
            document.activeElement === panel.current)
        ) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", key);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [close]);
  return (
    <div className="cart-backdrop" onClick={close}>
      <div
        className="cart-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        tabIndex={-1}
        ref={panel}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-heading">
          <div>
            <div className="eyebrow">LET’S PLAN YOUR CELEBRATION</div>
            <h2 id="cart-title">
              Your demo cart{" "}
              <span>({valid.reduce((n, i) => n + i.quantity, 0)})</span>
            </h2>
          </div>
          <button
            className="icon-button"
            onClick={close}
            aria-label="Close demo cart"
          >
            <X />
          </button>
        </div>
        {!valid.length ? (
          <div className="empty-state cart-empty">
            <ShoppingBag size={40} />
            <h2>A little room for joy.</h2>
            <p>
              Add sample products, explore mock totals, and try the
              cash-on-delivery checkout preview.
            </p>
            <Link className="button" onClick={close} to="/shop">
              Explore the collection <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {valid.map((i) => (
                <div className="cart-item" key={i.id}>
                  <ProductImage index={i.p.image} alt={i.p.name} />
                  <div>
                    <Link to={`/product/${i.id}`} onClick={close}>
                      {i.p.name}
                    </Link>
                    <p>{money(i.p.mockPrice)} · mock price</p>
                    <Quantity
                      value={i.quantity}
                      onChange={(q) => setQuantity(i.id, q)}
                    />
                  </div>
                  <button
                    aria-label={`Remove ${i.p.name}`}
                    className="icon-button"
                    onClick={() => setQuantity(i.id, 0)}
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div>
                <span>Mock merchandise subtotal</span>
                <strong>{money(total)}</strong>
              </div>
              <p>
                Sample prices only. Availability and Hyderabad delivery are
                unverified. No real order can be placed.
              </p>
              <Link
                className="button checkout-link"
                to="/checkout"
                onClick={close}
              >
                Preview COD checkout <ArrowRight size={17} />
              </Link>
              {business.whatsapp ? (
                <a
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                  href={`https://wa.me/${business.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`}
                >
                  <MessageCircle size={18} /> Enquire on WhatsApp
                </a>
              ) : (
                <>
                  <button
                    className="button"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(message);
                        setCopied(true);
                      } catch {
                        setCopied(false);
                      }
                    }}
                  >
                    {copied ? <Check size={18} /> : <MessageCircle size={18} />}{" "}
                    {copied ? "Inquiry copied" : "Copy inquiry message"}
                  </button>
                  <small>
                    WhatsApp will be available once the owner adds a verified
                    business number.
                  </small>
                  <details>
                    <summary>View your inquiry message</summary>
                    <pre>{message}</pre>
                  </details>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
function App() {
  const [items, setItems] = useState<Item[]>(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem("sgf-inquiry") || "[]");
      return Array.isArray(parsed)
        ? parsed
            .filter(
              (i) =>
                products.some((p) => p.id === i.id) &&
                Number.isInteger(i.quantity) &&
                i.quantity > 0,
            )
            .map((i) => ({ id: i.id, quantity: Math.min(99, i.quantity) }))
        : [];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    try {
      localStorage.setItem("sgf-inquiry", JSON.stringify(items));
    } catch {
      /* Storage may be disabled; keep session state. */
    }
  }, [items]);
  useEffect(() => {
    if (location.hash) {
      setTimeout(
        () =>
          document
            .getElementById(location.hash.slice(1))
            ?.scrollIntoView({ behavior: "smooth" }),
        60,
      );
    } else window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(""), 2500);
      return () => clearTimeout(t);
    }
  }, [toast]);
  function add(id: string, q = 1) {
    if (!products.some((p) => p.id === id)) return;
    const quantity = Math.max(1, Math.min(99, Math.floor(q)));
    setItems((current) =>
      current.some((i) => i.id === id)
        ? current.map((i) =>
            i.id === id
              ? { ...i, quantity: Math.min(99, i.quantity + quantity) }
              : i,
          )
        : [...current, { id, quantity }],
    );
    setToast("Added to your demo cart");
  }
  return (
    <CartContext.Provider
      value={{
        items,
        add,
        setQuantity: (id, q) =>
          setItems((v) =>
            q <= 0
              ? v.filter((i) => i.id !== id)
              : v.map((i) =>
                  i.id === id
                    ? {
                        ...i,
                        quantity: Math.max(1, Math.min(99, Math.floor(q))),
                      }
                    : i,
                ),
          ),
        open: () => setCartOpen(true),
      }}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<DemoCheckout items={items} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy/:kind" element={<Policy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <button
        className="floating-contact"
        onClick={() => navigate("/contact")}
        aria-label="Contact and WhatsApp information"
      >
        <MessageCircle size={23} />
      </button>
      {cartOpen && <ShoppingCart close={() => setCartOpen(false)} />}
      <div role="status" className={toast ? "toast visible" : "toast"}>
        <Check size={16} />
        {toast}
      </div>
    </CartContext.Provider>
  );
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
