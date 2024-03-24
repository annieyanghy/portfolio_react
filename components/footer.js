import React from "react";
import 'material-symbols';
import { Navigation } from "./navigation"



export function Footer(){

    return(

        <div className="  flex  flex-col w-full items-center md:justify-between md:flex-row">
            <div className="flex-col items-center justify-content items-center text-sm ">
                <p> 🖤 🤍Designed and coded in React by Hsin-Yu Yang &#169; 2023 </p>
                
            </div>
            <Navigation />
        </div>



    )

   
}