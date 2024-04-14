import React from "react";
import 'material-symbols';
import { Navigation } from "./navigation"
import Link from "next/link";



export function Header() {

  return (

    
   
    <div className=" w-full max-w-5xl items-center justify-between mb-20 font-mono text-sm lg:flex">
      <Link className="cursor-pointer " href="/" relative="path">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to&nbsp;
          <code className="font-mono font-bold">hsinyuyang.com</code>
        </p>
        </Link>
        <Navigation />
     
    </div>
    

  )


}