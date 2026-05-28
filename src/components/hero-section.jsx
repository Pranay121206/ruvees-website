import { useEffect, useRef } from "react";

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.4 + 0.08,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0) dot.x = canvas.width;
        if (dot.x > canvas.width) dot.x = 0;
        if (dot.y < 0) dot.y = canvas.height;
        if (dot.y > canvas.height) dot.y = 0;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37,99,255,${dot.o})`;
        ctx.fill();
      });

      dots.forEach((a, index) => {
        dots.slice(index + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(37,99,255,${0.06 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
    />
  );
}

export default function HeroSection({ heroLogo, onScrollTo }) {
  return (
    <section id="home" className="hero grid-bg">
      <ParticleCanvas />
      <div className="hero-wave" />

      <div
        className="glow-orb"
        style={{
          width: 800,
          height: 800,
          top: "-20%",
          left: "-15%",
          background: "radial-gradient(circle,rgba(37,99,255,0.25) 0%,transparent 70%)",
          animation: "glow-pulse 6s ease-in-out infinite",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 700,
          height: 700,
          bottom: "-10%",
          right: "-10%",
          background: "radial-gradient(circle,rgba(139,92,246,0.2) 0%,transparent 70%)",
          animation: "glow-pulse 7s ease-in-out infinite 1s",
        }}
      />

      <div className="hero-inner" style={{ paddingBottom: 100, paddingTop: 40 }}>
        <div className="hero-text-side slide-left">
          <div className="pill slide-up" style={{ background: "rgba(37,99,255,0.08)", borderColor: "rgba(37,99,255,0.2)", marginBottom: 30 }}>
            AI-POWERED PLATFORM
          </div>
          <h1
            className="slide-up-1"
            style={{
              fontFamily: "'Sora',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(50px,7.5vw,100px)",
              lineHeight: 0.9,
              marginBottom: 10,
              letterSpacing: "-4px",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <span style={{ color: "#FFFFFF" }}>Smart</span>
            <span style={{ 
              background: "linear-gradient(90deg, #2563FF, #8B5CF6, #D946EF)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Advertising.
            </span>
          </h1>
          
          <div 
            className="slide-up-1" 
            style={{ 
              color: "#38BDF8", 
              fontSize: "clamp(18px,2.2vw,26px)", 
              fontWeight: 500, 
              marginBottom: 32,
              letterSpacing: "0.5px"
            }}
          >
            Real Rewards.
          </div>

          <p
            className="slide-up-2"
            style={{
              fontSize: "clamp(16px,1.8vw,19px)",
              color: "#94A3B8",
              maxWidth: 600,
              lineHeight: 1.6,
              fontWeight: 300,
              marginBottom: 48,
              opacity: 0.8
            }}
          >
            RuVees IT Solutions builds AI-driven platforms that transform how
            businesses connect with users - starting with smarter, value-driven
            advertising.
          </p>
          <div
            className="hero-btns slide-up-3"
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <button className="btn-primary" onClick={() => onScrollTo("Products")}>
              Explore Our Solutions
            </button>
            <button className="btn-secondary" onClick={() => onScrollTo("Products")}>
              Discover bSmart
            </button>
          </div>
        </div>

        <div className="hero-logo-side slide-right">
          <div className="hero-logo-glow">
            <div
              className="hero-logo-ring"
              style={{ width: 700, height: 700, animationDelay: "0s" }}
            />
            <div
              className="hero-logo-ring"
              style={{ width: 880, height: 880, animationDelay: ".7s", opacity: 0.1 }}
            />
            <div
              className="hero-logo-ring"
              style={{ width: 1050, height: 1050, animationDelay: "1.4s", opacity: 0.05 }}
            />

            <div
              style={{
                position: "absolute",
                width: 650,
                height: 480,
                background:
                  "radial-gradient(ellipse,rgba(37,99,255,0.5) 0%,transparent 70%)",
                filter: "blur(100px)",
                animation: "glow-pulse 3.5s ease-in-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 500,
                height: 380,
                background:
                  "radial-gradient(ellipse,rgba(139,92,246,0.38) 0%,transparent 70%)",
                filter: "blur(85px)",
                animation: "glow-pulse 4s ease-in-out infinite 0.8s",
              }}
            />

            <img
              src={heroLogo}
              alt="RuVees Infinity"
              className="float-anim"
              style={{
                width: "clamp(600px,70vw,1000px)",
                objectFit: "contain",
                position: "relative",
                zIndex: 2,
                filter:
                  "drop-shadow(0 0 100px rgba(37,99,255,1)) drop-shadow(0 0 180px rgba(139,92,246,0.7)) brightness(1.3)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
