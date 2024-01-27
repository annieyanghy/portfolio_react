import React from "react";


export default function TableRow(props) {
    
    return (
            <tr className="divide-y divide-y-reverse divide-gray-400 divide-fuchsia-400/50">
                <th className="text-zinc-50 px-4 my-5 bg-fuchsia-500 rounded-3xl">{props.th}</th>
                <td className="text-zinc-50 px-4 py-5 text-3xl">{props.mid}</td>
                <td className="text-zinc-50 py-5">{props.td}</td>
            </tr>
       
    );
    
}
