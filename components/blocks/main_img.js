import React from "react";
import ReactPlayer from 'react-player'
import config from "@/next.config";

export default function MainImg(props) {
  
    return (
        <div className="flex 
                        flex-col
                        w-full
                        bg-slate-800
                        mt-5
                        mb-10

                        rounded-2xl
                        justify-center
                        justify-items-center

                        "
               
                        >

            <div className="
                    flex
                    flex-col
                    w-12/12
                    text-zinc-50
                    text-center
                    justify-center">
                    <p className="
                        text-base/8
                        opacity-80
                        font-mono
                        uppercase
                        mx-4">
                        {props.caption}
                    </p>

                    <h1 className="
                        text-md
                        font-semibold
                        font-sans
                        pt-4
                        mx-4
                        my-2">
                        {props.title}
                    </h1>
                    <p className="
                        text-base/8
                        opacity-95
                        mx-4
                        mb-2">
                        {props.description}
                    </p>
            </div>
            <div className="flex justify-items-center justify-self-center w-12/12 mx-auto rounded-2xl overflow-hidden "
                    style={{backgroundColor:props.bgColor}}>
                          {props.imgPath === undefined ? (
                <ReactPlayer
                    className="aspect-auto  "
                    url={`${config.basePath}${props.vidPath}`}
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
                 ) }
            </div>
        </div>
    );
    
}
