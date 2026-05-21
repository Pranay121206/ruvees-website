import { useState, useEffect, useRef } from "react";

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

// Launch date — set to 60 days from now as a placeholder
const LAUNCH_DATE = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000);

/* ── Animated counter with easeOut ── */
function AnimatedCounter({ value, display }) {
  const [current, setCurrent] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || triggered) return;
      setTriggered(true);
      const duration = 1800;
      const steps = 60;
      const interval = duration / steps;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 4);
        setCurrent(Math.floor(eased * value));
        if (step >= steps) { setCurrent(value); clearInterval(timer); }
      }, interval);
      obs.disconnect();
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, triggered]);

  const fmt = (n) => {
    if (value >= 1000000) return (n / 1000000).toFixed(n === value ? 0 : 1) + "M+";
    if (value >= 1000) return (n / 1000).toFixed(n === value ? 0 : 1) + "K+";
    return n.toString();
  };

  return <span ref={ref}>{current === value ? display : fmt(current)}</span>;
}

/* ── Countdown Timer ── */
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = LAUNCH_DATE - Date.now();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", val: timeLeft.days },
    { label: "Hours", val: timeLeft.hours },
    { label: "Minutes", val: timeLeft.minutes },
    { label: "Seconds", val: timeLeft.seconds },
  ];

  return (
    <div style={{ display: "flex", gap: 16, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
      {units.map((u, i) => (
        <div key={u.label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            background: "rgba(37,99,255,0.1)",
            border: "1px solid rgba(37,99,255,0.25)",
            borderRadius: 14,
            padding: "14px 20px",
            minWidth: 72,
            textAlign: "center",
            backdropFilter: "blur(10px)",
          }}>
            <div style={{
              fontFamily: "'Sora',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(22px,3vw,34px)",
              background: "linear-gradient(135deg,#2563FF,#06B6D4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1,
              marginBottom: 5,
            }}>
              {String(u.val).padStart(2, "0")}
            </div>
            <div style={{ fontSize: 10, color: "#475569", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase" }}>{u.label}</div>
          </div>
          {i < units.length - 1 && (
            <div style={{ color: "#2563FF", fontWeight: 800, fontSize: 20, opacity: 0.6, animation: "glow-pulse 1s ease-in-out infinite" }}>:</div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Particle canvas ── */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const dots = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.4 + 0.08,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = canvas.width; if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height; if (d.y > canvas.height) d.y = 0;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37,99,255,${d.o})`; ctx.fill();
      });
      dots.forEach((a, i) => dots.slice(i + 1).forEach(b => {
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 110) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(37,99,255,${0.06 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.5; ctx.stroke();
        }
      }));
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }} />;
}

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
        .nav{position:fixed;top:0;left:0;right:0;z-index:200;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 var(--pad-x);transition:all .4s}
        .nav.scrolled{background:rgba(7,13,30,0.96);backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border-bottom:1px solid rgba(37,99,255,0.12)}
        .nav-logo{display:flex;align-items:center;gap:11px;cursor:pointer}
        .nav-links{display:flex;gap:2px;align-items:center}
        .nav-btn{background:none;border:none;color:#CBD5E1;font-family:'Poppins',sans-serif;font-weight:400;font-size:13.5px;cursor:pointer;padding:7px 13px;transition:all .22s;position:relative;text-decoration:none}
        .nav-btn::after{content:'';position:absolute;bottom:0;left:13px;right:13px;height:2px;background:linear-gradient(90deg,#2563FF,#06B6D4);border-radius:1px;transform:scaleX(0);transition:transform .25s ease}
        .nav-btn:hover{color:#fff}.nav-btn:hover::after{transform:scaleX(1)}
        .nav-btn.active{color:#06B6D4;font-weight:600}.nav-btn.active::after{transform:scaleX(1)}

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
        .footer{border-top:1px solid rgba(37,99,255,0.12);padding:32px var(--pad-x)}
        .footer-inner{max-width:1240px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px}
        .footer-left{display:flex;align-items:center;gap:14px}
        .footer-center{display:flex;gap:20px;flex-wrap:wrap;justify-content:center}
        .footer-link{color:#475569;font-size:12.5px;font-weight:400;cursor:pointer;transition:color .2s;background:none;border:none;font-family:'Poppins',sans-serif}
        .footer-link:hover{color:#06B6D4}
        .footer-right{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
        .footer-badge{display:inline-flex;align-items:center;gap:5px;background:rgba(37,99,255,0.07);border:1px solid rgba(37,99,255,0.13);border-radius:50px;padding:4px 12px;font-size:11px;color:#475569;font-weight:500}

        /* ── MOBILE ── */
        .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:8px;border:none;background:none}
        .hamburger span{display:block;width:22px;height:2px;background:#CBD5E1;border-radius:2px;transition:all .3s}
        .mobile-menu{display:none;position:fixed;top:72px;left:0;right:0;background:rgba(7,13,30,0.97);backdrop-filter:blur(20px);z-index:199;padding:16px 0;border-bottom:1px solid rgba(37,99,255,0.1)}
        .mobile-menu.open{display:flex;flex-direction:column}
        .mobile-menu button{background:none;border:none;color:#CBD5E1;font-family:'Poppins',sans-serif;font-size:15px;padding:14px var(--pad-x);text-align:left;cursor:pointer}

        @media(max-width:1024px){
          .contact-grid{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:900px){
          :root{--pad-x:5%}
          .hero-inner{grid-template-columns:1fr;text-align:center;padding-top:20px;gap:20px}
          .hero-logo-side{order:1}
          .hero-text-side{order:2}
          .hero-text-side .pill,.hero-text-side h1,.hero-text-side p,.hero-btns{justify-content:center;text-align:center}
          .hero-btns{justify-content:center!important}
          .grid-2{grid-template-columns:1fr}
          .nav-links,.nav-cta-desktop{display:none!important}
          .hamburger{display:flex}
          .section-pad{padding:80px var(--pad-x)}
          .stats-inner{grid-template-columns:repeat(2,1fr)}
          .footer-inner{flex-direction:column;align-items:center;text-align:center}
          .footer-center{justify-content:center}
        }
        @media(max-width:640px){
          .contact-grid{grid-template-columns:1fr 1fr}
          .bsmart-col{padding:26px 20px}
          .contact-cta-row{flex-direction:column;text-align:center}
        }
        @media(max-width:440px){
          .contact-grid{grid-template-columns:1fr}
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => scrollTo("Home")}>
          <img src={MAIN_LOGO} alt="RuVees" style={{ height: 36, objectFit: "contain", filter: "drop-shadow(0 0 8px rgba(37,99,255,0.7))" }} />
          <div>
            <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 19, lineHeight: 1 }}>
              <span className="gradient-text">RuVees</span>
            </div>
            <div style={{ fontSize: 8.5, letterSpacing: "2.5px", color: "#475569", fontWeight: 600, textTransform: "uppercase", marginTop: 1 }}>IT SOLUTIONS</div>
          </div>
        </div>
        <div className="nav-links">
          {NAV_LINKS.map(l => (
            <button key={l} className={`nav-btn ${activeNav === l ? "active" : ""}`} onClick={() => scrollTo(l)}>{l}</button>
          ))}
        </div>
        <button className="btn-primary nav-cta-desktop" style={{ fontSize: 13, padding: "10px 22px" }} onClick={() => scrollTo("Contact")}>Get Started</button>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(l => <button key={l} onClick={() => scrollTo(l)}>{l}</button>)}
        <div style={{ padding: `12px var(--pad-x)` }}>
          <button className="btn-primary" style={{ width: "100%", textAlign: "center" }} onClick={() => scrollTo("Contact")}>Get Started</button>
        </div>
      </div>

      {/* ── HERO ── */}
      <section id="home" className="hero grid-bg">
        <ParticleCanvas />

        {/* Glow orbs */}
        <div className="glow-orb" style={{ width: 700, height: 700, top: "-10%", left: "-12%", background: "radial-gradient(circle,rgba(37,99,255,0.2) 0%,transparent 70%)", animation: "glow-pulse 5s ease-in-out infinite" }} />
        <div className="glow-orb" style={{ width: 550, height: 550, bottom: "0%", right: "-8%", background: "radial-gradient(circle,rgba(139,92,246,0.17) 0%,transparent 70%)", animation: "glow-pulse 6s ease-in-out infinite 1.2s" }} />

        <div className="hero-inner" style={{ paddingBottom: 60, paddingTop: 20 }}>
          {/* LEFT: Text */}
          <div className="hero-text-side slide-left">
            <div className="pill slide-up">✦ AI-Powered Platform</div>
            <h1 className="slide-up-1" style={{
              fontFamily: "'Sora',sans-serif", fontWeight: 800,
              fontSize: "clamp(36px,5.2vw,68px)", lineHeight: 1.08,
              marginBottom: 22, letterSpacing: "-1.5px",
            }}>
              <span style={{ color: "#F8FAFC" }}>Smart Advertising.</span>
              <br />
              <span className="shimmer-text">Real Rewards.</span>
            </h1>
            <p className="slide-up-2" style={{
              fontSize: "clamp(14px,1.7vw,16.5px)", color: "#94A3B8",
              maxWidth: 500, lineHeight: 1.85, fontWeight: 300, marginBottom: 36,
            }}>
              RuVees IT Solutions builds AI-driven platforms that transform how businesses connect with users — starting with smarter, value-driven advertising.
            </p>
            <div className="hero-btns slide-up-3" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => scrollTo("Products")}>Explore Our Solutions</button>
              <button className="btn-secondary" onClick={() => scrollTo("Products")}>Discover bSmart</button>
            </div>
          </div>

          {/* RIGHT: Big infinity logo — enlarged */}
          <div className="hero-logo-side slide-right">
            <div className="hero-logo-glow">
              {/* rings */}
              <div className="hero-logo-ring" style={{ width: 480, height: 480, animationDelay: "0s" }} />
              <div className="hero-logo-ring" style={{ width: 590, height: 590, animationDelay: ".7s", opacity: .1 }} />
              <div className="hero-logo-ring" style={{ width: 700, height: 700, animationDelay: "1.4s", opacity: .05 }} />

              {/* core glow blob */}
              <div style={{
                position: "absolute", width: 380, height: 280,
                background: "radial-gradient(ellipse,rgba(37,99,255,0.42) 0%,transparent 70%)",
                filter: "blur(55px)",
                animation: "glow-pulse 3.5s ease-in-out infinite",
              }} />
              <div style={{
                position: "absolute", width: 260, height: 200,
                background: "radial-gradient(ellipse,rgba(139,92,246,0.28) 0%,transparent 70%)",
                filter: "blur(45px)",
                animation: "glow-pulse 4s ease-in-out infinite 0.8s",
              }} />

              {/* Infinity logo — significantly larger */}
              <img
                src={HERO_LOGO}
                alt="RuVees Infinity"
                className="float-anim"
                style={{
                  width: "clamp(320px,42vw,520px)",
                  objectFit: "contain",
                  position: "relative", zIndex: 2,
                  filter: "drop-shadow(0 0 50px rgba(37,99,255,1)) drop-shadow(0 0 100px rgba(139,92,246,0.7)) brightness(1.15)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR — full-width section below hero ── */}
      <div className="stats-section">
        <div className="stats-inner">
          {STATS.map((s, i) => (
            <div key={i} className="stat-cell">
              <div className="stat-val">
                <AnimatedCounter value={s.value} display={s.display} />
              </div>
              <div className="stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>



      {/* ── ABOUT ── */}
      <section id="about" className="section-pad" style={{ position: "relative" }}>
        <div className="glow-orb" style={{ width: 450, height: 450, top: "15%", right: "-8%", opacity: .3, background: "radial-gradient(circle,rgba(139,92,246,0.22) 0%,transparent 70%)" }} />
        <div className="section-inner">
          <div className="grid-2">
            <div>
              <div className="cyan-label">Our Story</div>
              <h2 className="section-title" style={{ marginBottom: 6 }}>
                <span className="gradient-text">Ideas are common.</span><br />
                <span style={{ color: "#F8FAFC" }}>Execution is everything.</span>
              </h2>
              <div className="sep" style={{ marginBottom: 28 }} />
              <p style={{ color: "#94A3B8", lineHeight: 1.9, marginBottom: 16, fontWeight: 300, fontSize: 15 }}>
                My entrepreneurial journey didn't start with success — it started with failure. Before founding RuVees, I co-ran a mineral water business that collapsed during COVID-19. That taught me: stability can be temporary, but learning is permanent.
              </p>
              <p style={{ color: "#94A3B8", lineHeight: 1.9, marginBottom: 36, fontWeight: 300, fontSize: 15 }}>
                From a short-video platform concept in 2016 to an instant delivery model, I envisioned multiple products ahead of their time. Today, with stronger experience and clarity, I've taken the first step — launching RuVees IT Solutions.
              </p>
              <div style={{ display: "flex", gap: 36 }}>
                {[["Innovation First", "🚀"], ["Execution Over Ideas", "⚡"], ["User-Centric Design", "🎯"]].map(([v, icon]) => (
                  <div key={v} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 26 }}>{icon}</span>
                    <span style={{ fontSize: 11, color: "#64748B", fontWeight: 500, textAlign: "center" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { title: "Vision", desc: "To become a globally recognized leader in AI-powered platforms and advertising solutions.", icon: "🌍" },
                { title: "Mission", desc: "Design intelligent systems that simplify operations and create meaningful user experiences.", icon: "🎯" },
                { title: "Founded", desc: "Built on the belief that technology should anticipate tomorrow's challenges, not just solve today's.", icon: "💡" },
                { title: "Focus", desc: "AI-first solutions that improve efficiency, engagement, and scalability for businesses worldwide.", icon: "⚙️" },
              ].map(item => (
                <div key={item.title} className="glass-card card-hover" style={{ padding: "26px 22px" }}>
                  <div style={{ fontSize: 30, marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 7, color: "#E2E8F0" }}>{item.title}</div>
                  <div style={{ fontSize: 12.5, color: "#64748B", lineHeight: 1.65, fontWeight: 300 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="section-pad" style={{ position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 0%,rgba(37,99,255,0.03) 50%,transparent 100%)", pointerEvents: "none" }} />
        <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-center">
            <div className="cyan-label">What We Do</div>
            <h2 className="section-title">Services Built for the <span className="gradient-text">Future</span></h2>
            <div className="sep sep-center" />
          </div>
          <div className="grid-4">
            {SERVICES.map((s, i) => {
              const rgb = s.color === "#2563FF" ? "37,99,255" : s.color === "#8B5CF6" ? "139,92,246" : s.color === "#06B6D4" ? "6,182,212" : "16,185,129";
              return (
                <div key={i} className="glass-card card-hover" style={{ padding: "36px 26px", position: "relative", overflow: "hidden" }}>
                  <div className="svc-bar" style={{ background: `linear-gradient(90deg,${s.color},#06B6D4)` }} />
                  <div style={{ width: 58, height: 58, borderRadius: 16, background: `rgba(${rgb},0.1)`, border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 20 }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10, color: "#E2E8F0" }}>{s.title}</h3>
                  <p style={{ color: "#64748B", fontSize: 13.5, lineHeight: 1.75, fontWeight: 300 }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="section-pad" style={{ position: "relative" }}>
        <div className="glow-orb" style={{ width: 700, height: 700, top: "40%", left: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(circle,rgba(139,92,246,0.09) 0%,transparent 70%)" }} />
        <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-center">
            <div className="cyan-label">Our Product</div>
            <h2 className="section-title">
              <span className="shimmer-text">bSmart</span>
              <span style={{ color: "#F8FAFC" }}> – Smart Engagement Platform</span>
            </h2>
            <p style={{ color: "#94A3B8", maxWidth: 560, margin: "16px auto 0", fontSize: 15, fontWeight: 300, lineHeight: 1.75 }}>
              A next-generation platform designed to redefine digital interaction — for users and businesses alike.
            </p>
            <div className="sep sep-center" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26, marginBottom: 26 }}>
            {[
              { title: "For Users", icon: "👤", gradient: "linear-gradient(135deg,rgba(37,99,255,0.14),rgba(6,182,212,0.08))", border: "rgba(37,99,255,0.25)", points: ["Enjoy content without interruptions", "Earn rewards through engagement", "AI-curated personalized content"] },
              { title: "For Businesses", icon: "🏢", gradient: "linear-gradient(135deg,rgba(139,92,246,0.14),rgba(37,99,255,0.08))", border: "rgba(139,92,246,0.25)", points: ["Promote products effectively", "Reach targeted audiences precisely", "Optimize ad spending with AI"] },
            ].map(col => (
              <div key={col.title} className="card-hover bsmart-col" style={{ background: col.gradient, border: `1px solid ${col.border}` }}>
                <div style={{ fontSize: 38, marginBottom: 10 }}>{col.icon}</div>
                <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 22, marginBottom: 20, color: "#F8FAFC" }}>{col.title}</h3>
                {col.points.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", marginBottom: 13 }}>
                    <span className="bsmart-arrow">→</span>
                    <span style={{ color: "#CBD5E1", fontSize: 14, lineHeight: 1.65, fontWeight: 300 }}>{p}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="grid-4">
            {BSMART_FEATURES.map((f, i) => (
              <div key={i} className="glass-card card-hover" style={{ padding: "30px 22px", textAlign: "center" }}>
                <div style={{ fontSize: 34, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontWeight: 600, fontSize: 14.5, color: "#E2E8F0", marginBottom: 7 }}>{f.title}</div>
                <div style={{ color: "#64748B", fontSize: 13, fontWeight: 300, lineHeight: 1.65 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY ── */}
      <section id="technology" className="section-pad" style={{ position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent,rgba(6,182,212,0.025) 50%,transparent)", pointerEvents: "none" }} />
        <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-center">
            <div className="cyan-label">Technology Stack</div>
            <h2 className="section-title">Built on <span className="gradient-text">Modern Tech</span></h2>
            <p style={{ color: "#94A3B8", fontSize: 15, fontWeight: 300, maxWidth: 480, margin: "12px auto 0" }}>
              Building scalable, intelligent, and adaptive platforms for the future.
            </p>
            <div className="sep sep-center" />
          </div>
          <div className="grid-4" style={{ marginBottom: 36 }}>
            {TECH_STACK.map((t, i) => (
              <div key={i} className="glass-card card-hover" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "44px 24px", border: "1px solid rgba(37,99,255,0.15)" }}>
                <div style={{ fontSize: 46, marginBottom: 18 }}>{t.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15.5, color: "#E2E8F0", marginBottom: 10 }}>{t.name}</div>
                <div style={{ fontSize: 12.5, color: "#475569", fontWeight: 300, lineHeight: 1.65 }}>{t.desc}</div>
              </div>
            ))}
          </div>
          <div className="glass-card" style={{ padding: "32px 44px", textAlign: "center", border: "1px solid rgba(37,99,255,0.15)" }}>
            <div style={{ color: "#475569", fontSize: 11.5, marginBottom: 10, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 500 }}>Core Philosophy</div>
            <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: "clamp(20px,2.5vw,28px)", background: "linear-gradient(135deg,#2563FF,#8B5CF6,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Scalable · Intelligent · Adaptive
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section id="vision" className="section-pad" style={{ position: "relative" }}>
        <div className="glow-orb" style={{ width: 550, height: 550, top: 0, left: "-8%", opacity: .28, background: "radial-gradient(circle,rgba(139,92,246,0.22) 0%,transparent 70%)" }} />
        <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-center">
            <div className="cyan-label">Future Vision</div>
            <h2 className="section-title">The Road <span className="gradient-text">Ahead</span></h2>
            <div className="sep sep-center" />
          </div>
          <div className="grid-4">
            {VISION_ITEMS.map((v, i) => (
              <div key={i} className="glass-card card-hover" style={{ padding: "36px 26px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", bottom: -24, right: -24, width: 110, height: 110, borderRadius: "50%", background: "rgba(37,99,255,0.04)", filter: "blur(20px)" }} />
                <div style={{ width: 54, height: 54, borderRadius: 15, background: "linear-gradient(135deg,rgba(37,99,255,0.18),rgba(6,182,212,0.09))", border: "1px solid rgba(37,99,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 25, marginBottom: 20 }}>
                  {v.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 15.5, color: "#E2E8F0", marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: "#64748B", fontSize: 13.5, lineHeight: 1.75, fontWeight: 300 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT — single row 4 cards ── */}
      <section id="contact" className="section-pad" style={{ position: "relative" }}>
        <div className="glow-orb" style={{ width: 800, height: 400, top: "25%", left: "50%", transform: "translateX(-50%)", opacity: .22, background: "radial-gradient(ellipse,rgba(37,99,255,0.3) 0%,transparent 70%)" }} />
        <div className="section-inner" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="cyan-label">Contact Us</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Let's Build the <span className="shimmer-text">Future Together.</span>
          </h2>
          <p style={{ color: "#94A3B8", fontSize: 16, marginBottom: 52, fontWeight: 300, lineHeight: 1.8 }}>
            Have a project in mind or want to learn more? Reach out and let's create something extraordinary.
          </p>

          {/* Single-row contact cards */}
          <div className="contact-grid">
            {CONTACT_ITEMS.map((c, i) => (
              <div key={i} className="contact-card">
                <div style={{ position: "absolute", bottom: -24, right: -24, width: 100, height: 100, borderRadius: "50%", background: "rgba(37,99,255,0.04)", filter: "blur(20px)" }} />
                <div className="contact-icon-wrap">{c.icon}</div>
                <div style={{ fontSize: 10, color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.8px", marginBottom: 6 }}>{c.label}</div>
                <div style={{ fontSize: 14.5, color: "#E2E8F0", fontWeight: 600, marginBottom: 5 }}>{c.value}</div>
                <div style={{ fontSize: 12, color: "#475569", fontWeight: 300, lineHeight: 1.5 }}>{c.sub}</div>
              </div>
            ))}
          </div>

          <div className="contact-cta-row">
            <div className="contact-cta-left">
              <strong>Ready to get started?</strong>
              Drop us a message and our team will connect with you shortly.
            </div>
            <button className="btn-primary" style={{ fontSize: 15, padding: "15px 40px", flexShrink: 0 }}>
              Get In Touch →
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <img src={MAIN_LOGO} alt="RuVees" style={{ height: 30, objectFit: "contain", filter: "drop-shadow(0 0 6px rgba(37,99,255,0.6))" }} />
            <div>
              <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 16 }}><span className="gradient-text">RuVees</span></span>
              <span style={{ fontSize: 12, color: "#334155", marginLeft: 6 }}>© 2025 All rights reserved.</span>
            </div>
          </div>
          <div className="footer-center">
            {["About", "Services", "Products", "Technology", "Vision", "Contact"].map(l => (
              <button key={l} className="footer-link" onClick={() => scrollTo(l)}>{l}</button>
            ))}
          </div>
          <div className="footer-right">
            <div className="footer-badge">🤖 AI-Powered</div>
            <div className="footer-badge">🇮🇳 Made in India</div>
            <div className="footer-badge">🔒 Privacy First</div>
          </div>
        </div>
      </footer>
    </div>
  );
}