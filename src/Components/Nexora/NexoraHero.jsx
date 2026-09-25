import React, { useEffect, useState } from 'react';
import Header3 from '../Header/Header3';
import { getHomeHero } from '../../utils/homeHeroData';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, ChevronRight, Layers, Globe2, Cpu, Users2 } from 'lucide-react';
import { Link } from 'react-router';

const BRAND_LOGOS = [
  { name: 'OECL', src: '/brand-logos/oecl.svg' },
  { name: 'Super Energy', src: '/brand-logos/superenergy.svg' },
  { name: 'GGL', src: '/brand-logos/ggl.svg' },
  { name: 'One Global Logistics', src: '/brand-logos/one-global-logistics.svg' },
  { name: 'Global Consol', src: '/brand-logos/global-consol.svg' },
  { name: 'Hai Xun', src: '/brand-logos/hai-xun.svg' },
  { name: 'Moltech Gen', src: '/brand-logos/moltechgen.svg' },
  { name: 'Moltech', src: '/brand-logos/moltech.svg' },
  { name: 'CityGN', src: '/brand-logos/citygn.svg' },
];

const HERO_FEATURE_CARDS = [
  {
    image: '/aboutbg.png',
    icon: Globe2,
    badge: '13 CAPABILITIES',
    title: 'Global Capability Centres',
    desc: 'Turnkey offshore & nearshore hubs engineered to scale.'
  },
  {
    image: '/software.png',
    icon: Cpu,
    badge: 'AI & AUTOMATION',
    title: 'Intelligent Workflows',
    desc: 'Cutting-edge RPA and automated business process suites.'
  },
  {
    image: '/ourteam.png',
    icon: Users2,
    badge: 'TALENT & BPO',
    title: 'Dedicated Enterprise Teams',
    desc: 'Specialized global talent across front and back office.'
  },
  {
    image: '/Productdistribution.jpg',
    icon: Layers,
    badge: 'INTEGRATED 360°',
    title: 'Unified Accountability',
    desc: 'One SLA, one operating model, and zero vendor friction.'
  }
];

