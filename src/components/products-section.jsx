const PRODUCT_COLUMNS = [
  {
    title: "For Users",
    icon: "👤",
    gradient: "linear-gradient(135deg,rgba(37,99,255,0.14),rgba(6,182,212,0.08))",
    border: "rgba(37,99,255,0.25)",
    points: [
      "Enjoy content without interruptions",
      "Earn rewards through engagement",
      "AI-curated personalized content",
    ],
  },
  {
    title: "For Businesses",
    icon: "🏢",
    gradient: "linear-gradient(135deg,rgba(139,92,246,0.14),rgba(37,99,255,0.08))",
    border: "rgba(139,92,246,0.25)",
    points: [
      "Promote products effectively",
      "Reach targeted audiences precisely",
      "Optimize ad spending with AI",
    ],
  },
];

export default function ProductsSection({ features }) {
  return (
    <section id="products" className="section-pad" style={{ position: "relative" }}>
      <div
        className="glow-orb"
        style={{
          width: 700,
          height: 700,
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle,rgba(139,92,246,0.09) 0%,transparent 70%)",
        }}
      />
      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-center">
          <div className="cyan-label">Our Product</div>
          <h2 className="section-title">
            <span className="shimmer-text">bSmart</span>
            <span style={{ color: "#F8FAFC" }}> - Smart Engagement Platform</span>
          </h2>
          <p
            style={{
              color: "#94A3B8",
              maxWidth: 560,
              margin: "16px auto 0",
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.75,
            }}
          >
            A next-generation platform designed to redefine digital interaction -
            for users and businesses alike.
          </p>
          <div className="sep sep-center" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 26,
            marginBottom: 26,
          }}
        >
          {PRODUCT_COLUMNS.map((column) => (
            <div
              key={column.title}
              className="card-hover bsmart-col"
              style={{ background: column.gradient, border: `1px solid ${column.border}` }}
            >
              <div style={{ fontSize: 38, marginBottom: 10 }}>{column.icon}</div>
              <h3
                style={{
                  fontFamily: "'Sora',sans-serif",
                  fontWeight: 700,
                  fontSize: 22,
                  marginBottom: 20,
                  color: "#F8FAFC",
                }}
              >
                {column.title}
              </h3>
              {column.points.map((point) => (
                <div
                  key={point}
                  style={{ display: "flex", alignItems: "flex-start", marginBottom: 13 }}
                >
                  <span className="bsmart-arrow">→</span>
                  <span
                    style={{
                      color: "#CBD5E1",
                      fontSize: 14,
                      lineHeight: 1.65,
                      fontWeight: 300,
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="grid-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card card-hover"
              style={{ padding: "30px 22px", textAlign: "center" }}
            >
              <div style={{ fontSize: 34, marginBottom: 12 }}>{feature.icon}</div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 14.5,
                  color: "#E2E8F0",
                  marginBottom: 7,
                }}
              >
                {feature.title}
              </div>
              <div
                style={{
                  color: "#64748B",
                  fontSize: 13,
                  fontWeight: 300,
                  lineHeight: 1.65,
                }}
              >
                {feature.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
