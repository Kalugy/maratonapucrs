"use client";

import React from "react";

const GradientBackground = ({ children, className }) => {
  const gradientStyles = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.5))',
    backgroundSize: '200% 200%',
    animation: 'gradient 30s ease infinite',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  };

  return (
    <div className={`relative ${className}`}>
      <div style={gradientStyles} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
export default GradientBackground;