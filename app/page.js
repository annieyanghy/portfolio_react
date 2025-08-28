"use client"

import { ProjectList } from "@/data/dataMerge/projectsDataMerge";
import React from "react";





export default function Home() {
  return (
    <main className=" w-screen md:w-full md:max-w-5xl ">
     
      <div className="flex flex-col items-center justify-center my-10 mx-4 md:mx-auto">
        <div className="flex flex-col space-y-10 "> 
           <div className="flex flex-col  md: items-center justify-between space-y-4">
            <h1 className="text-5xl  text-center">I design by understanding <del>users</del> people</h1>
            <h2 className="text-2xl  text-center">and find clarity among chaos 🌊</h2>
            {/* <h2 className="text-2xl  text-center">And get things done ✨</h2> */}
          </div>
          
          <div className="flex flex-col  md: items-center justify-between">
              <p className="text-lg text-zinc-300 text-center">👋🏼 I'm Hsin-Yu, a systematic deep thinker, journey-focused designer, front-end coder (for fun)</p>
              <p className="text-lg text-zinc-500 text-center">occasional illustrator and spontaneous writer, doing yoga in her Brooklyn hood</p>
          </div>
        </div>
        
        <button className=" my-10 "><span class="material-symbols-rounded animate-bounce" style={{ fontSize: 40 }}>arrow_circle_down</span></button>
      </div>
      <div className="
              relative flex flex-col flex-wrap md:flex-row  
              w-screen md:w-full 
              justify-center 
              
              before:absolute 
             
              bg-gradient-to-r from-cyan-500 to-blue-300
              rounded-2xl
              
              ">
        <ProjectList  />
        {/* bg-gradient-to-r from-cyan-500 to-indigo-400 */}
        {/* bg-gradient-to-r from-rose-400 to-blue-300 */}


        
    
      </div>

  

      {/* <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

      
      </div> */}
    </main>
  )
}
