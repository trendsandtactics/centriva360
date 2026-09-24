import { useEffect, useState } from 'react';
import { Link } from "react-router";
import Nav from './Nav';

export default function Header3({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  // In initial header (before scroll), show whitebg.png
  // When scrolled down (white sticky background), show blackbg.png
  const isInitial = !hasScrolled;
  const logoSrc = isInitial ? '/whitebg.png' : '/blackbg.png';
  const textColor = isInitial ? '#ffffff' : '#0F172A';
  const bgColor = hasScrolled ? '#ffffff' : 'transparent';

  const headerStyle = {
    color: textColor,
    backgroundColor: bgColor,
    transition: 'background-color 0.35s ease, color 0.35s ease, box-shadow 0.35s ease',
  };

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 120) {
        setIsSticky('cs-gescout_sticky');
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky');
      } else {
        setIsSticky('');
      }

      setPrevScrollPos(currentScrollPos);
      setHasScrolled(currentScrollPos > 50);
    };

    setHasScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileToggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileToggle]);

  // Close mobile drawer on desktop resize or on Escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && mobileToggle) {
        setMobileToggle(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileToggle) {
        setMobileToggle(false);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileToggle]);

  return (
    <div>
      <style>{`
        /* ============================================================
           NEXORA360 FULLY RESPONSIVE HEADER STYLES
           ============================================================ */
        :root {
          --header-text-color: ${textColor};
        }

        header.cs_site_header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: background-color 0.35s ease, box-shadow 0.35s ease;
        }

        header.cs_site_header.scrolled {
          position: fixed !important;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #ffffff !important;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
          border-bottom: 1px solid rgba(220, 38, 38, 0.1);
        }

        .cs_site_header .container,
        .cs_site_header .container-fluid {
          padding-left: clamp(14px, 3vw, 36px) !important;
          padding-right: clamp(14px, 3vw, 36px) !important;
          max-width: 100% !important;
        }

        .cs_site_header .cs_main_header_in {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          min-height: 114px;
          height: 114px;
          padding: 6px 0;
          transition: height 0.3s ease, min-height 0.3s ease;
        }

        header.cs_site_header.scrolled .cs_main_header_in {
          min-height: 96px;
          height: 96px;
        }

        /* Branding Logo */
        .cs_main_header_left {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .cs_main_header_left .cs_site_branding {
          display: inline-flex;
          align-items: center;
          line-height: 0;
          padding: 0;
          text-decoration: none;
        }

        .cs_site_branding img,
        .cs_site_branding:hover img,
        header.cs_site_header.scrolled .cs_site_branding img,
        .cs-gescout_sticky .cs_site_branding img {
          height: clamp(82px, 6.5vw, 100px) !important;
          width: auto !important;
          max-width: clamp(240px, 24vw, 360px) !important;
          display: block;
          object-fit: contain;
          transform: none !important;
          transition: none !important;
        }

        header.cs_site_header.scrolled .cs_site_branding img {
          height: clamp(74px, 5.5vw, 86px) !important;
          max-width: clamp(220px, 20vw, 310px) !important;
        }

        /* Desktop Navigation Container */
        .nexora-desktop-nav-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          margin: 0 20px;
        }

        .nexora-desktop-nav .cs_nav_list {
          gap: clamp(14px, 1.8vw, 28px) !important;
        }

        /* Right Actions Area */
        .cs_site_header .cs_main_header_right {
          display: flex !important;
          align-items: center !important;
          gap: 14px !important;
          padding-right: 0 !important;
          flex-shrink: 0;
        }

        /* Hide legacy toggle */
        .cs-munu_toggle {
          display: none !important;
        }

        /* Header CTA Button */
        .nexora-header-btn {
          background: linear-gradient(135deg, #DC2626 0%, #FF5722 50%, #F97316 100%) !important;
          color: #ffffff !important;
          padding: 11px 24px !important;
          min-width: auto !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          box-shadow: 0 4px 14px rgba(220, 38, 38, 0.3) !important;
          border-radius: 9999px !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
          text-decoration: none !important;
          transition: all 0.3s ease !important;
          white-space: nowrap !important;
        }

        .nexora-header-btn:hover {
          background: linear-gradient(135deg, #B91C1C 0%, #EA580C 100%) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.45) !important;
          color: #ffffff !important;
        }

        /* Mobile Hamburger Toggle Button */
        .nexora-menu-toggle {
          background: transparent;
          border: none;
          padding: 8px;
          cursor: pointer;
          display: none;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          transition: background-color 0.2s ease;
          position: relative;
        }

        .nexora-menu-toggle:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        header.cs_site_header.scrolled .nexora-menu-toggle:hover {
          background: rgba(15, 23, 42, 0.06);
        }

        .nexora-hamburger-box {
          width: 26px;
          height: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .nexora-hamburger-line {
          display: block;
          width: 100%;
          height: 2.5px;
          background-color: ${textColor};
          border-radius: 4px;
          transition: transform 0.28s ease, opacity 0.2s ease, background-color 0.28s ease;
        }

        .nexora-menu-toggle.active .line-1 {
          transform: translateY(7.75px) rotate(45deg);
        }

        .nexora-menu-toggle.active .line-2 {
          opacity: 0;
          transform: scaleX(0);
        }

        .nexora-menu-toggle.active .line-3 {
          transform: translateY(-7.75px) rotate(-45deg);
        }

        /* ============================================================
           MOBILE & TABLET SLIDE-IN NAVIGATION DRAWER
           ============================================================ */
        .nexora-mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: min(340px, 86vw);
          height: 100vh;
          height: 100dvh;
          background: #ffffff;
          z-index: 1050;
          box-shadow: -10px 0 35px rgba(0, 0, 0, 0.22);
          display: flex;
          flex-direction: column;
          transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .nexora-mobile-drawer.open {
          right: 0;
        }

        .nexora-mobile-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(11, 15, 23, 0.65);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 1040;
          animation: drawerFadeIn 0.25s ease-out;
        }

        @keyframes drawerFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .nexora-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 22px;
          border-bottom: 1px solid #F1F5F9;
          background: #FAFAFA;
        }

        .nexora-drawer-header .cs_site_branding img {
          height: 48px !important;
          width: auto !important;
          max-width: 190px !important;
        }

        .nexora-drawer-close {
          background: transparent;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0F172A;
          font-size: 19px;
          cursor: pointer;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .nexora-drawer-close:hover {
          background: #FEE2E2;
          color: #DC2626;
        }

        .nexora-drawer-body {
          flex: 1 1 auto;
          padding: 20px 18px;
          overflow-y: auto;
        }

        .nexora-mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .nexora-mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 16px;
          border-radius: 10px;
          color: #1E293B;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          background: transparent;
        }

        .nexora-mobile-nav-link:hover {
          background: #FFF7ED;
          color: #DC2626;
          padding-left: 20px;
        }

        .nexora-mobile-nav-link.active {
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(249, 115, 22, 0.12) 100%);
          color: #DC2626;
          font-weight: 700;
          border-left: 3px solid #DC2626;
        }

        .mobile-nav-arrow {
          font-size: 13px;
          color: #94A3B8;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .nexora-mobile-nav-link:hover .mobile-nav-arrow,
        .nexora-mobile-nav-link.active .mobile-nav-arrow {
          color: #DC2626;
          transform: translateX(3px);
        }

        .nexora-drawer-footer {
          padding: 20px 18px 28px;
          border-top: 1px solid #F1F5F9;
          background: #FAFAFA;
        }

        /* ============================================================
           DEVICE BREAKPOINT QUERIES
           ============================================================ */
        /* Desktop Screens (>= 992px) */
        @media (min-width: 992px) {
          .nexora-desktop-nav-wrap {
            display: flex !important;
          }
          .nexora-menu-toggle {
            display: none !important;
          }
        }

        /* Small Laptops (992px - 1199px) */
        @media (min-width: 992px) and (max-width: 1199px) {
          .cs_site_header .cs_main_header_in {
            min-height: 100px;
            height: 100px;
          }
          header.cs_site_header.scrolled .cs_main_header_in {
            min-height: 88px;
            height: 88px;
          }
          .cs_site_branding img,
          .cs_site_branding:hover img,
          header.cs_site_header.scrolled .cs_site_branding img,
          .cs-gescout_sticky .cs_site_branding img {
            height: 80px !important;
            max-width: 270px !important;
          }
          .nexora-header-btn {
            padding: 9px 18px !important;
            font-size: 13px !important;
          }
        }

        /* Tablets & Mobile Screens (<= 991px) */
        @media (max-width: 991px) {
          .nexora-desktop-nav-wrap {
            display: none !important;
          }
          .nexora-menu-toggle {
            display: flex !important;
          }
          .cs_site_header .cs_main_header_in,
          header.cs_site_header.scrolled .cs_main_header_in,
          .cs-gescout_sticky .cs_main_header_in {
            min-height: 88px !important;
            height: 88px !important;
            padding: 4px 0 !important;
          }
          .cs_site_branding img,
          .cs_site_branding:hover img,
          header.cs_site_header.scrolled .cs_site_branding img,
          .cs-gescout_sticky .cs_site_branding img {
            height: clamp(62px, 8vw, 76px) !important;
            max-width: clamp(210px, 32vw, 260px) !important;
          }
          .nexora-header-btn {
            padding: 8px 16px !important;
            font-size: 12.5px !important;
          }
        }

        /* Tablets (768px - 991px) */
        @media (min-width: 768px) and (max-width: 991px) {
          .nexora-header-cta-wrap {
            display: block !important;
          }
        }

        /* Large Mobile (576px - 767px) */
        @media (min-width: 576px) and (max-width: 767px) {
          .cs_site_header .cs_main_header_in,
          header.cs_site_header.scrolled .cs_main_header_in,
          .cs-gescout_sticky .cs_main_header_in {
            min-height: 80px !important;
            height: 80px !important;
          }
          .cs_site_branding img,
          .cs_site_branding:hover img,
          header.cs_site_header.scrolled .cs_site_branding img,
          .cs-gescout_sticky .cs_site_branding img {
            height: 58px !important;
            max-width: 215px !important;
          }
          .nexora-header-btn {
            padding: 7px 14px !important;
            font-size: 12px !important;
          }
        }

        /* Small Mobile (< 576px, down to 320px) */
        @media (max-width: 575px) {
          .cs_site_header .cs_main_header_in,
          header.cs_site_header.scrolled .cs_main_header_in,
          .cs-gescout_sticky .cs_main_header_in {
            min-height: 72px !important;
            height: 72px !important;
            padding: 2px 0 !important;
          }
          .cs_site_branding img,
          .cs_site_branding:hover img,
          header.cs_site_header.scrolled .cs_site_branding img,
          .cs-gescout_sticky .cs_site_branding img {
            height: clamp(44px, 11vw, 52px) !important;
            max-width: clamp(155px, 50vw, 195px) !important;
          }
          /* On small phones, hide CTA in header to prevent crowding; CTA is prominent in the drawer */
          .nexora-header-cta-wrap {
            display: none !important;
          }
          .nexora-menu-toggle {
            width: 40px;
            height: 40px;
          }
        }

        /* Extra Small Devices (< 360px) */
        @media (max-width: 360px) {
          .cs_site_branding img,
          .cs_site_branding:hover img,
          header.cs_site_header.scrolled .cs_site_branding img,
          .cs-gescout_sticky .cs_site_branding img {
            height: 40px !important;
            max-width: 150px !important;
          }
        }
      `}</style>

      <header
        style={headerStyle}
        className={`cs_site_header header_style_2 header_style_2_2 cs_style_1 header_sticky_style1 
          ${variant || ''} 
          cs_sticky_header cs_site_header_full_width 
          ${isSticky || ''} 
          ${hasScrolled ? 'scrolled' : ''}`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              
              {/* Left: Centriva360 Logo */}
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/" aria-label="Centriva360 Home">
                  <img src={logoSrc} alt="Centriva360 Global Solutions" />
                </Link>
              </div>

              {/* Center: Desktop Navigation Links (>= 992px) */}
              <div className="nexora-desktop-nav-wrap">
                <nav className="nexora-desktop-nav" aria-label="Main Navigation">
                  <Nav linkColor={textColor} />
                </nav>
              </div>

              {/* Right: CTA Button & Mobile Menu Toggle */}
              <div className="cs_main_header_right">
                {/* CTA Button */}
                <div className="nexora-header-cta-wrap">
                  <Link 
                    to="/contact" 
                    className="theme-btn nexora-header-btn"
                  >
                    <span>
                      Get in touch <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>

                {/* Mobile / Tablet Hamburger Toggle (<= 991px) */}
                <button
                  type="button"
                  className={`nexora-menu-toggle ${mobileToggle ? 'active' : ''}`}
                  onClick={() => setMobileToggle(!mobileToggle)}
                  aria-label={mobileToggle ? "Close menu" : "Open menu"}
                  aria-expanded={mobileToggle}
                >
                  <span className="nexora-hamburger-box">
                    <span className="nexora-hamburger-line line-1"></span>
                    <span className="nexora-hamburger-line line-2"></span>
                    <span className="nexora-hamburger-line line-3"></span>
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Slide-in Navigation Drawer (<= 991px) */}
      <div 
        className={`nexora-mobile-drawer ${mobileToggle ? 'open' : ''}`} 
        aria-hidden={!mobileToggle}
      >
        {/* Drawer Header with Logo & Close Button */}
        <div className="nexora-drawer-header">
          <Link 
            className="cs_site_branding" 
            to="/" 
            onClick={() => setMobileToggle(false)}
            aria-label="Centriva360 Home"
          >
            <img src="/blackbg.png" alt="Centriva360 Global Solutions" />
          </Link>
          <button
            type="button"
            className="nexora-drawer-close"
            onClick={() => setMobileToggle(false)}
            aria-label="Close navigation menu"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="nexora-drawer-body">
          <Nav isMobile setMobileToggle={setMobileToggle} />
        </div>

        {/* Drawer Footer with CTA */}
        <div className="nexora-drawer-footer">
          <Link 
            to="/contact" 
            className="theme-btn nexora-header-btn w-100 justify-content-center"
            onClick={() => setMobileToggle(false)}
          >
            <span>
              Get in touch <i className="bi bi-arrow-right ms-1"></i>
            </span>
          </Link>
          <div className="mt-3 text-center">
            <span className="text-muted" style={{ fontSize: '12px', fontWeight: 600 }}>
              Centriva360 Global Solutions
            </span>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for mobile drawer */}
      {mobileToggle && (
        <div 
          className="nexora-mobile-backdrop" 
          onClick={() => setMobileToggle(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
