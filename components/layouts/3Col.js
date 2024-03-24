import React from "react";

export default function Col_3(props) {
    return (

        <div 
            className="
                        relative flex flex-col max-w-5xl mx-auto 
                        my-8 items-center justify-between
                        "
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
                        relative flex flex-col max-w-5xl mx-auto items-stretch
                         items-center justify-between md:flex-row "
            >
                {props.component}
            </div>
        </div>
        
    );
}
