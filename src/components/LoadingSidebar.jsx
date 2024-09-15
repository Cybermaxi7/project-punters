import React, { useState, useEffect } from "react";

const LoadingSidebar = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-col h-screen bg-gray-100 p-4 w-64">
        {isLoading ? (
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-6"></div>

            <div className="space-y-4">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="h-6 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-bold mb-6">Sport List</h2>
            <ul className="space-y-4">
              {[...Array(8)].map((_, index) => (
                <li key={index} className="h-6 bg-gray-300 rounded"></li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex-1 p-6">
        <h2 className="text-[16px] font-inter mb-4">
          Categories under the Sport
        </h2>
        <div className="flex gap-4 flex-wrap text-[16px] font-inter ">
          {["Premier League", "La Liga", "Italy", "Ligue 1", "Bundesliga"].map(
            (category) => (
              <span
                key={category}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700"
              >
                {category}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingSidebar;
