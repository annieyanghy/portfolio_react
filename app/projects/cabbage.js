import React from "react";
import { 
  Cabbage_problem_1_merge, Cabbage_problem_2_merge,
  Cabbage_solution_1_merge, Cabbage_solution_2_merge, 
  Cabbage_data_research_1_merge } from "../../data/dataMerge/cabbageDataMerge";
import MainLeft from "@/components/layouts/main_left";
import MainRight from "@/components/layouts/main_right";
import TitleSection from "@/components/layouts/titleSection";
import TitleStatement from "@/components/layouts/titleStatement";
import Intro from "@/components/layouts/intro";
import { Parallax, ParallaxBanner, ParallaxBannerLayer  } from 'react-scroll-parallax';


export default function Cabbage() {
  return (
    <main className="flex min-h-screen flex-col w-full max-w-5xl items-center justify-between bg-neutral-900">

      <div className="flex flex-col items-center justify-content mb-20">
        
          <ParallaxBanner 
              style={{ aspectRatio: '2 / 1', }}
              // className="aspect-[2/1] bg-center  bg-no-repeat max-w-8xl max-h-min"
              >
            <ParallaxBannerLayer image='/cabbage/Focus_hero_L.png' speed={-10}
              style={{  backgroundPosition:'50% 5vh' }}
            />
          </ParallaxBanner>
          <Intro title="Focus Calendar"  
                time="2020" role="solo product designer" 
                description="Using behavioral economics to nudge people to to get things done"
                type="passion project"
                height="100%"/>
                {/* <Intro 
                imgPath="url(/cabbage/Focus_hero_L.png)"
                height="500px"
                /> */}

        <div className="relative mt-10">
          {/* problem */}
          <Cabbage_problem_1_merge />
          <div className="relative  flex-row mx-auto md:flex items-center justify-between">
            <Cabbage_problem_2_merge />
          </div>
        </div>


        <div className="relative mt-10 items-center justify-between">
          {/* solution */}
          <Cabbage_solution_1_merge />

          <div className="relative flex-col max-w-5xl mx-auto md:flex items-center justify-between">
            <Cabbage_solution_2_merge />
          </div>
        </div>



        <TitleStatement title="3 kinds of triggers" />
        <div className="relative  flex-row  md:flex items-center justify-between">
          <Cabbage_data_research_1_merge/>
        </div>
      </div>





    </main>
  )
}
