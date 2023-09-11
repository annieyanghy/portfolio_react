import React from "react";


export default function TitleSection(props) {
    
    return (
        <div className="flex 
                        
                        p-10
                        m-5
                        justify-center
                        ">
            <div className="
                    flex-col
                    w-fit
                    font-sans
                    text-zinc-50
                    text-center
                    justify-center">
                    <h1 className="
                        text-2xl
                        font-normal
                        rounded-full
                        bg-blue-950
                        p-4
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
