import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Outskill Elevate | Know the prospect. Understand their AI opportunity. Know what to say.',
  description: 'Internal sales intelligence copilot for Outskill sales agents during live prospect calls.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Load p5.js and Vanta Topology before interactive */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-screen bg-background text-slate-100 antialiased selection:bg-brand-cyan/30 selection:text-white relative">
        {children}
      </body>
    </html>
  );
}
