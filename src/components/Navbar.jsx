import { useContext, useEffect, useRef, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTerminal, FaXmark } from "react-icons/fa6";
import DarkModeContext from "../context/DarkModeContext";
import style from "./Navbar.module.css";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { isDark, setIsDark } = useContext(DarkModeContext);

  useEffect(() => {
    const updateNavigation = () => {
      const scrollY = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? Math.min((scrollY / scrollable) * 100, 100) : 0);

      const current = navItems.find(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return false;
        const bounds = section.getBoundingClientRect();
        return bounds.top <= 180 && bounds.bottom > 180;
      });
      setActiveSection(current?.id ?? "");

      if (!isMenuOpen) {
        setIsHidden(scrollY > 160 && scrollY > lastScrollY.current);
      }
      lastScrollY.current = scrollY;
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    return () => window.removeEventListener("scroll", updateNavigation);
  }, [isMenuOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`${style.navbar} ${isHidden ? style.hidden : ""}`} aria-label="Primary navigation">
      <div className={style.shell}>
        <a className={style.brand} href="#" aria-label="Raouf portfolio home" onClick={closeMenu}>
          <FaTerminal aria-hidden="true" />
          <span>RAOUF://PORTFOLIO</span>
          <i aria-hidden="true" />
        </a>

        <ul className={style.navLinks}>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>
                <span aria-hidden="true">./</span>{label.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>

        <div className={style.actions}>
          <button
            type="button"
            className={style.themeToggle}
            onClick={() => setIsDark((current) => !current)}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
          >
            <span>{isDark ? <FaSun /> : <FaMoon />}</span>
            <span className={style.themeLabel}>{isDark ? "LIGHT" : "DARK"}</span>
          </button>

          <button
            type="button"
            className={style.menuButton}
            onClick={() => {
              setIsMenuOpen((current) => !current);
              setIsHidden(false);
            }}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-command-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`${style.commandMenu} ${isMenuOpen ? style.commandMenuOpen : ""}`}
        id="mobile-command-menu"
        aria-hidden={!isMenuOpen}
      >
        <p><span>visitor@portfolio</span>:~$ navigate --to</p>
        <ul>
          {navItems.map(({ id, label }, index) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={closeMenu}
                aria-current={activeSection === id ? "location" : undefined}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span>0{index + 1}</span>
                <strong>./{label.toLowerCase()}</strong>
                <i aria-hidden="true">↗</i>
              </a>
            </li>
          ))}
        </ul>
        <small><i aria-hidden="true" /> System online · Select a destination</small>
      </div>

      <span className={style.progressTrack} aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      </span>
    </nav>
  );
}

export default Navbar;
