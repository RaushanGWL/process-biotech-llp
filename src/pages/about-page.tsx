import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutHero from '../components/about/about-hero';
import AboutWhoWeAre from '../components/about/about-who-we-are';
import VisionMission from '../components/about/vision-mission';
import CoreValues from '../components/about/core-values';
import JourneyTimeline from '../components/about/journey-timeline';
import LeadershipSection from '../components/home/leadership-section';
import ExpertiseSection from '../components/home/expertise-section';
import Certifications from '../components/about/certifications';
import AboutCTA from '../components/about/about-cta';

const AboutPage: React.FC = () => {
  // Ensure we start at the top of the page on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      <Header />
      <AboutHero />
      <AboutWhoWeAre />
      <VisionMission />
      <CoreValues />
      <JourneyTimeline />
      <LeadershipSection />
      <ExpertiseSection />
      <Certifications />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default AboutPage;
