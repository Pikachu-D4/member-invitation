
"use client";

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const targetDate = new Date('2026-01-01T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-4 md:gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="glassmorphic rounded-2xl p-4 md:p-6 text-center">
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">00</div>
            <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Loading</div>
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-6">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="glassmorphic rounded-2xl p-4 md:p-6 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
          style={{
            animation: `float 3s ease-in-out infinite`,
            animationDelay: `${index * 0.2}s`,
          }}
        >
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-cinzel">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider font-inter">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
