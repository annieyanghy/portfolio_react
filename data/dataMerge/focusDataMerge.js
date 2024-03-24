import { 
  cabbage_projectSteps_Focus,
  cabbage_problem_1,cabbage_problem_2, 
  cabbage_solution_1,cabbage_solution_2,
  cabbage_research_1, 
  cabbage_research_interview_0, cabbage_research_interview_1,cabbage_research_interview_2,
  cabbage_research_compAnalysis_0, cabbage_research_compAnalysis_1,
  cabbage_research_keyPainPoints,
  cabbage_design_1, cabbage_design_requirement, cabbage_intervention_diagram,
  cabbage_testing_1, cabbage_future_ideas,
  
  } from "../focusRawData";
import Insight_col from "@/components/blocks/Insight_col";
import TitleSection from "@/components/blocks/titleSection";
import MainLeft from "@/components/blocks/main_left";
import MainRight from "@/components/blocks/main_right";
import TableRow from "@/components/blocks/table/tableRow";

import TableData from "@/components/blocks/table/tableData";
import MainImg from "@/components/blocks/main_img";
import ProcessCard from "@/components/blocks/projectProcess";
// import Table from "@/components/blocks/table/tableBody";


// cabbage===focus project //
// cabbage===focus project //
// cabbage===focus project //


// project process overview
function Cabbage_project_process_merge() {
  return (
    cabbage_projectSteps_Focus.map((i, index) =>
      <ProcessCard icon={i.icon} caption={i.caption} title={i.title} description={i.description} key={index}/>
      )
  
  );
  }
  export {Cabbage_project_process_merge}



// problem title
function Cabbage_problem_1_merge() {

  const cabbageProblem = cabbage_problem_1.map(i =>
    <TitleSection caption={i.caption} title={i.title} description={i.description} />
  );
  return (
    cabbageProblem
  );
}
export {Cabbage_problem_1_merge}

function Cabbage_problem_2_merge() {

  const cabbageListItems = cabbage_problem_2.map(i =>
  <Insight_col icon={i.icon} caption={i.caption} title={i.title} description={i.description} key={i.key}/>
  );
  return (
  
  cabbageListItems
  );
}
export {Cabbage_problem_2_merge}

// solution title
function Cabbage_solution_1_merge() {

  const cabbageSolution = cabbage_solution_1.map(i =>
    <TitleSection caption={i.caption} title={i.title} description={i.description}/>
  );
  return (
    cabbageSolution
  );
}
export {Cabbage_solution_1_merge}


function Cabbage_solution_2_merge() {
  const cabbageSolution = cabbage_solution_2.map( (i, index) =>{
    console.log(innerWidth)
    if(  window.innerWidth<=460 ){
      return (
        <MainLeft caption={i.caption} title={i.title} description={i.description} imgPath={i.imgPath} vidPath={i.vidPath}/>

        );
    }else if ( window.innerWidth>460  ){
      if(index%2===0){
        return(
          <MainLeft caption={i.caption} title={i.title} description={i.description} imgPath={i.imgPath} vidPath={i.vidPath}/>
        );
      }else{
      return (
        <MainRight caption={i.caption} title={i.title} description={i.description} imgPath={i.imgPath} vidPath={i.vidPath}/>
        );
      }
    }
  }
  );
  return(
    cabbageSolution
  )
  
}
export {Cabbage_solution_2_merge}

          // alt
          //function Cabbage_solution_2_merge() {

          //   const cabbageSolution = cabbage_solution_2.map(i =>
          //     <MainLeft caption={i.caption} title={i.title} description={i.description} imgPath={i.imgPath}/>
          //   );
          //   return (
          //     cabbageSolution
          //   );
          // }
          // export {Cabbage_solution_2_merge}


// research title
function Cabbage_research_1_merge() {

  const cabbageResearch = cabbage_research_1.map(i =>
    <TitleSection caption={i.caption} title={i.title} description={i.description}/>
  );
  return (
    cabbageResearch
  );
}
export {Cabbage_research_1_merge}



