import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  Clock,
  Star,
  Flame,
  Pizza,
  Beer,
  Martini,
  UtensilsCrossed,
  Soup,
  Salad,
  CalendarCheck,
  Instagram,
  Facebook,
  Menu,
  X,
  ChevronDown,
  Quote,
  Sparkles,
  Heart,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ----------------------------------------------------------------
   Constants / Content
---------------------------------------------------------------- */
const PHONE_DISPLAY = '(517) 897-3563'
const PHONE_TEL = '+15178973563'
const ADDRESS = '1200 N Larch St, Lansing, MI 48906'
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Zoobie%27s+Old+Town+Tavern+1200+N+Larch+St+Lansing+MI'
const MENU_URL = 'https://www.zoobiesoldtowntavern.com/menu'
const INSTAGRAM_URL = 'https://www.instagram.com/zoobiestavern/'
const FACEBOOK_URL = 'https://www.facebook.com/ZoobiesOldTownTavern'

const IMG = {
  heroPizza:
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=2000&q=80',
  ovenFlame:
    'https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=1200&q=80',
  cheesePull:
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80',
  margherita:
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
  beer:
    'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=1200&q=80',
  cocktail:
    'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1200&q=80',
  interior:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
  fries:
    'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=80',
  table:
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80',
}

const NAV_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'The Tavern', href: '#story' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
]

const TICKER = [
  'Duck Fat Fries',
  'Truffle Popcorn',
  'Stuffed Corn Fritters',
  'Hot Honey Burrata',
  'Wood-Fired Wings',
  'Maple Old Fashioned',
  'Goat Cheese Salad',
  'The Spaceball',
  'Cosmic Devils',
  'Pineapple Prosciutto',
]

const EXPERIENCE = [
  {
    icon: Flame,
    kicker: 'The Oven',
    title: 'Wood-Fired, Always',
    text: 'Every pie blisters in a live wood-fired oven — leopard-spotted crust, original toppings, never a chain. As one regular put it: superb flavors you can’t fake.',
  },
  {
    icon: Beer,
    kicker: 'The Bar',
    title: '30+ Craft Taps',
    text: 'A rotating wall of Michigan & beyond — Bell’s Oberon, Two Hearted, sours, ciders and seasonal pours, plus a deep cocktail & copper-mug mule list.',
  },
  {
    icon: UtensilsCrossed,
    kicker: 'The Table',
    title: 'Made to Share',
    text: 'Duck fat fries, cream-cheese corn fritters, truffle popcorn and wood-fired wings. Pull up a chair, order too much, and stay a while.',
  },
]

const STATS = [
  { value: 4.5, suffix: '★', label: 'Google rating', decimals: 1 },
  { value: 1010, suffix: '+', label: 'Guest reviews', decimals: 0 },
  { value: 30, suffix: '+', label: 'Beers on tap', decimals: 0 },
  { value: 100, suffix: '%', label: 'Scratch kitchen', decimals: 0 },
]

const NIGHT = [
  {
    no: '01',
    icon: CalendarCheck,
    title: 'Pull up a chair',
    text: 'Belly up to the bar or grab a table in The Cosmos. No stiff dress code, no chains — just an easygoing Old Town haunt that’s LGBTQ+ friendly and always welcoming.',
    img: IMG.interior,
  },
  {
    no: '02',
    icon: Pizza,
    title: 'Share the table',
    text: 'Start with duck fat fries and corn fritters, then send out a couple of wood-fired pies — Hot Honey Burrata, The Spaceball, Black Truffle & Sausage. Trust us.',
    img: IMG.cheesePull,
  },
  {
    no: '03',
    icon: Martini,
    title: 'Stay for one more',
    text: 'A Maple Old Fashioned smoked over cherry wood, a salted espresso martini, or a mule in a frosty copper mug. The night’s young.',
    img: IMG.cocktail,
  },
]

