import { Icon } from "developer-icons/dist/icon";
import * as icon from "developer-icons";
export default function Contact() {
  return (
    <main>

        <div className="flex  min-h-screen flex-col items-center">
            
            <h1 className="text-4xl font-bold pt-20 pb-20">Contact</h1>

            
<div className="space-y-4 text-lg leading-relaxed max-w-2xl mx-auto">
  <p>
    You can reach me at the following avenues for any inquiries, collaborations, or just to say hello! I’m always open to connecting with like-minded individuals and exploring new opportunities.
  </p>
</div>

<div className="pt-20 grid grid-cols-2 gap-96 max-w-2xl mx-auto"> 


    <div>

      <h2 className="text-2xl font-bold">LinkedIn</h2>
      <a href="https://www.linkedin.com/in/rh206/">
           <icon.LinkedIn></icon.LinkedIn>
      </a>
 



    </div>


    <div>
      
      
      <h2 className="text-2xl  font-bold"> Email</h2>

      <a className="text-blue-500" href="mailto:robh206@my.yorku.ca"> <icon.Gmail></icon.Gmail></a>

      </div>



</div>




        </div>
      
    </main>
  )
}