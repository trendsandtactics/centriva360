import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import NexoraContact from '../Components/Nexora/NexoraContact';
import useSEO from '../hooks/useSEO';

const ContactPage = () => {
  useSEO('contact');

  return (
    <div className="nexora-contact-page">
      <BreadCumb
        bgimg="/aboutbg.png"
        Title="Get in Touch"
      />
      <NexoraContact />

      {/* Chennai Headquarters Map Section */}
      <section className="contact-map-section pb-5 vertical-page-section">
        <div className="container">
          <div className="map-wrapper rounded-4 overflow-hidden border border-danger border-opacity-25 shadow-sm">
            <iframe
              title="Centriva360 Chennai Headquarters"
              src="https://maps.app.goo.gl/BDGgc7VVdoqVeVdf8"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
