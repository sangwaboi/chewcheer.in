import review from "../../assets/Frame 40.png"
import { useState } from 'react'
import { ArrowRight, ChevronUp, ChevronDown } from 'lucide-react'
import yellowBg from "../../assets/yellowBg.svg"
import stick from "../../assets/stick.png"
import ingredients from "../../assets/ingridients.png"
import stick1 from "../../assets/stick2.png"
import saddog from "../../assets/saddog.svg"
import happydog from "../../assets/happy.svg"
import round from "../../assets/round.png"

const faqData = [
    {
        question: "What exactly does ChewCheer do?",
        answer: "ChewCheer contains prebiotic ingredients that help support healthy gut bacteria, which improves digestion and overall gut balance in dogs."
    },
    {
        question: "How many sticks should I give my dog?",
        answer: "We recommend 1 stick per day for small dogs (under 10kg) and 2 sticks per day for larger dogs. Always ensure fresh water is available."
    },
    {
        question: "Is ChewCheer safe for daily use?",
        answer: "Yes! ChewCheer is made with all-natural ingredients and is designed to be a daily supplement for your dog's digestive health."
    },
    {
        question: "How long before I see results?",
        answer: "Most pet parents notice improvements in their dog's digestion within 2-4 weeks of daily use. Every dog is different, so results may vary."
    },
    {
        question: "Can puppies have ChewCheer?",
        answer: "ChewCheer is recommended for dogs 6 months and older. For younger puppies, please consult your veterinarian first."
    },
];

