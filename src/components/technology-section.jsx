export default function TechnologySection({ techStack }) {
  return (
    <section id="technology" className="section-pad" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg,transparent,rgba(6,182,212,0.025) 50%,transparent)",
          pointerEvents: "none",
        }}
      />
      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-center">
          <div className="cyan-label">Technology Stack</div>
          <h2 className="section-title">
            Built on <span className="gradient-text">Modern Tech</span>
          </h2>
          <p
            style={{
              color: "#94A3B8",
              fontSize: 15,
              fontWeight: 300,
              maxWidth: 480,
              margin: "12px auto 0",
            }}
          >
            Building scalable, intelligent, and adaptive platforms for the future.
          </p>
          <div className="sep sep-center" />
        </div>

        <div className="grid-4" style={{ marginBottom: 36 }}>
          {techStack.map((item, index) => (
            <div
              key={index}
              className="glass-card card-hover"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "44px 24px",
                border: "1px solid rgba(37,99,255,0.15)",
              }}
            >
              <div style={{ fontSize: 46, marginBottom: 18 }}>{item.icon}</div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 15.5,
                  color: "#E2E8F0",
                  marginBottom: 10,
                }}
              >
                {item.name}
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  color: "#475569",
                  fontWeight: 300,
                  lineHeight: 1.65,
                }}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        <div
          className="glass-card"
          style={{
            padding: "32px 44px",
            textAlign: "center",
            border: "1px solid rgba(37,99,255,0.15)",
          }}
        >
          <div
            style={{
              color: "#475569",
              fontSize: 11.5,
              marginBottom: 10,
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Core Philosophy
          </div>
          <div
            style={{
              fontFamily: "'Sora',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(20px,2.5vw,28px)",
              background: "linear-gradient(135deg,#2563FF,#8B5CF6,#06B6D4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Scalable · Intelligent · Adaptive
          </div>
        </div>
      </div>
    </section>
  );
}
