          object-fit: cover;
        }

        .modal-img-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              transparent 40%,
              rgba(11, 15, 23, 0.85) 100%
            );
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
          font-size: clamp(1.75rem, 3vw, 2.2rem);
          font-weight: 900;
          color: #020617;
          line-height: 1.2;
          letter-spacing: -0.6px;
          margin-bottom: 10px;
          padding-bottom: 12px;
          border-bottom: 3px solid #FEE2E2;
          text-wrap: balance;
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
          color: #991B1B;
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
