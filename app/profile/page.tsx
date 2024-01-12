"use client"
import { useState } from "react";
import Header from "../components/Header";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";
import { useSelector } from "react-redux";
import Profile from "../components/profile/Profile";


const ProfilePage = () => {
  const [route,setRoute]=useState("")
  const [open,setOpen]=useState(false);
  const[activeItem,setActiveItem]=useState(0);
  const {user} = useSelector((state:any)=>state.auth)
  return ( <Protected>
    <Heading
    title={`${user?.name} profile`}
    description="E~Learning from the students learning  and get help from teachers platforms"
    keywords="Programming , Learning ,development,Business,Art"
    />
   <Header
   route={route}
   setRoute={setRoute}

   open={open}
   setOpen={setOpen}
   activeItem={activeItem}
   />
   <Profile
   user={user}
   />
  </Protected> );
}
 
export default ProfilePage;