"use client"

import React, { FC, useEffect, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import {AiOutlineEye,AiOutlineEyeInvisible,AiFillGithub} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import { Style } from "../../../app/styles/style";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

type Props={
  setRoute: (route:string) =>void;
}
const schema=Yup.object().shape({
  name:Yup.string().required("please enter your name"),
  email:Yup.string().email("invalid email").required("please enter a valid email"),
  password:Yup.string().required("please enter a valid password").min(6),
})
const Signup:FC<Props> = ({setRoute}) => {
  const [show,setshow]=useState(false);
  const [register,{isError,data,error,isSuccess}]=useRegisterMutation();

  useEffect(()=>{
    if(isSuccess){
      const message=data.message||"Registration successfully"
      toast.success(message);
      setRoute("Verification")
    }
    if(error){
      if("data" in error){
        const errorData=error as any;
        toast.error(errorData.data.message);
      }
    }

  },[isSuccess,error]);


  const formik=useFormik({
    initialValues: {
      name:"",
      email:"",password:"",
    },
    validationSchema:schema,
    onSubmit: async ({name,email,password})=>{

     const data={name,email,password}
     await register(data);
    }
  })
  const {errors,touched,values,handleChange,handleSubmit}=formik;
  return ( <div className="w-full">
   <h1 className={`${
    Style.title
   }`}>
Join to E~Learning
   </h1>

   <form onSubmit={handleSubmit}>

    <div className="mb-5">
    <label 
    htmlFor="name"
    className={`${Style.label}`}
    >
Enter your name 
    </label>
    <input
    id="name"
     type="text" 
     value={values.name}
     onChange={handleChange}
     placeholder="Deribew"
     className={`${ errors.name&& touched.name&& 'border-red-500'}
    ${Style.input}
     `}
    />
    {
      errors.name && touched.name&&(
        <span className="text-red-500 pt-2 block">
          {errors.name}
        </span>
      )
    }

    </div>
    <label 
    htmlFor="email"
    className={`${Style.label}`}
    >
Enter your email 
    </label>
    <input
    id="email"
     type="email" 
     value={values.email}
     onChange={handleChange}
     placeholder="loginmail@gmail.com"
     className={`${ errors.email && touched.email&& 'border-red-500'}
    ${Style.input}
     `}
    />
    {
      errors.email && touched.email&&(
        <span className="text-red-500 pt-2 block">
          {errors.email}
        </span>
      )
    }





    <div className="mt-5 relative w-full mb-1">

    <label 
    htmlFor="password"
    className={`${Style.label}`}
    >
Enter your password
    </label>
   

<input
    id="password"
    name="password"
     type={!show? "password":"text"}
     value={values.password}
     onChange={handleChange}
     placeholder="password@!%"
     className={`${ errors.password && touched.password&& 'border-red-500'}
     ${Style.input}
      `}
    />

    
    {
      !show? (<AiOutlineEyeInvisible
      size={20}
      className="absolute bottom-3 right-2 z-1 cursor-pointer"
      onClick={()=>setshow(true)}
      />):(<AiOutlineEye
        size={20}
        className="absolute bottom-3 right-2 z-1 cursor-pointer"
        onClick={()=>setshow(false)}
      />)
     
    }
{
   errors.password && touched.password&&(
    <span className="text-red-500 pt-2 block">
      {errors.password}
    </span>
  )
}
    </div>

    <div className="w-full mt-5">
      <input type="submit" 
      value="Sign Up"
      className={`${Style.button}`}
      
      />
    </div>
    <br />
    <h5 className="pt-4 
    text-center
    font-Poppins
    text-[14px]
    text-black
    dark:text-white
    ">Or Join with</h5>
    <div className="flex items-center justify-center my-3">
      <FcGoogle
      size={30}
      className="cursor-pointer mr-2"
      onClick={() =>signIn("google")}
      />
      <AiFillGithub
      onClick={() =>signIn("github")}
      size={30}
      className="cursor-pointer 
       text-black
      dark:text-white
     
      ml-2"
      />
    </div>

    <h5 className="
    text-center
     pt-4 
    font-Poppins 
    text-black
    dark:text-white
    text-[14px]">
     Already have an Account? {" "}
      <span className="text-[#2190ff] pl-1 cursor-pointer"
      onClick={() =>setRoute("Login")}
      >
        Sign in
      </span>

    </h5>
   </form>
    </div> );
}
 
export default Signup;