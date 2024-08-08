"use client"; // Add this at the top
import { useEffect } from 'react';

const GamePage = () => {
  useEffect(() => {
    // This will redirect to the Unity WebGL build
    window.location.href = '/game/index.html';
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <p>Loading the game...</p>
    </div>
  );
};

export default GamePage; 