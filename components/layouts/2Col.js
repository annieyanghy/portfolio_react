import React from "react";

export default function Col_2(props) {
    return (

        <div 
            className="
                        flex flex-col relative w-full max-w-5xl mx-auto 
                        my-16
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
                        relative flex flex-row w-full max-w-5xl mx-auto 
                        md:flex items-center justify-between"
            >

                {props.component}
            </div>
        </div>
        
    );
}
