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
                <p className="text-slate-400 mb-0" style={{ color: '#94A3B8', fontSize: '14px' }}>
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
            radial-gradient(ellipse 70% 50% at 85% 15%, rgba(220, 38, 38, 0.16) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 15% 75%, rgba(249, 115, 22, 0.12) 0%, transparent 60%),
            #0B0F17;
          color: #FFFFFF;
          overflow: hidden;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .advantage-nexora-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          opacity: 0.6;
          z-index: 0;
        }
        .advantage-nexora-section .container {
          position: relative;
          z-index: 1;
        }
        .advantage-nexora-section .nexora-section-badge {
          background: rgba(220, 38, 38, 0.15);
          color: #F87171;
          border-color: rgba(220, 38, 38, 0.3);
        }
        .advantage-nexora-section .nexora-section-title {
          color: #FFFFFF;
        }
        .advantage-nexora-section .nexora-lead-text {
          color: #94A3B8;
        }
        .ecosystem-wheel-wrapper {
          background: #111827;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          position: relative;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }
        .orbit-grid-container {
          position: relative;
        }
        .orbit-center-core {
          text-align: center;
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(249, 115, 22, 0.15) 100%);
          border: 1px solid rgba(220, 38, 38, 0.3);
          border-radius: 16px;
          padding: 16px;
          margin-bottom: 20px;
        }
        .core-eyebrow {
          display: block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #F97316;
        }
        .core-title {
          font-size: 20px;
          font-weight: 900;
          color: #FFFFFF;
          margin: 4px 0 0;
          letter-spacing: 1px;
        }
        .node-pill {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
        }
        .node-pill:hover {
          background: rgba(220, 38, 38, 0.1);
          border-color: rgba(249, 115, 22, 0.4);
          transform: translateY(-2px);
        }
        .node-pill-active {
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.25) 0%, rgba(249, 115, 22, 0.2) 100%);
          border-color: #FF5722;
          box-shadow: 0 4px 20px rgba(220, 38, 38, 0.25);
        }
        .node-number {
          font-size: 14px;
          font-weight: 800;
          color: #F87171;
          font-family: monospace;
        }
        .node-name {
          font-size: 14px;
          font-weight: 700;
          color: #F1F5F9;
          flex-grow: 1;
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
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(220, 38, 38, 0.3);
          border-radius: 18px;
          padding: 24px;
          backdrop-filter: blur(10px);
        }
        .node-img-wrap {
          height: 160px;
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
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
          color: #F87171;
          background: rgba(220, 38, 38, 0.15);
          padding: 3px 8px;
          border-radius: 4px;
        }
        .badge-live {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #4ADE80;
          background: rgba(74, 222, 128, 0.1);
          padding: 3px 8px;
          border-radius: 4px;
        }
        .inspector-title {
          font-size: 22px;
          font-weight: 800;
          color: #FFFFFF;
        }
        .inspector-text {
          color: #94A3B8;
          line-height: 1.6;
          font-size: 14px;
        }
        .integrated-benefits {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 14px;
        }
        .benefit-row {
          font-size: 13px;
          color: #E2E8F0;
        }

        /* Banner Photo */
        .advantage-focus-banner {
          border-radius: 20px;
          border: 1px solid rgba(220, 38, 38, 0.35);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
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
          background: linear-gradient(135deg, rgba(11, 15, 23, 0.94) 0%, rgba(20, 10, 10, 0.88) 100%);
        }

        @media (max-width: 768px) {
          .ecosystem-wheel-wrapper {
            padding: 20px 16px !important;
          }
          .node-inspector-card {
            padding: 16px;
          }
          .node-pill {
            padding: 10px 12px;
          }
          .node-name {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default NexoraAdvantage;