const MENU = {
  Pizzas: {
    icon: Pizza,
    note: 'Wood-fired pies. Ask about “Trust Us” — market price, and worth it.',
    items: [
      { name: 'Hot Honey Burrata', desc: 'red sauce, burrata, mozzarella, pepperoni, basil, hot honey', price: '24' },
      { name: 'Black Truffle & Sausage', desc: 'black truffle cream sauce, mozzarella, italian sausage, balsamic drizzle', price: '24' },
      { name: 'Pineapple Prosciutto', desc: 'pineapple habanero cream, mozzarella, prosciutto, pineapple, red onion, pepperoncini', price: '20' },
      { name: 'The Spaceball', desc: 'red sauce, fresh mozzarella, ricotta, meatballs, sweet onions, pepperoncini', price: '20' },
      { name: 'Sweet BBQ Pork', desc: 'sweet bbq, mozzarella, pulled pork, bacon, pickled onions, smoked cheddar, fried onions', price: '20' },
      { name: 'Chicken Pesto', desc: 'pesto, basil, heirloom tomatoes, red onions, fresh mozzarella, balsamic', price: '17' },
      { name: 'The Marge', desc: 'red sauce, basil, heirloom tomatoes, fresh mozzarella, balsamic', price: '15' },
      { name: 'Trust Us', desc: 'we’re not telling you what it is. it shows up. your socks get knocked off.', price: 'MP' },
    ],
  },
  Shareables: {
    icon: Soup,
    note: 'Built for the middle of the table. The duck fat fries are non-negotiable.',
    items: [
      { name: 'Duck Fat Fries', desc: 'cosmic sauce · or sea salt · or truffled parmesan', price: '8' },
      { name: 'Stuffed Corn Fritters', desc: 'hand-battered, cream cheese stuffed, roasted jalapeño aioli, tomato jam', price: '14' },
      { name: 'Wood-Fired Wings', desc: 'dry-rubbed with ranch · sweet bbq, garlic cream, spicy pineapple or truffle cream', price: '18' },
      { name: 'Mussels & Frites', desc: 'mussels, white wine, butter, fresh herbs, duck fat fries', price: '18' },
      { name: 'Cosmic Devils', desc: 'deviled eggs, candied bacon, pickled onions', price: '12' },
      { name: 'Southwest Nachos', desc: 'house chips, queso, corn salsa, avocado crema, jalapeños, pulled pork or chicken', price: '18' },
      { name: 'Three Cheese Garlic Bread', desc: 'garlic cream, parmesan, romano, mozzarella, balsamic, side of red sauce', price: '13' },
      { name: 'Mr. Zoobie’s Decadent Popcorn', desc: 'truffle oil, sea salt, black pepper', price: '4' },
    ],
  },
  'Plates & Greens': {
    icon: Salad,
    note: 'Smash burgers come with cosmic sauce, pickle & duck fat fries.',
    items: [
      { name: 'Brown Butter Cavatappi', desc: 'seared chicken, ricotta, roasted squash, pistachios, sage, brown butter', price: '24' },
      { name: 'Chicken Parmigiana', desc: 'fried cutlet, mozzarella, parmesan, mafaldine, house red sauce', price: '22' },
      { name: 'Black Truffle Smash Burger', desc: 'mozzarella, roasted mushrooms, caramelized onions, bacon, black truffle cream', price: '18' },
      { name: 'Zooburger', desc: 'american, romaine, tomato, onion, tomato aioli', price: '16' },
      { name: 'Fried Goat Cheese Salad', desc: 'mixed greens, red onion, candied pecans, medley tomatoes, honey mustard vinaigrette', price: '15' },
      { name: 'Cosmic Caesar', desc: 'romaine, oven-roasted tomatoes, flowering kale, parmesan, crostini, creamy caesar', price: '13' },
    ],
  },
  Drinks: {
    icon: Martini,
    note: '30+ rotating taps, a full cocktail list, and mules in copper mugs.',
    items: [
      { name: 'Maple Old Fashioned', desc: 'iron fish maple bourbon, maple, bitters, sea salt, rum cherries — smoked over cherry wood', price: '20' },
      { name: 'Salted Espresso Martini', desc: 'honey, sea salt, oatmilk, vanilla espresso rum', price: '14' },
      { name: 'The Classic Mule', desc: 'vodka, lime, ginger beer — copper mug · 7 more twists', price: '10' },
      { name: 'Bell’s Oberon', desc: 'spicy, fruity summertime wheat ale · on draft', price: '6.5' },
      { name: 'Bell’s Two Hearted', desc: 'michigan · dry-hopped american ipa', price: '8.5' },
      { name: 'Cadillac Marge', desc: 'reposado, gran marnier, house sour, salt rim, hypercolor cup', price: '15' },
    ],
  },
}

