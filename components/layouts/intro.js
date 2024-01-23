import React from "react";



export default function Intro(props) {
    // image is at left

    return (
        <div
            className="flex 
                        flex-col
                        w-screen
                        bg-slate-800
                        pb-10
                        mb-0
                        justify-between

                        "
            style={{ backgroundImage: props.imgPath,
                    backgroundRepeat: 'no-repeat',
                    position:'relative',
                    display:'block',
                    width:'1500px',
                    height: props.height,
                    backgroundPosition: '10% 10%',
                    backgroundSize: 'cover',
                    }}
            alt={props.altText}
        >

            {/* <div className="w-full brightness-100">
                <img src={props.imgPath} alt={props.altText} />
            </div> */}

            <div
                className="
                    flex 
                    flex-col
                    font-sans
                    text-zinc-50
                    text-left
                    justify-center"
            >
                <p
                    className="
                        text-sm
                        opacity-80
                        font-mono
                        uppercase
                        mb-4"
                >
                    {props.caption}
                </p>

                <h1
                    className="
                        text-5xl
                        font-semibold
                        text-center
                        mb-4"
                >
                    {props.title}
                </h1>
            </div>
            <div className="
                    flex 
                    flex-row
                    justify-center
                    space-x-4">
                <p
                    className="
                        text-base
                        opacity-80"
                >
                    {props.time}
                </p>
                <p
                    className="
                        text-base
                        opacity-80"
                >
                    {props.role}
                </p>

                <p
                    className="
                        text-base
                        opacity-80"
                >
                    {props.type}
                </p>



            </div>
        </div>
    );
}
