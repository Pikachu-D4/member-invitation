"use client";

import { useEffect, useState } from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import ParticlesBackground from '@/components/ParticlesBackground';
import CursorTrail from '@/components/CursorTrail';
import { Sparkles, Calendar, Film } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <ParticlesBackground />
      <CursorTrail />
      
      <main className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
        <div
          className={`w-full max-w-4xl transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`
          }>

          {/* Main Invitation Card */}
          <div className="glassmorphic rounded-3xl p-8 md:p-12 lg:p-16 text-center space-y-8 md:space-y-12 relative">
            {/* Pulse glow effect */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />

            
            <div className="relative z-10 space-y-8 md:space-y-12">
              {/* Header */}
              <div
                className={`space-y-4 transform transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
                }>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
                  <span className="text-cyan-400 uppercase tracking-widest text-sm font-inter font-semibold !whitespace-pre-line">MEP INVITATION

                  </span>
                  <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-cinzel leading-tight">
                  New Year 2026
                </h1>
                
                <div className="inline-block">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent font-cinzel font-medium">AMV MEP

                  </h2>
                  <div className="h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 mt-2" />
                </div>
              </div>

              {/* Event Details */}
              <div
                className={`space-y-6 transform transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
                }>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/80">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span className="font-inter text-lg !whitespace-pre-line">1 January to Hawaii Standard Time (HST).</span>
                  </div>
                  <div className="hidden md:block w-1 h-1 rounded-full bg-white/40" />
                  <div className="flex items-center gap-3">
                    <Film className="w-5 h-5 text-fuchsia-400" />
                    <span className="font-inter text-lg !whitespace-pre-line">Submission Before 20 December</span>
                  </div>
                </div>
                
                <p className="text-white/80 font-inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  A collaborative New Year celebration where talented editors unite to showcase 
                  their creativity through stunning anime music videos. Join us in creating 
                  something extraordinary together!
                </p>
              </div>

              {/* Countdown Timer */}
              <div
                className={`transform transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
                }>

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl text-white/90 font-cinzel mb-2 !whitespace-pre-line">NEW YEAR Countdown

                  </h3>
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent max-w-xs mx-auto" />
                </div>
                <CountdownTimer />
              </div>

              {/* Creative Tagline */}
              <div
                className={`transform transition-all duration-700 delay-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
                }>

                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <span className="text-cyan-400 font-inter font-semibold">Create</span>
                    <span className="text-white/40">•</span>
                    <span className="text-fuchsia-400 font-inter font-semibold">Collaborate</span>
                    <span className="text-white/40">•</span>
                    <span className="text-pink-400 font-inter font-semibold">Celebrate</span>
                  </div>
                  
                  <p className="text-white/60 text-sm font-inter italic !whitespace-pre-line !whitespace-pre-line">Let's Create Something Wonderfull.

                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            className={`text-center mt-8 transform transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
            }>

            <p className="text-white/40 text-sm font-inter">
              © 2026 New Year AMV MEP. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>);

}