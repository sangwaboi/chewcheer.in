
import product from '../../assets/Group 11.svg'
import { ArrowRight } from 'lucide-react';
import tick from '../../assets/bitcoin-icons_check-filled.png'
const Hero = () => {
  return (
    <section className="relative w-full min-h-screen min-w-0 overflow-hidden">

      {/*  MAIN GRID */}
      <div className="relative z-10 flex h-full w-full min-w-0 items-center justify-center max-md:px-3 md:px-0">

        {/*  CENTER — mobile: constrained column + stacked CTA; md+: original centered hero */}
        <div className="relative flex w-full max-w-[min(100%,32rem)] flex-col items-center text-center md:w-auto md:max-w-none">

          <h1 className="mt-3 px-1 font-[Talina] font-semi-bold text-shadow-lg text-white max-md:text-4xl max-md:whitespace-normal md:px-0 md:text-6xl md:whitespace-nowrap lg:text-7xl">
            Tiny Chew. Big Cheer.
          </h1>

          <p className="mt-4 max-w-xl px-1 font-[Spinnaker] text-white/80 max-md:text-base md:px-0 md:text-lg">
            Prebiotic chew sticks that keep your dog’s gut healthy and digestion smooth.
          </p>

          {/* Mobile-only: quote + CTA in document flow */}
          <div className="mt-6 w-full max-w-sm text-center font-[Cookie] text-3xl text-[#4F815E] md:hidden">
            because your dog’s tummy deserves better.
          </div>

          <img
            src={product}
            className="relative z-10 w-[min(100%,320px)] drop-shadow-2xl md:w-[420px] lg:w-[500px]"
            alt=""
          />

          <div className="mt-6 flex w-full max-w-sm flex-col items-center gap-3 md:hidden">
            <a
              href="#shop"
              className="flex items-center gap-2 rounded-xl bg-[#4F815E] px-6 py-3 font-extrabold no-underline"
            >
              <span className="font-[Talina] text-xl tracking-wider text-white sm:text-[26px]">Buy chewcheer</span>
              <ArrowRight color="#fff" aria-hidden />
            </a>
            <ul className="text-left font-[Spinnaker] text-sm text-[#4F815E] sm:text-base">
              <li><img src={tick} className="mr-2 inline" alt="" />Vet friendly</li>
              <li><img src={tick} className="mr-2 inline" alt="" />Natural ingredients</li>
              <li><img src={tick} className="mr-2 inline" alt="" />Loved by dogs</li>
            </ul>
          </div>

          {/* Desktop-only: same DOM/classes as pre-responsive (positioning vs shrink-wrapped column) */}
          <div className="absolute bottom-[130px] left-[-120px] hidden w-[220px] text-center font-[Cookie] text-3xl text-[#4F815E] md:block">
            <div className="relative">
              <div className='flex flex-col'>
                <span>
                  because your dog’s 
                </span>
                <span>
                  tummy deserves better.
                </span>
              </div>
              <div className="absolute right-[-90px] bottom-[40px] -z-10">
                <svg width="153" height="89" viewBox="0 0 153 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.2797 53.9654L15.0517 47.5627M3.2797 53.9654L1.49657 39.8401M3.2797 53.9654C19.7058 15.1125 66.5983 -14.4403 100.438 10.9934C134.278 36.4271 101.72 85.5633 85.8583 71.7868C69.9944 58.0109 100.934 28.8681 120.706 33.7038C140.478 38.5398 141.963 57.2327 136.108 72.4394C130.253 87.646 118.059 89.9981 116.812 82.236C115.564 74.4719 136.881 68.3159 150.757 86.5422"
                    stroke="#4F815E"
                    strokeWidth="3"
                    strokeMiterlimit="16"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute cursor-pointer z-10 bottom-[100px] right-[-60px] hidden flex flex-col items-start gap-3 md:flex">
            <a href="#shop">
              <div className="flex items-center gap-2 rounded-xl bg-[#4F815E] px-6 py-3 font-extrabold no-underline ">
                <button className="font-[Talina] text-[26px] tracking-wider text-white cursor-pointer">Buy chewcheer</button>
                <ArrowRight color="#fff" aria-hidden />
              </div>
            </a>
            <ul className="text-left text-[#4F815E] font-[Spinnaker]">
              <li><img src={tick} className="inline mr-2" alt="" />Vet friendly</li>
              <li><img src={tick} className="inline mr-2" alt="" />Natural ingredients</li>
              <li><img src={tick} className="inline mr-2" alt="" />Loved by dogs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