const REVIEWS = [
  {
    name: 'Anne Lux',
    meta: '4 reviews · 4 photos',
    when: '5 months ago',
    text: 'In this past Friday for a birthday celebration with a group of 10–12. Staff was incredibly helpful, friendly, and attentive. Food was excellent — about half the group ordered their favorite pizzas while the others tried the newer ones.',
  },
  {
    name: 'Shannon O’Neil',
    meta: 'Local Guide · 55 reviews · 89 photos',
    when: '9 months ago',
    text: 'Wow. Just wow. Look at these pizzas! And the corn fritters. Nice atmosphere — not too noisy. Really good service. A great experience.',
  },
  {
    name: 'Derrick Veale',
    meta: 'Local Guide · 29 reviews · 14 photos',
    when: 'a year ago',
    text: 'Super fun place. Duck fat fries were awesome. Shared meatball and pulled pork sliders — both excellent! Great tap options too. Holly the bartender was amazing. Kudos Zoobies!',
  },
]

const PULL_QUOTES = [
  'Not a chain pizza place — original toppings, wood-fired oven, superb flavors.',
  'Great selection of beer, tasty pizza, and very good duck fat fries.',
  'Cool atmosphere, food, drinks, and the service was great.',
]

/* ----------------------------------------------------------------
   Helpers
---------------------------------------------------------------- */
function Reveal({ children, className = '', delay = 0, y = 28, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.18 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  )
}

