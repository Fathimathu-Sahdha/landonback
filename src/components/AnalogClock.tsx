import { useState, useEffect } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getRotation = () => {
    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return {
      hour: (hours * 30) + (minutes * 0.5), // 30 degrees per hour + minute adjustment
      minute: minutes * 6, // 6 degrees per minute
      second: seconds * 6, // 6 degrees per second
    };
  };

  const { hour, minute, second } = getRotation();

  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 relative md:w-48 md:h-48">
        <svg
          width="192"
          height="192"
          viewBox="0 0 64 64"
          className="drop-shadow-sm w-full h-full"
        >
          {/* Clock face */}
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="white"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
          
          {/* Hour markers */}
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 30) - 90;
            const x1 = 32 + 26 * Math.cos((angle * Math.PI) / 180);
            const y1 = 32 + 26 * Math.sin((angle * Math.PI) / 180);
            const x2 = 32 + 22 * Math.cos((angle * Math.PI) / 180);
            const y2 = 32 + 22 * Math.sin((angle * Math.PI) / 180);
            
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={i % 3 === 0 ? "#374151" : "#9ca3af"}
                strokeWidth={i % 3 === 0 ? "2" : "1"}
              />
            );
          })}

          {/* Hour hand */}
          <line
            x1="32"
            y1="32"
            x2={32 + 14 * Math.cos((hour - 90) * Math.PI / 180)}
            y2={32 + 14 * Math.sin((hour - 90) * Math.PI / 180)}
            stroke="#374151"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Minute hand */}
          <line
            x1="32"
            y1="32"
            x2={32 + 18 * Math.cos((minute - 90) * Math.PI / 180)}
            y2={32 + 18 * Math.sin((minute - 90) * Math.PI / 180)}
            stroke="#374151"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Second hand */}
          <line
            x1="32"
            y1="32"
            x2={32 + 20 * Math.cos((second - 90) * Math.PI / 180)}
            y2={32 + 20 * Math.sin((second - 90) * Math.PI / 180)}
            stroke="#f97316"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Center dot */}
          <circle
            cx="32"
            cy="32"
            r="2"
            fill="#374151"
          />
        </svg>
      </div>
      <p className="text-gray-600 text-sm mt-2">Open 24/7</p>
    </div>
  );
};

export default AnalogClock;