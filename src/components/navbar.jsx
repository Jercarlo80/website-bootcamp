import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const links = [
        {
            id: 1,
            link: 'Program',
            href: '#Program'
        },
        {
            id: 2,
            link: 'Bidang Ilmu',
            href: '#BidangIlmu'
        },
        {
            id: 3,
            link: 'Tentang edspert',
            href: '#TentangEdspert'
        },
        
    ]
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };
  return (
    <div className="flex justify-between items-center w-full h-20 fixed bg-[#152A46]">
      <h1 className="text-white font-bold text-[28px] cursor-pointer ml-[120px] mt-[38px] ">LOGO.</h1>
      <ul className="hidden md:flex   ">
        {links.map(({ id, link, href }) => (
          <li
            key={id}
            className="
              px-[52px] 
              mt-[40px]
              text-white
              hover:scale-110 
              duration-200 
              hover:text-white 
              cursor-pointer
            "
          >
            <a href={href}>{link}</a>
            
          </li>
        ))}
        <button className='w-[148px] h-[48px] rounded-[50px] bg-[#FF6161] mr-[99px]  mt-[28px] text-white hover:scale-110   '>Masuk/Daftar</button>
      </ul>

      <div onClick={toggleNav} className="cursor-pointer pr-4 z-10 text-white md:hidden">
        {navOpen ? <FaTimes className="text-white" size={30} /> : <FaBars size={30} />}
        {navOpen && (
          <ul className="
            flex
            flex-col
            justify-center
            items-center
            absolute
            top-0
            left-0
            w-full
            h-screen
            bg-gradient-to-b
            from-black
            to-gray-800
            text-white
          ">
            {links.map(({ id, link, href }) => (
              <li
                key={id}
                className="
                  px-4 
                  py-12
                  text-2xl
                  text-gray-500 
                  hover:scale-110 
                  duration-200 
                  hover:text-white 
                  cursor-pointer
                "
              >
                <a href={href}>{link}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Navbar