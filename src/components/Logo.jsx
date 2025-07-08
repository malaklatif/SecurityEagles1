import React from 'react';
import { Shield } from 'lucide-react';
import Image from '../Image/Logo.png'
const Logo = () => {
  return (
    <a href="/" className="flex items-center space-x-2">
      <img src={Image} className="h-8 w-8 text-blue-400" />
      <span className="text-2xl font-bold text-white">Security Eagles</span>
    </a>
  );
};
export default Logo; 