import React from "react";


export default function TitleSection(props) {
    
    return (
        <div className="flex 
                        p-10
                        my-5
                        mx-auto
                        max-w-5xl
                        justify-center
                        font-sans
                        
                        ">
            <div className="
                    flex
                    flex-col
                    w-8/12
                    mx-auto
                    font-sans
                    text-zinc-50
                    text-center
                    justify-center
                    
                    ">
                    <h2 className="
                        text-3xl
                        font-bold
                        rounded-full
                        bg-blue-950
                        w-min
                        m-auto
                        p-6
                        mb-4">
                        {props.title}
                    </h2>
                    <p className="
                        text-lg
                        opacity-80">
                        {props.description}
                    </p>
            </div>
        </div>
    );
    
}
