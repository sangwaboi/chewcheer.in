import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import milo from '../../assets/Ellipse 5.png'
import paw1 from '../../assets/Group (4).png'
const MiloChat = () => {
    const [message, setMessage] = useState('');

    const suggestions = [
        'How long before result?',
        'Can I give it daily?',
        'How long before result?',
    ];

    return (
        <section className="w-full min-w-0 bg-[#F5F5F5] font-[Spinnaker]">
            {/* Main Content Area */}
            <div className="relative w-full">
                {/* Tan/Beige band background */}
                <div className="absolute inset-0 bg-[#E5C687]" />

                <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-5 mb-5">
                    {/* LEFT: Got questions? */}
                    <div className="relative -z-10">
                        {/* Paw watermark — user will replace with real image/svg */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-[-330px] -translate-y-1/2 w-[400px] h-[400px] rotate-[-5deg] pointer-events-none">
                            <img src={paw1} alt="" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-[Talina] font-bold text-brand-dark leading-tight tracking-wider">
                            Got questions?
                            <br />
                            Milo got answers
                        </h2>

                        <p className="mt-5 font-[Cookie] text-lg md:text-xl text-[#4F815E] leading-relaxed max-w-sm text-wrap">
                            No question is too small... from poop worries to
                            picky eaters.
                        </p>
                        <p className="font-[Cookie] text-lg md:text-xl text-[#4F815E]">
                            Ask away.
                        </p>
                    </div>

                    {/* RIGHT: Chat Widget */}
                    <div className="flex justify-center md:justify-end ">
                        <div className="w-full max-w-[340px] bg-white rounded-2xl shadow-2xl border-3 border-[#4F815E] overflow-hidden">
                            {/* Chat header */}
                            <div className="px-5 py-4 flex items-center gap-3 border-b border-gray-100">
                                {/* Avatar placeholder — user will replace */}
                                <div className="w-10 h-10 rounded-full bg-[#EAD9B5] flex items-center justify-center text-xl">
                                    <img src={milo} alt="" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-extrabold text-lg text-brand-dark">Milo</span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#4F815E]" />
                                </div>
                            </div>

                            {/* Chat body */}
                            <div className="px-5 py-4">
                                {/* Bot message bubble */}
                                <div className="bg-[#E8F0DC] border border-[#4F815E]/30 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                                    <p className="text-sm text-brand-dark leading-relaxed">
                                        Hey! What's up with your dog today?
                                    </p>
                                </div>
                            </div>

                            {/* Input area */}
                            <div className="px-5 pb-4">
                                <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2">
                                    <input
                                        type="text"
                                        placeholder="How long before result?"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="flex-1 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
                                    />
                                    <button className="flex items-center gap-1.5 bg-[#4F815E] hover:bg-[#3d6a4a] text-white text-sm font-semibold px-4 py-1.5 rounded-full transition-colors cursor-pointer">
                                        Send
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>

                            {/* Suggestions */}
                            <div className="px-5 pb-5">
                                <ul className="space-y-1">
                                    {suggestions.map((s, i) => (
                                        <li
                                            key={i}
                                            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer hover:text-[#4F815E] transition-colors"
                                        >
                                            <span className="text-gray-400">•</span>
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CHEWCHEER large text banner */}
            <div className="relative w-full overflow-hidden py-4">
                <div
                    className="text-center font-[Talina] font-black tracking-[0.15em] leading-none select-none"
                    style={{
                        fontSize: 'clamp(80px, 12vw, 200px)',
                        background: 'linear-gradient(180deg, rgba(79, 129, 94, 0.05) 0%, rgba(79, 129, 94, 0.3) 30%, #4F815E 60%, #4F815E 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    CHEWCHEER
                </div>
            </div>
        </section>
    );
};

export default MiloChat;
