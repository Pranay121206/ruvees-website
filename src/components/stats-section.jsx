import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ value, display }) {
  const [current, setCurrent] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || triggered) return;

        setTriggered(true);
        const duration = 1800;
        const steps = 60;
        const interval = duration / steps;
        let step = 0;

        const timer = setInterval(() => {
          step += 1;
          const progress = step / steps;
          const eased = 1 - Math.pow(1 - progress, 4);
          setCurrent(Math.floor(eased * value));

          if (step >= steps) {
            setCurrent(value);
            clearInterval(timer);
          }
        }, interval);

        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [triggered, value]);

  const formatValue = (count) => {
    if (value >= 1000000) {
      return `${(count / 1000000).toFixed(count === value ? 0 : 1)}M+`;
    }

    if (value >= 1000) {
      return `${(count / 1000).toFixed(count === value ? 0 : 1)}K+`;
    }

    return count.toString();
  };

  return <span ref={ref}>{current === value ? display : formatValue(current)}</span>;
}

export default function StatsSection({ stats }) {
  return (
    <div className="stats-section">
      <div className="stats-inner">
        {stats.map((stat, index) => (
          <div key={index} className="stat-cell">
            <div className="stat-val">
              <AnimatedCounter value={stat.value} display={stat.display} />
            </div>
            <div className="stat-lbl">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
