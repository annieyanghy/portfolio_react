import React from "react";

export default function Col_2(props) {
    return (

        <div 
            className="
                        flex flex-col relative w-full max-w-5xl mx-auto 
                        my-16 items-center justify-between"
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
                        relative flex flex-col w-full max-w-5xl mx-auto 
                         items-center justify-between md:flex-row "
            >

                {props.component}
            </div>
        </div>
        
    );
}
