import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "../../lib/site";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // تعديل بناء الكلاس البرمجي للهيدر لضمان السلاسة مع الأنيميشن المفتوح
  const headerClass = [
    styles.header,
    scrolled || open ? styles.headerScrolled : styles.headerTransparent,
  ].join(" ");

  return (
    <header className={headerClass}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          <img src={logo} alt="logo" className={styles.logo} />
          <span className={styles.brandName}>{SITE.logo}</span>
        </Link>

        {/* روابط الديسكتوب مع التحقق الذكي من المسار الحالي للرابط النشط */}
        <nav className={styles.desktopNav}>
          {NAV.map((n) => {
            const isActive = location.pathname === n.to;
            return (
              <Link 
                key={n.to} 
                to={n.to} 
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <button className={styles.langBtn}>
            <Languages size={16} />
            <span>EN</span>
          </button>

          <Link to="/contact" className={styles.ctaBtn}>
            Book Consultation
          </Link>

          <button
            className={styles.menuBtn}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* منيو استجابة الهواتف المحمولة الفاخر */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className={styles.mobileNav}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className={styles.mobileInner}>
              {NAV.map((n) => {
                const isActive = location.pathname === n.to;
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ""}`}
                  >
                    {n.label}
                  </Link>
                );
              })}

              <Link to="/contact" className={styles.mobileCtaBtn}>
                Book Consultation
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;