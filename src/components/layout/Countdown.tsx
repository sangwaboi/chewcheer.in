import { useState, useEffect } from 'react';

const TARGET_DATE = new Date('2026-04-01T00:00:00+05:30').getTime();

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const now = Date.now();
        const diff = Math.max(0, TARGET_DATE - now);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        return { days, hours, minutes, seconds, diff };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = () => {
        const { days, hours, minutes, seconds } = timeLeft;
        if (days > 0) return `${days}d ${hours}h ${minutes}m ${seconds}s`;
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    if (timeLeft.diff <= 0) return null;

    return (
        <div className="w-full bg-[#E8F0DC] text-center py-2 font-[Spinnaker] text-sm text-brand-dark">
            countdown timer ends in <span className="font-bold">{formatTime()}</span>
            {' '}&nbsp;
            <a href="#shop" className="font-bold hover:underline cursor-pointer">Buy now!</a>
        </div>
    );
};

export default Countdown;
