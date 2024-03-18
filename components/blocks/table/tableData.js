import React from "react";
import 'app/globals.css';


export default function TableData(props) {
    
    
    return (
        <tr className=" divide-y divide-y-reverse">
                <th className="w-3/12 pointer text-zinc-50 px-8 bg-fuchsia-600"
                >
                    {props.th}
                </th>
                <td className="w-1/12 text-zinc-50 px-4 py-4 text-4xl">{props.mid}</td>

            <td className="w-8/12 text-zinc-50 py-4">{props.td}</td>
        </tr>
        
);
    
    
}
