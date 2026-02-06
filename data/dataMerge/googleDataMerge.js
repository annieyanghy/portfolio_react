import { 
 google_mac_demo
  
  } from "../googleRawData";


import Insight_col from "@/components/blocks/Insight_col";
import TitleSection from "@/components/blocks/titleSection";
import MainLeft from "@/components/blocks/main_left";
import MainRight from "@/components/blocks/main_right";
import TableRow from "@/components/blocks/table/tableRow";

import TableData from "@/components/blocks/table/tableData";
import MainImg from "@/components/blocks/main_img";
import ProcessCard from "@/components/blocks/projectProcess";



function Google_mac_demo_merge() {

  const googleMacDemo = google_mac_demo.map( (i, index) =>{
    if (typeof window !== 'undefined'){
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
    
    
  }
  );
  return(
    googleMacDemo
    
  )

  
}
export {Google_mac_demo_merge}
