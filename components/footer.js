import React from "react";
import 'material-symbols';
import { Navigation } from "./navigation"



export function Footer(){

    return(
        <div className="  flex  flex-col w-full max-w-5xl items-center px-4 mt-32 bottom-0 md:justify-between md:flex-row md:px-0">
            <div className="flex-col items-center justify-content items-center text-md  ">
                <p className="text-center" >🤍 Coded in ReactJS &amp; designed by Hsin-Yu Yang &#169; 2023-2025 </p>
                
            </div>
            <Navigation />
        </div>



    )

   
}