import React from 'react';
import ProjectSection from './project-section';
import AboutSection from './about-section';
import ContactSection from './contact-section';
import ImageLocationSection from './image-loaction-section';

export default function PageContent() {
  return (
    <>
      {/* Page content */}
      <div className='w3-content w3-padding' style={{ maxWidth: 1564 }}>
        <ProjectSection />
        <AboutSection />
        <ContactSection />
        <ImageLocationSection />
        {/* End page content */}
      </div>
    </>
  );
}
