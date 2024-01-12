"use client"
import { useState } from "react";
import SidebarProfile from "./sidebarProfile";


interface ProfileProps{
  user:any;
 
  
}
const Profile:React.FC<ProfileProps> = ({user,}) => {
  const [scroll,setScroll]=useState(false);
  const [avatar,setAvatar]=useState(null);
  const [active,setActive]=useState(1);

  if (typeof window !== "undefined" ){
    if (window.scrollY>85){
    window.addEventListener("scroll",()=>{

      
     if(window.scrollY>85){ 
      setScroll(true)
    }
    else{
      setScroll(false)
    }
    });
  }}



  const logouthandler=()=>{

  }
  return ( <div className="w-[85%] flex mx-auto">
    <div className={`w-[60px] 800px:w-[310px] 
    h-[450px] 
    dark:bg-slate-900
    bg-white
     bg-opacity-90 
     shadow-sm 
     rounded-[5px] 
     my-[80px] 
     sticky
      border
       dark:border-[#ffffff1d]
       border-[#00000014]
       ${scroll? 'top-[120px]':'top-[30px]'}
       `}>
       <SidebarProfile
       user={user}
       avatar={avatar}
       active={active}
       setActive={setActive}
       logouthandler={logouthandler}
       />
       </div>
  </div> );
}
 
export default Profile;