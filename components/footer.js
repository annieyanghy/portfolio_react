import React from "react";
import 'material-symbols';
import { Navigation } from "../components/topnav"



export function Footer(){

    return(

        <div className="  flex  flex-col w-full  justify-between lg:flex-row">
            <div className="flex-col items-center justify-content items-center text-sm ">
                <p> 🖤 🤍Designed and coded in React by Hsin-Yu Yang &#169; 2023 </p>
                
            </div>
            <Navigation />
        </div>



    )

   
}