import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const NexoraAdvantage = () => {
  return (
    <section
      className="advantage-nexora-section py-5 position-relative"
      id="advantage"
    >
      <div className="container py-lg-4">

        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-9">

            <span className="nexora-section-badge mb-2">
              THE CENTRIVA360 360° ADVANTAGE
            </span>

            <h2 className="nexora-section-title mt-2">
              One partner. Multiple capabilities.
              <br />
              <span className="text-gradient-nexora">
                One integrated solution.
              </span>
            </h2>

            <p className="nexora-lead-text mx-auto mt-3">
              What makes Centriva360 different is that clients don't need
              multiple outsourcing partners for different functions. Our
              capabilities work through the same operating model, reporting
              structure, and point of accountability.
            </p>

          </div>
        </div>

        {/* Focus Banner */}
        <div className="advantage-focus-banner overflow-hidden position-relative p-4 p-lg-5 text-center">

          <img
            src="/Productdistribution.jpg"
            alt="Enterprise Distribution and Scale"
            className="banner-photo-bg"
          />

          <div className="banner-photo-overlay" />

          <div className="position-relative z-2">

            <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle bg-danger bg-opacity-25 text-danger mb-3 border border-danger">
              <ShieldCheck size={32} />
            </div>

            <h3 className="text-white fw-bold mb-3 display-6">

              You focus on your core business.
              <br className="d-none d-sm-block" />

              <span className="text-gradient-nexora">
                We take care of the capabilities that keep it moving.
              </span>

            </h3>

            <p
              className="text-slate-200 mx-auto mb-4"
              style={{
                color: '#E2E8F0',
                maxWidth: '720px',
                fontSize: '16.5px',
                lineHeight: '1.7'
              }}
            >
              Eliminate the hassle of juggling multiple agencies,
              vendors, and contractors. Partner with an integrated
              powerhouse engineered for operational velocity and SLA
              excellence.
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">

              <a
                href="#contact"
                className="btn-nexora-primary"
              >
                <span>Start an engagement</span>
                <ArrowRight size={17} />
              </a>

              <Link
                to="/about"
                className="btn-nexora-secondary"
              >
                <span>Learn our methodology</span>
              </Link>

            </div>

          </div>

        </div>

      </div>

      <style>{`

        .advantage-nexora-section {
          background:
            radial-gradient(
              ellipse 70% 50% at 85% 15%,
              rgba(254, 215, 170, 0.5) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse 60% 50% at 15% 75%,
              rgba(254, 226, 226, 0.55) 0%,
              transparent 60%
            ),
            radial-gradient(
              circle at 50% 50%,
              rgba(254, 215, 170, 0.3) 0%,
              transparent 50%
            ),
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
            radial-gradient(
              rgba(148, 163, 184, 0.25) 1.2px,
              transparent 1.2px
            );

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

          background:
            linear-gradient(
              135deg,
              rgba(220, 38, 38, 0.08) 0%,
              rgba(249, 115, 22, 0.1) 100%
            );

          border: 1px solid rgba(220, 38, 38, 0.25);

          box-shadow:
            0 2px 10px rgba(220, 38, 38, 0.06);

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

        /* Focus Banner */

        .advantage-focus-banner {
          border-radius: 24px;
          border: 1px solid rgba(220, 38, 38, 0.25);

          box-shadow:
            0 20px 50px rgba(15, 23, 42, 0.12);
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

          background:
            linear-gradient(
              135deg,
              rgba(15, 23, 42, 0.94) 0%,
              rgba(30, 20, 25, 0.9) 100%
            );
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

          box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {

          .advantage-focus-banner {
            border-radius: 18px;
          }

        }

      `}</style>

    </section>
  );
};

export default NexoraAdvantage;
