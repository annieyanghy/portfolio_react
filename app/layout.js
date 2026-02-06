
import './globals.css';
import { Figtree } from 'next/font/google';
import {Providers} from '@/app/providers';
import { Footer } from "@/components/footer"
import { Header} from "@/components/header"



 const inter = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'hsinyuyang.com',
  description: 'UX designer and Interaction designer',
  
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <Providers>

          <main className="flex min-h-screen flex-col  items-center justify p-24 bg-neutral-900">
            <div>
              <Header />
              {children}
              <Footer />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}