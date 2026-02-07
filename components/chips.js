import React from "react";


export function Chips(props) {
    return (
        <div className="   
                  flex
                  flex-row
                  flex-wrap
                  md:flex-auto
                  text-sm
                  mb-2
                  opacity-80
                  font-mono

                  ">

            {props.children?.map((i) => (
                <p className="
                    border
                    px-2
                    py-1
                    rounded-xl
                    mx-1
                    my-1
                    bg-slate-700
                    ">
                    {i}
                </p>
            ))

            }

        </div>
    );
}



