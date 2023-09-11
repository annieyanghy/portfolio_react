import React from "react";
import { Cabbage_data_research_1_merge } from "../../data/dataMerge/cabbageDataMerge";
import MainLeft from "@/components/layouts/main_left";
import MainRight from "@/components/layouts/main_right";
import TitleSection from "@/components/layouts/titleSection";
import TitleStatement from "@/components/layouts/titleStatement";
import Intro from "@/components/layouts/intro";

export default function Cabbage() {
  return (
    <main className="flex min-h-screen flex-col w-full max-w-5xl items-center justify-between bg-neutral-900">

      <div className="flex flex-col items-center justify-content my-0 ">
        <div>
          <Intro title="I'm cabbage"  imgPath=""
          time="2020" role="solo product designer" type="passion project expanded from a class"
          // imgPath="/cabbage/Focus_hero_L.png"
          />

        </div>

        <TitleStatement title="3 kinds of triggers" />
        <div className="relative  flex-row  md:flex items-center justify-between">

          <Cabbage_data_research_1_merge />


        </div>
        <div className="relative ">
          <TitleSection title="Solution" description="yum yum yum" />

          <MainLeft caption="insight 1" title="hello" description="well" imgPath="/cabbage/apple.png" />
          <MainRight caption="insight 1" title="hello" description="well" imgPath="/cabbage/apple.png" />
        </div>
      </div>





    </main>
  )
}
