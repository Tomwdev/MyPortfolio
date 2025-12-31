import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio", // I updated this from "Create Next App"
  description: "Portfolio site built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-200 relative overflow-x-hidden`}
      >
        {/* Animated Gradient Background */}
        <div className="fixed inset-0 z-[-2] bg-slate-950">
          {/* Animated gradient layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-950 to-teal-900/20 animate-gradient"></div>
          
          {/* Second gradient layer for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-green-900/10 via-transparent to-lime-900/10 animate-gradient-slow"></div>
          
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-[0.3]" style={{backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`, backgroundSize: '100px 100px'}}></div>
          
          {/* Radial glow effect from top */}
          <div className="absolute top-50 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-600/25 rounded-full filter blur-[120px]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}