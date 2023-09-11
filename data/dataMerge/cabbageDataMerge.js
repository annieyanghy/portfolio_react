import { cabbage_data_research_1 } from "../cabbageRawData";
import Col3 from "@/components/layouts/3Col";



function Cabbage_data_research_1_merge() {

    const cabbageListItems = cabbage_data_research_1.map(i =>
   
    <Col3 icon={i.icon} caption={i.caption} title={i.title} description={i.description} key={i.key}/>
    );
    return (
    
    cabbageListItems
    );
    
  }
export {Cabbage_data_research_1_merge}