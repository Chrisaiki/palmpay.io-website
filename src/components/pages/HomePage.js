import React from 'react';

// Custom Components
import HomeHeader from '../HomeHeader';
import {
  AboutSection,
  MainSection,
  ServicesSection,
  TestimoniesSection
} from '../sections';
import Footer from '../Footer';

import "./HomePage.css";

/**
 * Home page component.
 */
function HomePage() {
  return (
    <span>
      <HomeHeader />

      <MainSection />

      <ServicesSection />

      <AboutSection />

      <TestimoniesSection />

      <Footer />

    </span>
  );
}

export { HomePage };
