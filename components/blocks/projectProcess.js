import React from "react";

export default function ProcessCard(props) {
    return (
        <div
            className="
                    bg-slate-800
                    p-4
                    m-5
                    w-screen
                    basis-1/4
                    md:w-full
                    font-sans
                    rounded-2xl
                    text-zinc-50
                    text-center
                    justify-center
                    "
        >
            <span class="material-symbols-rounded" style={{ fontSize: 12 }}>
                {props.icon}
            </span>
            {/* <p
                className="
                        text-sm
                        opacity-80
                        font-mono
                        uppercase
                        my-2"
            >
                {props.caption}
            </p> */}

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

            {props.description?.map((i) => (
                <p className="
                        text-md
                        text-zinc-200
                       
                        ">
                    {i}
                </p>
            ))}


        </div>
    );
}
