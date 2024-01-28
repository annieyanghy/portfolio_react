import React from "react";
import 'app/globals.css';


export default function TableRow(props) {
    
    if (props.index%2===0){
        return (
            <tr className=" divide-y divide-y-reverse divide-fuchsia-400/50" >
                <th className="pointer  text-zinc-50 px-10 bg-fuchsia-600"
                >
                    {props.th}
                </th>

                <td className="text-zinc-50 px-4 py-4 text-4xl">{props.mid}</td>

                <td className="text-zinc-50 py-4" style={{fontSize:props.size}}>{props.td1}</td>
                <td className="text-zinc-50 py-4" style={{fontSize:props.size}}>{props.td2}</td>
                <td className="text-zinc-50 py-4" style={{fontSize:props.size}}>{props.td3}</td>
                <td className="text-zinc-50 py-4" style={{fontSize:props.size}}>{props.td4}</td>



                
            </tr>
       
    );
    }else{
        return (
                <tr className=" divide-y divide-y-reverse divide-fuchsia-400/50">
                    <th className=" pointer text-zinc-50 px-10 bg-fuchsia-800"
                    >
                            {props.th}
                    </th>

                    <td className="text-zinc-50 px-4 py-4 text-4xl">{props.mid}</td>

                    <td className="text-zinc-50 py-4" style={{fontSize:props.size}}>{props.td1}</td>
                    <td className="text-zinc-50 py-4" style={{fontSize:props.size}}>{props.td2}</td>
                    <td className="text-zinc-50 py-4" style={{fontSize:props.size}}>{props.td3}</td>
                    <td className="text-zinc-50 py-4" style={{fontSize:props.size}}>{props.td4}</td>
                </tr>
                
        
    );
               
}
    
}
