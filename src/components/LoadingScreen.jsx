import React, { useEffect } from 'react';
import Image1 from '../Image/Logo1.png';

const LoadingScreen = ({ isLoading, onLoadingComplete }) => {
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        if (onLoadingComplete) onLoadingComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 to-black backdrop-blur-sm">
    <div className="relative mb-8">
      <img src={Image1} alt="SecurityEagles Logo" className="w-24 h-24 mx-auto drop-shadow-2xl animate-pulse" />
      <div className="absolute inset-0 rounded-full blur-2xl bg-green-500/30 animate-pulse" />
    </div>
    <div className="text-white text-xl font-bold mb-4 font-mono tracking-wide">Loading SecurityEagles...</div>
    <div className="flex space-x-2 mt-2">
      <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
  </div>
  );
};

export default LoadingScreen; 