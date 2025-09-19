import React from "react";

const OnePieceSVG = () => (
  <svg id="jolly" viewBox="0 0 120 60" className="w-10 h-10">
    <g>
      <circle cx="60" cy="30" r="10" fill="white" opacity=".9" />
      <rect x="53" y="36" width="14" height="6" rx="3" fill="white" opacity=".9" />
      <circle cx="56" cy="30" r="3.2" fill="#0b1220" />
      <circle cx="64" cy="30" r="3.2" fill="#0b1220" />
      <g stroke="white" strokeWidth="3" strokeLinecap="round" opacity=".9">
        <line x1="42" y1="18" x2="78" y2="42" />
        <line x1="78" y1="18" x2="42" y2="42" />
      </g>
      <ellipse cx="60" cy="24" rx="18" ry="6" fill="#F2C14E" />
      <rect x="50" y="19" width="20" height="4" fill="#F43F5E" />
    </g>
  </svg>
);

export default OnePieceSVG;
