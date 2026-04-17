import React from 'react';
import Image from 'next/image';


export const Landing: React.FC<LandingProps> = ({}) => {
    return (

      <div className="landing-wrapper">

        <div className="landing grid grid-cols-1 md:grid-cols-2 min-h-screen gap-8 px-4 md:px-8 py-8">

            
  <div className="flex justify-center items-center flex-col">

  <div className="w-full max-w-sm md:max-w-md">
    <Image
      src="/images/unnamed.png"
      alt="Portfolio"
      width={400}
      height={400}
      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover w-full h-auto"
      priority
    />
  </div>

  <div className="mt-4 text-center">
    <h1 className="text-2xl md:text-3xl font-bold mb-2">Robert Hollander</h1>
    <p className="text-base md:text-lg text-gray-600">Computer Science Student | Database Administrator | Community Builder</p>
    <div className="mt-6 flex items-center gap-3 justify-center">
       <p className="text-sm font-semibold text-gray-700">Studying @</p>
      <Image
        src="/images/york.png"
        alt="York University"
        width={100}
        height={100}
        className="rounded"
      />
     
    </div>
  </div>

 


</div>




  <div className="landingbio flex flex-col justify-center items-center md:items-start px-2 md:px-8 py-4 md:py-8">
    <div className="max-w-2xl space-y-4 text-base md:text-lg leading-relaxed">

      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left">About Me</h1>
      <p>My name is Robert Hollander, a 3rd year computer science student. I am currently doing my co-op term with the Ontario Government as a database administrator. Some of my skills and interests include databases, web development, IT Infrastructure, and computer networking. I am also deeply involved in the York University community. As president of "The Computing Students Hub," York's computer science club, I work to support and connect students, and I have enjoyed mentoring peers in hackathons. Outside of academics, I enjoy playing video games, reading manga and comics, cooking, doing DIY projects, and going to the gym.</p>
      
      <p>I grew up in Thornhill, Ontario, a quiet town with a strong sense of community that shaped many of my values. Being raised in an environment where people support one another made me want to build similar communities at York. Developing meaningful relationships and helping fellow students feel included has become a central part of my university experience.</p>
      
      <p>Attending York University was a no-brainer for me, as it is pretty close to home and many people I knew had positive experiences here. The decision to study computer science came from my love and fascination with technology. I spent hours exploring my Wii, DS, and my first computer, always curious to learn more. This curiosity has stayed with me and has become one of my strengths, never accepting things at face value and always wanting to understand how they work.</p>
      
      <p>Another strength I've developed is the ability to look at situations from a higher-level perspective. This mindset has helped me get the most out of university by recognizing that it's more than just classes. It's about community, networking, personal growth, and discovering your direction in life.</p>
      
      <p>One of my greatest inspirations has been my grandmother, who raised me through difficult circumstances. Her perseverance taught me the value of resilience, hard work, and being there for others.</p>
      
      <p className="italic border-l-4 border-blue-500 pl-4">The artifact that speaks to me is a quote from one of my favourite shows, "Fullmetal Alchemist Brotherhood": "There's no such thing as a painless lesson—they just don't exist. Sacrifices are necessary. You can't gain anything without losing something first. Although if you can endure that pain and walk away from it, you'll find that you now have a heart strong enough to overcome any obstacle."</p>
      
      <p>This quote resonates with me because it reflects the role of sacrifice and struggle in personal growth. Whether in academics, leadership, or life challenges, the message reminds me that difficult moments are not setbacks but opportunities to become stronger, and this perspective shapes my goals and direction today.</p>
    </div>
  </div>
</div>

<div className="flex justify-center  items-center mt-8 px-4 flex-col">

    <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">Why Me</h1>

  <video className="w-full max-w-3xl rounded-lg shadow-lg" controls>
    <source src="/whymecoop2100robert.mp4" type="video/mp4" />
  </video>
</div>


</div>

    );
};

export default Landing;

export interface LandingProps {}