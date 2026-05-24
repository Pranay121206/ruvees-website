export default function ServicesSection({ services }) {
  return (
    <section id="services" className="section-pad" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg,transparent 0%,rgba(37,99,255,0.03) 50%,transparent 100%)",
          pointerEvents: "none",
        }}
      />
      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-center">
          <div className="cyan-label">What We Do</div>
          <h2 className="section-title">
            Services Built for the <span className="gradient-text">Future</span>
          </h2>
          <div className="sep sep-center" />
        </div>

        <div className="grid-4">
          {services.map((service, index) => {
            const rgb =
              service.color === "#2563FF"
                ? "37,99,255"
                : service.color === "#8B5CF6"
                  ? "139,92,246"
                  : service.color === "#06B6D4"
                    ? "6,182,212"
                    : "16,185,129";

            return (
              <div
                key={index}
                className="glass-card card-hover"
                style={{ padding: "36px 26px", position: "relative", overflow: "hidden" }}
              >
                <div
                  className="svc-bar"
                  style={{ background: `linear-gradient(90deg,${service.color},#06B6D4)` }}
                />
                <div
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 16,
                    background: `rgba(${rgb},0.1)`,
                    border: `1px solid ${service.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                    marginBottom: 20,
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: 17,
                    marginBottom: 10,
                    color: "#E2E8F0",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#64748B",
                    fontSize: 13.5,
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}
                >
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
