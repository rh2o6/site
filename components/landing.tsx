import Image from 'next/image';
import { Bodoni_Moda } from 'next/font/google';
import Link from 'next/link';
const bodoni = Bodoni_Moda({ 
  subsets: ['latin'],
  weight: '900', 
  style: 'normal' 
});



export default function Landing() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 md:px-12 w-full">
   
      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
          <Image 
            src="/images/unnamed.png" 
            alt="Robert Hollander" 
            fill 
            className="object-cover" 
            priority
          />
        </div>

        
        <div className="w-full"> 
         <h1 className={`mb-4 text-4xl md:text-5xl lg:text-6xl text-[#191B1C] uppercase tracking-tighter ${bodoni.className}`}>
  Robert Hollander
</h1>

<div className="max-w-2xl space-y-4">
  <p className="text-[#191B1C] text-lg leading-relaxed text-pretty">
    Hey there! My name is Robert, I'm a 3rd year computer science student at <strong>York University</strong>. Currently I am doing a co-op term as a <strong>Database Administrator</strong> at the <strong>Ontario Government</strong>.
  </p>

  <p className="text-[#191B1C] text-lg leading-relaxed text-pretty">
    I love learning everything about computers and software. In my free time I love working on my projects, helping out my student community, and contributing to open source.
  </p>
</div>
         
         <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
  
  
<Link
              href="/projects"
              className="text-center rounded-md bg-[#0D3AF2] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0316AB]"
            >
              Check out my work!
            </Link>

            <Link
              href="/professional"
              className="text-center rounded-md bg-[#E7EFFE] px-6 py-3 font-semibold text-[#0D3AF2] transition-colors hover:bg-[#AFC7FB]"
            >
              My past experience
            </Link>




</div>



        </div>

      </div>
    </main>
  );
}