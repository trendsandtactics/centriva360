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
        <div className="row justify-content-center text-center mb-5">
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

        {/* 13 Capabilities Grid with Rich Images */}
        <div className="row g-4 justify-content-center">
          {CAPABILITIES.map((cap) => {
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
                <p className="mb-0 text-slate-700" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
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
                <button className="btn btn-outline-secondary rounded-pill px-4" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      <style>{`
        .capabilities-nexora-section {
          background: #FFFFFF;
          color: #0F172A;
          overflow: hidden;
        }

        /* Enhanced Capability Card with Image */
        .capability-card-enhanced {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }
        .capability-card-enhanced:hover {
          transform: translateY(-8px);
          border-color: #FCA5A5;
          box-shadow: 0 20px 42px rgba(220, 38, 38, 0.12);
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
          background: linear-gradient(180deg, rgba(11, 15, 23, 0.15) 0%, rgba(11, 15, 23, 0.75) 100%);
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
          background: rgba(11, 15, 23, 0.85);
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
          color: #0F172A;
          line-height: 1.3;
        }
        .cap-tagline {
          color: #64748B;
          font-size: 14px;
          line-height: 1.55;
        }

        .cap-mini-scope-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12.5px;
          color: #475569;
          margin-bottom: 6px;
          line-height: 1.4;
        }

        .cap-action {
          border-top: 1px solid #F1F5F9;
        }
        .view-details-btn {
          font-size: 13.5px;
          font-weight: 700;
          color: #DC2626;
          transition: all 0.25s ease;
        }
        .capability-card-enhanced:hover .view-details-btn {
          color: #FF5722;
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
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(8px);
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
          background: #FFFFFF;
          border-radius: 24px;
          max-width: 720px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 28px;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
          border: 1px solid #FCA5A5;
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
          background: rgba(255, 255, 255, 0.9);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0F172A;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }
        .modal-close-btn:hover {
          background: #FEE2E2;
          color: #DC2626;
          transform: rotate(90deg);
        }

        .modal-img-wrap {
          height: 180px;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }
        .modal-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(11, 15, 23, 0.85) 100%);
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
          color: #0F172A;
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
          color: #64748B;
          margin-bottom: 10px;
        }
        .modal-overview-text {
          font-size: 15px;
          color: #334155;
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
          color: #334155;
          margin-bottom: 10px;
          line-height: 1.5;
        }
        .modal-outcomes-box {
          background: #FEF2F2;
          border-left: 4px solid #DC2626;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};

export default NexoraCapabilities;
