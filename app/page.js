"use client"

import { Navigation } from "../components/topnav"
import { Footer } from "../components/footer"
import { Header} from "../components/header"
import React from "react";
import About from "./page/about";
import Home from "./page/home"
import Garlic from "./projects/garlic";
import Cabbage from "./projects/cabbage";
import Apple from "./projects/apple";

import { BrowserRouter , Routes,  Route} from "react-router-dom";



export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify p-24 bg-neutral-900">
   
        <div>
       
          <BrowserRouter>
           {/* navigation, which includes Link, should live inside BrowserRouter */}
            {/* <Navigation />  */}
            <Header />
            <Routes>
            
              <Route index path="/" element={<Home />}  />
              <Route path="/about" element={<About />} />

              <Route path="/garlic" element={<Garlic />} />
              <Route path="/cabbage" element={<Cabbage />} />
              <Route path="/apple" element={<Apple />} />
                  
              {/* If any route mismatches the upper 
              route endpoints then, redirect triggers 
              and redirects app to home component with to="/" */}
              <Route to="/" />
            </Routes>

            <div className="relative flex w-full max-w-5xl items-center justify-between mt-32 bottom-0  ">
              <Footer />
            </div>
        </BrowserRouter>
      
      </div>
    

    </main>
  )
}
