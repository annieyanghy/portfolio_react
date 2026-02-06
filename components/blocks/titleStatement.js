import React from "react";


export default function TitleStatement(props) {
    
    return (
        <div className="flex 
                        flex-row
                        p-8
                        pb-1
                        my-4
                        ">
            <div className="
                    w-full
                    font-sans
                    text-zinc-50
                    text-center
                    justify-center">
                    <p className="
                        text-sm/8
                        font-mono
                        opacity-80">
                        {props.caption}
                    </p>
                    <h3 className="
                        text-xl
                        font-bold
                        mb-2
                        capitalize
                        font-mono
                        ">
                        {props.title}
                    </h3>
                    <p className="
                        text-base/8
                        opacity-90">
                        {props.description}
                    </p>
            </div>
        </div>
    );
    
}
