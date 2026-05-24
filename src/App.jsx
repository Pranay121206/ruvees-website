import { useEffect, useState } from "react";
import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import ProductsSection from "./components/products-section";
import ServicesSection from "./components/services-section";
import StatsSection from "./components/stats-section";
import TechnologySection from "./components/technology-section";
import VisionSection from "./components/vision-section";

const HERO_LOGO = "/logo.png";
const MAIN_LOGO = "/main-logo.png";

const NAV_LINKS = ["Home", "About", "Services", "Products", "Technology", "Vision", "Contact"];

const STATS = [
  { value: 10000, display: "10K+", label: "Active Users" },
  { value: 5000, display: "5K+", label: "Vendors" },
  { value: 1000000, display: "1M+", label: "Ad Impressions" },
  { value: 50000, display: "50K+", label: "Rewards Delivered" },
];

const SERVICES = [
  { icon: "🤖", title: "AI-Driven Advertising", desc: "Intelligent ad systems that target the right audience, auto-optimize campaigns, and maximize ROI.", color: "#2563FF" },
  { icon: "💻", title: "Custom Software Development", desc: "Web apps, mobile apps, and scalable SaaS platforms built for the future.", color: "#8B5CF6" },
  { icon: "📊", title: "Data & Analytics", desc: "Deep user behavior analysis, business performance tracking, and AI-based insights.", color: "#06B6D4" },
  { icon: "🌐", title: "Digital Platforms", desc: "Complete ecosystems where users interact seamlessly and businesses grow efficiently.", color: "#10B981" },
];

const BSMART_FEATURES = [
  { icon: "🎥", title: "Ad-Free Experience", desc: "Enjoy content without any interruptions." },
  { icon: "💰", title: "Real Rewards", desc: "Earn rewards through meaningful engagement." },
  { icon: "🛍️", title: "Vendor Promotions", desc: "Businesses reach their exact audience." },
  { icon: "🤖", title: "AI Recommendations", desc: "Hyper-personalized content for every user." },
];

const TECH_STACK = [
  { name: "Artificial Intelligence", icon: "🧠", desc: "Neural networks & deep learning powering smart decisions" },
  { name: "Machine Learning", icon: "⚙️", desc: "Adaptive algorithms that improve with every interaction" },
  { name: "Cloud Computing", icon: "☁️", desc: "Infinitely scalable infrastructure for global reach" },
  { name: "Data Analytics", icon: "📈", desc: "Real-time insights from massive data streams" },
];

const VISION_ITEMS = [
  { icon: "🚀", title: "AI-Powered Ad Ecosystems", desc: "Fully automated platforms where AI manages ad creation, targeting, and optimization." },
  { icon: "🎯", title: "Hyper-Personalized UX", desc: "Content and ads tailored individually for every single user." },
  { icon: "🔐", title: "Privacy-First Advertising", desc: "Ethical, transparent, and user-controlled data systems." },
  { icon: "💬", title: "AI Interaction Platforms", desc: "Conversational systems integrating ads seamlessly into the user experience." },
];

const CONTACT_ITEMS = [
  { label: "Email", value: "info@ruvees.com", icon: "📧", sub: "We reply within 24 hours" },
  { label: "Location", value: "India", icon: "📍", sub: "Available globally" },
  { label: "Phone", value: "+91-XXXXXXXXXX", icon: "📱", sub: "Mon – Sat, 9 AM – 7 PM" },
  { label: "Support", value: "24 / 7 Online", icon: "💬", sub: "Always here to help" },
];

