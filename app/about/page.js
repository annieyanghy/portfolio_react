import React from "react";

export default function About() {
  return (
    <main className="flex min-h-full flex-col w-full max-w-5xl items-center justify-between bg-neutral-900 ">
   
      <div className="flex flex-col items-center justify-content bg-sky-800 rounded-3xl px-2 md:p-12 ">
        <div> 
          <p className="text-5xl mb-12">Hello</p>
          <p className="text-2xl mb-8">I’m an Interaction Designer at Google. I create savvy, scalable and efficient design that also promotes smooth user experience. My product is called My Ad Center, and it gives customers agency to tune the ads they see.</p>
          <p className="text-2xl mb-8">
            
            Outside of work, you can find me doing yoga, jogging, taking photos, illustrating things, traveling and café hopping.

            </p>
            <p className="text-2xl mb-8">
            Currently, I’m trying to drink less coffee, and finish reading “The organized mind”.

            </p>
            <p className="text-md text-zinc-100 py-3">👋🏼 <a href="https://www.linkedin.com/in/hsinyuyang/">LinkedIn  </a><span class="material-symbols-rounded" style={{ fontSize: 14 }} >open_in_new</span></p>

            <p className="text-md text-zinc-100">🗽 New York-based tea lover from Taiwan 🇹🇼</p>


        </div>
        
      </div>

    </main>
  )
}
