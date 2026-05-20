import strategy from "@/assets/hero-strategy.jpg";
import social from "@/assets/hero-social.jpg";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

export const HERO_SLIDES = [
  {
    id: "strategy",
    eyebrow: "01 — Strategy",
    title: "Digital Marketing\nStrategy",
    desc: "Data-driven roadmaps that turn ambition into measurable growth.",
    image: strategy,
  },
  {
    id: "social",
    eyebrow: "02 — Social",
    title: "Social Media\nManagement",
    desc: "Content that earns attention and communities that compound.",
    image: social,
  },
];

export const SERVICES = [
  {
    slug: "brand-identity",
    title: "Brand Identity",
    short: "Logo, guidelines & full visual system.",
    icon: "Sparkles",
    long: "Logo design, brand guidelines and a complete visual identity kit — built around your brand DNA so every touchpoint feels unmistakably yours.",
  },
  {
    slug: "company-profile",
    title: "Company Profile",
    short: "12-page profile with content & source files.",
    icon: "FileText",
    long: "A polished 12-page company profile: strategic content development, visual storytelling, custom layout and editable source files — print and digital ready.",
  },
  {
    slug: "social-media-design",
    title: "Social Media Design",
    short: "Posts, stories, highlights & short videos.",
    icon: "Image",
    long: "Monthly social design packages — 12 posts, 4 short videos (30s each), 10 stories and highlight covers — built to stop the scroll and stay on-brand.",
  },
  {
    slug: "content-strategy",
    title: "Content & Creative",
    short: "Content strategy and creative direction.",
    icon: "PenLine",
    long: "Content strategy, copywriting and creative direction that turns scattered posts into a system serving awareness, trust and sales.",
  },
  {
    slug: "media-buying",
    title: "Meta Ads & Media Buying",
    short: "Performance ads across Meta, TikTok & more.",
    icon: "Target",
    long: "Full-funnel paid media on Meta, TikTok, Snapchat and X. Three engagement tiers — from up-to $1K monthly budgets to $4K+ long-term plans, plus quick-cash pulse campaigns.",
  },
  {
    slug: "social-management",
    title: "Social Management",
    short: "Always-on community & platform moderation.",
    icon: "MessageCircle",
    long: "Social media moderation and community management per platform per month — replies, qualification, lead capture and brand-voice consistency.",
  },
  {
    slug: "web-development",
    title: "Landing Pages & Websites",
    short: "Conversion-built sites & landing pages.",
    icon: "Code",
    long: "Custom landing pages and full websites engineered for speed, SEO and conversion — wired into your campaign and CRM stack from day one.",
  },
  {
    slug: "marketing-strategy",
    title: "Marketing & Growth Strategy",
    short: "Strategy, positioning & launch systems.",
    icon: "Compass",
    long: "Market and competitor analysis, brand positioning, messaging, customer journey and launch systems — the operating layer that makes every channel pull together.",
  },
];

export const PORTFOLIO = [
  { id: 1, title: "Argan Skincare Relaunch", category: "Branding", image: w1 },
  { id: 2, title: "Helios Apparel — D2C", category: "E‑commerce", image: w2 },
  { id: 3, title: "Belvet Beauty", category: "Social", image: w3 },
];

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Branding",
  "E‑commerce",
  "Social",
  "Paid Ads",
  "Production",
];

export const STATS = [
  { value: 240, suffix: "+", label: "Brands launched" },
  { value: 12, suffix: "x", label: "Avg. ROAS uplift" },
  { value: 38, suffix: "M", label: "Impressions / mo" },
  { value: 14, suffix: "yrs", label: "In the industry" },
];

export const TESTIMONIALS = [
  {
    name: "Dana Whitcombe",
    role: "CMO, Argan Skincare",
    quote: "Lumen rebuilt our brand world from the ground up. Six months later we tripled DTC revenue and got picked up by Sephora.",
  },
  {
    name: "Marcus Lin",
    role: "Founder, Helios Apparel",
    quote: "The closest thing to an in-house team I've ever worked with. Strategic, fast, and the creative is genuinely award-worthy.",
  },
  {
    name: "Sara Okonkwo",
    role: "Head of Growth, Northstar",
    quote: "ROAS doubled in the first quarter and kept climbing. Their measurement work alone paid for the engagement.",
  },
  {
    name: "Theo Reyes",
    role: "CEO, Belvet",
    quote: "They treated our small brand like it mattered — and now it does. Genuinely the partnership we'd been looking for for years.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discover",
    desc: "Workshops, audits and audience research that ground every decision.",
  },
  {
    step: "02",
    title: "Define",
    desc: "Strategy, positioning and a measurement framework you can defend.",
  },
  {
    step: "03",
    title: "Design",
    desc: "Brand systems, campaigns and digital products built to perform.",
  },
  {
    step: "04",
    title: "Deploy",
    desc: "Launch, optimise and scale — with weekly readouts and quarterly bets.",
  },
];

export const FAQ = [
  {
    q: "How quickly can we start?",
    a: "Most engagements kick off within 2–3 weeks of signing. Sprint engagements can start in days.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes — we have dedicated tracks for both early-stage brands and established companies.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Most clients work with us on a 6–12 month retainer covering strategy, creative and paid media, with clear quarterly OKRs.",
  },
  {
    q: "Do you operate globally?",
    a: "Yes. Headquartered in San Francisco with active campaigns across North America, EMEA and APAC.",
  },
  {
    q: "Will I have a dedicated team?",
    a: "Always. Every account has a strategy lead, creative lead and channel specialists you'll know by first name.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "the-end-of-cookies",
    title: "Life after the cookie: a practical playbook",
    date: "May 02, 2026",
    category: "Strategy",
    image: w2,
    excerpt: "Identity is fragmenting and measurement is harder than ever. Here's how the smartest brands are adapting.",
  },
  {
    slug: "creator-economy-2026",
    title: "Why the creator economy isn't slowing down",
    date: "Apr 18, 2026",
    category: "Social",
    image: w3,
    excerpt: "Five trends reshaping creator partnerships — and the metrics that actually matter.",
  },
  {
    slug: "brand-systems-that-scale",
    title: "Brand systems that scale across 30+ markets",
    date: "Mar 27, 2026",
    category: "Branding",
    image: w5,
    excerpt: "What we learned designing identity systems for brands operating in dozens of countries.",
  },
];