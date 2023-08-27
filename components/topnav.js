"use client"
import React from "react";
import 'material-symbols';
import { Link } from "react-router-dom";


export function Navigation (){

    return(
  
            <div className="
                    flex
                    justify-center
                    m-2
                    text-sm
                    font-medium
                    cursor-pointer">
                <span className="relative transition-all w-min-content
                before:absolute before:w-0 before:-bottom-2 before:right-0 
                before:h-1 before:inset-x-2/4  before:bg-cyan-400  before:transition-all before:ease-out before:duration-500
                hover:before:w-full 
                hover:before:left-0 
                hover:before:bg-rose-400
                ">
                
                <Link className="p-3 " to="/" relative="path">Home</Link>
                    
                </span>
                <span className="relative transition-all w-min-content  
                before:absolute before:w-0 before:-bottom-2 before:right-0 
                before:h-1 before:inset-x-2/4 before:bg-cyan-400  before:transition-all before:ease-out before:duration-500
                hover:before:w-full 
                hover:before:left-0 
                hover:before:bg-rose-400
                ">
                    
                <Link className="p-3 "  to="/about" relative="path">About</Link>
                </span>
                <span className="relative transition-all w-min-content  
                before:absolute before:w-0 before:-bottom-2 before:right-0 
                before:h-1 before:inset-x-2/4 before:bg-cyan-400  before:transition-all before:ease-out before:duration-500
                hover:before:w-full 
                hover:before:left-0 
                hover:before:bg-rose-400
                ">
                    <a className="p-3 "  href="www.google.com" >Write <span class="material-symbols-rounded" style={{ fontSize: 14 }} >open_in_new</span></a>
                </span>
                
            </div>

      
    )
}