export default function RuVeesWebsite() {
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); setActiveNav(id);
  };

  return (
    <div className="root">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Sora:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#070D1E}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#2563FF,#8B5CF6);border-radius:3px}

        /* ── SITE-WIDE HORIZONTAL PADDING ── */
        :root { --pad-x: 7%; }

        .root{background:#070D1E;font-family:'Poppins',sans-serif;color:#F3F4F6;overflow-x:hidden;min-height:100vh}
        .glow-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(80px)}
        .glass-card{border-radius:20px;border:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.03);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}
        .gradient-text{background:linear-gradient(135deg,#2563FF,#8B5CF6,#06B6D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .shimmer-text{background:linear-gradient(90deg,#2563FF 0%,#8B5CF6 30%,#06B6D4 60%,#2563FF 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 3s linear infinite}
        .cyan-label{color:#06B6D4;font-weight:600;font-size:12px;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:14px}
        .btn-primary{background:linear-gradient(90deg,#2563FF,#06B6D4);color:#fff;border:none;border-radius:50px;padding:14px 34px;font-family:'Poppins',sans-serif;font-weight:600;font-size:14.5px;cursor:pointer;transition:all .3s cubic-bezier(.34,1.56,.64,1);box-shadow:0 4px 28px rgba(37,99,255,0.45);letter-spacing:.3px;white-space:nowrap}
        .btn-primary:hover{transform:translateY(-3px) scale(1.02);box-shadow:0 12px 44px rgba(37,99,255,0.65)}
        .btn-secondary{background:transparent;color:#F3F4F6;border:1.5px solid rgba(37,99,255,0.45);border-radius:50px;padding:13px 32px;font-family:'Poppins',sans-serif;font-weight:500;font-size:14.5px;cursor:pointer;transition:all .3s;white-space:nowrap}
        .btn-secondary:hover{border-color:#06B6D4;color:#06B6D4;transform:translateY(-3px)}
        .card-hover{transition:transform .35s cubic-bezier(.34,1.56,.64,1),box-shadow .35s}
        .card-hover:hover{transform:translateY(-8px);box-shadow:0 24px 60px rgba(37,99,255,0.18)}

        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-22px)}}
        @keyframes floatLogo{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-18px) scale(1.02)}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes slide-up{from{opacity:0;transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slide-right{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:translateX(0)}}
        @keyframes slide-left{from{opacity:0;transform:translateX(60px)}to{opacity:1;transform:translateX(0)}}
        @keyframes fade-in{from{opacity:0}to{opacity:1}}
        @keyframes glow-pulse{0%,100%{opacity:.4}50%{opacity:.85}}
        @keyframes ring-expand{0%,100%{transform:scale(1);opacity:.15}50%{transform:scale(1.05);opacity:.08}}

        .float-anim{animation:floatLogo 5s ease-in-out infinite}
        .slide-up{animation:slide-up .9s cubic-bezier(.16,1,.3,1) both}
        .slide-up-1{animation:slide-up .9s .18s cubic-bezier(.16,1,.3,1) both}
        .slide-up-2{animation:slide-up .9s .32s cubic-bezier(.16,1,.3,1) both}
        .slide-up-3{animation:slide-up .9s .46s cubic-bezier(.16,1,.3,1) both}
        .slide-right{animation:slide-right 1s .1s cubic-bezier(.16,1,.3,1) both}
        .slide-left{animation:slide-left 1s .1s cubic-bezier(.16,1,.3,1) both}

        /* ── NAV ── */
        .nav{position:fixed;top:16px;left:0;right:0;z-index:220;padding:0 var(--pad-x);transition:all .35s ease}
        .nav-shell{max-width:1240px;margin:0 auto;min-height:82px;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:12px 20px 12px 18px;border:1px solid rgba(37,99,255,0.15);border-radius:26px;background:rgba(4,11,28,0.85);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);box-shadow:0 20px 50px rgba(0,0,0,0.5)}
        .nav.scrolled .nav-shell{background:rgba(2,6,18,0.95);border-color:rgba(37,99,255,0.3);box-shadow:0 25px 60px rgba(0,0,0,0.6)}
        .nav-logo{display:flex;align-items:center;gap:16px;cursor:pointer;background:none;border:none;padding:0;color:inherit;text-align:left;flex-shrink:0;transition:transform 0.3s ease}
         .nav-logo:hover{transform:scale(1.05)}
         .nav-logo-mark{width:58px;height:58px;border-radius:20px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(37,99,255,0.28),rgba(6,182,212,0.15));border:1px solid rgba(37,99,255,0.35);box-shadow:inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 20px rgba(0,0,0,0.3);position:relative;overflow:hidden}
         .nav-logo-mark::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at center, rgba(37,99,255,0.2) 0%, transparent 70%);opacity:0.6}
         .nav-logo-image{height:38px;width:auto;object-fit:contain;filter:drop-shadow(0 0 15px rgba(37,99,255,0.75));position:relative;z-index:1}
          .nav-links{display:flex;align-items:center;justify-content:center;gap:4px;flex:1;min-width:0}
        .nav-btn{background:none;border:none;color:#94A3B8;font-family:'Poppins',sans-serif;font-weight:500;font-size:14px;cursor:pointer;padding:10px 18px;border-radius:999px;transition:all .25s ease;position:relative;text-decoration:none;white-space:nowrap}
        .nav-btn::after{content:'';position:absolute;left:20px;right:20px;bottom:6px;height:2px;border-radius:999px;background:linear-gradient(90deg,#2563FF,#06B6D4);transform:scaleX(0);transition:transform .25s ease}
        .nav-btn:hover{color:#fff;background:rgba(255,255,255,0.06)}
        .nav-btn:hover::after{transform:scaleX(0.5)}
        .nav-btn.active{color:#fff;background:rgba(37,99,255,0.18);font-weight:600;box-shadow:inset 0 0 0 1px rgba(37,99,255,0.15)}
        .nav-btn.active::after{transform:scaleX(1)}
        .nav-actions{display:flex;align-items:center;gap:12px;flex-shrink:0}
        .nav-main-cta{padding:11px 22px;font-size:13px;box-shadow:0 10px 28px rgba(37,99,255,0.35)}

        /* ── HERO ── */
        .hero{min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;padding-top:72px}
        .grid-bg{background-image:linear-gradient(rgba(37,99,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,255,0.04) 1px,transparent 1px);background-size:64px 64px}
        .hero-inner{max-width:1240px;width:100%;margin:0 auto;padding:0 var(--pad-x) 0;display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;position:relative;z-index:2}

        /* logo side — centered, large */
        .hero-logo-side{display:flex;align-items:center;justify-content:center}
        .hero-logo-glow{position:relative;display:flex;align-items:center;justify-content:center}
        .hero-logo-ring{position:absolute;border-radius:50%;border:1px solid rgba(37,99,255,0.18);animation:ring-expand 4s ease-in-out infinite}

        /* ── Sections ── */
        section{scroll-margin-top:72px}
        .section-pad{padding:110px var(--pad-x)}
        .section-inner{max-width:1240px;margin:0 auto}
        .section-center{text-align:center;margin-bottom:70px}
        .section-title{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(28px,4vw,48px);color:#F8FAFC;line-height:1.12;margin-bottom:0}
        .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
        .grid-4{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:22px}
        .svc-bar{position:absolute;top:0;left:0;right:0;height:3px}
        .sep{width:64px;height:3px;background:linear-gradient(90deg,#2563FF,#06B6D4);border-radius:2px;margin:18px 0 0}
        .sep-center{margin:18px auto 0}
        .pill{display:inline-flex;align-items:center;gap:8px;background:rgba(37,99,255,0.1);border:1px solid rgba(37,99,255,0.25);border-radius:50px;padding:7px 18px;font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#06B6D4;margin-bottom:22px}

        /* ── STATS BAR — bigger, below hero ── */
        .stats-section{background:rgba(7,13,30,0.9);backdrop-filter:blur(24px);border-top:1px solid rgba(37,99,255,0.14);border-bottom:1px solid rgba(37,99,255,0.08);padding:0 var(--pad-x);position:relative;z-index:4}
        .stats-inner{max-width:1240px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr)}
        .stat-cell{padding:32px 20px;text-align:center;cursor:default;user-select:none;border-right:1px solid rgba(255,255,255,0.05);position:relative;overflow:hidden;transition:background .3s}
        .stat-cell::before{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:0;height:2px;background:linear-gradient(90deg,#2563FF,#06B6D4);border-radius:1px;transition:width .3s}
        .stat-cell:hover::before{width:60%}
        .stat-cell:hover{background:rgba(37,99,255,0.04)}
        .stat-cell:last-child{border-right:none}
        .stat-val{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(28px,3.5vw,42px);background:linear-gradient(135deg,#2563FF,#8B5CF6,#06B6D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;margin-bottom:6px}
        .stat-lbl{font-size:12px;color:#475569;font-weight:500;letter-spacing:.8px;text-transform:uppercase}

        /* ── Countdown ── */
        .countdown-section{padding:60px var(--pad-x);background:linear-gradient(180deg,rgba(37,99,255,0.025) 0%,transparent 100%);border-bottom:1px solid rgba(37,99,255,0.08)}
        .countdown-inner{max-width:800px;margin:0 auto;text-align:center}

        /* ── bSmart ── */
        .bsmart-col{border-radius:22px;padding:36px 32px}
        .bsmart-arrow{color:#06B6D4;font-weight:700;font-size:16px;margin-right:8px;margin-top:2px;flex-shrink:0}

        /* ── CONTACT — single row cards ── */
        .contact-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:32px}
        .contact-card{padding:28px 22px;position:relative;overflow:hidden;text-align:left;border-radius:18px;border:1px solid rgba(37,99,255,0.12);background:rgba(255,255,255,0.03);backdrop-filter:blur(16px);transition:transform .35s cubic-bezier(.34,1.56,.64,1),box-shadow .35s,border-color .3s}
        .contact-card:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(37,99,255,0.16);border-color:rgba(37,99,255,0.28)}
        .contact-icon-wrap{width:48px;height:48px;border-radius:13px;background:linear-gradient(135deg,rgba(37,99,255,0.18),rgba(6,182,212,0.09));border:1px solid rgba(37,99,255,0.22);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:14px}
        .contact-cta-row{display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg,rgba(37,99,255,0.1),rgba(6,182,212,0.06));border:1px solid rgba(37,99,255,0.18);border-radius:18px;padding:22px 28px;gap:20px}
        .contact-cta-left{font-size:14px;color:#94A3B8;font-weight:300;line-height:1.6}
        .contact-cta-left strong{color:#E2E8F0;font-weight:600;display:block;font-size:16px;margin-bottom:4px}

        /* ── FOOTER ── */
        .footer{border-top:1px solid rgba(37,99,255,0.08);padding:60px var(--pad-x);background:rgba(2,6,18,0.4)}
        .footer-inner{max-width:1240px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:40px}
        .footer-left{display:flex;align-items:center}
        .footer-center{display:flex;gap:32px;flex-wrap:wrap;justify-content:center}
        .footer-link{color:#94A3B8;font-size:14px;font-weight:500;cursor:pointer;transition:all .25s ease;background:none;border:none;font-family:'Poppins',sans-serif;letter-spacing:0.3px}
        .footer-link:hover{color:#06B6D4;transform:translateY(-2px)}
        .footer-right{display:flex;gap:12px;flex-wrap:wrap;align-items:center}
        .footer-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(37,99,255,0.05);border:1px solid rgba(37,99,255,0.12);border-radius:50px;padding:6px 16px;font-size:12px;color:#64748B;font-weight:500;transition:all .3s ease}
        .footer-badge:hover{background:rgba(37,99,255,0.1);border-color:rgba(37,99,255,0.25);color:#94A3B8}

        /* ── MOBILE ── */
        .hamburger{display:none;width:48px;height:48px;align-items:center;justify-content:center;position:relative;cursor:pointer;border:none;border-radius:14px;background:rgba(255,255,255,0.04);box-shadow:inset 0 0 0 1px rgba(148,163,184,0.14);transition:all .25s ease}
        .hamburger:hover{background:rgba(37,99,255,0.1);box-shadow:inset 0 0 0 1px rgba(37,99,255,0.28)}
        .hamburger span{display:block;position:absolute;width:20px;height:2px;background:#E2E8F0;border-radius:999px;transition:transform .28s ease,opacity .2s ease,top .28s ease}
        .hamburger span:nth-child(1){top:16px}
        .hamburger span:nth-child(2){top:23px}
        .hamburger span:nth-child(3){top:30px}
        .hamburger.open span:nth-child(1){top:23px;transform:rotate(45deg)}
        .hamburger.open span:nth-child(2){opacity:0}
        .hamburger.open span:nth-child(3){top:23px;transform:rotate(-45deg)}
        .mobile-menu{position:fixed;top:104px;left:var(--pad-x);right:var(--pad-x);z-index:210;pointer-events:none;opacity:0;transform:translateY(-12px) scale(.98);transition:opacity .24s ease,transform .24s ease}
        .mobile-menu.open{pointer-events:auto;opacity:1;transform:translateY(0) scale(1)}
        .mobile-menu-panel{max-width:1240px;margin:0 auto;padding:18px;border-radius:24px;background:linear-gradient(180deg,rgba(5,13,31,0.97),rgba(7,13,30,0.94));backdrop-filter:blur(22px);border:1px solid rgba(37,99,255,0.16);box-shadow:0 24px 60px rgba(2,8,23,0.42);max-height:calc(100vh - 140px);overflow-y:auto}
        .mobile-menu-top{padding:4px 4px 16px}
        .mobile-menu-label{display:inline-flex;align-items:center;padding:6px 12px;border-radius:999px;background:rgba(37,99,255,0.12);border:1px solid rgba(37,99,255,0.22);font-size:11px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;color:#38BDF8}
        .mobile-menu-text{margin-top:12px;color:#94A3B8;font-size:13px;line-height:1.6}
        .mobile-menu-links{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
        .mobile-menu-links button{background:rgba(255,255,255,0.03);border:1px solid rgba(148,163,184,0.12);color:#E2E8F0;font-family:'Poppins',sans-serif;font-size:15px;font-weight:500;padding:16px 18px;border-radius:18px;text-align:left;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:12px;transition:all .24s ease}
        .mobile-menu-links button:hover{border-color:rgba(37,99,255,0.28);background:rgba(37,99,255,0.08);transform:translateY(-2px)}
        .mobile-link-arrow{color:#38BDF8;font-size:18px;line-height:1}
        .mobile-menu-footer{padding-top:16px}
        .mobile-menu-cta{width:100%;text-align:center;padding:14px 20px}

        @media(max-width:1024px){
          .contact-grid{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:900px){
          :root{--pad-x:5%}
          .hero-inner{grid-template-columns:1fr;text-align:center;padding-top:20px;gap:20px}
          .hero-logo-side{display:none}
          .hero-text-side{order:1}
          .hero-text-side .pill,.hero-text-side h1,.hero-text-side p,.hero-btns{justify-content:center;text-align:center}
          .hero-btns{justify-content:center!important}
          .grid-2{grid-template-columns:1fr}
          .nav-links,.nav-cta-desktop{display:none!important}
          .nav{top:12px}
          .nav-shell{min-height:72px;padding:10px 12px}
          .nav-brand-name{font-size:18px}
          .nav-brand-subtitle{font-size:9px;letter-spacing:1.8px}
          .nav-logo-mark{width:48px;height:48px}
          .nav-logo-image{height:31px}
          .hamburger{display:flex}
          .section-pad{padding:80px var(--pad-x)}
          .stats-inner{grid-template-columns:repeat(2,1fr)}
          .footer-inner{flex-direction:column;align-items:center;text-align:center}
          .footer-center{justify-content:center}
        }
        @media(max-width:640px){
          .nav{top:10px}
          .nav-shell{min-height:66px;padding:9px 10px;border-radius:20px}
          .nav-logo{gap:10px}
          .nav-logo-mark{width:42px;height:42px;border-radius:13px}
          .nav-logo-image{height:27px}
          .nav-brand-name{font-size:16px}
          .nav-brand-subtitle{font-size:8px;letter-spacing:1.5px}
          .hamburger{width:44px;height:44px}
          .hamburger span:nth-child(1){top:14px}
          .hamburger span:nth-child(2){top:21px}
          .hamburger span:nth-child(3){top:28px}
          .hamburger.open span:nth-child(1),.hamburger.open span:nth-child(3){top:21px}
          .mobile-menu{top:88px}
          .mobile-menu-panel{padding:14px;border-radius:20px}
          .mobile-menu-links{grid-template-columns:1fr}
          .contact-grid{grid-template-columns:1fr 1fr}
          .bsmart-col{padding:26px 20px}
          .contact-cta-row{flex-direction:column;text-align:center}
        }
        @media(max-width:440px){
          .nav-shell{padding:8px 9px}
          .nav-brand-subtitle{display:none}
          .mobile-menu{left:12px;right:12px}
          .contact-grid{grid-template-columns:1fr}
        }
      `}</style>

      <Navbar
        mainLogo={MAIN_LOGO}
        navLinks={NAV_LINKS}
        activeNav={activeNav}
        scrolled={scrolled}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onScrollTo={scrollTo}
      />

      <HeroSection heroLogo={HERO_LOGO} onScrollTo={scrollTo} />

      <StatsSection stats={STATS} />
      <AboutSection />
      <ServicesSection services={SERVICES} />
      <ProductsSection features={BSMART_FEATURES} />
      <TechnologySection techStack={TECH_STACK} />
      <VisionSection visionItems={VISION_ITEMS} />
      <ContactSection contactItems={CONTACT_ITEMS} />

      <Footer mainLogo={MAIN_LOGO} onScrollTo={scrollTo} />
    </div>
  );
}
