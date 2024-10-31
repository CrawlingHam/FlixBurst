import { useState } from 'react';
import { LogoIcon } from '@/assets/wavyLines';
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

export const SideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navigationItems = [
    { label: "Features", page: "Features" },
    { label: "Workflow", page: "Workflow" },
    { label: "Pricing", page:  "Pricing"},
    { label: "Testimonials", page: "Testimonials" }
  ]

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-center items-center">

          <div className="flex items-center flex-shrink-0">
            <LogoIcon/>
            <span className="text-xl tacking-tight">Virtual Someting</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            { navigationItems.map((item, page) => (
              <li>
                <a></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );

  /*
    return (
        <div>
        {*---------------------------------------------Navigation For Mobile Screens---------------------------------------------------------------------------------------------------------------------------------*}
        <AiOutlineMenu onClick={handleNav} className="fixed top-[5%] right-[5%] z-[99] md:hidden"></AiOutlineMenu>
        {
            nav ? (
                <div className="fixed w-full h-screen bg-white/40 flex flex-col justify-center items-center z-20">
                    <a onClick={handleNav} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineHome size={20}></AiOutlineHome>
                        <span className="pl-4">Home</span>
                    </a>
                    <a onClick={handleNav} href="#work" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <GrProjects size={20}></GrProjects>
                        <span className="pl-4">Work</span>
                    </a>
                    <a onClick={handleNav} href="#projects" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineProject size={20}></AiOutlineProject>
                        <span className="pl-4">Projects</span>
                    </a>
                    <a onClick={handleNav} href="#contacts" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <AiOutlineMail size={20}></AiOutlineMail>
                        <span className="pl-4">Contacts</span>
                    </a>
                    <a onClick={handleNav} href="#about" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <BsPerson size={20}></BsPerson>
                        <span className="pl-4">About</span>
                    </a>
                </div>
            )
            : (
                ""
            )
        }
    {/---------------------------------------------Navigation For Computer Screens---------------------------------------------------------------------------------------------------------------------------------*}
        <div className="md:block hidden fixed top-[15%] z-10">
            <div className="flex flex-col ">
                <a href="#main" className="flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" title="main">
                    <AiOutlineHome size={20}></AiOutlineHome>
                </a>
                <a href="#work" className="flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" title="about">
                    <GrProjects size={20}></GrProjects>
                </a>
                <a href="#projects" className="flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" title="projects">
                    <AiOutlineProject size={20}></AiOutlineProject>
                </a>
                <a href="#contacts" className="flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" title="contacts">
                    <AiOutlineMail size={20}></AiOutlineMail>
                </a>
                <a href="#about" className="flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" title="about">
                    <BsPerson size={20}></BsPerson>
                </a>
            </div>
        </div>
    </div>
    );
    */
};
