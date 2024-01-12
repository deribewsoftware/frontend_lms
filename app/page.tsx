"use client"
import React,{FC,useState} from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/hero";
interface Props{}
const Page:FC<Props> = (props) => {

  const [route,setRoute]=useState("")
  const [open,setOpen]=useState(false);
  const[activeItem,setActiveItem]=useState(0);
  return ( <div>
    <Heading
    title="E~Learning"
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

   <Hero/>
  </div> );
}
 
export default Page;