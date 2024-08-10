"use client"; 
import { useEffect, useState } from 'react';
import Link from 'next/link';

const GamePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 5000); // Set the loading state to true after 5 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  const handleIframeLoad = () => {
    setIsLoaded(true); // Set the loading state to true when the iframe loads
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-gray-100">
      <Link href="/" passHref>
        <p className="absolute top-4 left-4 p-2 bg-gray-800 text-white rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </p>
      </Link>

      <div className="flex flex-col items-center justify-center w-full h-full">
        {!isLoaded && <p>Loading the game...</p>}
        <iframe
          id="unity-iframe"
          src="/game/index.html"
          className={`w-full h-full ${!isLoaded ? 'hidden' : ''}`}
          frameBorder="0"
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
};


export default GamePage; 