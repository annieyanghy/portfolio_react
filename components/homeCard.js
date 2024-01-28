import React from "react";
import { projects } from "../data/HomeProjectData.js";
import { TEXT_DATA } from "../data/HomeProjectData.js";
import { NavLink } from "react-router-dom";

console.log(projects);

function HomeCard(props) {
  return (
    <div
      className="
                flex
                flex-col
                justify-between
                bg-slate-800
                p-10
                m-5
                w-full
                font-sans
                rounded-2xl
                cursor-pointer
                outline
                outline-0
                hover:outline-8 hover:outline-offset-4 hover:transition-all
                "
    >
      <p
        className="
                text-sm
                mb-2
                opacity-80
                font-mono"
      >
        {props.time}
      </p>
      <h2
        className="
                  text-3xl
                  mb-3
                  font-semibold"
      >
        {props.title}
      </h2>
      <p
        className="
            text-sm
            opacity-90"
      >
        {props.description}
      </p>

        <img />
        <NavLink to={props.path}>
          <div
            className="
                          text-base
                          bg-slate-100
                          border-slate-800
                          text-slate-800
                          rounded-xl
                          w-max
                          p-2
                          mt-8
                          transition-transform
                          group-hover:translate-x-1 motion-reduce:transform-none
                          "
          >
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none hover:outline-4 hover:outline-offset-4 hover:transition-all"> */}
            {props.link}
            {/* </span> */}
          </div>
        </NavLink>
    </div>
  );
}

var listItems;
function ProjectList() {
  const listItems = projects.map((projects) => (
    <HomeCard
      title={projects.title}
      time={projects.time}
      key={projects}
      path={projects.path}
      description={projects.description}
      link={projects.link}
    />
  ));
  return listItems;
}

export { ProjectList };
