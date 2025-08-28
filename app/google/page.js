import React from "react";


export default function Garlic() {
  return (
    <main className="flex min-h-full flex-col w-full max-w-5xl items-center justify-between bg-neutral-900">
      <div className="flex flex-col items-center justify-content my-20 w-full">
        <div> 
          <h1 className="text-5xl mb-12">Google - My Ad Center </h1>
          <p className="text-xl mb-8"> <a className="underline underline-offset-4" href="https://myadcenter.google.com">myadcenter.google.com</a></p>

          <p className="text-xl mb-8">Check out <a className="underline underline-offset-4" href="https://blog.google/technology/safety-security/my-ad-center/">this article </a>for the product launch!</p>

          <img className="w-full mb-8 rounded-3xl" src="garlic/mac.webp"></img>

       <p className="text-2xl mb-12">Since launching the product at My Ad Center in 2022, I've been on a mission to continuously improve its features and accessibility. The core of my work has been centered on giving users more agency over their ads, ensuring they have the tools and control they need to manage their campaigns effectively. Every update, big or small, has been a step toward a more intuitive, powerful, and user-friendly platform, reflecting my commitment to a product that truly serves its users.

        </p>

        <h2 className="text-2xl mb-4">
        Other features I’ve designed since its launch:        
        </h2>
        <ul className="text-xl list-disc pl-6">
          <li>Ad history</li>
          <li>Suggested ad topics and ad brands</li>
          <li>Empty page for users who turns off ad personalization</li>
        </ul>
        
      </div>
      </div>
     

      

 
    </main>
  )
}
