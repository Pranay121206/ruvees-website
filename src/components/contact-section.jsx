export default function ContactSection({ contactItems }) {
  return (
    <section id="contact" className="section-pad" style={{ position: "relative" }}>
      <div
        className="glow-orb"
        style={{
          width: 800,
          height: 400,
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.22,
          background: "radial-gradient(ellipse,rgba(37,99,255,0.3) 0%,transparent 70%)",
        }}
      />
      <div className="section-inner" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div className="cyan-label">Contact Us</div>
        <h2 className="section-title" style={{ marginBottom: 16 }}>
          Let&apos;s Build the <span className="shimmer-text">Future Together.</span>
        </h2>
        <p
          style={{
            color: "#94A3B8",
            fontSize: 16,
            marginBottom: 52,
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          Have a project in mind or want to learn more? Reach out and let&apos;s create
          something extraordinary.
        </p>

        <div className="contact-grid">
          {contactItems.map((item, index) => (
            <div key={index} className="contact-card">
              <div
                style={{
                  position: "absolute",
                  bottom: -24,
                  right: -24,
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: "rgba(37,99,255,0.04)",
                  filter: "blur(20px)",
                }}
              />
              <div className="contact-icon-wrap">{item.icon}</div>
              <div
                style={{
                  fontSize: 10,
                  color: "#475569",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1.8px",
                  marginBottom: 6,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: 14.5,
                  color: "#E2E8F0",
                  fontWeight: 600,
                  marginBottom: 5,
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#475569",
                  fontWeight: 300,
                  lineHeight: 1.5,
                }}
              >
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-cta-row">
          <div className="contact-cta-left">
            <strong>Ready to get started?</strong>
            Drop us a message and our team will connect with you shortly.
          </div>
          <button
            className="btn-primary"
            style={{ fontSize: 15, padding: "15px 40px", flexShrink: 0 }}
          >
            Get In Touch →
          </button>
        </div>
      </div>
    </section>
  );
}
