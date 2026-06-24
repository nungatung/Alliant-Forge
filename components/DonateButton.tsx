'use client';

import React from 'react';

interface DonateButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function DonateButton({ className = '', onClick }: DonateButtonProps) {
  return (
    <div className={`bg-conic-gradient bg-[300%_300%] rounded-full p-0.5 hover:scale-105 transition-all duration-300 active:scale-100 animate-conic-shine ${className}`}>
      <button
        onClick={onClick}
        className="px-8 py-2 text-sm font-semibold text-white rounded-full bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
      >
        Donate Now
      </button>
    </div>
  );
}