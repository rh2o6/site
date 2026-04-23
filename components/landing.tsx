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



</div>




</div>

    );
};

export default Landing;

export interface LandingProps {}