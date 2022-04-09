import React from 'react';
import { isMobile } from 'react-device-detect';

export default function Contact() {
  return (
    <div className="page-container">
      <div className="page-content">
        {isMobile && <div className="text-block page-title">Contact</div>}
        <div className="text-block section-title">
          En cours de construction ! <br /> Un peu de patience...
        </div>
      </div>
    </div>
  );
}
