import React from "react";

export default function ProcessCard(props) {
    return (
        <a  href={'#'.concat(props.title)} >
        <div
            className="
                    group 
                    bg-slate-700/80  
                    p-3
                    m-2
                    w-full
                    
                    justify-center
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
                        <span class="material-symbols-rounded" style={{ fontSize: 20 }}>
                            {props.icon}
                        </span>
                        <h6
                            className="
                                text-lg
                                mb-3
                                font-semibold
                                w-full
                                "
                        >
                            {props.title}
                        </h6>
                    </div>
                    <span class="material-symbols-rounded
                                group-hover:animate-bounce
                                group-hover:transition-all
                                " 
                        style={{ fontSize: 32 }}>
                        chevron_right</span>
                </div>
                <div className="h-24">
                {props.description?.map((i) => (
                    <p className="
                        text-sm
                        text-zinc-100
                        ">
                        * {i}
                    </p>
                ))}
               </div>
           
        </div>
        </a>
    );
}
