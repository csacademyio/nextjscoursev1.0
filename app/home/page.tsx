import React from 'react'
// import {Inter} from "next/font/google"
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const page = () => {

    // const inter = Inter({
    //     subsets: ["latin"],
    //     weight: ["400", "500", "600", "700"],
    //     variable: "--font-inter"
    // })
  return (
    <div>
      <h1 className="text-3xl text-center ">Michael Roberts </h1>
     <div className="display: flex w-72 justify-between border border-cyan-100">
      <div className="bg-orange-600 display: flex justify-evenly items-center rounded-full p-2 w-32 text-center">
        <h1 className='text-black'>Github</h1>
        <FaGithub color="black" />
      </div>
      <div className="display: flex justify-evenly items-center rounded-full bg-blue-500 p-2 w-32 text-center">
        <h1 className="text-black">Contact Me</h1>
        <CiMail color="black" />
      </div>
      </div>
    </div>
  );
}

export default page