import React, { useState } from 'react'
import logo from '../assets/RCorp_logo.svg'
const Navbar = () => {
  const [IsNavOpen, setIsNavOpen] = useState(false)
  const [fix, setFix] = useState(false)

  const setFixed = () => {
    if (window.scrollY >= 300) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener('scroll', setFixed)
  return (
    <div
      style={{
        position: fix ? 'fixed' : 'unset',
        background: fix ? 'white' : 'transparent',
        margin: fix ? '0' : '',
        right: '0',
        width: '100%',
        zIndex: '10000',
      }}
    >
      <div className="justify-between relative  container mx-auto px-2 my-3 z-40 flex items-center">
        <div className="flex w-full  sm:gap-4 items-center justify-between sm:w-auto">
          <img className="w-14 z-10" src={logo} alt="Awesome Logo" />
          <div
            onClick={() => setIsNavOpen(!IsNavOpen)}
            className="flex justify-self-start xl:hidden gap-1 flex-col z-40"
          >
            <div className="bg-black w-6 h-1"></div>
            <div className="bg-black w-6 h-1"></div>
            <div className="bg-black w-6 h-1"></div>
          </div>
        </div>
        <nav className="hidden xl:flex">
          <ul className="flex text-grey  items-center justify-between gap-16">
            <a href="#home" className="hover:text-black ease-in duration-300">
              <li>Home</li>
            </a>
            <a
              className="hover:text-black ease-in duration-300"
              href="#feature"
            >
              <li>Features</li>
            </a>
            {/* <a className="hover:text-black ease-in duration-300" href="#video">
              <li>Video</li>
            </a> */}
            <a
              className="hover:text-black ease-in duration-300"
              href="#pricing"
            >
              <li>Plans</li>
            </a>
            <a
              className="hover:text-black ease-in duration-300"
              href="#interface"
            >
              <li>App Screenshots</li>
            </a>
            <a
              className="hover:text-black ease-in duration-300"
              href="#question"
            >
              <li>FAQs</li>
            </a>
          </ul>
        </nav>
        {/*Mobile Nav */}
        <nav
          className="mobile-nav"
          style={{ display: IsNavOpen ? 'flex' : 'none' }}
        >
          <ul className="flex flex-col absolute left-0 right-0 top-20 py-7 px-7 bg-dark-blue text-white  items-start justify-between gap-16">
            <a href="#home" className="hover:text-black  ease-in duration-300">
              <li>Home</li>
            </a>
            <a
              className="hover:text-black ease-in duration-300"
              href="#feature"
            >
              <li>Features</li>
            </a>
            {/* <a className="hover:text-black ease-in duration-300" href="#video">
              <li>Video</li>
            </a> */}
            <a
              className="hover:text-black ease-in duration-300"
              href="#pricing"
            >
              <li>Pricing</li>
            </a>
            <a
              className="hover:text-black ease-in duration-300"
              href="#interface"
            >
              <li>App Screenshots</li>
            </a>
            <a
              className="hover:text-black ease-in duration-300"
              href="#interface"
            >
              <li>News</li>
            </a>
          </ul>
        </nav>

        <button
          onClick={() => {
            window.open(
              'mailto:rcorpops@gmail.com?subject=Would%20like%20to%20contact%20an%20RCorp%20Agent&body=Hi%20👋,%0AI%20am%20...%0AAnd%20I%20would%20like%20to%20receive%20advice%20for ...',
            )
          }}
          className="login-btn hidden sm:flex border-2 border-orange font-medium py-3 px-10 rounded bg-none"
        >
          Contact
        </button>
      </div>
    </div>
  )
}

export default Navbar
