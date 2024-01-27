import React from "react";


export default function Table(props) {
    
    return (
        <div>
            <table className="table-auto border-spacing-5 border-collapse ">
                <tbody>
                    {props.children}
                </tbody>                   
            </table>
        </div>

    );
    
}
