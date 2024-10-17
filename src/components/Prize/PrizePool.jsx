import React from 'react';
import { Trophy } from 'lucide-react';

const PrizeCard = ({ place, amount, icon }) => (
  <div className="bg-black border-2 border-orange-500 rounded-lg p-4 flex items-center justify-between transition-transform hover:scale-105 w-full">
    <div className="flex items-center">
      {icon}
      <div className="ml-4">
        <h3 className="text-orange-500 text-lg font-bold">{place}</h3>
        <p className="text-white text-xl font-bold">₹{amount}</p>
      </div>
    </div>
  </div>
);

const PrizePool = () => {
  return (
    <div className="m-4 mt-16 mb-12 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h2 style={{ fontFamily: "Black Ops One, sans-serif" }} className="text-5xl md:text-6xl text-white text-center mb-12">
          Prize Pool: ₹30,000
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <PrizeCard 
            place="1st Place" 
            amount="15,000" 
            icon={<Trophy size={48} className="text-yellow-400 flex-shrink-0" />} 
          />
          <PrizeCard 
            place="2nd Place" 
            amount="10,000" 
            icon={<Trophy size={48} className="text-gray-300 flex-shrink-0" />} 
          />
          <PrizeCard 
            place="3rd Place" 
            amount="5,000" 
            icon={<Trophy size={48} className="text-orange-700 flex-shrink-0" />} 
          />
        </div>
        <p className="text-white text-center mt-8 text-sm">
          {/* *Additional sponsored prizes and goodies for participants! */}
        </p>
      </div>
    </div>
  );
};

export default PrizePool;