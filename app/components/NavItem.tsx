import Link from "next/link";
import React, { FC } from "react";

interface NavItemProps{
  isMobile: boolean;
  activeItem:number;
}

const NavItem:FC<NavItemProps> = ({isMobile,activeItem}) => {

  const navItemData=[
    {
      name:"Home",
      url:"/"
    },
    {
      name:"Courses",
      url:"/courses"
    },
    {
      name:"About",
      url:"/about"
    },
    {
      name:"Policy",
      url:"/policy"
    },

    {
      name:"FAQ",
      url:"/faq"
    }
  ]
  return ( <>
  <div className="hidden 800px:flex">
    {
      navItemData&&navItemData.map((item, index) =><Link href={`${item.url}`} key={index} passHref>
        <span
        className={` ${activeItem===index? "dark:text-[#37a39a] text-[crimson]":"dark:text-white text-black"} text-[18px] px-6 font-Poppins font-[400]`}
        >{item.name}</span>
      </Link>)
    }
    </div>
    {isMobile && <div className="800px:hidden mt-5">
     
    <div className="text-center w-full py-6">
 <Link href={"/"}
 className="text-[25px] font-Poppins font-[500]  text-black dark:text-white"
 >E~Learning</Link>
</div>
        {
      navItemData&&navItemData.map((item, index) =><Link href={`${item.url}`} key={index} passHref>
        <span
        className={` ${activeItem===index? "dark:text-[#37a39a] text-[crimson]":"dark:text-white text-black"} block py-5  text-[18px] px-6 font-Poppins font-[400]`}
        >{item.name}</span>
      </Link>)
    }
      
    </div>
    }
    </> );
}
 
export default NavItem;