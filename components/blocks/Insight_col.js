import React from "react";

export default function Insight_col(props) {
    return (
        <div
            className="
                    bg-slate-800
                    p-10
                    m-5
                    w-full
                    
                    font-sans
                    rounded-2xl
                    text-zinc-50
                    text-center
                    justify-center
                    "
        >
            <span class="material-symbols-rounded" style={{ fontSize: 40 }}>
                {props.icon}
            </span>
            <p
                className="
                        text-sm
                        opacity-80
                        font-mono
                        uppercase
                        my-2"
            >
                {props.caption}
            </p>

            <h5
                className="
                        text-2xl
                        mb-3
                        font-semibold"
            >
                {props.title}
            </h5>
            <p
                className="
                        text-sm
                        opacity-80
                        h-12"
            >
                {props.description}
            </p>

            <img />
        </div>
    );
}
