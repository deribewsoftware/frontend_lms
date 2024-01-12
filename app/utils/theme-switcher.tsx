"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {BiMoon,BiSun} from 'react-icons/bi'
const ThemeSwicher = () => {
  const [mounted ,setMounted]=useState(false)
  const {theme,setTheme}=useTheme()
  useEffect(() =>{ setMounted(true)},[]);
  if(!mounted){
    return null;
  }
  return ( <div className="flex items-center justify-center mx-4">
    {
      theme==="light"?(
        <BiMoon
        fill="black"
        size={25}
        className="cursor-pointer"
        onClick={()=>setTheme("dark")}
        />
      ):(
        <BiSun
      
        size={25}
        className="cursor-pointer"
        onClick={()=>setTheme("light")}
        />
      )
      }
  </div> );
}
 
export default ThemeSwicher;