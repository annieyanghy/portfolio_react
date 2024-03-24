import React from "react";
import ReactPlayer from 'react-player'


export default function MainImg(props) {
  
    return (
        <div className="flex 
                        flex-col
                        w-full
                        bg-slate-800
                        my-4
                        rounded-2xl
                        justify-center
                        justify-items-center

                        "
               
                        >

            <div className="
                    flex
                    flex-col
                    w-12/12
                    font-sans
                    text-zinc-50
                    text-center
                    justify-center">
                    <p className="
                        text-base
                        opacity-80
                        font-mono
                        uppercase
                        mx-4">
                        {props.caption}
                    </p>

                    <h1 className="
                        text-xl
                        font-medium
                        mx-4
                        my-2">
                        {props.title}
                    </h1>
                    <p className="
                        text-base
                        opacity-95
                        mx-4
                        mb-2">
                        {props.description}
                    </p>
            </div>
            <div className="flex justify-items-center justify-self-center w-12/12 mx-auto rounded-2xl overflow-hidden "
                    style={{backgroundColor:props.bgColor}}>
                <img src={props.imgPath} alt={props.altText}/>
                <ReactPlayer
                    className="aspect-auto  "
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
        </div>
    );
    
}
