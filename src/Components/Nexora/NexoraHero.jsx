import React, { useEffect, useState } from 'react';
import Header3 from '../Header/Header3';
import { getHomeHero } from '../../utils/homeHeroData';

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
            aria-label="Centriva360 Hero Video Banner"
          >
            <source src={videoSrc} type="video/mp4" />
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Top gradient overlay to ensure legibility for transparent header */}
        <div className="hero-overlay-top" aria-hidden="true" />
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
          height: 100vh;
          min-height: 100dvh;
          height: 100dvh;
          overflow: hidden;
          background: #0B0F17;
          display: flex;
          align-items: center;
          justify-content: center;
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

        .hero-overlay-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 160px;
          background: linear-gradient(
            180deg,
            rgba(11, 15, 23, 0.75) 0%,
            rgba(11, 15, 23, 0.3) 60%,
            transparent 100%
          );
          z-index: 1;
          pointer-events: none;
        }

        @media (max-width: 991px) {
          .hero-video-banner {
            min-height: 80vh;
            height: 80vh;
            min-height: 80dvh;
            height: 80dvh;
          }
          .hero-overlay-top {
            height: 130px;
          }
        }

        @media (max-width: 575px) {
          .hero-video-banner {
            min-height: 70vh;
            height: 70vh;
            min-height: 70dvh;
            height: 70dvh;
          }
          .hero-overlay-top {
            height: 110px;
          }
        }
      `}</style>
    </section>
  );
};

export default NexoraHero;
