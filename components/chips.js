import React from "react";


export function Chips(props) {
    return (
        <div className="   
                  flex
                  flex-row
                  flex-wrap
                  md:flex-auto
                  text-xs
                  mb-2
                  opacity-80
                  font-mono

                  ">

            {props.children?.map((i) => (
                <p className="
                    border
                    p-1.5
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



