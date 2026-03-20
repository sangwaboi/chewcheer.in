import logo from '../../assets/Group 7.svg'
const Header = () => {
  return (
    <div>
      <div className='font-[Spinnaker] w-full bg-[#4F815E]/80 flex items-center justify-between px-6 py-3'>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#shop" className="hover:text-brand-yellow transition-colors text-white">Shop</a>
          <a href="#science" className="hover:text-brand-yellow transition-colors text-white">The Science</a>
          <a href="#our-story" className="hover:text-brand-yellow transition-colors text-white">Our Story</a>
          <a href="#blogs" className="hover:text-brand-yellow transition-colors text-white">Blogs</a>
        </nav>

        <button className="bg-white text-[#4F815E] px-5 py-3 rounded-[10px] text-sm font-bold cursor-pointer hover:text-[#22422b] transition-all shadow-sm">
          Subscribe & Save 10%
        </button>
      </div>
    </div>
  )
}

export default Header