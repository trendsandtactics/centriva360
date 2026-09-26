import React, { useState } from 'react';
import { CAPABILITIES } from '../../utils/capabilityData';
import { 
  Building2, 
  Workflow, 
  Headphones, 
  TrendingUp, 
  Target, 
  BrainCircuit, 
  UserCheck, 
  Calculator, 
  Briefcase, 
  Users, 
  Database, 
  Bot, 
  Wrench,
  ArrowRight,
  X,
  CheckCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';

const CAP_ICONS = {
  "01": Building2,
  "02": Workflow,
  "03": Headphones,
  "04": TrendingUp,
  "05": Target,
  "06": BrainCircuit,
  "07": UserCheck,
  "08": Calculator,
  "09": Briefcase,
  "10": Users,
  "11": Database,
  "12": Bot,
  "13": Wrench,
};

const CAP_IMAGES = {
  "01": "/aboutbg.png",
  "02": "/image1.png",
  "03": "/about5.png",
  "04": "/image-gen.png",
  "05": "/about8.png",
  "06": "/about9.png",
  "07": "/team.jpg",
  "08": "/about4.png",
  "09": "/GROUP.jpg",
  "10": "/team1.jpg",
  "11": "/software.png",
  "12": "/superenergy.png",
  "13": "/Productdistribution.jpg",
};

const NexoraCapabilities = () => {
  const [activeModalCap, setActiveModalCap] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const CATEGORIES = [
    { id: 'all', label: 'All Capabilities', count: 13 },
    { id: 'gcc', label: 'GCC & Operations', count: 4 },
    { id: 'digital', label: 'Digital, Sales & CX', count: 4 },
    { id: 'tech', label: 'Engineering & AI', count: 2 },
    { id: 'corporate', label: 'Corporate & Support', count: 3 }
  ];

  const filteredCaps = CAPABILITIES.filter((cap) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'gcc') return ['01', '02', '06', '13'].includes(cap.id);
    if (activeCategory === 'digital') return ['03', '04', '05', '10'].includes(cap.id);
    if (activeCategory === 'tech') return ['11', '12'].includes(cap.id);
    if (activeCategory === 'corporate') return ['07', '08', '09'].includes(cap.id);
    return true;
  });

  const openModal = (cap) => {
    setActiveModalCap(cap);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModalCap(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="capabilities-nexora-section py-5 position-relative" id="capabilities">
      <div className="container py-lg-4">
        
        {/* Header */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-9">
            <span className="nexora-section-badge mb-2">CAPABILITY DIRECTORY</span>
            <h2 className="nexora-section-title mt-2">
              Thirteen capabilities. <span className="text-gradient-nexora">One integrated ecosystem.</span>
            </h2>
            <p className="nexora-lead-text mx-auto mt-3">
              Each capability operates as a high-performing standalone unit or seamlessly connects into a unified 360° enterprise operation. Click any card to explore scope, SLAs, and target business outcomes.
            </p>
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`cap-filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.label}</span>
              <span className="pill-counter">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* 13 Capabilities Grid with Rich Images */}
        <div className="row g-4 justify-content-center">
          {filteredCaps.map((cap) => {
            const Icon = CAP_ICONS[cap.id] || Building2;
            const imgPath = CAP_IMAGES[cap.id] || "/aboutbg.png";

            return (
              <div key={cap.id} className="col-xl-4 col-lg-6 col-md-6" id={`cap-${cap.id}`}>
                <div 
                  className="capability-card-enhanced h-100"
                  onClick={() => openModal(cap)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openModal(cap)}
                >
                  {/* Card Visual Photo Header */}
                  <div className="cap-img-container">
                    <img 
                      src={imgPath} 
                      alt={cap.title} 
                      className="cap-card-img" 
                      loading="lazy"
                    />
                    <div className="cap-img-overlay" />
                    
                    {/* Corner Number Badge */}
                    <div className="cap-number-badge">
                      <span>#{cap.id}</span>
                    </div>

                    {/* Icon Badge */}
                    <div className="cap-icon-circle">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="cap-card-body p-4 d-flex flex-column flex-grow-1">
                    <h3 className="cap-title mb-2">{cap.title}</h3>
                    <p className="cap-tagline mb-3">{cap.tagline}</p>

                    {/* Scope Preview Checklist */}
                    <div className="cap-scope-preview mb-3">
                      {cap.scope.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="cap-mini-scope-item">
                          <CheckCircle size={14} className="text-danger flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer Action */}
                    <div className="cap-action mt-auto pt-3 d-flex align-items-center justify-content-between">
                      <span className="view-details-btn">
                        Explore Scope &amp; Deliverables
                      </span>
                      <ArrowRight size={16} className="cap-arrow text-danger" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Details Modal ✕ with Modal Banner Image */}
      {activeModalCap && (
        <div className="modal-backdrop-custom" onClick={closeModal}>
          <div 
            className="modal-card-custom" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button ✕ */}
            <button 
              className="modal-close-btn" 
              onClick={closeModal}
              aria-label="Close details modal"
            >
              <X size={20} />
            </button>

            {/* Modal Image Header */}
            <div className="modal-img-wrap mb-4">
              <img 
                src={CAP_IMAGES[activeModalCap.id] || "/aboutbg.png"} 
                alt={activeModalCap.title} 
                className="modal-banner-img" 
              />
              <div className="modal-img-overlay" />
              <div className="modal-img-caption">
                <span className="modal-number-badge me-2">#{activeModalCap.id}</span>
                <span className="modal-sub-badge">INTEGRATED 360° CAPABILITY</span>
              </div>
            </div>

            <div className="modal-header-section mb-3">
              <h2 className="modal-cap-title">{activeModalCap.title}</h2>
              <p className="modal-cap-tagline">{activeModalCap.tagline}</p>
            </div>

            <div className="modal-body-section">
              <div className="modal-overview mb-4">
                <h4 className="modal-section-h">Overview &amp; Purpose</h4>
                <p className="modal-overview-text">{activeModalCap.summary}</p>
              </div>

              <div className="modal-scope mb-4">
                <h4 className="modal-section-h">Scope of Operation &amp; Deliverables</h4>
                <ul className="modal-scope-list">
                  {activeModalCap.scope.map((item, i) => (
                    <li key={i} className="modal-scope-item">
                      <CheckCircle size={17} className="text-danger flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-outcomes-box p-3 mb-4">
                <h5 className="mb-1 text-danger fw-bold fs-6">Target Business Outcome:</h5>
                <p className="mb-0 text-slate-200" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                  {activeModalCap.outcomes}
                </p>
              </div>

              <div className="modal-footer-actions d-flex flex-wrap gap-3 align-items-center justify-content-between pt-3 border-top">
                <a 
                  href={`#contact?capability=${encodeURIComponent(activeModalCap.title)}`}
                  className="btn-nexora-primary"
                  onClick={() => {
                    closeModal();
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Request this capability</span>
                  <ArrowRight size={17} />
                </a>
                <button className="btn btn-outline-light rounded-pill px-4" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      <style>{`
        .capabilities-nexora-section {
          background: 
            radial-gradient(ellipse 70% 50% at 20% 15%, rgba(220, 38, 38, 0.16) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 85% 65%, rgba(249, 115, 22, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 50% 95%, rgba(220, 38, 38, 0.08) 0%, transparent 45%),
            #0B0F17;
          color: #FFFFFF;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .capabilities-nexora-section::before {
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
        .capabilities-nexora-section .container {
          position: relative;
          z-index: 1;
        }
        .capabilities-nexora-section .nexora-section-badge {
          background: rgba(220, 38, 38, 0.15);
          color: #F87171;
          border: 1px solid rgba(220, 38, 38, 0.35);
        }
        .capabilities-nexora-section .nexora-section-title {
          color: #FFFFFF;
        }
        .capabilities-nexora-section .nexora-lead-text {
          color: #94A3B8;
        }

        /* Filter Pills */
        .cap-filter-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #CBD5E1;
          font-size: 13.5px;
          font-weight: 700;
          padding: 8px 18px;
          border-radius: 9999px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .cap-filter-pill:hover {
          color: #FFFFFF;
          border-color: #F87171;
          background: rgba(220, 38, 38, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(220, 38, 38, 0.25);
        }
        .cap-filter-pill.active {
          background: linear-gradient(135deg, #DC2626 0%, #FF5722 50%, #F97316 100%);
          color: #FFFFFF;
          border-color: transparent;
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4);
        }
        .pill-counter {
          font-size: 11px;
          padding: 2px 7px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.15);
          color: inherit;
        }
        .cap-filter-pill.active .pill-counter {
          background: rgba(255, 255, 255, 0.25);
          color: #FFFFFF;
        }

        /* Enhanced Capability Card with Image */
        .capability-card-enhanced {
          background: rgba(17, 24, 39, 0.75);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .capability-card-enhanced:hover {
          transform: translateY(-8px);
          border-color: rgba(248, 113, 113, 0.6);
          box-shadow: 0 24px 50px rgba(220, 38, 38, 0.25);
          background: rgba(22, 32, 52, 0.85);
        }

        .cap-img-container {
          position: relative;
          height: 180px;
          width: 100%;
          overflow: hidden;
          background: #0B0F17;
        }
        .cap-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .capability-card-enhanced:hover .cap-card-img {
          transform: scale(1.08);
        }
        .cap-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11, 15, 23, 0.1) 0%, rgba(11, 15, 23, 0.8) 100%);
        }

        .cap-number-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: linear-gradient(135deg, #DC2626 0%, #FF5722 100%);
          color: #FFFFFF;
          font-size: 13px;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 9999px;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);
          z-index: 2;
        }

        .cap-icon-circle {
          position: absolute;
          bottom: 14px;
          right: 14px;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(11, 15, 23, 0.88);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: all 0.3s ease;
        }
        .capability-card-enhanced:hover .cap-icon-circle {
          background: #DC2626;
          border-color: #DC2626;
          transform: scale(1.1);
        }

        .cap-title {
          font-size: 19px;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.3;
        }
        .cap-tagline {
          color: #94A3B8;
          font-size: 14px;
          line-height: 1.55;
        }

        .cap-mini-scope-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12.5px;
          color: #CBD5E1;
          margin-bottom: 6px;
          line-height: 1.4;
        }

        .cap-action {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .view-details-btn {
          font-size: 13.5px;
          font-weight: 700;
          color: #F87171;
          transition: all 0.25s ease;
        }
        .capability-card-enhanced:hover .view-details-btn {
          color: #FF8A65;
        }
        .cap-arrow {
          transition: transform 0.25s ease;
        }
        .capability-card-enhanced:hover .cap-arrow {
          transform: translateX(5px);
        }

        /* Modal Styles */
        .modal-backdrop-custom {
          position: fixed;
          inset: 0;
          background: rgba(5, 8, 15, 0.85);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.25s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .modal-card-custom {
          background: #0F172A;
          border-radius: 24px;
          max-width: 720px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 28px;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(220, 38, 38, 0.4);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .modal-close-btn:hover {
          background: #DC2626;
          color: #FFFFFF;
          transform: rotate(90deg);
        }

        .modal-img-wrap {
          height: 180px;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .modal-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(11, 15, 23, 0.9) 100%);
        }
        .modal-img-caption {
          position: absolute;
          bottom: 14px;
          left: 16px;
          display: flex;
          align-items: center;
        }
        .modal-number-badge {
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 900;
        }
        .modal-sub-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.2px;
          color: #FED7AA;
          background: rgba(249, 115, 22, 0.3);
          border: 1px solid rgba(249, 115, 22, 0.5);
          padding: 3px 10px;
          border-radius: 6px;
        }
        .modal-cap-title {
          font-size: 24px;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 6px;
        }
        .modal-cap-tagline {
          font-size: 16px;
          font-weight: 600;
          color: #FF5722;
          margin-bottom: 0;
        }
        .modal-section-h {
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #94A3B8;
          margin-bottom: 10px;
        }
        .modal-overview-text {
          font-size: 15px;
          color: #E2E8F0;
          line-height: 1.65;
        }
        .modal-scope-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .modal-scope-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14.5px;
          color: #CBD5E1;
          margin-bottom: 10px;
          line-height: 1.5;
        }
        .modal-outcomes-box {
          background: rgba(220, 38, 38, 0.12);
          border-left: 4px solid #DC2626;
          border-radius: 8px;
          color: #FECDD3;
        }

        @media (max-width: 575px) {
          .modal-card-custom {
            padding: 20px 16px;
            border-radius: 18px;
          }
          .modal-img-wrap {
            height: 140px;
          }
          .cap-img-container {
            height: 160px;
          }
        }
      `}</style>
    </section>
  );
};

export default NexoraCapabilities;