function CountUp({ value, decimals = 0, suffix = '', duration = 1800 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    let started = false
    const run = () => {
      const start = performance.now()
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setDisplay(value * eased)
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) {
          started = true
          run()
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration])
  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

function EmberField({ count = 18, className = '' }) {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])
  if (reduced) return null
  const embers = Array.from({ length: count }, (_, i) => {
    const left = (i * 53) % 100
    const dur = 5 + ((i * 7) % 6)
    const delay = (i * 0.8) % 6
    const drift = 8 + ((i * 5) % 26)
    const size = 3 + (i % 4)
    return (
      <span
        key={i}
        className="ember"
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          '--dur': `${dur}s`,
          '--delay': `${delay}s`,
          '--drift': `${drift}px`,
        }}
      />
    )
  })
  return <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>{embers}</div>
}

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-black/40' : 'bg-transparent'
        } rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary">
              <Flame className="h-5 w-5 text-background" strokeWidth={2.4} />
              <span className="absolute inset-0 rounded-full ring-2 ring-primary/40 group-hover:ring-primary/70 transition" />
            </span>
            <span className="leading-none">
              <span className="block font-display font-extrabold tracking-tight text-lg text-ink">
                Zoobie’s
              </span>
              <span className="block font-mono text-[8px] uppercase tracking-[0.3em] text-muted">
                Old Town Tavern
              </span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-tight text-ink/80 hover:text-primary-light lift-on-hover transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-sm font-medium text-muted hover:text-ink transition-colors flex items-center gap-1.5"
            >
              <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="magnetic-btn cursor-pointer rounded-full bg-primary px-5 py-2 text-sm font-semibold text-background ember-glow"
            >
              Call to Reserve
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden cursor-pointer rounded-full p-2 text-ink hover:bg-white/5 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-surface border-l border-divider p-7 flex flex-col transition-transform duration-500 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display font-extrabold text-xl text-ink">Zoobie’s</span>
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-full p-2 text-ink hover:bg-white/5"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-bold text-ink/90 hover:text-primary-light py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 text-muted hover:text-ink transition-colors"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="magnetic-btn cursor-pointer rounded-full bg-primary px-6 py-3.5 text-center font-semibold text-background"
            >
              Call to Reserve
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const root = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-eyebrow', { y: 24, opacity: 0, duration: 0.7 })
        .from('.hero-line', { y: 48, opacity: 0, duration: 0.9, stagger: 0.12 }, '-=0.4')
        .from('.hero-sub', { y: 24, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.45')
        .from('.hero-trust', { y: 16, opacity: 0, duration: 0.6 }, '-=0.35')
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <header id="home" ref={root} className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroPizza}
          alt="Wood-fired pizza fresh from the oven at Zoobie's Old Town Tavern"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </div>

      <EmberField count={22} />

      {/* floating glow top-right */}
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-[12%] h-[260px] w-[260px] rounded-full bg-accent/15 blur-[110px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="hero-eyebrow inline-flex items-center gap-2.5 rounded-full glass-light px-4 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-primary ring-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/80">
              Old Town · Lansing, MI · Est. in The Cosmos
            </span>
          </div>

          <h1 className="mt-6 font-display font-extrabold tracking-tight text-ink text-[2.25rem] sm:text-6xl lg:text-7xl leading-[1.02] sm:leading-[0.98]">
            <span className="hero-line block">Wood-fired pies.</span>
            <span className="hero-line block">Craft pours.</span>
            <span className="hero-line block">
              <span className="gradient-text text-glow">Always a good time.</span>
            </span>
          </h1>

          <p className="hero-sub mt-7 max-w-xl text-lg sm:text-xl text-muted leading-relaxed text-balance">
            Creative wood-fired pizzas and shared plates meet 30+ craft taps and copper-mug cocktails — at the
            easygoing Old Town haunt Lansing has loved for years.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
            <a
              href={`tel:${PHONE_TEL}`}
              className="hero-cta magnetic-btn cursor-pointer inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-background ember-glow"
            >
              <Phone className="h-5 w-5" /> Call to Reserve
            </a>
            <a
              href="#menu"
              className="hero-cta cursor-pointer inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-ink/20 bg-white/5 px-7 py-4 font-semibold text-ink hover:bg-white/10 hover:border-ink/40 transition-colors"
            >
              <UtensilsCrossed className="h-5 w-5" /> Explore the Menu
            </a>
          </div>

          <div className="hero-trust mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-ink/80">
                <span className="font-semibold text-ink">4.5</span> · 1,010+ reviews
              </span>
            </div>
            <div className="h-4 w-px bg-divider hidden sm:block" />
            <span className="text-sm text-muted">$10–30 per person</span>
            <div className="h-4 w-px bg-divider hidden sm:block" />
            <span className="text-sm text-muted flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5 text-primary-light" /> LGBTQ+ friendly
            </span>
          </div>
        </div>
      </div>

      <a
        href="#story"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted hover:text-ink transition-colors"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </header>
  )
}

/* ----------------------------------------------------------------
   Ticker
---------------------------------------------------------------- */
function Ticker() {
  const row = [...TICKER, ...TICKER]
  return (
    <div className="relative border-y border-divider bg-background-2 py-4 overflow-hidden">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg font-semibold text-muted">
            <span className="text-ink/85">{item}</span>
            <Flame className="h-4 w-4 text-primary" />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  )
}

