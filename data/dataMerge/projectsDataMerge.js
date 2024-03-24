
import { HomeCard } from "@/components/homeCard";
import { projects,chips_list_cabbage} from "../projectsRawData.js";
import { Chips } from "@/components/chips.js";

//Home project cards
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
      imgPath={projects.imgPath}
      chips={projects.chips}
    />
  ));
  return listItems;
}

export { ProjectList };



