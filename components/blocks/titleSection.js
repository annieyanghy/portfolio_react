import React from "react";


export default function TitleSection(props) {
    
    return (
        <div className="flex 
                        w-screen
                        my-8
                        mx-auto
                        max-w-5xl
                        justify-center
                        font-sans
                        
                        ">
            <div className="
                    flex
                    flex-col
                    w-9/12
                    mx-auto
                    font-sans
                    text-zinc-50
                    text-center
                    justify-center
                    items-center
            
                    ">
                    <p className="
                        text-sm/6
                        font-mono
                        font-semibold
                        py-3
                        px-4
                        rounded-full
                        bg-blue-950
                        opacity-80">
                        {props.caption}
                    </p>
                    <h2 className="
                        text-3xl
                        font-bold
                        p-2
                        my-5">
                        {props.title}
                    </h2>
                    <p className="
                        text-lg
                        opacity-90">
                        {props.description}
                    </p>
            </div>
        </div>
    );
    
}
