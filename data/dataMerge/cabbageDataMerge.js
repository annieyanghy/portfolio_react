import { 
  cabbage_problem_1,cabbage_problem_2, 
  cabbage_solution_1,cabbage_solution_2,
  cabbage_data_research_1 } from "../cabbageRawData";
import Col3 from "@/components/layouts/3Col";
import TitleSection from "@/components/layouts/titleSection";
import MainLeft from "@/components/layouts/main_left";
import MainRight from "@/components/layouts/main_right";


// problem title
function Cabbage_problem_1_merge() {

  const cabbageProblem = cabbage_problem_1.map(i =>
    <TitleSection title={i.title} description={i.description}/>
  );
  return (
    cabbageProblem
  );
}
export {Cabbage_problem_1_merge}

function Cabbage_problem_2_merge() {

  const cabbageListItems = cabbage_problem_2.map(i =>
  <Col3 icon={i.icon} caption={i.caption} title={i.title} description={i.description} key={i.key}/>
  );
  return (
  
  cabbageListItems
  );
}
export {Cabbage_problem_2_merge}

// solution title
function Cabbage_solution_1_merge() {

  const cabbageSolution = cabbage_solution_1.map(i =>
    <TitleSection title={i.title} description={i.description}/>
  );
  return (
    cabbageSolution
  );
}
export {Cabbage_solution_1_merge}


function Cabbage_solution_2_merge() {

  const cabbageSolution = cabbage_solution_2.map( (i, index) =>{
    if(index%2===0){
      return (
        <MainLeft caption={i.caption} title={i.title} description={i.description} imgPath={i.imgPath}/>
        );
    }else{
      return (
        <MainRight caption={i.caption} title={i.title} description={i.description} imgPath={i.imgPath}/>
        );
    }
  }
  );
  return(
    cabbageSolution
  )
  
}
export {Cabbage_solution_2_merge}

// function Cabbage_solution_2_merge() {

//   const cabbageSolution = cabbage_solution_2.map(i =>
//     <MainLeft caption={i.caption} title={i.title} description={i.description} imgPath={i.imgPath}/>
//   );
//   return (
//     cabbageSolution
//   );
// }
// export {Cabbage_solution_2_merge}


function Cabbage_data_research_1_merge() {

    const cabbageListItems = cabbage_data_research_1.map(i =>
    <Col3 icon={i.icon} caption={i.caption} title={i.title} description={i.description} key={i.key}/>
    );
    return (
    
    cabbageListItems
    );
    
  }
export {Cabbage_data_research_1_merge}