import React from "react";


export default function TitleStatement(props) {
    
    return (
        <div className="flex 
                        flex-row
                        mt-20
                        pt-2
                        pb-1
                       
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
                        font-mono
                        mb-2
                        capitalize
                      
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
