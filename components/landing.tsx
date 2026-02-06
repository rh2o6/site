import React from 'react';
import Image from 'next/image';


export const Landing: React.FC<LandingProps> = ({}) => {
    return (

        <div className="landing grid grid-cols-2 min-h-screen gap-4">

            
  <div className="flex flex-col justify-center items-center">

  <Image src="/images/floppa.png" alt="Portfolio" width={400} height={400} />
  </div>




  <div className="landingbio flex flex-col justify-center items-center">
    <p>My name is Robert Hollander, I'm a 3rd year computer science student at York University currently on a Co Op Term.</p>
  </div>

</div>
    );
};

export default Landing;

export interface LandingProps {}