import { 
  cabbage_problem_1,cabbage_problem_2, 
  cabbage_solution_1,cabbage_solution_2,
  cabbage_research_1, 
  cabbage_research_interview_0, cabbage_research_interview_1,cabbage_research_interview_2,
  cabbage_research_compAnalysis_0, cabbage_research_compAnalysis_1,
  cabbage_research_keyPainPoints
  
  } from "../focusRawData";
import Insight_col from "@/components/blocks/Insight_col";
import TitleSection from "@/components/blocks/titleSection";
import MainLeft from "@/components/blocks/main_left";
import MainRight from "@/components/blocks/main_right";
import TableRow from "@/components/blocks/table/tableRow";
import Table from "@/components/blocks/table/tableBody";


// cabbage===focus project //
// cabbage===focus project //
// cabbage===focus project //



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


function Cabbage_research_keyPainPoints_merge() {

  const cabbagePP = cabbage_research_keyPainPoints.map((i, index) =>
  <TableRow th={i.th} mid={i.mid} index={index}
            td1={i.td1} td2={i.td2} td3={i.td3} td4={i.td4}
          
  />
  );
  return (  
    cabbagePP
  );
}
export {Cabbage_research_keyPainPoints_merge}