function Cabbage_research_interview_0_merge() {

  const cabbageResearch = cabbage_research_interview_0.map(i =>
  <Insight_col icon={i.icon} caption={i.caption} title={i.title} description={i.description} key={i.key}/>
  );
  return (
  
  cabbageResearch
  );
}
export {Cabbage_research_interview_0_merge}



// Why focused?
function Cabbage_research_interview_1_merge() {

    const cabbageResearch = cabbage_research_interview_1.map(i =>
    <Insight_col icon={i.icon} caption={i.caption} title={i.title} description={i.description} key={i.key}/>
    );
    return (
    
    cabbageResearch
    );
  }
export {Cabbage_research_interview_1_merge}


// Why unfocused?
function Cabbage_research_interview_2_merge() {

  const cabbageResearch = cabbage_research_interview_2.map(i =>
  <Insight_col icon={i.icon} caption={i.caption} title={i.title} description={i.description} key={i.key}/>
  );
  return (
  
  cabbageResearch
  );
}
export {Cabbage_research_interview_2_merge}


function Cabbage_research_compAnalysis_0_merge() {

  const cabbageResearch = cabbage_research_compAnalysis_0.map(i =>
  <Insight_col icon={i.icon} caption={i.caption} title={i.title} description={i.description} key={i.key}/>
  );
  return (
  
  cabbageResearch
  );
}
export {Cabbage_research_compAnalysis_0_merge}


// function Cabbage_research_compAnalysis_1_merge() {

//   const cabbageResearch = cabbage_research_compAnalysis_1.map((i, index) =>
//   <TableRow th={i.th} mid={i.mid} index={index}
//             td1={i.td1} td2={i.td2} td3={i.td3} td4={i.td4}
            
         
//   />
//   );
//   return (  
//     cabbageResearch
//   );
// }
// export {Cabbage_research_compAnalysis_1_merge}


// Competitor analysis
function Cabbage_research_compAnalysis_1_merge() {

  const cabbageResearch = cabbage_research_compAnalysis_1.map((i, index) =>
  <TableRow th={i.th} mid={i.mid} index={index}
            td1={i.td1} td2={i.td2} td3={i.td3} td4={i.td4}
            
  />
  );
  return (  
    cabbageResearch
  );
}
export {Cabbage_research_compAnalysis_1_merge}

// Key pain points
function Cabbage_research_keyPainPoints_merge() {

  const cabbagePP = cabbage_research_keyPainPoints.map((i, index) =>
  <TableData th={i.th} mid={i.mid} td1={i.td1}  index={index}
          
  />
  );
  return (  
    cabbagePP
  );
}
export {Cabbage_research_keyPainPoints_merge}




// Design

// design title
function Cabbage_design_1_merge() {

  const cabbageDesign = cabbage_design_1.map(i =>
    <TitleSection caption={i.caption} title={i.title} description={i.description}/>
  );
  return (
    cabbageDesign
  );
}
export {Cabbage_design_1_merge}


// design requirement
function Cabbage_design_requirement_merge() {

  const cabbagePP = cabbage_design_requirement.map((i, index) =>
  <TableData th={i.th} mid={i.mid} mid2={i.mid2} td1={i.td1} td2={i.td2} index={index}
          
  />
  );
  return (  
    cabbagePP
  );
}
export {Cabbage_design_requirement_merge}


// intervention diagram
function Cabbage_design_intervention_diagram_merge() {

  const cabbagePP = cabbage_intervention_diagram.map((i, index) =>
  <MainImg caption={i.caption} title={i.title} description={i.description} imgPath={i.imgPath}
          
  />
  );
  return (  
    cabbagePP
  );
}
export {Cabbage_design_intervention_diagram_merge}



// Testing & Future ideas

// testing title
function Cabbage_testing_1_merge() {
  return (
  cabbage_testing_1.map(i =>
    <TitleSection caption={i.caption} title={i.title} description={i.description}/>
  )
 
  );
}
export {Cabbage_testing_1_merge}

// future design ideas

function Cabbage_future_ideas_merge() {
return (
  cabbage_future_ideas.map(i =>
    <Insight_col icon={i.icon} caption={i.caption} title={i.title} description={i.description} key={i.key}/>
    )

);
}
export {Cabbage_future_ideas_merge}
