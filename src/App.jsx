import { useState, useEffect, useRef } from "react";

// ─── LOGO: actual uploaded infinity logo (blue/purple neon) ───────────────────
const INFINITY_LOGO = "/logo.png";
const NAV_LINKS = ["Home", "About", "Services", "Products", "Technology", "Vision", "Contact"];

const STATS = [
  { value: "10K+", label: "Active Users" },
  { value: "5K+", label: "Vendors" },
  { value: "1M+", label: "Ad Impressions" },
  { value: "50K+", label: "Rewards Delivered" },
];

const SERVICES = [
  {
    icon: "🤖",
    title: "AI-Driven Advertising",
    desc: "Intelligent ad systems that target the right audience, auto-optimize campaigns, and maximize ROI.",
    color: "#2563FF",
  },
  {
    icon: "💻",
    title: "Custom Software Development",
    desc: "Web apps, mobile apps, and scalable SaaS platforms built for the future.",
    color: "#8B5CF6",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    desc: "Deep user behavior analysis, business performance tracking, and AI-based insights.",
    color: "#06B6D4",
  },
  {
    icon: "🌐",
    title: "Digital Platforms",
    desc: "Complete ecosystems where users interact seamlessly and businesses grow efficiently.",
    color: "#10B981",
  },
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

// ─── Particle background ──────────────────────────────────────────────────────
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
    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.5 + 0.1,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37,99,255,${d.o})`;
        ctx.fill();
      });
      dots.forEach((a, i) => dots.slice(i + 1).forEach(b => {
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(37,99,255,${0.07 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }));
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }} />;
}

function GlowOrb({ style }) {
  return (
    <div className="glow-orb" style={style} />
  );
}

function GlassCard({ children, className = "", style = {} }) {
  return (
    <div className={`glass-card ${className}`} style={style}>
      {children}
    </div>
  );
}

// ─── Counter animation ────────────────────────────────────────────────────────
function AnimatedCounter({ value }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const num = parseInt(value.replace(/\D/g, ""), 10);
      const suffix = value.replace(/[0-9]/g, "");
      let start = 0;
      const step = Math.ceil(num / 40);
      const timer = setInterval(() => {
        start += step;
        if (start >= num) { setDisplay(value); clearInterval(timer); }
        else setDisplay(start + suffix);
      }, 30);
      obs.disconnect();
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{display}</span>;
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
    setMenuOpen(false);
    setActiveNav(id);
  };

  return (
    <div className="root">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Sora:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:#070D1E}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#2563FF,#8B5CF6);border-radius:3px}

        .root{background:#070D1E;font-family:'Poppins',sans-serif;color:#F3F4F6;overflow-x:hidden;min-height:100vh}

        /* ── Glow orbs ── */
        .glow-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(80px)}

        /* ── Glass ── */
        .glass-card{border-radius:20px;border:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.03);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}
        .glass-card-bright{border-radius:20px;border:1px solid rgba(37,99,255,0.2);background:rgba(37,99,255,0.05);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}

        /* ── Text ── */
        .gradient-text{background:linear-gradient(135deg,#2563FF,#8B5CF6,#06B6D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .shimmer-text{background:linear-gradient(90deg,#2563FF 0%,#8B5CF6 30%,#06B6D4 60%,#2563FF 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 3s linear infinite}
        .cyan-label{color:#06B6D4;font-weight:600;font-size:12px;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:14px}

        /* ── Buttons ── */
        .btn-primary{background:linear-gradient(90deg,#2563FF,#06B6D4);color:#fff;border:none;border-radius:50px;padding:14px 34px;font-family:'Poppins',sans-serif;font-weight:600;font-size:14.5px;cursor:pointer;transition:all .3s;box-shadow:0 4px 28px rgba(37,99,255,0.45);letter-spacing:.3px;white-space:nowrap}
        .btn-primary:hover{transform:translateY(-3px);box-shadow:0 10px 44px rgba(37,99,255,0.65)}
        .btn-secondary{background:transparent;color:#F3F4F6;border:1.5px solid rgba(37,99,255,0.45);border-radius:50px;padding:13px 32px;font-family:'Poppins',sans-serif;font-weight:500;font-size:14.5px;cursor:pointer;transition:all .3s;white-space:nowrap}
        .btn-secondary:hover{border-color:#06B6D4;color:#06B6D4;transform:translateY(-3px)}

        /* ── Cards hover ── */
        .card-hover{transition:transform .35s,box-shadow .35s}
        .card-hover:hover{transform:translateY(-8px);box-shadow:0 24px 60px rgba(37,99,255,0.18)}

        /* ── Animations ── */
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes pulse-ring{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}
        @keyframes slide-up{from{opacity:0;transform:translateY(44px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fade-in{from{opacity:0}to{opacity:1}}
        @keyframes glow-pulse{0%,100%{opacity:.45}50%{opacity:.9}}
        @keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes bar-grow{from{width:0}to{width:var(--w)}}

        .float-anim{animation:float 4.5s ease-in-out infinite}
        .pulse-ring{animation:pulse-ring 3.2s ease-in-out infinite}
        .slide-up{animation:slide-up .85s ease both}
        .slide-up-1{animation:slide-up .85s .15s ease both}
        .slide-up-2{animation:slide-up .85s .3s ease both}
        .slide-up-3{animation:slide-up .85s .45s ease both}
        .fade-in{animation:fade-in 1s ease both}

        /* ── Nav ── */
        .nav{position:fixed;top:0;left:0;right:0;z-index:200;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 6%;transition:all .3s}
        .nav.scrolled{background:rgba(7,13,30,0.93);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border-bottom:1px solid rgba(37,99,255,0.14)}
        .nav-logo{display:flex;align-items:center;gap:11px;cursor:pointer;text-decoration:none}
        .nav-links{display:flex;gap:4px;align-items:center}
        .nav-btn{background:none;border:none;color:#CBD5E1;font-family:'Poppins',sans-serif;font-weight:400;font-size:13.5px;cursor:pointer;padding:7px 13px;border-radius:8px;transition:all .2s;position:relative}
        .nav-btn:hover{color:#fff;background:rgba(255,255,255,0.05)}
        .nav-btn.active{color:#06B6D4;font-weight:600}
        .nav-btn.active::after{content:'';display:block;position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);width:5px;height:5px;border-radius:50%;background:#06B6D4}

        /* ── Hero ── */
        .hero{min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;padding-top:72px}
        .grid-bg{background-image:linear-gradient(rgba(37,99,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,255,0.05) 1px,transparent 1px);background-size:64px 64px}

        /* ── Hero logo badge ── */
        .hero-logo-badge{position:absolute;top:90px;left:6%;z-index:10;display:flex;align-items:center;gap:14px;background:rgba(7,13,30,0.6);border:1px solid rgba(37,99,255,0.2);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:16px;padding:12px 20px}

        /* ── Sections ── */
        section{scroll-margin-top:72px}
        .section-pad{padding:110px 6%}
        .section-center{text-align:center;margin-bottom:72px}
        .section-title{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(28px,4vw,48px);color:#F8FAFC;line-height:1.12;margin-bottom:0}

        /* ── Grid ── */
        .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
        .grid-4{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:24px}
        .grid-4-tight{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}

        /* ── Stats bar ── */
        .stat-val{font-family:'Sora',sans-serif;font-weight:800;font-size:clamp(24px,3vw,34px)}

        /* ── Service card top bar ── */
        .svc-bar{position:absolute;top:0;left:0;right:0;height:3px}

        /* ── Mobile nav ── */
        .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:8px;border:none;background:none}
        .hamburger span{display:block;width:22px;height:2px;background:#CBD5E1;border-radius:2px;transition:all .3s}
        .mobile-menu{display:none;position:fixed;top:72px;left:0;right:0;background:rgba(7,13,30,0.97);backdrop-filter:blur(20px);z-index:199;padding:16px 0;border-bottom:1px solid rgba(37,99,255,0.12)}
        .mobile-menu.open{display:flex;flex-direction:column}
        .mobile-menu button{background:none;border:none;color:#CBD5E1;font-family:'Poppins',sans-serif;font-size:15px;padding:14px 6%;text-align:left;cursor:pointer}

        /* ── Feature pill ── */
        .pill{display:inline-flex;align-items:center;gap:8px;background:rgba(37,99,255,0.1);border:1px solid rgba(37,99,255,0.25);border-radius:50px;padding:7px 18px;font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#06B6D4;margin-bottom:22px}

        /* ── Tech grid ── */
        .tech-card{display:flex;flex-direction:column;align-items:center;text-align:center;padding:44px 24px}

        /* ── Contact redesign ── */
        .contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:36px}
        .contact-item{border-radius:18px;padding:28px 26px;border:1px solid rgba(37,99,255,0.15);background:rgba(255,255,255,0.02);transition:all .3s;cursor:default;position:relative;overflow:hidden}
        .contact-item::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#2563FF,#06B6D4);opacity:0;transition:opacity .3s}
        .contact-item:hover{border-color:rgba(37,99,255,0.35);background:rgba(37,99,255,0.04);transform:translateY(-4px)}
        .contact-item:hover::before{opacity:1}
        .contact-item-icon{width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,rgba(37,99,255,0.18),rgba(6,182,212,0.09));border:1px solid rgba(37,99,255,0.2);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px}
        .contact-item-label{font-size:10.5px;color:#475569;font-weight:600;text-transform:uppercase;letter-spacing:1.8px;margin-bottom:6px}
        .contact-item-value{font-size:15px;color:#E2E8F0;font-weight:500;line-height:1.45}
        .contact-cta-row{display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg,rgba(37,99,255,0.1),rgba(6,182,212,0.06));border:1px solid rgba(37,99,255,0.18);border-radius:18px;padding:22px 28px;margin-bottom:32px}
        .contact-cta-left{font-size:14px;color:#94A3B8;font-weight:300;line-height:1.6}
        .contact-cta-left strong{color:#E2E8F0;font-weight:600;display:block;font-size:16px;margin-bottom:4px}

        /* ── Footer ── */
        .footer{border-top:1px solid rgba(37,99,255,0.1);padding:36px 6%;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:18px}
        .footer-link{color:#475569;font-size:13px;cursor:pointer;transition:color .2s;font-weight:400}
        .footer-link:hover{color:#06B6D4}

        /* ── About values ── */
        .about-value{display:flex;flex-direction:column;align-items:center;gap:6px}

        /* ── bSmart column ── */
        .bsmart-col{border-radius:22px;padding:36px 32px}
        .bsmart-arrow{color:#06B6D4;font-weight:700;font-size:16px;margin-right:8px;margin-top:2px;flex-shrink:0}

        /* ── Separator line ── */
        .sep{width:64px;height:3px;background:linear-gradient(90deg,#2563FF,#06B6D4);border-radius:2px;margin:18px 0 0}
        .sep-center{margin:18px auto 0}

        @media(max-width:900px){
          .grid-2{grid-template-columns:1fr}
          .grid-4-tight{grid-template-columns:repeat(2,1fr)}
          .nav-links,.nav-cta-desktop{display:none!important}
          .hamburger{display:flex}
          .section-pad{padding:80px 5%}
          .contact-grid{grid-template-columns:1fr}
          .contact-cta-row{flex-direction:column;gap:18px;text-align:center}
          
        }
        @media(max-width:560px){
          .grid-4-tight{grid-template-columns:1fr 1fr}
          .footer{flex-direction:column;text-align:center}
          .bsmart-col{padding:28px 22px}
          .hero h1{font-size:36px!important}
          .contact-grid{grid-template-columns:1fr}
        }
      `}</style>

      {/* ═══════════════════════ NAVBAR ═══════════════════════ */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => scrollTo("Home")}>
          <div style={{ position: "relative", width: 44, height: 30 }}>
            <img
              src={INFINITY_LOGO}
              alt="RuVees Logo"
              style={{ width: 44, height: 30, objectFit: "contain", filter: "drop-shadow(0 0 8px rgba(37,99,255,0.8))" }}
            />
          </div>
          <div>
            <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 19, letterSpacing: ".4px", lineHeight: 1 }}>
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

        <button className="btn-primary nav-cta-desktop" style={{ fontSize: 13, padding: "10px 22px" }} onClick={() => scrollTo("Contact")}>
          Get Started
        </button>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(l => <button key={l} onClick={() => scrollTo(l)}>{l}</button>)}
        <div style={{ padding: "12px 6%" }}>
          <button className="btn-primary" style={{ width: "100%", textAlign: "center" }} onClick={() => scrollTo("Contact")}>Get Started</button>
        </div>
      </div>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section id="home" className="hero grid-bg">
        <ParticleCanvas />
        <GlowOrb style={{ width: 700, height: 700, top: "-10%", left: "-15%", background: "radial-gradient(circle,rgba(37,99,255,0.22) 0%,transparent 70%)", animation: "glow-pulse 5s ease-in-out infinite" }} />
        <GlowOrb style={{ width: 550, height: 550, bottom: "-5%", right: "-10%", background: "radial-gradient(circle,rgba(139,92,246,0.18) 0%,transparent 70%)", animation: "glow-pulse 6s ease-in-out infinite 1s" }} />
        <GlowOrb style={{ width: 320, height: 320, top: "40%", left: "42%", background: "radial-gradient(circle,rgba(6,182,212,0.12) 0%,transparent 70%)", animation: "glow-pulse 4s ease-in-out infinite .5s" }} />

        {/* ── Logo badge — top-left corner of hero ── */}
        <div className="hero-logo-badge fade-in">
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", inset: -8,
              background: "radial-gradient(circle,rgba(37,99,255,0.4) 0%,transparent 70%)",
              borderRadius: "50%", filter: "blur(10px)",
              animation: "glow-pulse 3s ease-in-out infinite",
            }} />
            <img
              src={INFINITY_LOGO}
              alt="RuVees"
              style={{
                width: 52, height: 34, objectFit: "contain", position: "relative", zIndex: 1,
                filter: "drop-shadow(0 0 12px rgba(37,99,255,0.9)) drop-shadow(0 0 24px rgba(139,92,246,0.5)) brightness(1.1)",
              }}
            />
          </div>
          <div>
            <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 17, letterSpacing: ".3px", lineHeight: 1 }}>
              <span className="gradient-text">RuVees</span>
            </div>
            <div style={{ fontSize: 8, letterSpacing: "2px", color: "#475569", fontWeight: 600, textTransform: "uppercase", marginTop: 3 }}>IT SOLUTIONS</div>
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "0 24px", maxWidth: 900, position: "relative", zIndex: 2 }}>

          <div className="pill slide-up">✦ AI-Powered Platform</div>

          <h1 className="slide-up-1" style={{
            fontFamily: "'Sora',sans-serif", fontWeight: 800,
            fontSize: "clamp(40px,7vw,80px)", lineHeight: 1.08,
            marginBottom: 26, letterSpacing: "-1.5px",
          }}>
            <span style={{ color: "#F8FAFC" }}>Smart Advertising.</span>
            <br />
            <span className="shimmer-text">Real Rewards.</span>
          </h1>

          <p className="slide-up-2" style={{
            fontSize: "clamp(15px,2vw,18px)", color: "#94A3B8",
            maxWidth: 620, margin: "0 auto 44px", lineHeight: 1.85, fontWeight: 300,
          }}>
            RuVees IT Solutions builds AI-driven platforms that transform how businesses connect with users — starting with smarter, value-driven advertising.
          </p>

          <div className="slide-up-3" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => scrollTo("Products")}>Explore Our Solutions</button>
            <button className="btn-secondary" onClick={() => scrollTo("Products")}>Discover bSmart</button>
          </div>

          {/* Stats */}
          <div className="glass-card slide-up-3" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, marginTop: 64, maxWidth: 720, margin: "64px auto 0", overflow: "hidden" }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                padding: "28px 16px", textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}>
                <div className="stat-val gradient-text"><AnimatedCounter value={s.value} /></div>
                <div style={{ fontSize: 11.5, color: "#475569", fontWeight: 500, marginTop: 4, letterSpacing: ".5px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* scroll indicator */}
        <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
          <div style={{ width: 24, height: 40, border: "1.5px solid rgba(37,99,255,0.4)", borderRadius: 12, display: "flex", justifyContent: "center", paddingTop: 6 }}>
            <div style={{ width: 3, height: 9, background: "#2563FF", borderRadius: 2, animation: "float 1.6s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════ ABOUT ═══════════════════════ */}
      <section id="about" className="section-pad" style={{ position: "relative" }}>
        <GlowOrb style={{ width: 450, height: 450, top: "15%", right: "-8%", opacity: .35, background: "radial-gradient(circle,rgba(139,92,246,0.22) 0%,transparent 70%)" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div className="grid-2">
            {/* Left text */}
            <div>
              <div className="cyan-label">Our Story</div>
              <h2 className="section-title" style={{ marginBottom: 6 }}>
                <span className="gradient-text">Ideas are common.</span>
                <br />
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
                  <div key={v} className="about-value">
                    <span style={{ fontSize: 26 }}>{icon}</span>
                    <span style={{ fontSize: 11, color: "#64748B", fontWeight: 500, textAlign: "center", marginTop: 2 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { title: "Vision", desc: "To become a globally recognized leader in AI-powered platforms and advertising solutions.", icon: "🌍" },
                { title: "Mission", desc: "Design intelligent systems that simplify operations and create meaningful user experiences.", icon: "🎯" },
                { title: "Founded", desc: "Built on the belief that technology should anticipate tomorrow's challenges, not just solve today's.", icon: "💡" },
                { title: "Focus", desc: "AI-first solutions that improve efficiency, engagement, and scalability for businesses worldwide.", icon: "⚙️" },
              ].map(item => (
                <GlassCard key={item.title} className="card-hover" style={{ padding: "26px 22px" }}>
                  <div style={{ fontSize: 30, marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 7, color: "#E2E8F0" }}>{item.title}</div>
                  <div style={{ fontSize: 12.5, color: "#64748B", lineHeight: 1.65, fontWeight: 300 }}>{item.desc}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES ═══════════════════════ */}
      <section id="services" className="section-pad" style={{ position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 0%,rgba(37,99,255,0.03) 50%,transparent 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="section-center">
            <div className="cyan-label">What We Do</div>
            <h2 className="section-title">Services Built for the <span className="gradient-text">Future</span></h2>
            <div className="sep sep-center" />
          </div>

          <div className="grid-4">
            {SERVICES.map((s, i) => (
              <GlassCard key={i} className="card-hover" style={{ padding: "36px 26px", position: "relative", overflow: "hidden" }}>
                <div className="svc-bar" style={{ background: `linear-gradient(90deg,${s.color},#06B6D4)` }} />
                <div style={{
                  width: 58, height: 58, borderRadius: 16,
                  background: `rgba(${s.color === "#2563FF" ? "37,99,255" : s.color === "#8B5CF6" ? "139,92,246" : s.color === "#06B6D4" ? "6,182,212" : "16,185,129"},0.1)`,
                  border: `1px solid ${s.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 26, marginBottom: 20,
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10, color: "#E2E8F0" }}>{s.title}</h3>
                <p style={{ color: "#64748B", fontSize: 13.5, lineHeight: 1.75, fontWeight: 300 }}>{s.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PRODUCTS – bSmart ═══════════════════════ */}
      <section id="products" className="section-pad" style={{ position: "relative" }}>
        <GlowOrb style={{ width: 700, height: 700, top: "40%", left: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(circle,rgba(139,92,246,0.1) 0%,transparent 70%)" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
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

          {/* Two column */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 28 }}>
            {[
              {
                title: "For Users", icon: "👤",
                gradient: "linear-gradient(135deg,rgba(37,99,255,0.14),rgba(6,182,212,0.08))",
                border: "rgba(37,99,255,0.25)",
                points: ["Enjoy content without interruptions", "Earn rewards through engagement", "AI-curated personalized content"],
              },
              {
                title: "For Businesses", icon: "🏢",
                gradient: "linear-gradient(135deg,rgba(139,92,246,0.14),rgba(37,99,255,0.08))",
                border: "rgba(139,92,246,0.25)",
                points: ["Promote products effectively", "Reach targeted audiences precisely", "Optimize ad spending with AI"],
              },
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

          {/* Feature cards */}
          <div className="grid-4">
            {BSMART_FEATURES.map((f, i) => (
              <GlassCard key={i} className="card-hover" style={{ padding: "30px 22px", textAlign: "center" }}>
                <div style={{ fontSize: 34, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontWeight: 600, fontSize: 14.5, color: "#E2E8F0", marginBottom: 7 }}>{f.title}</div>
                <div style={{ color: "#64748B", fontSize: 13, fontWeight: 300, lineHeight: 1.65 }}>{f.desc}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TECHNOLOGY ═══════════════════════ */}
      <section id="technology" className="section-pad" style={{ position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent,rgba(6,182,212,0.03) 50%,transparent)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="section-center">
            <div className="cyan-label">Technology Stack</div>
            <h2 className="section-title">Built on <span className="gradient-text">Modern Tech</span></h2>
            <p style={{ color: "#94A3B8", fontSize: 15, marginTop: 12, fontWeight: 300, maxWidth: 480, margin: "12px auto 0" }}>
              Building scalable, intelligent, and adaptive platforms for the future.
            </p>
            <div className="sep sep-center" />
          </div>

          <div className="grid-4" style={{ marginBottom: 40 }}>
            {TECH_STACK.map((t, i) => (
              <GlassCard key={i} className="card-hover tech-card" style={{ animationDelay: `${i * 0.5}s`, border: "1px solid rgba(37,99,255,0.15)" }}>
                <div style={{ fontSize: 46, marginBottom: 18 }}>{t.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15.5, color: "#E2E8F0", marginBottom: 10 }}>{t.name}</div>
                <div style={{ fontSize: 12.5, color: "#475569", fontWeight: 300, lineHeight: 1.65 }}>{t.desc}</div>
              </GlassCard>
            ))}
          </div>

          {/* Focus bar */}
          <GlassCard style={{ padding: "34px 44px", textAlign: "center", border: "1px solid rgba(37,99,255,0.15)" }}>
            <div style={{ color: "#475569", fontSize: 12, marginBottom: 10, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 500 }}>Core Philosophy</div>
            <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: "clamp(20px,2.5vw,28px)", background: "linear-gradient(135deg,#2563FF,#8B5CF6,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Scalable · Intelligent · Adaptive
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ═══════════════════════ VISION ═══════════════════════ */}
      <section id="vision" className="section-pad" style={{ position: "relative" }}>
        <GlowOrb style={{ width: 550, height: 550, top: 0, left: "-8%", opacity: .3, background: "radial-gradient(circle,rgba(139,92,246,0.22) 0%,transparent 70%)" }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="section-center">
            <div className="cyan-label">Future Vision</div>
            <h2 className="section-title">The Road <span className="gradient-text">Ahead</span></h2>
            <div className="sep sep-center" />
          </div>

          <div className="grid-4">
            {VISION_ITEMS.map((v, i) => (
              <GlassCard key={i} className="card-hover" style={{ padding: "36px 26px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", bottom: -24, right: -24, width: 110, height: 110, borderRadius: "50%", background: "rgba(37,99,255,0.04)", filter: "blur(20px)" }} />
                <div style={{ width: 54, height: 54, borderRadius: 15, background: "linear-gradient(135deg,rgba(37,99,255,0.18),rgba(6,182,212,0.09))", border: "1px solid rgba(37,99,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 25, marginBottom: 20 }}>
                  {v.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 15.5, color: "#E2E8F0", marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: "#64748B", fontSize: 13.5, lineHeight: 1.75, fontWeight: 300 }}>{v.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CONTACT ═══════════════════════ */}
      <section id="contact" className="section-pad" style={{ position: "relative" }}>
        <GlowOrb style={{ width: 800, height: 400, top: "25%", left: "50%", transform: "translateX(-50%)", opacity: .25, background: "radial-gradient(ellipse,rgba(37,99,255,0.3) 0%,transparent 70%)" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="cyan-label">Contact Us</div>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Let's Build the{" "}
            <span className="shimmer-text">Future Together.</span>
          </h2>
          <p style={{ color: "#94A3B8", fontSize: 16, marginBottom: 48, fontWeight: 300, lineHeight: 1.8 }}>
            Have a project in mind or want to learn more? Reach out and let's create something extraordinary.
          </p>

          {/* ── Redesigned contact cards ── */}
          <div className="contact-grid">
            {[
              { label: "Email", value: "info@ruvees.com", icon: "📧", sub: "We reply within 24 hours" },
              { label: "Location", value: "India", icon: "📍", sub: "Available globally" },
              { label: "Phone", value: "+91-XXXXXXXXXX", icon: "📱", sub: "Mon – Sat, 9 AM – 7 PM" },
              { label: "Support", value: "24 / 7 Online", icon: "💬", sub: "Always here to help" },
            ].map(c => (
              <div key={c.label} className="contact-item" style={{ textAlign: "left" }}>
                <div className="contact-item-icon">{c.icon}</div>
                <div className="contact-item-label">{c.label}</div>
                <div className="contact-item-value">{c.value}</div>
                <div style={{ fontSize: 12, color: "#475569", marginTop: 5, fontWeight: 300 }}>{c.sub}</div>
              </div>
            ))}
          </div>

          {/* ── CTA strip ── */}
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

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <footer className="footer">
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <img src={INFINITY_LOGO} alt="RuVees" style={{ width: 34, height: 22, objectFit: "contain", filter: "drop-shadow(0 0 6px rgba(37,99,255,0.7))" }} />
          <span style={{ fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 15 }}>
            <span className="gradient-text">RuVees</span>
            <span style={{ color: "#2D3748", fontWeight: 400, fontSize: 12, marginLeft: 5 }}>IT Solutions</span>
          </span>
        </div>
        <div style={{ color: "#2D3748", fontSize: 12.5, fontWeight: 300 }}>
          © 2025 RuVees IT Solutions Pvt Ltd. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: 22 }}>
          {["Privacy", "Terms", "Careers"].map(l => (
            <span key={l} className="footer-link">{l}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}