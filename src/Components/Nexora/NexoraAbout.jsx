import React from 'react';
import { Cpu, Users, GitMerge, Globe, CheckCircle2, ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react';
import { Link } from 'react-router';

const PILLARS = [
  {
    icon: Cpu,
    title: "Technology",
    tagline: "Digital, AI & Automation",
    image: "/software.png",
    description: "Digital technologies, intelligent automation, and AI-enabled solutions that deliver measurable business outcomes, not just reduced cost.",
    highlights: ["Robotic Process Automation", "Enterprise Cloud & Systems", "Custom Automation Pods"]
  },
  {
    icon: Users,
    title: "People",
    tagline: "Specialized Global Talent",
    image: "/ourteam.png",
    description: "Experienced professionals who continuously look for opportunities to improve process, productivity, customer experience, and operational velocity.",
    highlights: ["Domain-Specialized Leads", "Global Recruitment & EOR", "Rigorous Quality Assurance"]
  },
  {
    icon: GitMerge,
    title: "Process",
    tagline: "Structured & Repeatable",
    image: "/logistics.png",
    description: "Structured, repeatable ways of working — engineered around your unique requirements rather than a standard one-size-fits-all outsourcing template.",
    highlights: ["Single SLA Governance", "Real-Time Audit Dashboards", "Continuous Process Optimization"]
  }
];

const VERTICALS = [
  "Global Capability Centres",
  "BPO & Back-Office",
  "Digital Marketing",
  "Digital Sales & Lead Gen",
  "Customer Experience",
  "Contact Centre Operations",
  "KPO & Research",
  "HR & Executive Search",
  "Finance & Accounting",
  "Administration & Executive Ops",
  "Data Management & Annotation",
  "AI & Intelligent Automation"
];

const NexoraAbout = () => {
  return (
    <section className="about-nexora-section py-5 position-relative" id="about">
      <div className="container py-lg-4">
        
        {/* Top Split Section: Text + Visual Media Showcase */}
        <div className="row align-items-center g-5 mb-5 pb-lg-3">
          <div className="col-lg-6">
            <span className="nexora-section-badge mb-3">ABOUT NEXORA360</span>
            <h2 className="nexora-section-title mt-2 mb-3">
              Businesses shouldn't need <span className="text-gradient-nexora">multiple partners</span> for multiple functions.
            </h2>
            <p className="nexora-lead-text mb-4">
              From supporting a single business function to managing complete outsourced operations, we design solutions around the unique requirements of every client. Our teams operate as a direct extension of your organization — dedicated resources, shared services, project-based teams, or complete turnkey outsourced functions.
            </p>

            <div className="row g-3 mb-4">
              <div className="col-sm-6">
                <div className="about-feature-box">
                  <CheckCircle2 size={18} className="text-danger flex-shrink-0" />
                  <span className="fw-semibold">Turnkey GCC Hubs</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="about-feature-box">
                  <CheckCircle2 size={18} className="text-danger flex-shrink-0" />
                  <span className="fw-semibold">Single Point Accountability</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="about-feature-box">
                  <CheckCircle2 size={18} className="text-danger flex-shrink-0" />
                  <span className="fw-semibold">Industry-Agnostic Execution</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="about-feature-box">
                  <CheckCircle2 size={18} className="text-danger flex-shrink-0" />
                  <span className="fw-semibold">Enterprise-Grade Security</span>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 flex-wrap">
              <Link to="/about" className="btn-nexora-primary">
                <span>Discover our journey</span>
                <ArrowRight size={17} />
              </Link>
              <Link to="/capabilities" className="btn-nexora-secondary">
                <span>View all capabilities</span>
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-visual-showcase position-relative">
              {/* Main Visual Image */}
              <div className="main-image-wrap">
                <img
                  src="/GROUP.jpg"
                  alt="Nexora360 Global Leadership and Team"
                  className="main-about-img img-fluid"
                />
                <div className="image-overlay-badge">
                  <span className="badge-dot"></span>
                  <span>Centriva360 Global Ecosystem</span>
                </div>
              </div>

              {/* Floating Overlapping Card 1: Team & Talent */}
              <div className="floating-card floating-card-top">
                <img src="/about5.png" alt="Operational Specialist" className="card-thumb-img" />
                <div>
                  <h5 className="floating-card-title">Dedicated Talent</h5>
                  <p className="floating-card-sub mb-0">High-Retention Specialists</p>
                </div>
              </div>

              {/* Floating Overlapping Card 2: Performance Metric */}
              <div className="floating-card floating-card-bottom">
                <div className="stat-circle">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <div className="floating-stat-num">99.8%</div>
                  <div className="floating-stat-label">SLA Compliance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars (Technology, People, Process) with Photo Headers */}
        <div className="mb-5">
          <div className="text-center mb-4">
            <span className="sub-badge-red mb-2 d-inline-block">THE THREE PILLARS</span>
            <h3 className="fs-2 fw-bold text-slate-900">How we deliver consistent excellence</h3>
          </div>

          <div className="row g-4">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="col-lg-4 col-md-6">
                  <div className="pillar-card-enhanced h-100">
                    {/* Photo Header */}
                    <div className="pillar-image-wrap">
                      <img src={pillar.image} alt={pillar.title} className="pillar-photo" />
                      <div className="pillar-photo-overlay" />
                      <div className="pillar-icon-floater">
                        <Icon size={24} className="pillar-floater-icon" />
                      </div>
                      <span className="pillar-photo-badge">{pillar.tagline}</span>
                    </div>

                    {/* Content */}
                    <div className="pillar-card-body p-4">
                      <h4 className="pillar-title mb-2">{pillar.title}</h4>
                      <p className="pillar-desc mb-3">{pillar.description}</p>
                      
                      <div className="pillar-highlights pt-3 border-top">
                        {pillar.highlights.map((item, idx) => (
                          <div key={idx} className="d-flex align-items-center gap-2 mb-2">
                            <CheckCircle2 size={15} className="text-danger flex-shrink-0" />
                            <span className="highlight-text">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Integrated Capability Verticals Strip with Visual Illustration */}
        <div className="verticals-overview-card p-4 p-lg-5 mb-5 overflow-hidden position-relative">
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <span className="sub-badge-red mb-2 d-inline-block">UNIFIED PLATFORM</span>
              <h3 className="verticals-card-title">Everything under one integrated ecosystem</h3>
              <p className="verticals-card-sub mb-4">
                Connect your operational functions into a cohesive, high-performing engine. No silos, no duplicate vendors.
              </p>
              
              <div className="verticals-banner-img-wrap mb-3 mb-lg-0">
                <img src="/about7.png" alt="Integrated Operational Ecosystem" className="img-fluid rounded-3 shadow-sm border" />
              </div>

              <Link to="/capabilities" className="btn-nexora-primary btn-sm py-2 px-3 mt-3">
                <span>Browse all 13 capabilities</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="col-lg-7">
              <div className="d-flex flex-wrap gap-2">
                {VERTICALS.map((item, idx) => (
                  <div key={idx} className="vertical-pill">
                    <CheckCircle2 size={15} className="text-danger flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Industry-Agnostic. Globally Focused. Sub-section with Global Presence Graphic */}
        <div className="global-focus-box p-4 p-lg-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="globe-icon-wrap">
                  <Globe size={26} className="text-warning" />
                </div>
                <div>
                  <span className="text-uppercase fw-bold text-danger font-monospace" style={{ fontSize: '12px', letterSpacing: '1.2px' }}>
                    OPERATIONAL PHILOSOPHY
                  </span>
                  <h3 className="mb-0 text-white fw-bold fs-4">Industry-Agnostic. Globally Focused.</h3>
                </div>
              </div>
              <h4 className="text-white-50 fs-5 mb-3">
                Built to support businesses across diverse industries and international geographies.
              </h4>
              <p className="text-slate-300 mb-0" style={{ color: '#CBD5E1', lineHeight: '1.7' }}>
                Our flexible operating model allows us to understand the unique requirements of each organization and build customized solutions — rather than forcing clients into a standard outsourcing model. We work with businesses that need reliable support to operate, scale, transform, and grow.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="global-map-card">
                <img src="/gp.png" alt="Centriva360 Global Presence Map" className="img-fluid rounded-3 mb-3 border border-secondary" />
                <div className="d-flex align-items-center justify-content-between text-white">
                  <div>
                    <span className="d-block fw-bold fs-5 text-gradient-nexora">360° Global Reach</span>
                    <span className="text-muted" style={{ fontSize: '12.5px' }}>Multiple Country Capability Nodes</span>
                  </div>
                  <Link to="/global-presence" className="btn btn-sm btn-outline-danger text-white rounded-pill px-3">
                    View Network
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .about-nexora-section {
          background: #FFFFFF;
          color: #0F172A;
          overflow: hidden;
        }
        .nexora-section-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #DC2626;
          background: rgba(220, 38, 38, 0.08);
          border: 1px solid rgba(220, 38, 38, 0.2);
          padding: 6px 16px;
          border-radius: 9999px;
          text-transform: uppercase;
        }
        .nexora-section-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.25;
        }
        .nexora-lead-text {
          font-size: clamp(1rem, 1.2vw, 1.15rem);
          line-height: 1.75;
          color: #475569;
        }
        .about-feature-box {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: #F8FAFC;
          border-radius: 10px;
          border: 1px solid #E2E8F0;
          font-size: 14px;
          color: #1E293B;
        }

        /* Visual Showcase */
        .about-visual-showcase {
          position: relative;
          padding: 18px;
        }
        .main-image-wrap {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          border: 2px solid rgba(220, 38, 38, 0.15);
          position: relative;
        }
        .main-about-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .main-image-wrap:hover .main-about-img {
          transform: scale(1.03);
        }
        .image-overlay-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(11, 15, 23, 0.85);
          backdrop-filter: blur(6px);
          color: #FFFFFF;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(249, 115, 22, 0.4);
        }
        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 8px #22C55E;
        }

        /* Floating Overlapping Cards */
        .floating-card {
          position: absolute;
          background: #FFFFFF;
          border-radius: 14px;
          padding: 12px 18px;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
          border: 1px solid #FED7AA;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 3;
          animation: floatSlow 4s ease-in-out infinite alternate;
        }
        .floating-card-top {
          top: -8px;
          right: 0px;
        }
        .floating-card-bottom {
          bottom: -12px;
          left: 0px;
          animation-delay: 2s;
        }
        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
        .card-thumb-img {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          object-fit: cover;
        }
        .floating-card-title {
          font-size: 14px;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 2px;
        }
        .floating-card-sub {
          font-size: 12px;
          color: #64748B;
        }
        .stat-circle {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: linear-gradient(135deg, #DC2626 0%, #FF5722 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .floating-stat-num {
          font-size: 18px;
          font-weight: 900;
          color: #DC2626;
          line-height: 1;
        }
        .floating-stat-label {
          font-size: 11px;
          font-weight: 700;
          color: #64748B;
        }

        /* Enhanced Pillar Cards */
        .pillar-card-enhanced {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.35s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
        }
        .pillar-card-enhanced:hover {
          transform: translateY(-8px);
          border-color: #FCA5A5;
          box-shadow: 0 18px 40px rgba(220, 38, 38, 0.1);
        }
        .pillar-image-wrap {
          height: 180px;
          position: relative;
          overflow: hidden;
        }
        .pillar-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .pillar-card-enhanced:hover .pillar-photo {
          transform: scale(1.08);
        }
        .pillar-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11, 15, 23, 0.1) 0%, rgba(11, 15, 23, 0.7) 100%);
        }
        .pillar-icon-floater {
          position: absolute;
          bottom: 14px;
          left: 18px;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 2;
        }
        .pillar-floater-icon {
          color: #DC2626;
        }
        .pillar-photo-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(11, 15, 23, 0.85);
          color: #FF8A65;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 6px;
          letter-spacing: 0.8px;
          backdrop-filter: blur(4px);
        }
        .pillar-title {
          font-size: 22px;
          font-weight: 800;
          color: #0F172A;
        }
        .pillar-desc {
          color: #64748B;
          font-size: 14.5px;
          line-height: 1.6;
        }
        .highlight-text {
          font-size: 13.5px;
          font-weight: 600;
          color: #334155;
        }

        /* Verticals Card */
        .verticals-overview-card {
          background: linear-gradient(135deg, #FFF7ED 0%, #FEF2F2 100%);
          border: 1px solid #FED7AA;
          border-radius: 20px;
        }
        .sub-badge-red {
          font-size: 11px;
          font-weight: 800;
          color: #EA580C;
          background: rgba(234, 88, 12, 0.1);
          padding: 4px 10px;
          border-radius: 6px;
          letter-spacing: 1px;
        }
        .verticals-card-title {
          font-size: 24px;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.3;
        }
        .verticals-card-sub {
          color: #64748B;
          font-size: 14.5px;
          line-height: 1.6;
        }
        .vertical-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFFFFF;
          border: 1px solid #FDBA74;
          padding: 9px 18px;
          border-radius: 9999px;
          font-size: 14px;
          font-weight: 600;
          color: #1E293B;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          transition: all 0.2s ease;
        }
        .vertical-pill:hover {
          border-color: #DC2626;
          background: #FFF1F2;
          color: #DC2626;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.12);
        }

        /* Global Focus Box */
        .global-focus-box {
          background: #0F172A;
          border-radius: 20px;
          border: 1px solid rgba(220, 38, 38, 0.25);
          position: relative;
          overflow: hidden;
        }
        .globe-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(249, 115, 22, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(249, 115, 22, 0.3);
        }
        .global-map-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 16px;
          backdrop-filter: blur(8px);
        }

        @media (max-width: 991px) {
          .main-about-img {
            height: 280px;
          }
          .floating-card-top {
            top: -5px;
            right: -5px;
          }
          .floating-card-bottom {
            bottom: -5px;
            left: -5px;
          }
        }
      `}</style>
    </section>
  );
};

export default NexoraAbout;
