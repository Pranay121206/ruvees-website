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

      <div
        className="glow-orb"
        style={{
          width: 700,
          height: 700,
          top: "-10%",
          left: "-12%",
          background: "radial-gradient(circle,rgba(37,99,255,0.2) 0%,transparent 70%)",
          animation: "glow-pulse 5s ease-in-out infinite",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 550,
          height: 550,
          bottom: "0%",
          right: "-8%",
          background: "radial-gradient(circle,rgba(139,92,246,0.17) 0%,transparent 70%)",
          animation: "glow-pulse 6s ease-in-out infinite 1.2s",
        }}
      />

      <div className="hero-inner" style={{ paddingBottom: 60, paddingTop: 20 }}>
        <div className="hero-text-side slide-left">
          <div className="pill slide-up">AI-Powered Platform</div>
          <h1
            className="slide-up-1"
            style={{
              fontFamily: "'Sora',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(42px,6.2vw,84px)",
              lineHeight: 1.02,
              marginBottom: 26,
              letterSpacing: "-2.5px",
            }}
          >
            <span style={{ color: "#F8FAFC" }}>Smart Advertising.</span>
            <br />
            <span className="shimmer-text">Real Rewards.</span>
          </h1>
          <p
            className="slide-up-2"
            style={{
              fontSize: "clamp(15px,1.8vw,18.5px)",
              color: "#94A3B8",
              maxWidth: 580,
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: 42,
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
              style={{ width: 480, height: 480, animationDelay: "0s" }}
            />
            <div
              className="hero-logo-ring"
              style={{ width: 590, height: 590, animationDelay: ".7s", opacity: 0.1 }}
            />
            <div
              className="hero-logo-ring"
              style={{ width: 700, height: 700, animationDelay: "1.4s", opacity: 0.05 }}
            />

            <div
              style={{
                position: "absolute",
                width: 380,
                height: 280,
                background:
                  "radial-gradient(ellipse,rgba(37,99,255,0.42) 0%,transparent 70%)",
                filter: "blur(55px)",
                animation: "glow-pulse 3.5s ease-in-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 260,
                height: 200,
                background:
                  "radial-gradient(ellipse,rgba(139,92,246,0.28) 0%,transparent 70%)",
                filter: "blur(45px)",
                animation: "glow-pulse 4s ease-in-out infinite 0.8s",
              }}
            />

            <img
              src={heroLogo}
              alt="RuVees Infinity"
              className="float-anim"
              style={{
                width: "clamp(400px,52vw,680px)",
                objectFit: "contain",
                position: "relative",
                zIndex: 2,
                filter:
                  "drop-shadow(0 0 60px rgba(37,99,255,0.9)) drop-shadow(0 0 120px rgba(139,92,246,0.6)) brightness(1.2)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
