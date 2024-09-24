"use client"
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const NavBar = () => {
    //_rsc = react server component
    //link it prefetchs the link in the viewport
    //Session over of the client

    const {status, data: session} = useSession()
    

  return (
    <div className="flex bg-slate-500 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/user">Users</Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && 
      <div>
        {session.user!.name}
       
        <Link href="/api/auth/signout" className="ml-5" onClick={() => console.log("Log out")}>Sign Out</Link>
      </div>}
      {status === "unauthenticated" && <Link href="/api/auth/signin" className="ml-5">Login</Link>}
    </div>
  );
};

export default NavBar;
