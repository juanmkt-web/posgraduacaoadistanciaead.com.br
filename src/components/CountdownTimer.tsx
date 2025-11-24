import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="flex gap-2 md:gap-3 justify-center items-center">
      <TimeUnit value={formatNumber(timeLeft.days)} label="dias" />
      <span className="text-xl md:text-2xl font-bold text-accent">:</span>
      <TimeUnit value={formatNumber(timeLeft.hours)} label="horas" />
      <span className="text-xl md:text-2xl font-bold text-accent">:</span>
      <TimeUnit value={formatNumber(timeLeft.minutes)} label="min" />
      <span className="text-xl md:text-2xl font-bold text-accent">:</span>
      <TimeUnit value={formatNumber(timeLeft.seconds)} label="seg" />
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-lg px-2 py-2 md:px-4 md:py-3 min-w-[50px] md:min-w-[70px] text-center">
      <span className="text-2xl md:text-3xl font-bold text-white">{value}</span>
    </div>
    <span className="text-xs md:text-sm text-muted-foreground mt-1">{label}</span>
  </div>
);
