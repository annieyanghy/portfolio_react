import React from "react";

export default function ProcessCard(props) {
    return (
        <a  href={'#'.concat(props.title)} >
        <div
            className="
                    group 
                    bg-slate-700/80  
                    p-3
                   
                    w-full
                    md:w-48
                    
                    
                  
                    md:flex-auto

                    font-sans
                    rounded-2xl
                    text-zinc-50
                    text-left

                    
                    hover:cursor-pointer
                    hover:bg-slate-900
                    ">
            
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-ceter space-x-2">
                        <span class="material-symbols-rounded" style={{ fontSize: 16 }}>
                            {props.icon}
                        </span>
                        <h6
                            className="
                                text-md
                                mb-3
                                font-semibold
                                w-fit
                                "
                        >
                            {props.title}
                        </h6>
                    </div>
                    <span class="material-symbols-rounded
                                group-hover:animate-bounce
                                group-hover:transition-all
                                " 
                        style={{ fontSize: 24 }}>
                        chevron_right</span>
                </div>
                <div className="h-24">
                {props.description?.map((i) => (
                    <p className="
                        text-sm
                        text-zinc-100
                        w-fit
                        ">
                        * {i}
                    </p>
                ))}
               </div>
           
        </div>
        </a>
    );
}
