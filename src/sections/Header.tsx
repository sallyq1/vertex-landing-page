import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from '@/assets/menu.svg'
import VertexLogo from '@/assets/SVG/Asset 2.svg'

const Header = () => {
  return (
    <>
    <div className="sticky top-0 backdrop-blur-md z-50 ">
      <div>
         <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-2">
          <p>New Users are Eligible for 14-day Free Trial</p>
          <ArrowRight className="h-4 w-4 justify-center items-center" />
        </div> 
      </div>

      <div className="flex items-center justify-between py-3 px-5 md:px-16 lg:px-20 lg:py-5 ">
       <div className="flex items-center gap-3">
       {/* <Image src={Logo} alt="Saas Logo" className="h-10 w-10 "/> */}
       <VertexLogo className="h-10 w-10" />

       <h1 className="section-title text-[30px]">Vertex</h1>
        </div> 

        <MenuIcon className="h-8 w-8 md:hidden"/>

        <nav className="hidden md:flex gap-6 text-black/80 items-center "> 
          <a href="#"  className='link'>About</a>
          <a href="#" className='link'>Features</a>
          <a href="#" className='link'>Customers</a>
          <a href="#" className='link'>Updates</a>
          <a href="#" className='link'>Help</a>
          <button className=" btn btn-primary ">Get for free</button>
        </nav>

       
      </div>
      </div>
      
    </>
  );
};

export default Header;
