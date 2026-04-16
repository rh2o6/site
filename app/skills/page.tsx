import * as icon from "developer-icons";


export default function Skills() {
  return (
    <main>
      <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4 pt-20">Technical Skills</h1>

       <div className="space-y-4 text-lg leading-relaxed">
  <p>
    Learning new skills and technologies excites me. I’m always eager to grow
    and expand my technical abilities.
  </p>

  <p>
    My philosophy is to learn by doing. I believe the best way to master a new
    skill is by applying it to real-world projects.
  </p>

  <p>
    I’m not afraid to take on new challenges and actively seek opportunities
    to broaden my knowledge and expertise.
  </p>
</div>


        <h2 className="text-2xl font-semibold mt-8 mb-4">Front-End Development</h2>

        <ul className="flex gap-4 list-none">
  <li><icon.HTML5 /></li>
  <li><icon.CSS3 /></li>
  <li><icon.JavaScript /></li>
  <li><icon.TypeScript /></li>
  <li><icon.React /></li>
  <li><icon.NextJs /></li>
  <li><icon.TailwindCSS /></li>
</ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Design</h2>
        <ul className="flex gap-4 list-none">
  <li><icon.Figma /></li>
  <li><icon.Photoshop /></li>
</ul>

<h2 className="text-2xl font-semibold mt-8 mb-4">Back-End Development</h2>
<ul className="flex gap-4 list-none">
  <li><icon.Python /></li>
  <li><icon.Java /></li>
  <li><icon.C /></li>
  <li><icon.NodeJs /></li>
  <li><icon.FlaskDark /></li>
  <li><icon.Django /> </li>
  <li><icon.Spring /></li>
  <li><icon.FastAPI /></li>
</ul>

<h2 className="text-2xl font-semibold mt-8 mb-4">Databases</h2>
<ul className="flex gap-4 list-none">
  <li><icon.MicrosoftSQLServer /></li>
  <li><icon.PostgreSQL /></li>
  <li><icon.Oracle /></li>
  <li><icon.Redis /></li>
</ul>


<h2 className="text-2xl font-semibold mt-8 mb-4">Developer Tools</h2>
<ul className="flex gap-4 list-none"> 
  <li><icon.Git /></li>
  <li><icon.Docker /></li>
  <li><icon.AWS /></li>
  <li><icon.Azure></icon.Azure></li>
  <li><icon.Postman></icon.Postman></li>
</ul>

<h2 className="text-2xl font-semibold mt-8 mb-4">Infrastucture</h2>
<ul className="flex gap-4 list-none"> 

  <li><icon.Linux /></li>
  <li><icon.Bash /></li>
  <li><icon.PowerShell /></li>
  <li><icon.Cloudflare /></li>
  <li><icon.Grafana /></li>
  <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" />
</li>

  
</ul>


       
        </div>
    </main>
  );
}