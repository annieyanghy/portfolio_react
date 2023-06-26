

import React from "react";
import { projects } from "../data/HomeProjectData.js";
import { TEXT_DATA } from "../data/HomeProjectData.js";




 var listItems;

  console.log(projects)

function HomeCard (props){
 
  const list = ProjectList();
  // console.log(list)
  // console.log(props.title)
  console.log(props)

    return (
        <div className="
                bg-slate-800
                p-10
                m-5
                w-full
                font-sans
                rounded-2xl
                cursor-pointer
                outline
                outline-0
                hover:outline-4
                hover:outline-offset-4
                hover:transition-all
                ">
            <h1 className="
                  text-2xl
                  mb-3
                  font-semibold">
                    {props.title}</h1>
            <p className="
                text-sm
                opacity-80">{props.time}</p>
            <p className="
            text-sm
            opacity-80">{TEXT_DATA}</p>

            <img />
              <button className="
                        bg-slate-100
                        border-slate-800
                        text-slate-800
                        rounded-lg
                        p-2
                        mt-2
                        transition-transform
                        group-hover:translate-x-1 motion-reduce:transform-none" >
              Learn more{' '} 
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span></button>
              
        </div>
        
    );
    
  }


  function ProjectList() {
   
      const listItems = projects.map(projects =>
       
      <HomeCard title={projects.title} time={projects.time} key={projects.key}/>
  
      );
         
      return (
         listItems
      );
    }
 

 export {ProjectList}