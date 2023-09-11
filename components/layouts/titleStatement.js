import React from "react";


export default function TitleStatement(props) {
    
    return (
        <div className="flex 
                        flex-row
                        p-10
                        pb-1
                        m-5
                        mb-2
                        ">
            <div className="
                    w-full
                    font-sans
                    text-zinc-50
                    text-center
                    justify-center">
                    <h1 className="
                        text-3xl
                        font-normal
                        mb-4">
                        {props.title}
                    </h1>
                    <p className="
                        text-base
                        opacity-80">
                        {props.description}
                    </p>
            </div>
        </div>
    );
    
}
