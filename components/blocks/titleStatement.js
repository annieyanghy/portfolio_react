import React from "react";


export default function TitleStatement(props) {
    
    return (
        <div className="flex 
                        flex-row
                        p-8
                        pb-1
                        my-5
                        ">
            <div className="
                    w-full
                    font-sans
                    text-zinc-50
                    text-center
                    justify-center">
                    <p className="
                        text-sm
                        font-mono
                        opacity-80">
                        {props.caption}
                    </p>
                    <h3 className="
                        text-3xl
                        font-normal
                        ">
                        {props.title}
                    </h3>
                    <p className="
                        text-base
                        opacity-90">
                        {props.description}
                    </p>
            </div>
        </div>
    );
    
}
