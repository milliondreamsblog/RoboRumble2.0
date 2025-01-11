import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-01-20T00:00:00');
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section text-center py-10">
      <h2 className="text-3xl text-primary font-bold">Event Starts In</h2>
      <div className="countdown-timer flex justify-center gap-4 mt-6">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="time-block bg-black border border-primary rounded-lg p-4"
          >
            <span className="number text-4xl text-secondary">{value}</span>
            <span className="label text-primary">{unit}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CountdownTimer;
