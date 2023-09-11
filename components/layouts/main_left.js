import React from "react";


export default function MainLeft(props) {
    // image is at right
  
    return (
        <div className="flex 
                        flex-row
                        bg-slate-800
                        p-10
                        m-5
                        rounded-2xl
                        justify-between
                        ">
            <div className="
                    w-6/12
                    pr-5
                    font-sans
                    text-zinc-50
                    text-left
                    justify-center">
                    <p className="
                        text-sm
                        opacity-80
                        font-mono
                        uppercase
                        mb-4">
                        {props.caption}
                    </p>

                    <h1 className="
                        text-5xl
                        font-semibold
                        mb-4">
                        {props.title}
                    </h1>
                    <p className="
                        text-base
                        opacity-80">
                        {props.description}
                    </p>
            </div>
            <div className="w-6/12 rounded-2xl overflow-hidden brightness-100">
                <img src={props.imgPath} alt={props.altText}/>
            </div>
        </div>
    );
    
}
