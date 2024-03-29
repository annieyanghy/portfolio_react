import React from "react";
import 'app/globals.css';


export default function TableRow(props) {
    
    if (props.index%2===0 & props.th.length>1){
        return (
            <tr className=" divide-y divide-y-reverse divide-indigo-400/30" >
                <th className=" w-4/12 text-zinc-50 px-10 bg-indigo-600"
                >
                    {props.th}
                </th>


                <td className=" w-2/12 text-zinc-50 py-3 text-3xl text-center">{props.td1}</td>
                <td className=" w-2/12 text-zinc-50 py-3 text-3xl text-center">{props.td2}</td>
                <td className=" w-2/12 text-zinc-50 py-3 text-3xl text-center">{props.td3}</td>
                <td className=" w-2/12 text-zinc-50 py-3 text-3xl text-center">{props.td4}</td>



                
            </tr>
       
    );
    }else if(props.index%2===1 & props.th.length>1){
        return (
                <tr className=" divide-y divide-y-reverse divide-indigo-400/30">
                    <th className="w-3/12 text-zinc-50 px-10 bg-indigo-800"
                    >
                            {props.th}
                    </th>


                    <td className=" w-2/12 text-zinc-50 py-3 text-3xl text-center">{props.td1}</td>
                    <td className=" w-2/12 text-zinc-50 py-3 text-3xl text-center">{props.td2}</td>
                    <td className=" w-2/12 text-zinc-50 py-3 text-3xl text-center">{props.td3}</td>
                    <td className=" w-2/12 text-zinc-50 py-3 text-3xl text-center">{props.td4}</td>
                </tr>
                
        
    );
               
}else{
    return (
            <tr className=" divide-y divide-y-reverse divide-indigo-400/30">
                <th className="w-3/12 text-zinc-50 px-10 "
                >
                        {props.th}
                </th>


                <td className=" w-2/12 text-zinc-50 py-3 text-xl text-center">{props.td1}</td>
                <td className=" w-2/12 text-zinc-50 py-3 text-xl text-center">{props.td2}</td>
                <td className=" w-2/12 text-zinc-50 py-3 text-xl text-center">{props.td3}</td>
                <td className=" w-2/12 text-zinc-50 py-3 text-xl text-center">{props.td4}</td>
            </tr>
            
    
);
           
}
    
}
