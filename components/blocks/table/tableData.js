import React from "react";
import 'app/globals.css';


export default function TableData(props) {

    if (props.th.length ===0) {
        return (
            <tr className=" divide-y divide-y-reverse">
            <th className="w-3/12 pointer text-zinc-50 px-8"
            >
                {props.th}
            </th>
            <td className=" text-zinc-50 px-4 py-4 text-4xl">{props.mid}</td>

            <td className=" text-zinc-50 font-bold py-4">{props.td1}</td>
            <td className=" text-zinc-50 px-4 py-4 text-4xl">{props.mid2}</td>

            <td className=" text-zinc-50 font-bold py-4">{props.td2}</td>

        </tr>
        )
    } else {
        return (
            <tr className=" divide-y divide-y-reverse">
            <th className="w-3/12 pointer text-zinc-50 px-8 bg-fuchsia-600/[0.8]"
              
            >
                {props.th}
            </th>
            <td className=" text-zinc-50 px-4 py-4 text-4xl">{props.mid}</td>

            <td className=" text-zinc-50  py-4">{props.td1}</td>
            <td className=" text-zinc-50 px-4 py-4 text-4xl">{props.mid2}</td>

            <td className=" text-zinc-50  py-4">{props.td2}</td>

        </tr>
            


        );


    }
}
