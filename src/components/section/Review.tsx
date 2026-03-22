
import { useEffect, useState } from 'react'
import { ArrowRight, ChevronUp, ChevronDown,ChevronLeft,ChevronRight } from 'lucide-react'
import yellowBg from "../../assets/yellowBg.svg"
import stick from "../../assets/stick.png"
import ingredients from "../../assets/ingridients.png"
import stick1 from "../../assets/stick2.png"
import saddog from "../../assets/saddog.svg"
import happydog from "../../assets/dogRemovebg.png"
import round from "../../assets/round.png"
import sickDog from "../../assets/sickDog.png"
import energy from "../../assets/energydrop.svg"
import poop from "../../assets/Group_13-removebg-preview.png"
import gas from "../../assets/gas.svg"
import arrow1 from "../../assets/Group (1).png"
import arrow2 from "../../assets/Group (2).png"
import arrow3 from "../../assets/Group.png"
import goodBacteria from "../../assets/good_bacteria.png"
import balance from "../../assets/good_gut.png"
import happyGut from "../../assets/happy_healthy_dog.png"
import arrowRight from "../../assets/arroowRIght.png"
import group5 from "../../assets/Group (5).png"
import vector from "../../assets/Vector.png"
import vector1 from "../../assets/Vector (1).png"
import paw from "../../assets/Group (4).png"
import greenPaw from "../../assets/Group (5).png"
import greenV1 from "../../assets/Vector (2).png"
import greenV2 from "../../assets/Vector (3).png"
import greenV3 from "../../assets/Vector (4).png"
import milo from "../../assets/milo.svg"
import max from "../../assets/max.svg"
import coco from "../../assets/coco.svg"

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
const arrImgs=[milo,max,coco,]

