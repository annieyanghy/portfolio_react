import React from "react";
import Link from "next/link";
import { Chips } from "./chips";
import config from "@/next.config";

export function HomeCard(props) {
  return (
    <div className="   
                  flex
                  flex-col
                  
                  md:basis-1/2
                  md:flex-auto">
      <Link href={props.path}>
        <div className="   
                  group
                  rounded-2xl
                  m-4
                  p-0
                  bg-gradient-to-r from-cyan-300 to-rose-300
                  
                  hover:m-2
                  hover:p-2
                  hover:transition-all
                  ">
          <div
            className="
                  flex
                  flex-col
                  w-full
                  h-lh
                  justify-between
                  bg-slate-800
                  rounded-2xl
                  p-8
                  cursor-pointer
                  group-hover:bg-slate-950
                  
                  "
          >
            {/* outline
                  outline-cyan-300
                  outline-0
                  hover:outline-4 hover:outline-offset-4 hover:transition-all */}

            <div className="flex flex-col md:flex-row  items-start justify-between mb-3 
                           
            ">
              <div className="flex flex-col  items-start justify-between
                                 
                           
            ">
                <p
                  className="
                      text-sm/8
                      
                      mb-1
                      opacity-80
                      font-mono"
                >
                  {props.time}
                </p>
                <h2
                  className="
                      text-3xl
                      font-semibold"
                >
                  {props.title}
                </h2>
              </div>
              <div
                className="   group
                            flex
                            flex-row
                            justify-center
                            items-center
                            text-base
                            font-semibold
                            text-zinc-100
                            rounded-xl
                            w-max
                            
                           
                       
                            "
              >
                <span class="material-symbols-rounded 
                      inline-block transition-transform group-hover:translate-x-2 group-hover:-rotate-45 motion-reduce:transform-none"
                  style={{ fontSize: 48 }}
                >arrow_right_alt
                </span>
              </div>
            </div>
            <p
              className="
              text-md/8
              tracking-wide
              opacity-90
              h-20
              
              py-4
              "
              
            >
              {props.description}
            </p>
              <div className="rounded-xl flex justify-center w-full h-56 overflow-hidden" >
                <img className="w-full h-auto " src={`${config.basePath}${props.imgPath}`} alt={props.altText} />

              </div>
            {/* <div
            className="   group
                            flex
                            flex-row
                            justify-center
                            items-center
                            text-base
                            font-semibold
                            bg-slate-700/80
                            text-zinc-100
                            rounded-xl
                            w-max
                            px-4
                            py-3
                            mt-8
                            hover:bg-slate-950
                            "
          > */}
            {/* {props.link} */}

            {/* <span class="material-symbols-rounded 
                      inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                      style={{ fontSize: 32 }}
            >arrow_right_alt
            </span> */}
            {/* </div> */}

            <div className="my-2 font-mono">
              <Chips >

                {props.chips}
              </Chips>

            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}


