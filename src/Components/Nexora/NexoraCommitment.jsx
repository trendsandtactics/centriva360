import React from 'react';
import { COMMITMENTS } from '../../utils/capabilityData';
import { ShieldCheck, Award, Lightbulb, Zap, Eye, Trophy, Compass, Flag, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const COMMITMENT_ICONS = [
  ShieldCheck, // Reliability
  Award,       // Excellence
  Lightbulb,   // Innovation
  Zap,         // Agility
  Eye,         // Transparency
  Trophy       // Customer Success
];

const NexoraCommitment = () => {
  return (
    <section className="commitments-nexora-section py-5 position-relative" id="commitments">
      <div className="container py-lg-4">
        
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-9">
            <span className="nexora-section-badge mb-2">OUR COMMITMENT</span>
            <h2 className="nexora-section-title mt-2">
              Long-term partnerships, <span className="text-gradient-nexora">built on six commitments.</span>
            </h2>
            <p className="nexora-lead-text mx-auto mt-3">
              Industry-agnostic and globally focused — our flexible operating model is built to understand the unique requirements of each organization, not to force clients into a standard outsourcing model.
            </p>
          </div>
        </div>

        {/* 6 Commitments Grid */}
        <div className="row g-4 mb-5">
          {COMMITMENTS.map((item, idx) => {
            const Icon = COMMITMENT_ICONS[idx] || ShieldCheck;
            return (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="commitment-card">
                  <div className="commitment-icon-wrap mb-3">
                    <Icon size={24} className="text-danger" />
                  </div>
                  <h3 className="commitment-title">{item.title}</h3>
                  <p className="commitment-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision & Mission Cards Enhanced with Real Photo Backgrounds */}
        <div className="row g-4 mb-5">
          {/* Vision */}
          <div className="col-lg-6">
            <div className="vision-mission-card vision-card-enhanced p-4 p-lg-5 h-100 position-relative overflow-hidden">
              <img src="/about-bg.png" alt="Strategic Horizon" className="vm-bg-img" />
              <div className="vm-gradient-overlay" />
              
              <div className="position-relative z-2">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="vm-icon-wrap">
                    <Compass size={28} className="text-white" />
                  </div>
                  <div>
                    <span className="vm-tag">STRATEGIC HORIZON</span>
                    <h3 className="vm-title mb-0">Our Vision</h3>
                  </div>
                </div>
                <p className="vm-body-text">
                  To be the world's trusted 360° business capability partner, enabling organizations to operate smarter, scale faster, and grow stronger across every global vertical.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="col-lg-6">
            <div className="vision-mission-card mission-card-enhanced p-4 p-lg-5 h-100 position-relative overflow-hidden">
              <img src="/team.jpeg" alt="Operational Purpose" className="vm-bg-img" />
              <div className="vm-gradient-overlay vm-mission-overlay" />
              
              <div className="position-relative z-2">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="vm-icon-wrap mission-icon-wrap">
                    <Flag size={28} className="text-white" />
                  </div>
                  <div>
                    <span className="vm-tag">OPERATIONAL PURPOSE</span>
                    <h3 className="vm-title mb-0">Our Mission</h3>
                  </div>
                </div>
                <p className="vm-body-text">
                  To deliver integrated, technology-enabled, and people-driven business solutions across operations, digital, customer experience, technology, knowledge, HR, and corporate support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Partnership Banner with Team Image */}
        <div className="partnership-cta-card p-4 p-lg-5 position-relative overflow-hidden">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="sub-badge-red mb-2 d-inline-block">PARTNERSHIP ROADMAP</span>
              <h3 className="fs-3 fw-bold text-slate-900 mb-2">
                Ready to build an agile, scalable extension of your company?
              </h3>
              <p className="mb-0 text-slate-600" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                Whether you need a specialized 5-person pod or an enterprise GCC with 500+ professionals, our proven capability methodology accelerates time-to-value while de-risking execution.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a 
                href="#contact" 
                className="btn-nexora-primary"
                onClick={(e) => {
                  const el = document.getElementById('contact');
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Request Capability Briefing</span>
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .commitments-nexora-section {
          background: 
            radial-gradient(ellipse 80% 50% at 15% 20%, rgba(254, 215, 170, 0.5) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 85% 75%, rgba(254, 226, 226, 0.55) 0%, transparent 60%),
            #F8FAFC;
          color: #0F172A;
          position: relative;
          overflow: hidden;
        }
        .commitments-nexora-section::before {
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
        .commitments-nexora-section .container {
          position: relative;
          z-index: 1;
        }
        .commitments-nexora-section .nexora-section-badge {
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
        .commitments-nexora-section .nexora-section-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.25;
        }
        .commitments-nexora-section .nexora-lead-text {
          font-size: clamp(1rem, 1.2vw, 1.15rem);
          line-height: 1.75;
          color: #475569;
        }
        .commitment-card {
          background: #FFFFFF;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 20px;
          padding: 32px 26px;
          height: 100%;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02);
        }
        .commitment-card:hover {
          transform: translateY(-7px);
          border-color: #FCA5A5;
          box-shadow: 0 20px 42px rgba(220, 38, 38, 0.12);
        }
        .commitment-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(249, 115, 22, 0.12) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(220, 38, 38, 0.25);
        }
        .commitment-title {
          font-size: 20px;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 10px;
        }
        .commitment-desc {
          color: #64748B;
          font-size: 15px;
          line-height: 1.65;
          margin-bottom: 0;
        }

        /* Enhanced Vision & Mission Cards with Photos */
        .vision-mission-card {
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease;
          border: 1px solid rgba(220, 38, 38, 0.3);
        }
        .vision-mission-card:hover {
          transform: translateY(-5px);
        }
        .vm-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .vision-mission-card:hover .vm-bg-img {
          transform: scale(1.06);
        }
        .vm-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(15, 23, 42, 0.85) 60%, rgba(30, 20, 20, 0.92) 100%);
        }
        .vm-mission-overlay {
          background: linear-gradient(135deg, rgba(30, 10, 10, 0.95) 0%, rgba(20, 10, 10, 0.88) 60%, rgba(15, 23, 42, 0.92) 100%);
        }

        .vm-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #DC2626 0%, #FF5722 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(220, 38, 38, 0.4);
        }
        .mission-icon-wrap {
          background: linear-gradient(135deg, #EA580C 0%, #DC2626 100%);
          box-shadow: 0 4px 14px rgba(234, 88, 12, 0.4);
        }
        .vm-tag {
          display: block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #F97316;
        }
        .vm-title {
          font-size: 26px;
          font-weight: 800;
          color: #FFFFFF;
        }
        .vm-body-text {
          color: #E2E8F0;
          font-size: 16.5px;
          line-height: 1.7;
          margin-bottom: 0;
        }

        .partnership-cta-card {
          background: linear-gradient(135deg, #FFFFFF 0%, #FFF7ED 50%, #FEF2F2 100%);
          border: 1.5px solid #FED7AA;
          border-radius: 24px;
          box-shadow: 0 16px 40px rgba(249, 115, 22, 0.1);
        }
      `}</style>
    </section>
  );
};

export default NexoraCommitment;