const NexoraHero = () => {
  const [videoSrc, setVideoSrc] = useState('/hero.mp4');

  useEffect(() => {
    let isMounted = true;
    getHomeHero().then((data) => {
      if (isMounted && data && data.video_src) {
        setVideoSrc(data.video_src);
      }
    }).catch(() => {});
    return () => {
      isMounted = false;
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section position-relative" id="hero">
      <Header3 variant="header-transparent" />

      <div className="hero-video-banner">
        {/* Background Video Layer */}
        <div className="video-background-wrap" aria-hidden="true">
          <video
            key={videoSrc}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero-bg-video"
            aria-label="Nexora360 Hero Video Banner"
          >
            <source src={videoSrc} type="video/mp4" />
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Cinematic Gradient Overlays */}
        <div className="hero-overlay-gradient" aria-hidden="true" />

        {/* Foreground Content */}
        <div className="hero-content-layer">
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-xl-10 col-lg-11">
                {/* Pill Badge */}
                <div className="hero-badge-wrap mb-3 animate-fade-in">
                  <span className="hero-badge">
                    <Sparkles size={14} className="hero-badge-icon" />
                    <span>360° GLOBAL BUSINESS SERVICES &amp; CAPABILITY PARTNER</span>
                  </span>
                </div>

                {/* Hero Headline */}
                <h1 className="hero-title animate-fade-in-up">
                  Empowering Global Enterprises With{' '}
                  <span className="text-gradient-hero">360° Capability Solutions</span>
                </h1>

                {/* Hero Subtitle */}
                <p className="hero-subtitle animate-fade-in-up-delay">
                  From enterprise Global Capability Centres (GCC) and intelligent automation to specialized BPO,
                  customer experience, IT, finance, and HR. We engineer, operate, and scale business operations for the future.
                </p>

                {/* CTA Action Buttons */}
                <div className="hero-actions d-flex align-items-center justify-content-center gap-3 flex-wrap animate-fade-in-up-delay-2">
                  <button
                    type="button"
                    onClick={() => scrollToSection('capabilities')}
                    className="btn-hero-primary"
                  >
                    <span>Explore 13 Capabilities</span>
                    <ArrowRight size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    className="btn-hero-secondary"
                  >
                    <span>Start a Conversation</span>
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* Trust Metrics Bar */}
                <div className="hero-trust-strip d-flex align-items-center justify-content-center gap-4 flex-wrap mt-4">
                  <div className="hero-trust-item">
                    <CheckCircle2 size={16} className="text-danger me-2" />
                    <span>13 Core Capability Verticals</span>
                  </div>
                  <div className="hero-trust-item">
                    <CheckCircle2 size={16} className="text-danger me-2" />
                    <span>Turnkey Build-Operate-Transfer (BOT)</span>
                  </div>
                  <div className="hero-trust-item">
                    <CheckCircle2 size={16} className="text-danger me-2" />
                    <span>Single SLA &amp; Unified Ecosystem</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Feature Visual Cards Over Hero */}
            <div className="row g-3 mt-4 mt-lg-5 justify-content-center hero-cards-row">
              {HERO_FEATURE_CARDS.map((card, idx) => {
                const CardIcon = card.icon;
                return (
                  <div key={idx} className="col-xl-3 col-lg-6 col-md-6">
                    <div 
                      className="hero-feature-card" 
                      onClick={() => scrollToSection('capabilities')}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="hero-card-img-wrap">
                        <img src={card.image} alt={card.title} className="hero-card-img" />
                        <span className="hero-card-badge">{card.badge}</span>
                      </div>
                      <div className="hero-card-body">
                        <div className="d-flex align-items-center gap-2 mb-1">
                          <CardIcon size={16} className="text-danger flex-shrink-0" />
                          <h4 className="hero-card-title mb-0">{card.title}</h4>
                        </div>
                        <p className="hero-card-desc mb-0">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Brand Partner Logo Strip */}
      <div className="hero-brand-strip">
        <div className="container">
          <p className="brand-strip-title">TRUSTED ECOSYSTEM CAPABILITY &amp; ENTERPRISE PARTNERS</p>
          <div className="brand-logos-marquee">
            <div className="brand-logos-track">
              {BRAND_LOGOS.concat(BRAND_LOGOS).map((brand, i) => (
                <div key={i} className="brand-logo-item">
                  <img src={brand.src} alt={brand.name} className="brand-logo-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          background: #0B0F17;
          overflow: hidden;
          width: 100%;
        }

        .hero-video-banner {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: #0B0F17;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 130px 0 60px;
        }

        .video-background-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .hero-bg-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .hero-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(11, 15, 23, 0.88) 0%,
            rgba(11, 15, 23, 0.72) 40%,
            rgba(11, 15, 23, 0.85) 80%,
            #0B0F17 100%
          );
          z-index: 1;
        }

        .hero-content-layer {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-badge-wrap {
          display: inline-block;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(220, 38, 38, 0.18);
          border: 1px solid rgba(220, 38, 38, 0.45);
          color: #FF7043;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          padding: 7px 18px;
          border-radius: 9999px;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 16px rgba(220, 38, 38, 0.2);
        }

        .hero-badge-icon {
          color: #F97316;
        }

        .hero-title {
          font-size: clamp(2.1rem, 4.8vw, 3.8rem);
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.18;
          letter-spacing: -0.5px;
          margin-bottom: 20px;
        }

        .text-gradient-hero {
          background: linear-gradient(135deg, #FF6B4A 0%, #FF5722 45%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .hero-subtitle {
          color: #CBD5E1;
          font-size: clamp(1.05rem, 1.35vw, 1.25rem);
          line-height: 1.7;
          max-width: 860px;
          margin: 0 auto 32px;
          font-weight: 400;
        }

        .btn-hero-primary {
          background: linear-gradient(135deg, #DC2626 0%, #FF5722 50%, #F97316 100%);
          color: #FFFFFF;
          border: none;
          padding: 14px 32px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 6px 24px rgba(220, 38, 38, 0.45);
        }

        .btn-hero-primary:hover {
          background: linear-gradient(135deg, #B91C1C 0%, #EA580C 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.6);
          color: #FFFFFF;
        }

        .btn-hero-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 14px 28px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .btn-hero-secondary:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #FF5722;
          color: #FF7043;
          transform: translateY(-2px);
        }

        .hero-trust-strip {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 24px;
        }

        .hero-trust-item {
          display: inline-flex;
          align-items: center;
          color: #E2E8F0;
          font-size: 13.5px;
          font-weight: 600;
        }

        /* 4 Feature Visual Cards */
        .hero-cards-row {
          margin-top: 36px;
        }

        .hero-feature-card {
          background: rgba(17, 24, 39, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          overflow: hidden;
          backdrop-filter: blur(12px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .hero-feature-card:hover {
          transform: translateY(-6px);
          border-color: #FF5722;
          box-shadow: 0 16px 36px rgba(220, 38, 38, 0.25);
          background: rgba(24, 33, 52, 0.85);
        }

        .hero-card-img-wrap {
          position: relative;
          height: 120px;
          width: 100%;
          overflow: hidden;
        }

        .hero-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .hero-feature-card:hover .hero-card-img {
          transform: scale(1.08);
        }

        .hero-card-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(11, 15, 23, 0.85);
          border: 1px solid rgba(249, 115, 22, 0.5);
          color: #FF8A65;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          padding: 3px 8px;
          border-radius: 6px;
          backdrop-filter: blur(4px);
        }

        .hero-card-body {
          padding: 16px;
          flex-grow: 1;
        }

        .hero-card-title {
          font-size: 15px;
          font-weight: 700;
          color: #FFFFFF;
        }

        .hero-card-desc {
          font-size: 12.5px;
          color: #94A3B8;
          line-height: 1.5;
        }

        /* Brand Strip */
        .hero-brand-strip {
          background: #080B11;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(220, 38, 38, 0.25);
          padding: 32px 0 28px;
        }

        .brand-strip-title {
          text-align: center;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #94A3B8;
          margin-bottom: 22px;
          text-transform: uppercase;
        }

        .brand-logos-marquee {
          overflow: hidden;
          position: relative;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }

        .brand-logos-track {
          display: flex;
          align-items: center;
          gap: 48px;
          width: max-content;
          animation: brandScroll 32s linear infinite;
        }

        .brand-logos-track:hover {
          animation-play-state: paused;
        }

        .brand-logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
          filter: grayscale(100%) brightness(1.8) opacity(0.7);
          transition: all 0.3s ease;
        }

        .brand-logo-item:hover {
          filter: grayscale(0%) brightness(1.2) opacity(1);
          transform: scale(1.06);
        }

        .brand-logo-img {
          height: 38px;
          width: auto;
          max-width: 140px;
          object-fit: contain;
        }

        @keyframes brandScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 991px) {
          .hero-video-banner {
            padding: 110px 0 50px;
            min-height: auto;
          }
          .hero-cards-row {
            margin-top: 24px;
          }
          .hero-card-img-wrap {
            height: 100px;
          }
        }

        @media (max-width: 575px) {
          .hero-video-banner {
            padding: 90px 0 40px;
          }
          .hero-title {
            font-size: 1.85rem;
          }
          .hero-subtitle {
            font-size: 0.95rem;
            margin-bottom: 24px;
          }
          .btn-hero-primary,
          .btn-hero-secondary {
            width: 100%;
            justify-content: center;
            padding: 12px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default NexoraHero;
