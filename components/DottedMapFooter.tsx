'use client';

import { DottedMap } from '@/components/ui/dotted-map';
import type { Marker } from '@/components/ui/dotted-map';

const markers: Marker[] = [
  {
    lat: -33.9249,
    lng: 18.4241,  // Cape Town, South Africa
    size: 0.3,
  },
  {
    lat: 53.5461,
    lng: -113.4938, // Edmonton, Alberta, Canada
    size: 0.3,
  },
];

export default function DottedMapFooter() {
  return (
    <div className="relative w-full h-32 sm:h-40 md:h-44 overflow-hidden">
      {/* Fade edges so it blends into footer background */}
      <div className="absolute inset-0 bg-radial from-transparent to-[#FCFCFE] to-150% z-10 pointer-events-none" />
      
      <DottedMap
        markers={markers}
        pulse
        className="w-full h-full"
      />
    </div>
  );
}