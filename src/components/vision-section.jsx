export default function VisionSection({ visionItems }) {
  return (
    <section id="vision" className="section-pad" style={{ position: "relative" }}>
      <div
        className="glow-orb"
        style={{
          width: 550,
          height: 550,
          top: 0,
          left: "-8%",
          opacity: 0.28,
          background: "radial-gradient(circle,rgba(139,92,246,0.22) 0%,transparent 70%)",
        }}
      />
      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-center">
          <div className="cyan-label">Future Vision</div>
          <h2 className="section-title">
            The Road <span className="gradient-text">Ahead</span>
          </h2>
          <div className="sep sep-center" />
        </div>

        <div className="grid-4">
          {visionItems.map((item, index) => (
            <div
              key={index}
              className="glass-card card-hover"
              style={{ padding: "36px 26px", position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: -24,
                  right: -24,
                  width: 110,
                  height: 110,
                  borderRadius: "50%",
                  background: "rgba(37,99,255,0.04)",
                  filter: "blur(20px)",
                }}
              />
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 15,
                  background: "linear-gradient(135deg,rgba(37,99,255,0.18),rgba(6,182,212,0.09))",
                  border: "1px solid rgba(37,99,255,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 25,
                  marginBottom: 20,
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: 15.5,
                  color: "#E2E8F0",
                  marginBottom: 10,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "#64748B",
                  fontSize: 13.5,
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
