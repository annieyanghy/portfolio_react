import React from "react";

export default function Col_3(props) {
    return (

        <div 
            className="
                        relative flex flex-col max-w-5xl mx-auto 
                        my-8 
                        md:flex items-center justify-between"
        >
            <h4
                className="
                            text-xl 
                            font-semibold
                            "
                style={{backgroundColor:props.titleBgColor}}
            >
                {props.title}
            </h4>
            <div
                className="
                        relative flex flex-row max-w-5xl mx-auto items-stretch
                        md:flex items-center justify-between"
            >
                {props.component}
            </div>
        </div>
        
    );
}
