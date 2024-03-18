import React from "react";


export default function Table(props) {
    
    
    return (
        <div>
            <table className=" table-auto border-separate border-spacing-y-2 w-full">
                <tbody>
                    
              
                    {props.children}

                   
                </tbody>                   
            </table>
        </div>

    );
    
}
