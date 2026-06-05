const ABOUT_VALUES = [
  ["Innovation First", "🚀"],
  ["Execution Over Ideas", "⚡"],
  ["User-Centric Design", "🎯"],
];

const ABOUT_CARDS = [
  {
    title: "Vision",
    desc: "To become a globally recognized leader in AI-powered platforms and advertising solutions.",
    icon: "🌍",
  },
  {
    title: "Mission",
    desc: "Design intelligent systems that simplify operations and create meaningful user experiences.",
    icon: "🎯",
  },
  {
    title: "Founded",
    desc: "Built on the belief that technology should anticipate tomorrow's challenges, not just solve today's.",
    icon: "💡",
  },
  {
    title: "Focus",
    desc: "AI-first solutions that improve efficiency, engagement, and scalability for businesses worldwide.",
    icon: "⚙️",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-pad" style={{ position: "relative" }}>
      <div
        className="glow-orb"
        style={{
          width: 450,
          height: 450,
          top: "15%",
          right: "-8%",
          opacity: 0.3,
          background: "radial-gradient(circle,rgba(139,92,246,0.22) 0%,transparent 70%)",
        }}
      />
      <div className="section-inner">
        <div className="grid-2">
          <div>
            <div className="cyan-label">Our Story</div>
            <h2 className="section-title" style={{ marginBottom: 6 }}>
              <span className="gradient-text">Ideas are common.</span>
              <br />
              <span style={{ color: "#F8FAFC" }}>Execution is everything.</span>
            </h2>
            <div className="sep" style={{ marginBottom: 28 }} />
            <p
              style={{
                color: "#94A3B8",
                lineHeight: 1.9,
                marginBottom: 16,
                fontWeight: 300,
                fontSize: 15,
              }}
            >
              My entrepreneurial journey didn&apos;t start with success - it started with
              failure. Before founding RuVees, I co-ran a mineral water business that
              collapsed during COVID-19. That taught me: stability can be temporary,
              but learning is permanent.
            </p>
            <p
              style={{
                color: "#94A3B8",
                lineHeight: 1.9,
                marginBottom: 36,
                fontWeight: 300,
                fontSize: 15,
              }}
            >
              From a short-video platform concept in 2016 to an instant delivery
              model, I envisioned multiple products ahead of their time. Today, with
              stronger experience and clarity, I&apos;ve taken the first step - launching
              RuVees IT Solutions.
            </p>
            <div style={{ display: "flex", gap: 36 }}>
              {ABOUT_VALUES.map(([value, icon]) => (
                <div
                  key={value}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ fontSize: 26 }}>{icon}</span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "#64748B",
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {ABOUT_CARDS.map((item) => (
              <div key={item.title} className="glass-card card-hover" style={{ padding: "26px 22px" }}>
                <div style={{ fontSize: 30, marginBottom: 10 }}>{item.icon}</div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    marginBottom: 7,
                    color: "#E2E8F0",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    color: "#64748B",
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
