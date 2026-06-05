export default function Navbar({
  mainLogo,
  navLinks,
  activeNav,
  scrolled,
  menuOpen,
  onToggleMenu,
  onScrollTo,
}) {
  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-shell">
          <button className="nav-logo" onClick={() => onScrollTo("Home")}>
            <span className="nav-logo-mark">
              <img
                src={mainLogo}
                alt="RuVees"
                className="nav-logo-image"
              />
            </span>
          </button>

          <div className="nav-links">
            {navLinks.map((link) => (
              <button
                key={link}
                className={`nav-btn ${activeNav === link ? "active" : ""}`}
                onClick={() => onScrollTo(link)}
              >
                {link}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="btn-primary nav-cta-desktop nav-main-cta"
              onClick={() => onScrollTo("Contact")}
            >
              Get Started
            </button>

            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={onToggleMenu}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-panel">
          <div className="mobile-menu-top">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div className="mobile-menu-label">Navigation</div>
              <button
                onClick={onToggleMenu}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  width: "36px",
                  height: "36px",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "18px"
                }}
              >
                ✕
              </button>
            </div>
            <div className="mobile-menu-text">Explore every section of the website</div>
          </div>

          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <button key={link} onClick={() => onScrollTo(link)}>
                <span>{link}</span>
                <span className="mobile-link-arrow">+</span>
              </button>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <button
              className="btn-primary mobile-menu-cta"
              onClick={() => onScrollTo("Contact")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