/* ----------------------------------------------------------------
   Story / Experience
---------------------------------------------------------------- */
function Story() {
  return (
    <section id="story" className="relative scroll-mt-24 py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-divider">
                <img src={IMG.cheesePull} alt="Hand-stretched wood-fired pizza with a cheese pull" className="aspect-[4/5] w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-8 w-44 rounded-2xl glass p-4 ember-glow">
                <p className="font-display text-3xl font-extrabold text-ink">
                  <CountUp value={4.5} decimals={1} suffix="★" />
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">1,010+ Google reviews</p>
              </div>
              <div className="absolute -top-5 -left-3 sm:-left-6 rounded-2xl bg-primary px-4 py-3 ember-glow rotate-[-4deg]">
                <p className="font-display text-sm font-bold text-background leading-tight">Wood-Fired<br />Since Day One</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-light">The Tavern</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink text-balance">
                Not a chain pizza place.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
                Zoobie’s is the kind of spot Old Town keeps coming back to — original toppings, a real wood-fired
                oven, and superb flavors you won’t find under fluorescent lights. Tucked inside The Cosmos, it’s
                easygoing by design: belly up to the bar, share a few plates, and let the night stretch out.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
                Half the table orders their favorite pie; the other half tries something new. Either way, the duck
                fat fries are non-negotiable.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {EXPERIENCE.map((e, i) => (
                <Reveal key={e.title} delay={0.18 + i * 0.08}>
                  <div className="group h-full rounded-2xl border border-divider bg-surface p-5 hover:border-primary/40 transition-colors">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-light group-hover:bg-primary group-hover:text-background transition-colors">
                      <e.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{e.kicker}</p>
                    <h3 className="mt-1 font-display text-lg font-bold text-ink">{e.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{e.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Stats / Pillars
---------------------------------------------------------------- */
function Pillars() {
  return (
    <section className="relative py-14 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background-2 to-background" />
      <EmberField count={10} className="opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-[2rem] overflow-hidden border border-divider bg-divider">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-surface">
              <div className="px-6 py-10 text-center">
                <p className="font-display text-4xl sm:text-5xl font-extrabold gradient-text">
                  <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </p>
                <p className="mt-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Night (sticky-stack scrub)
---------------------------------------------------------------- */
function Night() {
  const root = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Sticky-stack scrub is a desktop-only effect; on mobile the cards just stack cleanly.
    if (!window.matchMedia('(min-width: 768px)').matches) return
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.night-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scale: 0.92,
          filter: 'blur(4px)',
          opacity: 0.4,
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          },
        })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative py-16 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-light">How the night goes</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink text-balance">
              Come hungry. Stay easy.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-14 space-y-5 sm:space-y-6">
          {NIGHT.map((step, i) => (
            <div
              key={step.no}
              className="night-card md:sticky"
              style={{ top: `${110 + i * 18}px` }}
            >
              <div className="grid md:grid-cols-2 overflow-hidden rounded-3xl sm:rounded-[2rem] border border-divider bg-surface ember-glow">
                <div className="order-2 md:order-1 p-6 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary text-background">
                      <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-divider">{step.no}</span>
                  </div>
                  <h3 className="mt-5 sm:mt-6 font-display text-2xl sm:text-3xl font-extrabold text-ink">{step.title}</h3>
                  <p className="mt-3 sm:mt-4 text-muted leading-relaxed">{step.text}</p>
                </div>
                <div className="order-1 md:order-2 relative h-44 sm:h-56 md:h-auto md:min-h-full">
                  <img src={step.img} alt={step.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent md:bg-gradient-to-r md:from-surface md:via-surface/20 md:to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Menu
---------------------------------------------------------------- */
function MenuSection() {
  const tabs = Object.keys(MENU)
  const [active, setActive] = useState(tabs[0])
  const data = MENU[active]

  return (
    <section id="menu" className="relative scroll-mt-24 py-16 sm:py-28 bg-background-2 border-y border-divider">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-light">The Menu</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink">
                Order too much. <span className="gradient-text">Share it all.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href={MENU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-primary-light transition-colors"
            >
              View the full food &amp; drink menu <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-2.5 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = MENU[tab].icon
              const on = tab === active
              return (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`cursor-pointer inline-flex items-center gap-2 rounded-full border px-4 sm:px-5 py-3 text-sm font-semibold transition-all ${
                    on
                      ? 'border-primary bg-primary text-background ember-glow'
                      : 'border-divider bg-surface text-muted hover:text-ink hover:border-primary/40'
                  }`}
                >
                  <Icon className="h-4 w-4" /> {tab}
                </button>
              )
            })}
          </div>
        </Reveal>

        <p className="mt-6 font-serif italic text-lg text-muted">{data.note}</p>

        {/* Items */}
        <div key={active} className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-x-12 gap-y-0 sm:gap-y-1">
          {data.items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 6) * 0.05} y={18}>
              <div className="group flex items-baseline gap-4 border-b border-divider/60 py-5 hover:border-primary/40 transition-colors">
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-bold text-ink group-hover:text-primary-light transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted leading-snug">{item.desc}</p>
                </div>
                <div className="flex items-center gap-1 font-display font-bold text-accent whitespace-nowrap">
                  {item.price === 'MP' ? (
                    <span className="text-sm uppercase tracking-wide">Market</span>
                  ) : (
                    <>
                      <span className="text-sm text-muted">$</span>
                      {item.price}
                    </>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
            <a
              href={`tel:${PHONE_TEL}`}
              className="magnetic-btn cursor-pointer inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-background ember-glow"
            >
              <Phone className="h-5 w-5" /> Call to Reserve
            </a>
            <a
              href={MENU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-ink/20 bg-white/5 px-7 py-4 font-semibold text-ink hover:bg-white/10 hover:border-ink/40 transition-colors"
            >
              <ArrowUpRight className="h-5 w-5" /> View Full Menu
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-muted-2">
            Lunch served Mon–Fri until 3PM (dine-in). Menus &amp; taps rotate — please ask about allergies.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Reviews
---------------------------------------------------------------- */
function Reviews() {
  return (
    <section id="reviews" className="relative scroll-mt-24 py-16 sm:py-28 overflow-hidden">
      <EmberField count={8} className="opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-light">Word of Mouth</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink text-balance">
              1,010 reviews. <span className="gradient-text">4.5 stars.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-muted">Here’s what Lansing keeps saying about us.</p>
          </Reveal>
        </div>

        {/* Pull quotes */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {PULL_QUOTES.map((q, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-divider bg-surface p-6">
                <Quote className="h-6 w-6 text-primary/60" />
                <p className="mt-3 font-serif italic text-lg text-ink leading-snug">“{q}”</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Full reviews */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-divider bg-surface-2 p-6 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 font-display font-bold text-primary-light">
                    {r.name[0]}
                  </span>
                  <div>
                    <p className="font-display font-bold text-ink leading-tight">{r.name}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-2">{r.meta}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-2">{r.when}</span>
                </div>
                <p className="mt-4 text-sm text-muted leading-relaxed">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 text-center">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-primary-light transition-colors"
            >
              Read all 1,010 reviews on Google <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Visit / Reserve (call-only)
---------------------------------------------------------------- */
function Visit() {
  const ACTIONS = [
    { label: 'Call to Reserve', sub: `Reservations by phone · ${PHONE_DISPLAY}`, href: `tel:${PHONE_TEL}`, icon: Phone, primary: true },
    { label: 'View the Menu', sub: 'Pizzas, shared plates & drinks', href: '#menu', icon: UtensilsCrossed },
    { label: 'Get Directions', sub: '1200 N Larch St · Old Town Lansing', href: MAPS_URL, icon: MapPin },
  ]
  return (
    <section id="visit" className="relative scroll-mt-24 py-16 sm:py-28 bg-background-2 border-t border-divider">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Info */}
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-light">Visit Us</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink text-balance">
                Find us in Old Town.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
                Located inside The Cosmos in the heart of Old Town Lansing. Come in for dinner, pull up to the bar,
                or call ahead for a big night out.
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {[
                { icon: MapPin, label: 'Address', value: ADDRESS, href: MAPS_URL },
                { icon: Phone, label: 'Call us', value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
                { icon: Clock, label: 'Hours', value: 'Open daily · Kitchen until 10 PM · Lunch Mon–Fri til 3 PM' },
              ].map((row) => {
                const Wrap = row.href ? 'a' : 'div'
                return (
                  <Reveal key={row.label} y={16}>
                    <Wrap
                      {...(row.href ? { href: row.href, target: row.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
                      className={`flex items-start gap-4 rounded-2xl border border-divider bg-surface p-4 ${
                        row.href ? 'cursor-pointer hover:border-primary/40 transition-colors' : ''
                      }`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
                        <row.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">{row.label}</p>
                        <p className="mt-1 font-medium text-ink">{row.value}</p>
                      </div>
                    </Wrap>
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zoobie's on Instagram"
                  className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full border border-divider bg-surface text-muted hover:text-ink hover:border-primary/40 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zoobie's on Facebook"
                  className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full border border-divider bg-surface text-muted hover:text-ink hover:border-primary/40 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex h-12 items-center gap-2 rounded-full border border-divider bg-surface px-5 text-sm font-semibold text-ink hover:text-primary-light hover:border-primary/40 transition-colors"
                >
                  <MapPin className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </Reveal>
          </div>

          {/* Action card */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl sm:rounded-[2rem] border border-divider bg-surface p-6 sm:p-9 ember-glow">
              <h3 className="font-display text-2xl font-extrabold text-ink">Grab a table tonight</h3>
              <p className="mt-2 text-sm text-muted">
                Reservations are by phone — give us a call and we’ll get your table set. Or just walk in and pull up a
                chair.
              </p>

              <div className="mt-7 space-y-3">
                {ACTIONS.map((a) => (
                  <a
                    key={a.label}
                    href={a.href}
                    {...(a.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all ${
                      a.primary
                        ? 'magnetic-btn bg-primary text-background ember-glow'
                        : 'border border-ink/15 bg-white/5 text-ink hover:bg-white/10 hover:border-ink/40'
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        a.primary ? 'bg-background/20 text-background' : 'bg-primary/15 text-primary-light'
                      }`}
                    >
                      <a.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display font-bold leading-tight">{a.label}</span>
                      <span className={`block text-xs ${a.primary ? 'text-background/80' : 'text-muted'}`}>{a.sub}</span>
                    </span>
                    <ArrowRight className={`h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 ${a.primary ? 'text-background' : 'text-muted'}`} />
                  </a>
                ))}
              </div>

              <div className="mt-7 border-t border-divider pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">Private events &amp; big groups</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Birthdays, work parties, or a big group in The Cosmos? Give us a call and we’ll help you plan the
                  whole night.
                </p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-light hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call to plan an event
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative border-t border-divider bg-background pt-16 pb-10 overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Flame className="h-5 w-5 text-background" strokeWidth={2.4} />
              </span>
              <span className="leading-none">
                <span className="block font-display font-extrabold text-xl text-ink">Zoobie’s</span>
                <span className="block font-mono text-[8px] uppercase tracking-[0.3em] text-muted">Old Town Tavern</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm text-muted leading-relaxed">
              Creative wood-fired pizzas, shared plates, craft beer & cocktails in Old Town Lansing. Come hungry,
              leave happy.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="cursor-pointer text-muted hover:text-primary-light transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="cursor-pointer text-muted hover:text-primary-light transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <FooterCol title="Explore" links={[
            { label: 'Menu', href: '#menu' },
            { label: 'The Tavern', href: '#story' },
            { label: 'Reviews', href: '#reviews' },
            { label: 'Visit', href: '#visit' },
          ]} />

          <FooterCol title="Reserve & Menu" links={[
            { label: 'Call to Reserve', href: `tel:${PHONE_TEL}` },
            { label: 'Full Menu', href: MENU_URL, ext: true },
            { label: 'Directions', href: MAPS_URL, ext: true },
          ]} />

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">Find Us</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-muted hover:text-ink transition-colors">
                  1200 N Larch St<br />Lansing, MI 48906
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_TEL}`} className="cursor-pointer text-muted hover:text-ink transition-colors">{PHONE_DISPLAY}</a>
              </li>
              <li className="text-muted">Open daily · until 10 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-divider pt-7">
          <p className="flex items-center gap-2 text-xs text-muted-2">
            <span className="flex h-2 w-2 rounded-full bg-primary ring-pulse" /> © {new Date().getFullYear()} Zoobie’s Old Town Tavern · Lansing, MI
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-2">
            <Link to="/privacy" className="hover:text-ink transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-ink transition-colors">Terms</Link>
            <span className="flex items-center gap-1.5"><Sparkles className="h-3 w-3 text-accent" /> Est. in The Cosmos</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">{title}</p>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              {...(l.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="cursor-pointer inline-flex items-center gap-1 text-muted hover:text-ink transition-colors"
            >
              {l.label} {l.ext && <ArrowUpRight className="h-3 w-3" />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ----------------------------------------------------------------
   App
---------------------------------------------------------------- */
export default function App() {
  return (
    <div className="relative bg-background">
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <Ticker />
      <Story />
      <Pillars />
      <Night />
      <MenuSection />
      <Reviews />
      <Visit />
      <Footer />
    </div>
  )
}
