import React from "react";
import 'material-symbols';



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
                <a className="p-3  ">Work  </a>
            </span>
            <span className="relative transition-all w-min-content  
            before:absolute before:w-0 before:-bottom-2 before:right-0 
            before:h-1 before:inset-x-2/4 before:bg-cyan-400  before:transition-all before:ease-out before:duration-500
            hover:before:w-full 
            hover:before:left-0 
            hover:before:bg-rose-400
            ">
                <a className="p-3 ">About</a>
            </span>
            <span className="relative transition-all w-min-content  
            before:absolute before:w-0 before:-bottom-2 before:right-0 
            before:h-1 before:inset-x-2/4 before:bg-cyan-400  before:transition-all before:ease-out before:duration-500
            hover:before:w-full 
            hover:before:left-0 
            hover:before:bg-rose-400
            ">
                <a className="p-3 " >Write <span class="material-symbols-rounded" style={{ fontSize: 14 }} >open_in_new</span></a>
            </span>
            
        </div>


    )
}