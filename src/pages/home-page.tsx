import React from 'react';
import Header from '../components/header';
import HeroSection from '../components/home/hero-section';
import WhoWeAre from '../components/home/who-we-are';
import AboutSection from '../components/home/about-section';
import VisionSection from '../components/home/vision-section';
import ExpertiseSection from '../components/home/expertise-section';
import LeadershipSection from '../components/home/leadership-section';
import DiverseApplications from '../components/home/diverse-applications';
import GetInTouch from '../components/home/get-in-touch';
import Footer from '../components/footer';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Header />
      <HeroSection />
      <WhoWeAre />
      <AboutSection />
      <VisionSection />
      <ExpertiseSection />
      <LeadershipSection />
      <DiverseApplications />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default HomePage;
