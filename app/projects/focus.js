import React from "react";
import '../globals.css';

import {
  Cabbage_problem_1_merge,
  Cabbage_problem_2_merge,
  Cabbage_solution_1_merge,
  Cabbage_solution_2_merge,
  Cabbage_research_1_merge,
  Cabbage_research_interview_0_merge, Cabbage_research_interview_1_merge,  Cabbage_research_interview_2_merge,
  Cabbage_research_compAnalysis_0_merge, Cabbage_research_compAnalysis_1_merge,
  Cabbage_research_keyPainPoints_merge,
} from "../../data/dataMerge/focusDataMerge";
import MainLeft from "@/components/blocks/main_left";
import MainRight from "@/components/blocks/main_right";
import TitleSection from "@/components/blocks/titleSection";
import TitleStatement from "@/components/blocks/titleStatement";
import Intro from "@/components/blocks/intro";
import Col_3 from "@/components/layouts/3Col";
import Col_2 from "@/components/layouts/2Col";
import Table from "@/components/blocks/table/tableBody";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import { cabbage_research_keyPainPoints } from "@/data/focusRawData";
console.log(cabbage_research_keyPainPoints)


export default function Focus() {
  return (
    <main className="flex min-h-screen flex-col w-full max-w-5xl items-center justify-between bg-neutral-900">
      
      <div className="flex flex-col justify-content mb-20">

        {/* intro */}
        <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
          <ParallaxBannerLayer
            image="/cabbage/Focus_hero_L.png"
            speed={-10}
            style={{ backgroundPosition: "50% 10vh" }}
          />
        </ParallaxBanner>
        <Intro
          title="Focus Calendar"
          time="2020"
          role="solo product designer"
          description="Using behavioral economics to nudge people to to get things done"
          type="passion project"
          height="100%"
        />
                {/* <Intro 
                        imgPath="url(/cabbage/Focus_hero_L.png)"
                        height="500px"
                        /> */}


        {/* problem */}
        <div className="relative mt-10">
          
          <Cabbage_problem_1_merge />
          <Col_3 component={Cabbage_problem_2_merge()} />
        </div>


        {/* solution */}
        <div className="relative mt-10 justify-between">
          
          <Cabbage_solution_1_merge />

          <div className="relative flex-col max-w-5xl mx-auto justify-items-center justify-between md:flex">
            <Cabbage_solution_2_merge />
          </div>
        </div>


        {/* research */}
        <div className="flex flex-col relative mt-10 pt-10 w-full items-center justify-center  bg-indigo-500">

            <Cabbage_research_1_merge />

            <div className="relative my-10 py-8 px-14 w-max justify-center rounded-3xl bg-indigo-700">

                <TitleStatement title="Foundational user interview" />
                <Col_2 title="" component={Cabbage_research_interview_0_merge()} titleBgColor="" />

                <Col_3 title="Why focused?" component={Cabbage_research_interview_1_merge()} titleBgColor="rgb(99 102 241)" />
                <Col_3 title="Why unfocused?" component={Cabbage_research_interview_2_merge()} titleBgColor="rgb(153 27 27)"/>
            
            </div>
            
            <div className="relative my-10 py-8 px-14 w-max justify-center rounded-3xl bg-indigo-900">

                <TitleStatement title="Competitive analysis" />
                <Col_2 title="" component={Cabbage_research_compAnalysis_0_merge()} titleBgColor="" />
                <Table id="hii">{Cabbage_research_compAnalysis_1_merge()}</Table>
                
            </div>

            <div className="relative my-10 py-8 px-14 w-max justify-center rounded-3xl bg-fuchsia-700">

                <TitleStatement title="Key pain points" />
                <Table >{Cabbage_research_keyPainPoints_merge()}</Table>
                
                

                
            </div>
        </div>


        <div className="flex flex-col relative mt-10 w-full items-center justify-center  ">
            {/* Ideate */}
            
            
        </div>

      
      </div>
    </main>
  );
}
