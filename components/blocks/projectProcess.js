import React from "react";

export default function ProcessCard(props) {
    return (

        <div
            className="
                    group 
                    bg-slate-800
                    p-3
                    m-2
                    w-fit
               
                    justify-center
                    md:flex-auto

                    font-sans
                    rounded-2xl
                    text-zinc-50
                    text-left

                    outline
                    outline-0
                    outline-slate-200
                    hover:cursor-pointer
                    hover:outline-1
                    ">
            <a  href={'#'+props.title} >
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

                {props.description?.map((i) => (
                    <p className="
                        text-sm
                        text-zinc-100
                       
                        ">
                        * {i}
                    </p>
                ))}
               
            </a>
        </div>

    );
}
