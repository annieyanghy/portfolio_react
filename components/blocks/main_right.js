import React from "react";
import ReactPlayer from 'react-player'


export default function MainRight(props) {
    // image is at left
  
    return (
        <div className="flex 
                        flex-row
                        w-full
                        bg-slate-800
                        p-10
                        m-5
                        rounded-2xl
                        justify-between
                        ">
            <div className="w-5/12 rounded-3xl overflow-hidden brightness-100">
                <img src={props.imgPath} alt={props.altText}/>
                <ReactPlayer
                    className="react-player aspect-auto  "

                    url= {props.vidPath}
                    width='100%'
                    height='100%'
                    controls = {true}
                    volume= '0'
                    muted={true}
                    playing={true}
                    loop={true}
                    />
            </div>
            <div className="
                    flex
                    flex-col
                    w-7/12
                    font-sans
                    pl-10
                    text-zinc-50
                    text-left
                    justify-center">
                    <p className="
                        text-base
                        opacity-80
                        font-mono
                        uppercase
                        mb-4">
                        {props.caption}
                    </p>

                    <h1 className="
                        text-4xl
                        font-semibold
                        mb-4">
                        {props.title}
                    </h1>
                    <p className="
                        text-base
                        opacity-95">
                        {props.description}
                    </p>
            </div>
           
        </div>
    );
    
}
