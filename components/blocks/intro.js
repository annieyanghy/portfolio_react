import React from "react";



export default function Intro(props) {
    // image is at left

    return (
        <div
            className="flex 
                        flex-col
                        w-screen
                        py-10
                        mx-auto
                        justify-between
                        justify-items-center
                        bg-slate-800
                        overflow-clip
                        "
            style={{ backgroundImage: props.imgPath,
                    backgroundRepeat: 'no-repeat',
                    position:'relative',
                    display:'block',
                    width:props.width,
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
                    w-screen
                    md:w-full
                    font-sans
                    text-zinc-50
                    text-left
                    mx-auto
                    justify-center
                    items-center"
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
                        text-6xl
                        font-bold
                        text-center
                        mb-5"
                >
                    {props.title}
                </h1>
                <h3
                    className="

                        text-xl
                        text-center
                        mb-12"
                >
                    {props.description}
                </h3>
            </div>
            <div className="
                    flex 
                    flex-col
                    md:flex-row
                    items-center
                    justify-center
                    md:space-x-10
                    
                    ">
                <p
                    className="
                        text-base
                        opacity-80
                        "
                >
                    {props.time}
                </p>
                <p
                    className="
                        text-base
                        opacity-80
                        
                        "
                >
                    {props.role}
                </p>

                <p
                    className="
                        text-base
                        opacity-80
                        "
                >
                    {props.type}
                </p>



            </div>
        </div>
    );
}
