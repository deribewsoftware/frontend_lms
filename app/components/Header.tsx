"use client"
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import NavItem from "./NavItem";
import ThemeSwicher from "../utils/theme-switcher";
import {HiOutlineMenuAlt3, HiOutlineUserCircle} from 'react-icons/hi'
import CustomModal from "../utils/custom-modal";
import Login from "./auth/login";
import Signup from "./auth/signup";
import Verification from "./auth/verification";
import { useSelector } from "react-redux";
import Image from "next/image";
import Avatar from '../../public/assets/avatar.png';
import { useSession } from "next-auth/react";
import { useSocialAuthMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

interface Props{
  open: boolean;
  setOpen(open: boolean): void;
  activeItem:number;
  route:string;
  setRoute:(route:string) => void;
}
const Header:FC<Props> = ({activeItem,open,setOpen,setRoute,route}) => {
  const [active,setActive]=useState(false)
  const [openSidebar,setOpenSidebar]=useState(false)
  const {user}=useSelector((state:any)=>state.auth)
  const {data}=useSession();
  console.log("data:",data);
  console.log("user:",user)
  const [socialAuth,{isSuccess,error}]=useSocialAuthMutation();
  useEffect(()=>{
if(!user){
  if(data){
    socialAuth({email:data.user?.email,name:data.user?.name,avatar:data.user?.image})
  }
  if(isSuccess){
    toast.success("Login successfully")
  }
}
  },[user,data]);

  if (typeof window !== "undefined" ){
    if (window.scrollY>85){
    window.addEventListener("scroll",()=>{

      
     if(window.scrollY>85){ 
      setActive(true)
    }
    else{
      setActive(false)
    }
    });
  }}

const handleClose=(e:any)=>{
  if(e.target.id==="screen"){
    setOpenSidebar(false);
  }

}
  return ( <div className="w-full relative">
   <div className={`${active? "w-full dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transtion duration-500":"h-[80px] z-[80] border-b dark:border-[#ffffff1c] dark:shadow  w-full"}`}>
    
    <div className="w-[95%] 800px:[w-92%] py-2 h-full m-auto">
      

      <div className="w-full flex items-center justify-between h-[80px] p-3">
<div className="">
 <Link href={"/"}
 className="text-[25px] font-Poppins font-[500]  text-black dark:text-white"
 >E~Learning</Link>
</div>
<div className="flex items-center ">
  <NavItem
  activeItem={activeItem}
  isMobile={false}
  />

  <ThemeSwicher/>


 {/* only for mobile users */}
  <div className="800px:hidden">
  <HiOutlineMenuAlt3
  size={25}
  className="
  cursor-pointer
  
  dark:text-white
  text-black
  "
  onClick={()=>setOpenSidebar(true)}
  />
  </div>

  {
    user? (
      <Link href="/profile">
        <Image
      src={user.avatar? user.avatar:Avatar}
      alt={user.name}
      className="h-[30px] w-[30px] rounded-full object-contain cursor-pointer "
      />
      </Link>
    ):(
      <HiOutlineUserCircle
  size={25}
  className="
  hidden
  800px:block
  cursor-pointer
  
  dark:text-white
  text-black
  "
  onClick={()=>{
    setOpen(true)
    setRoute("Login")
  }}
  />
    )
  }
  
</div>
      </div>
    </div>
    

    {/* mobile menu bar */}

    {openSidebar&&(
      <div className="fixed  w-full to-0 left-0  z-[99999] dark:bg-[unset] bg-[#00000024] "
      onClick={handleClose}
      id="screen"
      >
<div className="fixed bg-white w-[70%] h-screen z-[999999999] top-0 right-0 dark:bg-slate-900 dark:bg-opacity-90">
<NavItem
  activeItem={activeItem}
  isMobile={true}
  />

<HiOutlineUserCircle
  size={25}
  className="
  ml-5 my-2
  cursor-pointer
  
  dark:text-white
  text-black
  "
  onClick={()=>{
    setOpen(true);
    
  }}
  />

  <br />
  <br />
  <p className="text-[16px] pl-5 px-2  dark:text-white
  text-black">
    copy right &copy; 2023 
  </p>
</div>
      </div>
    )}
  
   
   </div>


   {
    route==="Login" &&(
      open &&(
        <><CustomModal
            open={open}
            setOpen={setOpen}
            activeItem={activeItem}
            component={Login}
            setRoute={setRoute} /></>
      )

    )
   }

   {
    route==='Sign-up'&&(
      open &&(
        <><CustomModal
            open={open}
            setOpen={setOpen}
            activeItem={activeItem}
            component={Signup}
            setRoute={setRoute} /></>
      )
    )
   }

{
    route==='Verification'&&(
      open &&(
        <><CustomModal
            open={open}
            setOpen={setOpen}
            activeItem={activeItem}
            component={Verification}
            setRoute={setRoute} /></>
      )
    )
   }
  </div> );
}
 
export default Header;