import React from 'react';


interface MoreInfoProps {
  projectDescription: string;
  technologiesUsed?: React.ElementType[];
  howWhyBuilt: string;
  onClose: () => void;
}



const MoreInfo: React.FC<MoreInfoProps> = ({
  projectDescription,
  technologiesUsed,
  howWhyBuilt,
}) => {
  return (
    <div className="more-info-card bg-white rounded-xl shadow-lg p-6 flex flex-col gap-6 border border-gray-200">
  
  {/* Project Description */}
  <section className="more-info-section flex flex-col gap-2">
    <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-1">
      Project Description
    </h2>
    <p className="text-gray-700">{projectDescription}</p>
  </section>

  {/* Technologies Used */}
  <section className="more-info-section flex flex-col gap-2">
    <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-1">
      Technologies Used
    </h2>
    <div className="flex flex-wrap gap-3 mt-2">
      {technologiesUsed?.map((Icon, index) => (
        <div
          key={index}
          className="p-2 bg-cyan-50 rounded-md flex items-center justify-center shadow-sm"
        >
          <Icon className="w-6 h-6 text-cyan-600" />
        </div>
      ))}
    </div>
  </section>

  {/* How / Why It Was Built */}
  <section className="more-info-section flex flex-col gap-2">
    <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-300 pb-1">
      How / Why It Was Built
    </h2>
    <p className="text-gray-700">{howWhyBuilt}</p>
  </section>
</div>
  );
};

export default MoreInfo;