import React, { useState } from 'react';
import { Check, Layers, ShieldCheck, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

const ECOSYSTEM_NODES = [
  { 
    id: "01", 
    name: "GCC", 
    full: "Global Capability Centres", 
    image: "/aboutbg.png",
    desc: "Dedicated global captive hubs with turnkey infrastructure, talent, and governance under your direct brand control." 
  },
  { 
    id: "02", 
    name: "BPO", 
    full: "Business Process Outsourcing", 
    image: "/image1.png",
    desc: "Scalable front, middle, and back-office transaction execution delivering 99.8% accuracy and streamlined workflows." 
  },
  { 
    id: "03", 
    name: "Digital Marketing", 
    full: "Digital Marketing Services", 
    image: "/image-gen.png",
    desc: "Performance marketing, technical SEO, thought leadership content, and multi-channel acquisition funnels." 
  },
  { 
    id: "04", 
    name: "Digital Sales", 
    full: "Digital Sales & Lead Gen", 
    image: "/about8.png",
    desc: "Targeted outbound SDR/BDR prospecting pods filling your executive calendar with sales-qualified opportunities." 
  },
  { 
    id: "05", 
    name: "Customer Experience", 
    full: "CX & Contact Centre", 
    image: "/about5.png",
    desc: "24/7/365 multilingual omnichannel support delivering outstanding CSAT and proactive retention." 
  },
  { 
    id: "06", 
    name: "KPO & Research", 
    full: "Knowledge Process Outsourcing", 
    image: "/about9.png",
    desc: "Domain-specialized analytics, market intelligence, valuation models, and executive decision-support." 
  },
  { 
    id: "07", 
    name: "HR & Recruitment", 
    full: "HR & Talent Acquisition", 
    image: "/team.jpg",
    desc: "Global executive search, Employer of Record (EOR), cross-border payroll, and rapid candidate deployment." 
  },
  { 
    id: "08", 
    name: "Finance & Accounting", 
    full: "Finance, AP/AR & Accounting", 
    image: "/about4.png",
    desc: "End-to-end ledger accounting, accounts payable/receivable, payroll processing, and audit-ready MIS." 
  },
  { 
    id: "09", 
    name: "Administration", 
    full: "Administrative & Back-Office", 
    image: "/GROUP.jpg",
    desc: "Virtual executive assistance, calendar coordination, document hygiene, and operational travel logistics." 
  },
  { 
    id: "10", 
    name: "AI & Automation", 
    full: "AI & Process Automation", 
    image: "/software.png",
    desc: "RPA bots, enterprise Generative AI copilots, intelligent document OCR, and custom cross-system automations." 
  }
];

const NexoraAdvantage = () => {
  const [selectedNode, setSelectedNode] = useState(ECOSYSTEM_NODES[0]);

  return (
    <section className="advantage-nexora-section py-5 position-relative" id="advantage">
      <div className="container py-lg-4">
        
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-9">
            <span className="nexora-section-badge mb-2">THE CENTRIVA360 360° ADVANTAGE</span>
            <h2 className="nexora-section-title mt-2">
              One partner. Multiple capabilities. <br />
              <span className="text-gradient-nexora">One integrated ecosystem.</span>
            </h2>
            <p className="nexora-lead-text mx-auto mt-3">
              What makes Centriva360 different is that clients don't need multiple outsourcing partners for different functions. Every capability connects into the same operating model, the same reporting line, and the same point of accountability.
            </p>
          </div>
        </div>

        {/* Interactive 360° Ecosystem Orbit / Wheel Display with Dynamic Visual Preview */}
        <div className="ecosystem-wheel-wrapper p-4 p-lg-5 mb-5">
          <div className="row align-items-center g-5">
            
            {/* Left side: Interactive circular grid of the 10 capabilities */}
            <div className="col-lg-7">
              <div className="orbit-grid-container">
                <div className="orbit-center-core">
                  <div className="core-inner">
                    <span className="core-eyebrow">CENTIVA360 ECOSYSTEM</span>
                    <h3 className="core-title">ONE UNIFIED ENGINE</h3>
                    <span className="core-dot-indicator"></span>
                  </div>
                </div>

                <div className="row g-2 nodes-grid">
                  {ECOSYSTEM_NODES.map((node) => {
                    const isSelected = selectedNode.id === node.id;
                    return (
                      <div key={node.id} className="col-sm-6 col-12">
                        <div 
                          className={`node-pill ${isSelected ? 'node-pill-active' : ''}`}
                          onClick={() => setSelectedNode(node)}
                          role="button"
                          tabIndex={0}
                        >
                          <span className="node-number">{node.id}</span>
                          <span className="node-name">{node.name}</span>
                          <span className="node-active-indicator"></span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="wheel-footer-note mt-4 text-center text-lg-start">
                <p className="text-slate-500 mb-0" style={{ color: '#64748B', fontSize: '14px', fontWeight: 500 }}>
                  Ten capabilities, one shared operating model — click any vertical to preview its integration node and delivery image.
                </p>
              </div>
            </div>

            {/* Right side: Focused node inspection card with Dynamic Photo Preview */}
            <div className="col-lg-5">
              <div className="node-inspector-card">
                {/* Node Preview Image */}
                <div className="node-img-wrap mb-3">
                  <img 
                    src={selectedNode.image} 
                    alt={selectedNode.full} 
                    className="node-preview-img" 
                  />
                  <div className="node-img-badge">
                    <span>ACTIVE NODE: #{selectedNode.id}</span>
                  </div>
                </div>

                <div className="inspector-eyebrow d-flex align-items-center justify-content-between mb-2">
                  <span className="badge-tag">{selectedNode.name}</span>
                  <span className="badge-live">CONNECTED IN 360°</span>
                </div>

                <h3 className="inspector-title mb-1">{selectedNode.full}</h3>
                <p className="inspector-text mb-3">
                  {selectedNode.desc}
                </p>

                <div className="integrated-benefits mb-4">
                  <div className="benefit-row d-flex align-items-center gap-2 mb-2">
                    <Check size={16} className="text-danger flex-shrink-0" />
                    <span>Zero vendor fragmentation or finger-pointing</span>
                  </div>
                  <div className="benefit-row d-flex align-items-center gap-2 mb-2">
                    <Check size={16} className="text-danger flex-shrink-0" />
                    <span>Single SLA and consolidated performance metrics</span>
                  </div>
                  <div className="benefit-row d-flex align-items-center gap-2">
                    <Check size={16} className="text-danger flex-shrink-0" />
                    <span>Cross-department knowledge sharing &amp; synergy</span>
                  </div>
                </div>

                <a 
                  href={`#contact?node=${encodeURIComponent(selectedNode.name)}`}
                  className="btn-nexora-primary w-100 justify-content-center"
                  onClick={(e) => {
                    const el = document.getElementById('contact');
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Connect this capability</span>
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* You Focus on Your Core Business Banner with Operations Photo Backdrop */}
        <div className="advantage-focus-banner overflow-hidden position-relative p-4 p-lg-5 text-center">
          <img src="/Productdistribution.jpg" alt="Enterprise Distribution and Scale" className="banner-photo-bg" />
          <div className="banner-photo-overlay" />
          
          <div className="position-relative z-2">
            <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle bg-danger bg-opacity-25 text-danger mb-3 border border-danger">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-white fw-bold mb-3 display-6">
              You focus on your core business. <br className="d-none d-sm-block" />
              <span className="text-gradient-nexora">We take care of the capabilities that keep it moving.</span>
            </h3>
            <p className="text-slate-200 mx-auto mb-4" style={{ color: '#E2E8F0', maxWidth: '720px', fontSize: '16.5px', lineHeight: '1.7' }}>
              Eliminate the hassle of juggling 5 different agencies, vendors, and contractors. Partner with an integrated powerhouse engineered for operational velocity and SLA excellence.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="#contact" className="btn-nexora-primary">
                <span>Start an engagement</span>
                <ArrowRight size={17} />
              </a>
              <Link to="/about" className="btn-nexora-secondary">
                <span>Learn our methodology</span>
              </Link>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .advantage-nexora-section {
          background: 
            radial-gradient(ellipse 70% 50% at 85% 15%, rgba(254, 215, 170, 0.5) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 15% 75%, rgba(254, 226, 226, 0.55) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(254, 215, 170, 0.3) 0%, transparent 50%),
            #F8FAFC;
          color: #0F172A;
          overflow: hidden;
          position: relative;
        }
        .advantage-nexora-section::before {
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
        .advantage-nexora-section .container {
          position: relative;
          z-index: 1;
        }
        .advantage-nexora-section .nexora-section-badge {
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
        .advantage-nexora-section .nexora-section-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.25;
        }
        .advantage-nexora-section .nexora-lead-text {
          font-size: clamp(1rem, 1.2vw, 1.15rem);
          line-height: 1.75;
          color: #475569;
        }
        .ecosystem-wheel-wrapper {
          background: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 24px;
          position: relative;
          box-shadow: 0 20px 50px -10px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(0, 0, 0, 0.02);
        }
        .orbit-grid-container {
          position: relative;
        }
        .orbit-center-core {
          text-align: center;
          background: linear-gradient(135deg, #FEF2F2 0%, #FFF7ED 100%);
          border: 1.5px solid rgba(220, 38, 38, 0.25);
          border-radius: 16px;
          padding: 16px;
          margin-bottom: 20px;
          box-shadow: 0 4px 14px rgba(220, 38, 38, 0.06);
        }
        .core-eyebrow {
          display: block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #DC2626;
        }
        .core-title {
          font-size: 20px;
          font-weight: 900;
          color: #0F172A;
          margin: 4px 0 0;
          letter-spacing: 1px;
        }
        .node-pill {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }
        .node-pill:hover {
          background: #FFFFFF;
          border-color: #FCA5A5;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(220, 38, 38, 0.08);
        }
        .node-pill-active {
          background: linear-gradient(135deg, #FEF2F2 0%, #FFF7ED 100%);
          border-color: #FF5722;
          box-shadow: 0 6px 22px rgba(220, 38, 38, 0.16);
        }
        .node-number {
          font-size: 14px;
          font-weight: 800;
          color: #DC2626;
          font-family: monospace;
        }
        .node-name {
          font-size: 14px;
          font-weight: 700;
          color: #1E293B;
          flex-grow: 1;
        }
        .node-pill-active .node-name {
          color: #DC2626;
        }
        .node-active-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: transparent;
        }
        .node-pill-active .node-active-indicator {
          background: #FF5722;
          box-shadow: 0 0 10px #FF5722;
        }

        /* Inspector Card with Photo */
        .node-inspector-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(220, 38, 38, 0.22);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02);
        }
        .node-img-wrap {
          height: 160px;
          width: 100%;
          border-radius: 14px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
        }
        .node-preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .node-inspector-card:hover .node-preview-img {
          transform: scale(1.05);
        }
        .node-img-badge {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(11, 15, 23, 0.85);
          color: #FF8A65;
          font-size: 10px;
          font-weight: 800;
          padding: 4px 8px;
          border-radius: 4px;
          backdrop-filter: blur(4px);
        }
        .badge-tag {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #DC2626;
          background: rgba(220, 38, 38, 0.08);
          padding: 4px 10px;
          border-radius: 6px;
        }
        .badge-live {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #16A34A;
          background: rgba(22, 163, 74, 0.1);
          padding: 4px 10px;
          border-radius: 6px;
        }
        .inspector-title {
          font-size: 22px;
          font-weight: 800;
          color: #0F172A;
        }
        .inspector-text {
          color: #475569;
          line-height: 1.65;
          font-size: 14.5px;
        }
        .integrated-benefits {
          border-top: 1px solid #E2E8F0;
          padding-top: 14px;
        }
        .benefit-row {
          font-size: 13.5px;
          color: #1E293B;
          font-weight: 500;
        }

        /* Banner Photo */
        .advantage-focus-banner {
          border-radius: 24px;
          border: 1px solid rgba(220, 38, 38, 0.25);
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
        }
        .banner-photo-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .banner-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 20, 25, 0.9) 100%);
        }
        .advantage-focus-banner .btn-nexora-secondary {
          background: rgba(255, 255, 255, 0.12);
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          color: #FFFFFF !important;
          backdrop-filter: blur(8px);
        }
        .advantage-focus-banner .btn-nexora-secondary:hover {
          background: #FFFFFF;
          color: #0F172A !important;
          border-color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .ecosystem-wheel-wrapper {
            padding: 20px 16px !important;
            border-radius: 18px;
          }
          .node-inspector-card {
            padding: 18px 14px;
            border-radius: 16px;
          }
          .node-pill {
            padding: 10px 12px;
          }
          .node-name {
            font-size: 13px;
          }
          .advantage-focus-banner {
            border-radius: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default NexoraAdvantage;
