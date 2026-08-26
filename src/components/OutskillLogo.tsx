'use client';

import React from 'react';

interface OutskillLogoProps {
  className?: string;
  size?: number;
}

export function OutskillLogo({ className = 'w-8 h-8', size = 32 }: OutskillLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Rounded Square */}
      <rect width="100" height="100" rx="22" fill="#0A0E0A" />

      {/* Row 1 */}
      <circle cx="28" cy="28" r="11" fill="#FFFFFF" />
      <circle cx="50" cy="28" r="11" fill="#FFFFFF" />
      {/* Sparkle Star in top right */}
      <path
        d="M72 15 C72 23, 76 28, 85 28 C76 28, 72 33, 72 41 C72 33, 68 28, 59 28 C68 28, 72 23, 72 15 Z"
        fill="#FFFFFF"
      />

      {/* Row 2 */}
      <circle cx="28" cy="50" r="11" fill="#A3E635" />
      <circle cx="50" cy="50" r="11" fill="#A3E635" />
      <circle cx="72" cy="50" r="11" fill="#A3E635" />

      {/* Row 3 */}
      <circle cx="28" cy="72" r="11" fill="#A3E635" />
      <circle cx="50" cy="72" r="11" fill="#A3E635" />
      <circle cx="72" cy="72" r="11" fill="#FFFFFF" />
    </svg>
  );
}
