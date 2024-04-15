"use client"
import React from "react";

import '@/app/globals.css';


import {
  Cabbage_project_process_merge,
  Cabbage_problem_1_merge,
  Cabbage_problem_2_merge,
  Cabbage_solution_1_merge,
  Cabbage_solution_2_merge,
  Cabbage_research_1_merge,
  Cabbage_research_interview_0_merge, Cabbage_research_interview_1_merge, Cabbage_research_interview_2_merge,
  Cabbage_research_compAnalysis_0_merge, Cabbage_research_compAnalysis_1_merge,
  Cabbage_research_keyPainPoints_merge,
  Cabbage_design_1_merge, Cabbage_design_requirement_merge, Cabbage_design_intervention_diagram_merge,
  Cabbage_testing_1_merge, Cabbage_future_ideas_merge

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
import MainImg from "@/components/blocks/main_img";
import { Chart } from "react-google-charts";
import { taskSuccess_data, taskSuccess_options, useful_data, useful_options } from "@/app/focus_charts.js";
import config from "@/next.config";



export default function Focus() {
  return (
    <main className="flex min-h-screen flex-col w-full max-w-5xl items-center justify-between bg-neutral-900">

      <div className="flex flex-col justify-content mb-20">

        {/* intro */}
        <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
          <ParallaxBannerLayer
            image={`${config.basePath}/cabbage/Focus_hero_L.png`}
            speed={-10}
            style={{ backgroundPosition: "50% 10vh" }}
          />
        </ParallaxBanner>
        <Intro
          title="Focus Calendar"
          time="2020"
          role="Solo product designer"
          type="Passion project"
          description="Using behavioral economics to nudge people to to get things done"
         
          height="100%"
        />
        {/* <Intro 
                        imgPath="url(/cabbage/Focus_hero_L.png)"
                        height="500px"
                        /> */}
      
      
        {/* project process overview */}
          
          <div className="flex flex-col mx-auto w-full max-w-5xl 
                          justify-center gap-x-4
                          my-8
                            md:flex-row ">
            
            <Cabbage_project_process_merge />
          </div>


        {/* problem */}
        <div id="Intro" className=" flex flex-col relative mt-10 pt-10 w-full items-center justify-center  bg-indigo-500" >

          <Cabbage_problem_1_merge />
          <Col_3 component={Cabbage_problem_2_merge()} />
        </div>


        {/* solution */}
        <div className="relative mt-10 justify-between">

          <Cabbage_solution_1_merge />

          <div className="relative flex-col w-screen max-w-5xl mx-auto justify-items-center justify-between">
            <Cabbage_solution_2_merge />
          </div>
        </div>

        
        {/* research */}
        <div id="Understand" className="flex flex-col relative mt-10 pt-10 w-full items-center justify-center  bg-indigo-500">

          <Cabbage_research_1_merge />

          <div className="relative my-10 py-8 px-14  md:w-10/12 justify-center rounded-3xl bg-indigo-700">

            <TitleStatement title="Foundational user interview" />
            <Col_2 title="" component={Cabbage_research_interview_0_merge()} titleBgColor="" />

            <Col_3 title="Why focused?" component={Cabbage_research_interview_1_merge()} titleBgColor="rgb(99 102 241)" />
            <Col_3 title="Why unfocused?" component={Cabbage_research_interview_2_merge()} titleBgColor="rgb(153 27 27)" />

          </div>
          {/* <MainImg imgPath="/cabbage/Focus_User journey.png" title="User journey" 
                  description=""/> */}
          <div className="relative my-10  md:w-10/12 justify-center rounded-3xl bg-indigo-900">
            <TitleStatement title="Journey mapping" />
            <MainImg imgPath="/cabbage/Focus_User journey.png"
              title="User Journey"
              bgColor='rgb(248, 250, 252)'
            />
          </div>
          <div className="relative my-10 py-8 px-14 md:w-10/12 justify-center rounded-3xl bg-indigo-900">

            <TitleStatement title="Competitive analysis" />
            <Col_2 title="" component={Cabbage_research_compAnalysis_0_merge()} titleBgColor="" />
            <div className=" w-full max-w-5xl justify-items-center mx-auto">
              <Table >{Cabbage_research_compAnalysis_1_merge()}</Table>
            </div>
          </div>


          <div className="relative my-10 py-8 px-14  md:w-10/12 justify-center rounded-3xl bg-fuchsia-700">
            <div className=" w-full max-w-5xl justify-items-center mx-auto">

              <TitleStatement title="Key pain points" />
              <Table>{Cabbage_research_keyPainPoints_merge()}</Table>

            </div>
          </div>

        </div>

        {/* Design */}
        <div id="Design" className="flex flex-col relative mt-10 w-full items-center justify-center  ">
          <Cabbage_design_1_merge />

          <div className="relative my-10 py-8 px-14  md:w-10/12 justify-center rounded-3xl bg-slate-800">
            <div className=" w-full max-w-5xl justify-items-center mx-auto">

              <TitleStatement title="Design requirement" />
              <Table >{Cabbage_design_requirement_merge()}</Table>
            </div>
          </div>

          <div className="relative my-10 py-8   md:w-10/12 justify-center rounded-3xl bg-slate-800/50">

            <TitleStatement title="Ideation" />
            <Cabbage_design_intervention_diagram_merge />
            <MainImg imgPath="/cabbage/Brainstorming.jpeg" title="Brainstorming" />
            <MainImg imgPath="/cabbage/Sketch.png" title="Sketches" />

          </div>

          <div className="relative my-10 py-8  md:w-10/12 justify-center rounded-3xl bg-slate-950/50">

            <TitleStatement title="Lo-fi to mid-fi iterations" />
            <div className=" flex flex-col relative  md:flex-row ">
              <MainImg imgPath="/cabbage/Lo-fi/lofi_Events.gif" title="Setting event" />
              <MainImg imgPath="/cabbage/Lo-fi/lofi_Focus.gif" title="Focus timer" />
              <MainImg imgPath="/cabbage/Lo-fi/lofi_Goals.gif" title="Goal setting" />
              <MainImg imgPath="/cabbage/Lo-fi/lofi_Journey.gif" title="Stats" />
            </div>


            <MainImg imgPath="/cabbage/UserValidation.png" title="User feedback on lo-fi mocks"
              description="The design needs to strike a balance between flexible breaks and focus sessions."
            />
            <MainImg imgPath="/cabbage/Mid-fi_wireframe.png" title="Mid-fi wireframe"
              description="Users want more focus timer embedded in default calendar settings"
            />

          </div>
          <MainImg imgPath="/cabbage/hifi-bg.png" title="Final mocks"
            description=""
          />
        </div>

        {/* testing & future */}
        <div id="Testing" className="flex flex-col relative mt-10 pt-10 w-full items-center justify-center  bg-indigo-500">
          <Cabbage_testing_1_merge />

          <div className="relative my-10 py-8 px-14  md:w-10/12 justify-center rounded-3xl bg-indigo-700">
            <TitleStatement title="Unmoderated testing"
              description="To validate my design hypotheses, I created an unmoderated test on UseBerry with 5 planned tasks. I recruited 10 participants to complete these tasks"
            />
            <div className="mb-20">
              <Chart
                chartType="BarChart"
                data={taskSuccess_data}
                options={taskSuccess_options}
                width="100%"
                height="400px"
                legendToggle
              />
              <Chart
                chartType="BarChart"
                data={useful_data}
                options={useful_options}
                width="100%"
                height="400px"
                legendToggle
              />
            </div>
            <TitleStatement title="Future design ideas"
              description="Through user testing with 10 participants, I identified 3 promising design directions for the future.
"
            />
            <Col_3 title=""
              component={Cabbage_future_ideas_merge()} titleBgColor="" />
          </div>

        </div>


      </div>
    </main>
  );
}
