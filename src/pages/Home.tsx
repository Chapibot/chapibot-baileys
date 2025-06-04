import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import LeadForm from '../components/LeadForm';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Features />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Home; 