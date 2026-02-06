import React from "react";
import ReactPlayer from "react-player";
import config from "@/next.config";

export default function MainRight(props) {
    // image is at left

    return (
        <div
            className="flex 
                        flex-col
                        md:flex-row
                        w-fit
                        bg-slate-800
                        p-5
                        md:p-10
                        m-2
                        md:m-5
                        rounded-2xl
                        items-center
                        md:justify-between
                        "
        >
            <div className="w-fit md:w-9/12 rounded-2xl overflow-hidden brightness-100">
                  {props.imgPath === undefined ? (
                    <ReactPlayer
                            className="react-player aspect-auto  "
                            url= {`${config.basePath}${props.vidPath}`}
                            width='100%'
                            height='100%'
                            controls = {true}
                            volume= '0'
                            muted={true}
                            playing={true}
                            loop={true}

                            />
              
                    ):(
                        <img src={`${config.basePath}${props.imgPath}`} alt={props.altText}/>
                        
                            )}
            </div>
            <div
                className="
                     flex
                    flex-col
                    md:w-7/12
                    pl-0
                    pb-10
                    md:pb-2
                    md:pl-10
                    mx-auto
                    font-sans
                    text-zinc-50
                    text-left
                    justify-center"
            >
                <p
                    className="
                        text-base
                        opacity-80
                        font-mono
                        uppercase
                        mb-4"
                >
                    {props.caption}
                </p>

                <h1
                    className="
                        text-4xl
                        font-semibold
                        mb-4"
                >
                    {props.title}
                </h1>
                <p
                    className="
                        text-base/7
                        tracking-wide
                        opacity-95"
                >
                    {props.description}
                </p>
            </div>
        </div>
    );
}
