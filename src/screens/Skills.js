import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

export default function Skills() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-container">
      <div className="page-content">
        {isMobile && <div className="text-block page-title">Mon travail</div>}
        <div className="text-block section-title">
          En cours de construction ! <br /> Un peu de patience...
        </div>
      </div>
    </div>
  );
}

// Fast
// Fast load times and lag free interaction, my highest priority.
// Responsive
// My layouts will work on any device, big or small.
// Intuitive
// Strong preference for easy to use, intuitive UX/UI.
// Dynamic
// Websites don't have to be static, I love making pages come to life.

// I’M SPECIALISED IN
// responsive design
// RESPONSIVE WEB DESIGN
// I have gained a lot of experience designing and building many responsive websites. I have developed a personal approach to testing different solutions that has brought me to design mostly in the browser.

// story telling
// STORYTELLING
// I believe a story can be brought to life with the right combination of copy, images and animation. Every story deserves a unique approach to reach people in an engaging way.

// Concepting
// CONCEPTING
// My interests in many different fields has helped me to stay curious, open and flexible. These attributes have been essential in the concepting of digital ideas.

// Interaction Design
// INTERACTION DESIGN
// A key area of focus in my design process is to ensure the best interaction for each situation to guide the user in their digital journey, as this is essential in creating engaging and effective experiences.

// Prototyping
// PROTOTYPING
// I started my career as a web designer. Although I'm no longer a developer, my coding knowledge gives me the ability to prototype even complex ideas
