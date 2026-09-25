import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import NexoraAbout from '../Components/Nexora/NexoraAbout';
import NexoraCommitment from '../Components/Nexora/NexoraCommitment';
import useSEO from '../hooks/useSEO';

const AboutPage = () => {
  useSEO('about');

  return (
    <div className="nexora-about-page">
      <BreadCumb
        bgimg="/aboutbg.png"
        Title="About Centriva360"
      />
      <NexoraAbout />
      <NexoraCommitment />
    </div>
  );
};

export default AboutPage;
