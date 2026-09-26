import React from 'react';
import { VALUES_CENTRIVA } from '../../utils/capabilityData';
import { Sparkles, Shield, Zap, Target, Award, Compass, RefreshCw, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';

const ICONS = [
  Target,      // C
  Award,       // E
  Sparkles,    // N
  ShieldCheck, // T
  Compass,     // R
  Zap,         // I
  TrendingUp,  // V
  Shield,      // A
  RefreshCw    // 360
];

const METRICS = [
  { num: "13+", label: "Integrated Capabilities", sub: "End-to-End Enterprise Verticals" },
  { num: "10+", label: "International Hubs", sub: "Global Multi-Country Presence" },
  { num: "24/7", label: "Omnichannel Operations", sub: "Uninterrupted Execution" },
  { num: "100%", label: "Single SLA Governance", sub: "Direct Client Accountability" }
];

const NexoraValues = () => {
  return (
    <section className="values-nexora-section py-5 position-relative" id="values">
      <div className="container py-lg-4">
        
        {/* Section Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-9">
            <span className="nexora-section-badge mb-2">OUR CORE VALUES</span>
            <h2 className="nexora-section-title mt-2">
              What <span className="text-gradient-nexora">CENTRIVA360</span> stands for.
            </h2>
            <p className="nexora-lead-text mx-auto mt-3">
              Eight core principles plus our 360° commitment, spelled out in our own name — the standard every engagement is built against, from a single outsourced process to a full Global Capability Centre.
            </p>
          </div>
        </div>

        {/* Corporate Excellence Visual Impact Banner with Image */}
        <div className="values-hero-banner mb-5 overflow-hidden position-relative">
          <img src="/about9.png" alt="Centriva360 Corporate Excellence" className="values-banner-bg-img" />
          <div className="values-banner-overlay" />
          <div className="values-banner-content position-relative z-2 p-4 p-lg-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <span className="hero-banner-tag">GUIDING PRINCIPLES</span>
                <h3 className="text-white fw-bold display-6 mb-3">
                  Built on Integrity. <br />
                  Driven by <span className="text-gradient-nexora">Measurable Impact.</span>
                </h3>
                <p className="text-slate-200 mb-0" style={{ fontSize: '15.5px', lineHeight: '1.7', color: '#E2E8F0' }}>
                  We align our organizational culture with our clients' business goals. Every capability pod functions with high transparency, uncompromising quality, and relentless accountability.
                </p>
              </div>

              <div className="col-lg-6">
                <div className="row g-3">
                  {METRICS.map((metric, idx) => (
                    <div key={idx} className="col-6">
                      <div className="metric-box">
                        <div className="metric-num text-gradient-nexora">{metric.num}</div>
                        <div className="metric-label">{metric.label}</div>
                        <div className="metric-sub">{metric.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Centriva360 Values Grid */}
        <div className="row g-4 justify-content-center mb-5">
          {VALUES_CENTRIVA.map((val, idx) => {
            const Icon = ICONS[idx] || Sparkles;
            const isLast = val.letter === "360°";
            return (
              <div key={idx} className={isLast ? "col-lg-8 col-md-12" : "col-lg-4 col-md-6"}>
                <div className={`value-card ${isLast ? 'value-card-highlight' : ''}`}>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="letter-badge">
                      <span>{val.letter}</span>
                    </div>
                    <div className="value-icon-wrap">
                      <Icon size={22} className="text-danger" />
                    </div>
                  </div>
                  <h3 className="value-title">{val.title}</h3>
                  <p className="value-desc">{val.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Banner & Motto */}
        <div className="values-motto-banner text-center p-4 p-lg-5 position-relative overflow-hidden">
          <div className="motto-glow" aria-hidden="true"></div>
          <div className="position-relative" style={{ zIndex: 2 }}>
            <p className="values-summary-text mx-auto mb-4">
              Centriva360 combines customer-centricity, excellence, innovation, transparency, reliability, and continuous optimization to help businesses adapt, perform better, and grow faster.
            </p>
            <div className="motto-divider mx-auto mb-4"></div>
            <h3 className="motto-headline">
              THINK NEXT. EXECUTE BETTER. OPTIMIZE EVERYTHING. DELIVER EXCELLENCE.
            </h3>
          </div>
        </div>

      </div>

      <style>{`
        .values-nexora-section {
          background: 
            radial-gradient(ellipse 70% 50% at 20% 15%, rgba(254, 226, 226, 0.55) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 85% 55%, rgba(254, 215, 170, 0.45) 0%, transparent 60%),
            radial-gradient(circle at 40% 90%, rgba(254, 226, 226, 0.4) 0%, transparent 50%),
            #F8FAFC;
          color: #0F172A;
          position: relative;
          overflow: hidden;
        }
        .values-nexora-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(rgba(148, 163, 184, 0.25) 1.2px, transparent 1.2px);
          background-size: 24px 24px;
          pointer-events: none;
          opacity: 0.8;
          z-index: 0;
        }
        .values-nexora-section .container {
          position: relative;
          z-index: 1;
        }
        .values-nexora-section .nexora-section-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #DC2626;
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(249, 115, 22, 0.1) 100%);
          border: 1px solid rgba(220, 38, 38, 0.25);
          box-shadow: 0 2px 10px rgba(220, 38, 38, 0.06);
          padding: 6px 16px;
          border-radius: 9999px;
          text-transform: uppercase;
        }
        .values-nexora-section .nexora-section-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.25;
        }
        .values-nexora-section .nexora-lead-text {
          font-size: clamp(1rem, 1.2vw, 1.15rem);
          line-height: 1.75;
          color: #475569;
        }

        /* Banner with Image */
        .values-hero-banner {
          border-radius: 24px;
          min-height: 260px;
          border: 1px solid rgba(220, 38, 38, 0.25);
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
        }
        .values-banner-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .values-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(15, 23, 42, 0.85) 50%, rgba(30, 20, 20, 0.92) 100%);
        }
        .hero-banner-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #F97316;
          margin-bottom: 8px;
        }

        .metric-box {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          padding: 16px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .metric-box:hover {
          background: rgba(255, 255, 255, 0.14);
          border-color: #FF5722;
          transform: translateY(-2px);
        }
        .metric-num {
          font-size: 32px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 4px;
        }
        .metric-label {
          font-size: 13.5px;
          font-weight: 700;
          color: #FFFFFF;
        }
        .metric-sub {
          font-size: 11px;
          color: #CBD5E1;
        }

        .value-card {
          background: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 20px;
          padding: 32px 26px;
          height: 100%;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03);
          display: flex;
          flex-direction: column;
        }
        .value-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #DC2626, #FF5722);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .value-card:hover {
          transform: translateY(-8px);
          border-color: #FCA5A5;
          box-shadow: 0 20px 35px -5px rgba(220, 38, 38, 0.12), 0 8px 16px -2px rgba(0, 0, 0, 0.04);
        }
        .value-card:hover::before {
          opacity: 1;
        }
        .value-card-highlight {
          background: linear-gradient(135deg, #FFFFFF 0%, #FFF7ED 100%);
          border: 1.5px solid rgba(249, 115, 22, 0.4);
          box-shadow: 0 10px 30px rgba(249, 115, 22, 0.08);
        }
        .value-card-highlight::before {
          opacity: 1;
        }
        .letter-badge {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #DC2626 0%, #FF5722 50%, #F97316 100%);
          color: #FFFFFF;
          font-size: 22px;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(220, 38, 38, 0.35);
        }
        .value-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(220, 38, 38, 0.08);
          border: 1px solid rgba(220, 38, 38, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .value-title {
          font-size: 20px;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 10px;
        }
        .value-desc {
          color: #475569;
          font-size: 15px;
          line-height: 1.65;
          margin-bottom: 0;
        }
        .values-motto-banner {
          background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #18181B 100%);
          border-radius: 24px;
          border: 1px solid rgba(220, 38, 38, 0.3);
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.15);
        }
        .motto-glow {
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, rgba(249, 115, 22, 0.15) 50%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: blur(60px);
        }
        .values-summary-text {
          color: #F1F5F9;
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          line-height: 1.7;
          max-width: 820px;
          font-weight: 500;
        }
        .motto-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #DC2626, #F97316);
          border-radius: 2px;
        }
        .motto-headline {
          font-size: clamp(1.1rem, 2vw, 1.6rem);
          font-weight: 900;
          letter-spacing: 1.5px;
          color: #FFFFFF;
          margin-bottom: 0;
          background: linear-gradient(135deg, #FFFFFF 0%, #FED7AA 50%, #FF8A65 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 768px) {
          .value-card {
            padding: 24px 20px;
          }
          .letter-badge {
            width: 44px;
            height: 44px;
            font-size: 18px;
          }
          .metric-num {
            font-size: 26px;
          }
          .values-hero-banner {
            border-radius: 16px;
          }
          .values-motto-banner {
            border-radius: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default NexoraValues;
