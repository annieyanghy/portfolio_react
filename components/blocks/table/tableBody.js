import React from "react";


export default function Table(props) {
    
    
    return (
        <div>
            <table className=" table-auto border-separate border-spacing-y-1 w-full">
                <tbody>
                    
              
                    {props.children}

                   
                </tbody>                   
            </table>
        </div>

    );
    
}