const Review = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='flex justify-center items-center flex-col mt-20 w-full min-w-0'>
            <h2 className='font-[Talina] mb-2 max-w-[min(100%,22rem)] px-4 text-center text-[26px] leading-snug tracking-0% text-[#C97064] md:mb-5 md:max-w-none md:px-0 md:text-[40px] md:leading-[100%]'>
                Trusted by happy dogs everywhere
            </h2>
            <img src={review} alt="" className="mt-10 max-w-full h-auto" />
            <div className='font-[Talina] mt-20 max-w-[min(100%,22rem)] px-4 text-center text-[26px] leading-snug text-[#C97064] tracking-0% md:max-w-none md:px-0 md:text-[40px] md:leading-[100%]'>
                because every dog deserves a happy gut
            </div>

            <div className='mt-20 mb-20'>
                <a
                    href="#shop"
                    className='mt-10 inline-flex flex-row items-center gap-x-2 rounded-[10px] bg-[#4F815E] px-5 py-3 font-[Talina] text-[26px] font-light leading-[100%] tracking-0% text-white no-underline'
                >
                    Buy chewcheer
                    <ArrowRight strokeWidth={2.5} aria-hidden />
                </a>
            </div>
            <div className='font-[Talina] mt-10 max-w-[min(100%,22rem)] px-4 text-center text-[26px] leading-snug text-[#C97064] tracking-0% md:max-w-none md:px-0 md:text-[40px] md:leading-[100%]'>
                Not all "good boys" have good guts.
            </div>

            {/* Science section */}
            <div id="science" className='w-full min-w-0'>
                <div className='font-[Talina] mt-10 px-4 text-center text-[26px] leading-snug text-[#C97064] tracking-0% md:text-[40px] md:leading-[100%]'>
                    What's inside? Exactly what you see.
                </div>
                <div className='relative mt-10 min-h-[320px] w-full sm:min-h-[420px] md:h-[500px] md:min-h-[500px]'>
                    <img src={yellowBg} alt="" className='absolute w-full h-full object-cover' />
                    <img src={stick} alt="" className='absolute left-1/2 translate-y-4 -translate-x-1/2 h-full object-contain z-10' />
                    <img src={ingredients} alt="" className='absolute left-1/2 -translate-x-[47%] translate-y-10 h-full object-contain' />
                </div>
                <div className='font-[Talina] mx-auto mt-10 max-w-[min(100%,20rem)] px-4 text-center text-[20px] leading-snug text-[#C97064] tracking-0% md:max-w-none md:px-0 md:text-[26px] md:leading-[100%]'>
                    No fillers. No junk.<br></br>
                    If it’s not real, it’s not in here.
                </div>
            </div>

            {/* From tummy troubles to tail wags */}
            <div className='w-full min-w-0 bg-[#F5F5F5] py-20 mt-20'>
                <div className='max-w-5xl mx-auto px-6'>
                    {/* Title */}
                    <h2 className='font-[Talina] text-center text-[26px] leading-snug tracking-wider text-[#C97064] md:text-[40px] md:leading-tight'>
                        From tummy troubles to tail wags
                    </h2>

                    {/* Comparison Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-6 items-center mt-14'>

                        {/* LEFT: Before */}
                        <div className='flex flex-col items-center gap-4 sm:flex-row sm:items-center'>
                            {/* Sad dog SVG placeholder */}
                            <div className='w-[140px] h-[140px] shrink-0 flex items-center justify-center'>
                                <span className='text-gray-400 text-xs text-center font-[Spinnaker]'><img src={saddog} alt="" className="max-w-full h-auto" /></span>
                            </div>
                            <div className="min-w-0 text-center sm:text-left">
                                <p className='font-[Spinnaker] text-xl text-gray-500 font-bold mb-4 whitespace-normal md:whitespace-nowrap'>You've probably noticed this...</p>
                                <ul className='space-y-2 font-[Spinnaker] text-sm text-gray-500'>
                                    <li>Tummy acting weird</li>
                                    <li>Poop all over the place</li>
                                    <li>Gassy after meals</li>
                                    <li>Low energy days</li>
                                </ul>
                            </div>
                        </div>

                        {/* CENTER: Stick + arrow */}
                        <div className='flex flex-col items-center'>
                            {/* Stick + circular arrow SVG placeholder */}
                            <div className='w-[80px] h-[200px] flex items-center justify-center'>
                                <span className='text-gray-400 text-xs text-center font-[Spinnaker] relative'><img src={stick1} alt="" className=''/>
                                <img src={round} alt="" className='absolute top-13 left-0' /></span>
                            </div>
                            <p className='font-[Cookie] text-lg text-[#4F815E] mt-2'>This is where it changes</p>
                        </div>

                        {/* RIGHT: After */}
                        <div className='flex flex-col items-center gap-4 sm:flex-row sm:items-center'>
                            <div className="min-w-0 text-center sm:text-left">
                                <p className='font-[Spinnaker] text-xl text-[#4F815E] font-bold mb-4'>This is how it should be.</p>
                                <ul className='space-y-4 font-[Spinnaker] text-sm text-[#4F815E] font-semibold'>
                                    <li>Smooth, easy digestion</li>
                                    <li>Consistent, healthy poop</li>
                                    <li>More energy, more play</li>
                                    <li>Tail that won't stop wagging</li>
                                </ul>
                            </div>
                            {/* Happy dog SVG placeholder */}
                            <div className='w-[140px] h-[140px] shrink-0 flex items-center justify-center'>
                                <span className='text-gray-400 text-xs text-center font-[Spinnaker]'><img src={happydog} alt="" className="max-w-full h-auto" /></span>
                            </div>
                        </div>
                    </div>

                    {/* Buy button */}
                    <div className='flex justify-center mt-14'>
                        <a
                            href="#shop"
                            className='inline-flex flex-row items-center gap-x-2 rounded-[10px] bg-[#4F815E] px-6 py-3 font-[Talina] text-[26px] font-light leading-[100%] tracking-0% text-white no-underline'
                        >
                            Buy chewcheer
                            <ArrowRight strokeWidth={2.5} aria-hidden />
                        </a>
                    </div>
                </div>
            </div>

            {/* FAQ Accordion */}
            <div className='w-full max-w-2xl mt-24 mb-20 px-6'>
                <h2 className='font-[Talina] mx-auto mb-10 max-w-[min(100%,22rem)] px-4 text-center text-[26px] font-bold leading-snug tracking-wider text-black md:max-w-none md:px-0 md:text-[42px] md:leading-tight'>
                    Curious?<br />So were we.
                </h2>

                <div className='flex flex-col gap-3'>
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className='border-2 border-[#4F815E] rounded-xl overflow-hidden transition-all duration-300'
                        >
                            <button
                                type="button"
                                onClick={() => toggleFaq(index)}
                                className='w-full flex items-center justify-between px-6 py-4 cursor-pointer bg-white hover:bg-gray-50 transition-colors min-h-[48px]'
                            >
                                <span className='font-[Spinnaker] text-base text-left text-gray-800'>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp size={20} className='text-gray-800 shrink-0 ml-4' />
                                ) : (
                                    <ChevronDown size={20} className='text-gray-800 shrink-0 ml-4' />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className='px-6 pb-5 text-sm font-[Spinnaker] text-gray-600 leading-relaxed'>
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Review