const FOOTER_LINKS = [
  "About",
  "Services",
  "Products",
  "Technology",
  "Vision",
  "Contact",
];

const FOOTER_BADGES = ["AI-Powered", "Made in India", "Privacy First"];

export default function Footer({ mainLogo, onScrollTo }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="nav-logo-mark" style={{ width: 48, height: 48, borderRadius: 14 }}>
            <img
              src={mainLogo}
              alt="RuVees"
              style={{
                height: 28,
                objectFit: "contain",
                filter: "drop-shadow(0 0 8px rgba(37,99,255,0.7))",
              }}
            />
          </div>
          <div style={{ marginLeft: 16 }}>
            <span style={{ fontSize: 13, color: "#64748B", fontWeight: 500 }}>
              © {new Date().getFullYear()} RuVees IT Solutions.
            </span>
          </div>
        </div>

        <div className="footer-center">
          {FOOTER_LINKS.map((link) => (
            <button
              key={link}
              className="footer-link"
              onClick={() => onScrollTo(link)}
            >
              {link}
            </button>
          ))}
        </div>

        <div className="footer-right">
          {FOOTER_BADGES.map((badge) => (
            <div key={badge} className="footer-badge">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
