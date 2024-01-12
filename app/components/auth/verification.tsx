"use client"

import { useActivationMutation } from "@/redux/features/auth/authApi";
import { Style } from "../../../app/styles/style";
import { FC, useEffect, useRef, useState } from "react";
import {VscWorkspaceTrusted} from "react-icons/vsc"
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

type Props={
  setRoute:(route:string)=>void;
}
type verifyNumbers={
"0":string;
"1":string;
"2":string;
"3":string;
}

const Verification:FC<Props> = ({setRoute}) => {

  const [invalidError, setInvalidError] =useState(false);
  const [verifyNumbers,setVerifyNumbers] = useState({
    "0":"",
    "1":"",
    "2":"",
    "3":""
    });

    const {token}=useSelector((state:any)=>state.auth);
    const [activation,{isSuccess,error}]=useActivationMutation();
    useEffect(()=>{
      if(isSuccess) {
        toast.success("Activation Account Successfully ")
        setRoute("Login");
      }
      if(error) {
        if("data" in error){
          const errorData=error as any;
          toast.error(errorData.data.message)
         

        }
        else{
          console.log("error occurred: " ,error)
        }
      }
    },[isSuccess,error]);
  const inputRefs=[
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)

  ];

  const handleVerification=async()=>{
    const verificationNumbers=Object.values(verifyNumbers).join("")
    if(verificationNumbers.length!==4){
setInvalidError(true)
return;
    }

  
    await activation({
      activation_token:token,
      activation_code:verificationNumbers
    })
  }
  const handleInputChange=async(index:number,value:string)=>{
    setInvalidError(false);
    const newVerifyNumbers={...verifyNumbers,[index]:value}
    setVerifyNumbers(newVerifyNumbers)
    if(value==="" && index>0){
      inputRefs[index-1].current?.focus()
    }
    else if(value.length===1 && index<3){
      inputRefs[index+1].current?.focus()
    }
  }
  return ( <div className="">
    <h1 className={`${Style.title}`}>Verify Your Account</h1>
    <br />
    <div className="flex items-center justify-center mt-2">
      <div className="flex items-center justify-center h-[80px] w-[80px] rounded-full bg-[#497DF2] ">
<VscWorkspaceTrusted size={40}/>
      </div>

    </div>

    <br />
    <br />
    <div className="flex items-center justify-around  m-auto">
      {Object.keys(verifyNumbers).map((key,index)=>{
        return <input
         key={key} 
        type="number" 
        ref={inputRefs[index]}
        placeholder=""
        maxLength={1}
        value={verifyNumbers[key as keyof verifyNumbers]}
        onChange={(e)=>handleInputChange(index,e.target.value)}
        className={`
        w-[65px]
         h-[65px]
         bg-trasparent 
         border-[3px]
          rounded-[10px]
         flex items-center
          justify-center 
          text-black 
          dark:text-white
          text-[18px]
          font-poppins
          text-center
          outline-none
          ${
            invalidError ? "shake border-red-500":"dark:border-white border-[#0000004a]"
          }
         `}
         />
      })}

    </div>
    <br />
    <br />
  <div className="flex justify-center w-full">
  <button 
    onClick={handleVerification}
    className={`${Style.button}`}
    >Verify OTP</button>
  </div>
  <br />
  <br />
  <h5 className="
    text-center
     pt-4 
    font-Poppins 
    text-black
    dark:text-white
    text-[14px]">
     Go back to Signin ? {" "}
      <span className="text-[#2190ff] pl-1 cursor-pointer"
      onClick={() =>setRoute("Login")}
      >
        Sign in
      </span>

    </h5>
  </div> );
}
 
export default Verification;