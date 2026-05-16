import logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import ScrollSpy from 'react-scrollspy-navigation';

function Navber() {
  const [manushow, setManushow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <ScrollSpy activeClass="nav-active">
        <nav
          className={`fixed top-0 left-0 z-50 w-full px-4 lg:px-0 transition-all duration-500 ease-in-out
          ${
            isScrolled
              ? 'py-4 bg-white backdrop-blur-md shadow-lg translate-y-0'
              : 'pt-7 lg:pt-[57px] bg-transparent -translate-y-1 md:translate-y-0'
          }`}
        >
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <a href="#banner">
                  <img src={logo} alt="Logo" />
                </a>
              </div>

              <div
                className={`manu hidden lg:block ${isScrolled ? 'scrolled' : ''}`}
              >
                <ul className="flex lg:gap-[68px] font-medium transition-colors duration-500">
                  <li>
                    <a href="#banner">Home</a>
                  </li>

                  <li>
                    <a href="#clint">Careers</a>
                  </li>

                  <li>
                    <a href="#service">Service</a>
                  </li>

                  <li>
                    <a href="#work">Work</a>
                  </li>

                  <li>
                    <a href="#review">About</a>
                  </li>
                </ul>
              </div>

              <div className="flex items-center gap-4">
                <div className="button hidden lg:block">
                  <a
                    href="#contact"
                    className="lg:py-[15px] py-3 lg:px-[42px] px-9 bg-[#6A4DF4] rounded-[10px] font-inter font-semibold leading-[26px] text-[16px] lg:text-[20px] text-[white]"
                  >
                    Contact
                  </a>
                </div>

                <FaBars
                  onClick={() => setManushow(!manushow)}
                  className={`text-[30px] lg:hidden block cursor-pointer transition-colors duration-500 ${
                    isScrolled ? 'text-black' : 'text-white'
                  }`}
                />
              </div>
            </div>
          </div>

          <div
            className={`manu2 lg:hidden bg-white fixed top-0 right-0 z-50 
                      w-[100%] h-screen flex flex-col items-center justify-center gap-6
                      transition-all ease-in-out duration-500 text-black text-xl font-medium
                      ${manushow ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <button
              onClick={() => setManushow(false)}
              className="absolute top-5 left-5 text-black font-bold text-[34px]"
            >
              <IoCloseSharp />
            </button>

            <a href="#banner" onClick={() => setManushow(false)}>
              Home
            </a>

            <a href="#clint" onClick={() => setManushow(false)}>
              Careers
            </a>

            <a href="#service" onClick={() => setManushow(false)}>
              Service
            </a>

            <a href="#work" onClick={() => setManushow(false)}>
              Work
            </a>

            <a href="#review" onClick={() => setManushow(false)}>
              About
            </a>

            <button className="py-[14px] px-[33.5px] bg-[#6A4DF4] rounded-[10px] font-inter font-semibold leading-[26px] text-[20px] text-[white] mt-4">
              Sign up
            </button>

            <button className="py-[14px] px-[42px] bg-[#6A4DF4] rounded-[10px] font-inter font-semibold leading-[26px] text-[20px] text-[white]">
              Login
            </button>
          </div>
        </nav>
      </ScrollSpy>
    </>
  );
}

export default Navber;
