import logo from '../../assets/Group 7.svg'
const Header = () => {
  return (
    <div className='font-[Spinnaker] left-0 w-full min-w-0 bg-[#4F815E]/80 px-3 py-3 sm:px-6'>
      <div className='mx-auto flex max-w-full flex-wrap items-center md:flex-nowrap md:justify-between md:gap-4'>
        <div className="shrink-0">
          <img src={logo} alt="logo" className="h-auto max-h-12 w-auto shrink-0 object-contain sm:max-h-14 md:max-h-none" />
        </div>
        
        <nav className="mt-2 flex w-full basis-full flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium md:order-2 md:mt-0 md:flex-1 md:basis-auto md:justify-center md:gap-8 md:text-sm">
          <a href="#shop" className="text-white transition-colors hover:text-brand-yellow">Shop</a>
          <a href="#science" className="text-white transition-colors hover:text-brand-yellow">The Science</a>
          <a href="#our-story" className="text-white transition-colors hover:text-brand-yellow">Our Story</a>
          <a href="#blogs" className="text-white transition-colors hover:text-brand-yellow">Blogs</a>
        </nav>
        
        <a href="#shop" className='flex text-nowrap md:order-3'>
          <button className="shrink-0 rounded-[10px] bg-white px-3 py-2 text-xs font-bold text-[#4F815E] shadow-sm cursor-pointer transition-all hover:text-[#22422b] sm:px-5 sm:py-3 sm:text-sm md:order-3 md:ml-0">
          Subscribe & Save 10%
        </button>
        </a>

      </div>
    </div>
  )
}

export default Header
