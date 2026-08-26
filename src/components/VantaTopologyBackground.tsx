'use client';

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    p5?: any;
    VANTA?: {
      TOPOLOGY?: (options: any) => any;
    };
  }
}

interface VantaTopologyBackgroundProps {
  color?: number;
  backgroundColor?: number;
}

export function VantaTopologyBackground({
  color = 0x4e9678,
  backgroundColor = 0x080a0f
}: VantaTopologyBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let vantaEffect: any = null;
    let isCancelled = false;

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () => resolve();
        document.head.appendChild(script);
      });
    };

    const startVanta = async () => {
      // 1. Ensure p5 is available
      if (typeof window !== 'undefined' && !window.p5) {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js');
      }

      // 2. Ensure vanta.topology is available
      if (typeof window !== 'undefined' && (!window.VANTA || !window.VANTA.TOPOLOGY)) {
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js');
      }

      // 3. Poll briefly if scripts are still registering
      let attempts = 0;
      const checkAndInit = () => {
        if (isCancelled) return;
        if (containerRef.current && window.VANTA && typeof window.VANTA.TOPOLOGY === 'function') {
          try {
            vantaEffect = window.VANTA.TOPOLOGY({
              el: containerRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: color,
              backgroundColor: backgroundColor
            });
          } catch (e) {
            console.error('Error initializing Vanta Topology:', e);
          }
        } else if (attempts < 20) {
          attempts++;
          setTimeout(checkAndInit, 100);
        }
      };

      checkAndInit();
    };

    startVanta();

    return () => {
      isCancelled = true;
      if (vantaEffect && typeof vantaEffect.destroy === 'function') {
        try {
          vantaEffect.destroy();
        } catch (err) {
          // ignore
        }
      }
    };
  }, [color, backgroundColor]);

  return (
    <div
      id="vanta-topology-bg"
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-auto -z-10 overflow-hidden"
      style={{
        backgroundColor: '#080A0F',
      }}
    />
  );
}
