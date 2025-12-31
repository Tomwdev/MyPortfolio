import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 relative overflow-x-hidden transition-colors duration-300`}>
        {/* Animated Gradient Background */}
        <div className="fixed inset-0 z-[-2] bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          {/* Animated gradient layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 dark:from-emerald-900/20 via-slate-100 dark:via-slate-950 to-teal-200/30 dark:to-teal-900/20 animate-gradient transition-colors duration-300"></div>
          
          {/* Second gradient layer for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-green-200/20 dark:from-green-900/10 via-transparent to-lime-200/20 dark:to-lime-900/10 animate-gradient-slow transition-colors duration-300"></div>
          
          {/* Light mode grid overlay */}
          <div className="absolute inset-0 opacity-[0.3] dark:hidden" style={{backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)`, backgroundSize: '100px 100px'}}></div>
          
          {/* Dark mode grid overlay */}
          <div className="absolute inset-0 opacity-[0.4] hidden dark:block" style={{backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`, backgroundSize: '100px 100px'}}></div>
          
          {/* Radial glow effect from top */}
          <div className="absolute top-50 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-400/20 dark:bg-emerald-600/25 rounded-full filter blur-[120px] transition-colors duration-300"></div>
        </div>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}