const Review = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const [img,setImg]=useState<string[]>(arrImgs)

    useEffect(()=>{
        const autoPlayId: number = window.setInterval(() => {
            moveRight();
        }, 3000);

        return () => {
            window.clearInterval(autoPlayId);
        };
    },[])
    const moveLeft=()=>{
        setImg(prev=>{
            const newArr:string[]=[...prev]
            const startImg:string|undefined=newArr.shift()
            if(startImg!==undefined){
                newArr.push(startImg)
            }
            
            return newArr
        })
    }
    const moveRight=()=>{
        setImg(prev=>{
            const newArr:string[]=[...prev]
            const lastImg:string|undefined=newArr.pop()
            if(lastImg!==undefined)newArr.unshift(lastImg)
            return newArr
        })
        
    }
    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='flex justify-center items-center flex-col mt-20 w-full min-w-0'>
            <div>
                <h2 className='font-[Talina] mb-2 max-w-[min(100%,22rem)] px-4 text-center text-[26px] leading-snug tracking-0% text-[#C97064] md:mb-5 md:max-w-none md:px-0 md:text-[40px] md:leading-[100%]'>
                    Trusted by happy dogs everywhere
                </h2>
                <div className='flex flex-row items-center gap-x-5 mt-20 mb-20'>
                    <div className='cursor-pointer' onClick={moveLeft}>
                        <ChevronLeft strokeWidth={5} color='#66261E'/>
                    </div>
                        <div className='flex flex-row items-center w-[1150px] overflow-hidden'>

                        {
                            img.map((img)=>(
                                <img src={img} key={img} className='w-[380px] h-[480px] transition-all duration-300 hover:scale-104'/>
                            ))                          
                        }
                        </div>
                    
                    <div className='cursor-pointer' onClick={moveRight}>
                        <ChevronRight strokeWidth={5} color='#66261E'/>
                    </div>
                </div>
                <div className='font-[Talina] mt-20 max-w-[min(100%,22rem)] px-4 text-center text-[26px] leading-snug text-[#C97064] tracking-0% md:max-w-none md:px-0 md:text-[40px] md:leading-[100%]'>
                    because every dog deserves a happy gut
                </div>

            </div>

            <div className='mt-20 mb-20'>
                <a href="#shop">
                <button className='flex flex-row gap-x-2 font-[Talina] bg-[#4F815E] text-[26px] mt-10 text-white px-5 py-3 rounded-[10px] leading-[100%] tracking-0% font-light cursor-pointer'>
                    Buy chewcheer
                    <ArrowRight strokeWidth={2.5} />
                </button>
                </a>
            </div>
            <div className='font-[Talina] text-[40px] mt-10 text-[#C97064] leading-[100%] tracking-0% '>
                Not all "good boys" have good guts.
            </div>
            {/* Health reason */}
            <div className="relative w-full bg-transparent h-screen mt-10 mb-30">
                <div className="flex justify-end items-center h-full flex-col">

                    {/* Gas cloud - upper left */}
                    <img src={gas} alt="" className='absolute top-[20%] left-[15%]' />
                    <img src={greenV1} alt="" className="absolute top-[28%] left-[18%] -z-10"/>

                    {/* Energy battery - top center */}
                    <img src={energy} alt="" className='absolute top-[10%] left-1/2 -translate-x-1/2' />
                    <img src={greenV2} alt=""  className='absolute -z-10 top-[18%] left-1/2 -translate-x-1/2'/>
                 
                    {/* Poop - right side */}
                    <img src={poop} alt="" className='absolute top-[38%] right-[17%]' />
                    <img src={greenV3} alt="" className="absolute top-[46%] -z-10 right-[20%]"/>
                 
                    {/* Arrow from gas to dog (curves down-right) */}
                    <img src={arrow3} alt="" className="absolute top-[48%] left-[30%] rotate-6" />

                    {/* Arrow from energy down to dog */}
                    <img src={arrow1} alt="" className="absolute top-[35%] left-1/2 -translate-x-1/2" />

                    {/* Arrow from poop to dog (curves left) */}
                    <img src={arrow2} alt="" className="absolute top-[57%] right-[33%]" />

                    <div className=" w-[450px] relative">
                        <img src={sickDog} alt="" />
                        <img src={greenPaw} alt="" className="absolute -z-10 -translate-y-102 rotate-18"/>
                    </div>
                    <span className='font-[Talina] text-[24px] text-wrap text-center text-[#4F815E] leading-[100%] tracking-0%'>
                        Most problems don't start where you see them.
                    </span>
                    <span className='font-[Talina] text-[24px] pt-2 text-wrap text-center text-[#4F815E] leading-[100%] tracking-0%'>
                    They start in the gut. That's where prebiotics help.
                    </span>
                </div>
            </div>

            {/* Health benefits */}
            <div className="border-5 bg-[#E5C68761] border-[#66261E] w-7xl h-fit rounded-[44px] mt-16 px-10 py-10">
                <div className='font-[Talina] text-[40px] mb-10 text-[#66261E] leading-[100%] tracking-0% text-center'>
                    A Happier Gut In 3 Simple Steps
                </div>

                <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-4">

                    <div className="flex flex-col items-center text-center">
                        <div className="h-[250px] flex items-end justify-center mb-4 relative">
                            <img src={goodBacteria} alt="" className="max-h-full object-contain"/>
                            <div className="w-[200px] h-[180px] absolute">
                            <img src={vector} alt="" className="absolute -z-10 -translate-y-12 translate-x-2 "/>
                            </div>
                        </div>
                        <span className="font-[Talina] text-[24px] text-[#66261E] leading-tight mt-2">Feed Good Bacteria</span>
                        <span className="font-[Spinnaker] text-[18px] text-[#C97064] mt-1 px-4">Feeds the good bacteria your dog actually needs.</span>
                        <span className="font-[Talina] text-[28px] text-[#66261E] mt-6 w-10 h-10 flex items-center justify-center rounded-full border-3 border-[#66261E]">1</span>
                    </div>

                    <div className="flex items-center h-[250px]">
                        <img src={arrowRight} alt="" />
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="h-[250px] flex items-end justify-center mb-4 relative">
                            <img src={balance} alt="" className="max-h-full object-contain sha" />
                             <div className="w-[400px] h-[400px] absolute">
                                <img src={paw} alt=""className="absolute -z-10 translate-y-6 rotate-18"/>
                             </div>
                        </div>
                        <span className="font-[Talina] text-[24px] text-[#66261E] leading-tight mt-2">Balance Digestion</span>
                        <span className="font-[Spinnaker] text-[18px] text-[#C97064] mt-1 px-4">Helps digestion do its job. No drama.</span>
                        <span className="font-[Talina] text-[28px] text-[#66261E] mt-6 w-10 h-10 flex items-center justify-center rounded-full border-3 border-[#66261E]">2</span>
                    </div>

                    <div className="flex items-center h-[250px]">
                        <img src={arrowRight} alt="" />
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="h-[250px] flex items-end justify-center mb-4 relative ">
                            <img src={happyGut} alt="" className="max-h-full object-contain" />
                             <div className="w-[200px] h-[180px] absolute ">
                                <img src={vector1} alt=""className="absolute -z-10 -translate-y-20 translate-x-4"/>

                             </div>
                        </div>
                        <span className="font-[Talina] text-[24px] text-[#66261E] leading-tight mt-2 text-nowrap">Happier, Healthier Dogs.</span>
                        <span className="font-[Spinnaker] text-[18px] text-[#C97064] mt-1 px-4">Less gas. Better poop. More zoomies.</span>
                        <span className="font-[Talina] text-[28px] text-[#66261E] mt-6 w-10 h-10 flex items-center justify-center rounded-full border-3 border-[#66261E]">3</span>
                    </div>
                </div>
            </div>
            <div className="font-[Cookie] text-2xl mt-4 mb-30">It’s not magic. It’s just good gut health.</div>

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
            <div className='w-screen relative left-1/2 -translate-x-1/2 bg-[#F5F5F5] py-20 mt-20 overflow-hidden'>
                {/* Sad dog - positioned absolutely at the left edge */}
                <div className='absolute left-30 top-1/2 -translate-y-1/2 w-[240px] h-[240px] flex items-center justify-center'>
                    <img src={saddog} alt=""/>
                </div>
                <div className="absolute -z-10 h-[370px] w-[370px] -translate-y-[-40px] -translate-x-[-60px] rotate-10" >
                <img src={group5} alt="" />
                </div>

                {/* Happy dog - positioned absolutely at the right edge */}
                <div className='absolute right-30 top-1/2 -translate-y-1/2 w-[240px] h-[240px] flex items-center justify-center'>
                    <img src={happydog} alt="" />
                </div>
                <div className="absolute h-[370px] w-[370px] -z-10 right-18 top-1/2 -translate-y-[66%] " >
                <img src={group5} alt="" />
                </div>

                <div className='max-w-3xl mx-auto px-6'>
                    {/* Title */}
                    <h2 className='font-[Talina] text-[40px] text-[#C97064] text-center leading-tight tracking-wider'>
                        From tummy troubles to tail wags
                    </h2>

                    {/* Comparison Grid */}
                    <div className='grid grid-cols-[1fr_auto_1fr] gap-6 items-center mt-14'>

                        {/* LEFT: Before (text only) */}
                        <div className='flex items-center justify-center'>
                            <div>
                                <p className='font-[Spinnaker] text-xl text-gray-500 font-bold mb-4 text-nowrap'>You've probably noticed this...</p>
                                <ul className='space-y-2 text-center font-[Spinnaker] text-sm text-gray-500'>
                                    <div>Tummy acting weird</div>
                                    <div>Poop all over the place</div>
                                    <div>Gassy after meals</div>
                                    <div>Low energy days</div>
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
                            <p className='font-[Cookie] text-[20px] text-[#4F815E] mt-2 text-nowrap'>This is where it changes</p>
                        </div>

                        {/* RIGHT: After (text only) */}
                        <div className='flex items-center justify-center'>
                            <div>
                                <p className='font-[Spinnaker] text-xl text-nowrap text-[#4F815E] font-bold mb-4'>This is how it should be.</p>
                                <ul className='space-y-4 font-[Spinnaker] text-center text-sm text-[#4F815E] font-semibold'>
                                    <div>Smooth, easy digestion</div>
                                    <div>Consistent, healthy poop</div>
                                    <div>More energy, more play</div>
                                    <div>Tail that won't stop wagging</div>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Buy button */}
                    <div className='flex justify-center mt-30 '>
                        <a href="#shop">
                            <button className='flex flex-row items-center gap-x-2 font-[Talina] bg-[#4F815E] text-[26px] text-white px-6 py-3 rounded-[10px] leading-[100%] tracking-0% font-light cursor-pointer'>
                                Buy chewcheer
                                <ArrowRight strokeWidth={2.5} />
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* FAQ Accordion */}
            <div className='w-full max-w-2xl mt-24 mb-20 px-6 relative'>
                <img src={group5} alt="" className="absolute -z-10 -translate-y-[230px] -translate-x-[295px] rotate-[-15deg]"/>
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