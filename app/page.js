import Image from 'next/image'
import { ProjectList } from "../components/card"
import { Navigation } from "../components/topnav"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutral-900">
      <div className=" w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to&nbsp;
          <code className="font-mono font-bold">hsinyuyang.com</code>
        </p>
        <Navigation />
       
      </div>
      <div className="flex my-52">
        <div> 
          <p className="text-5xl">👋🏼 I design by understanding <del>users</del> people </p>
        </div>
        

      </div>
      <div className="relative flex justify-center before:absolute 
      bg-gradient-to-r from-cyan-500 to-blue-400
      rounded-2xl
      ">
        
        <ProjectList  />
    
      </div>

      <div className="relative flex w-full justify-between mt-32 bottom-0">
        
        <Footer />
    
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      
        {/* <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a> */}

      
      </div>
    </main>
  )
}
