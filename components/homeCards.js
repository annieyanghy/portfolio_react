import React from "react";
import { projects } from "../data/HomeProjectData.js";
import {HomeCard} from "@/components/homeCard.js";

function ProjectList() {
  const listItems = projects.map((projects) => (
    <HomeCard
      title={projects.title}
      time={projects.time}
      path={projects.path}
      description={projects.description}
      link={projects.link}
    />
  ));
  return (<>
    {listItems}
  </>);
}

export {ProjectList};