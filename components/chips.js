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
                    p-2
                    rounded-xl
                    mx-2
                    my-2
                    bg-slate-700
                    ">
                    {i}
                </p>
            ))

            }

        </div>
    );
}



