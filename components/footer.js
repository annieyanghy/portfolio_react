import React from "react";
import 'material-symbols';
import { Navigation } from "../components/topnav"



export function Footer(){

    return(

        <div className="  flex w-full  justify-between lg:flex">
            <div className="flex-col justify-content items-center text-sm">
                <p>Designed and hand-coded with 🖤 🤍 by Hsin-Yu Yang &#169; 2023 </p>
             
                
            </div>
        <Navigation />
        </div>



    )

   
}