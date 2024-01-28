import React from "react";


export default function Table(props) {
    
    
    return (
        <div>
            <table className=" table-auto border-separate border-spacing-y-6">
                <tbody>
                    {props.children}
                </tbody>                   
            </table>
        </div>

    );
    
}
