import React from "react";

const MatchPreview = ({ images, sections }) => {
  return (
    <div className="bg-white rounded-[8px] shadow-md border border-[#DBE1E7] mt-7 ">
      <div className="flex items-center p-5 bg-[#F7F8F9] h-[70px] w-full">
        <h3 className="text-lg items-start flex font-semibold text-[#2B2B2B] mb-5">
          Preview
        </h3>
      </div>

      {/* Images Section */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 p-5 rounded-t-[8px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Match preview ${index + 1}`}
            className="w-full sm:w-1/2 h-auto rounded-lg object-cover"
          />
        ))}
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className="px-6 py-5 border border-[#DBE1E7]">
          <h4 className="text-green-600 font-semibold mb-2 uppercase">
            {section.title}
          </h4>

          <div>
            <p className="text-[#2B2B2B]">{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchPreview;
import React from "react";
import LineUp from "./LineUp";

const MatchPreview = ({ hightlight1, hightlight2 }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 bg-white rounded-lg shadow-md">
      {/* Preview Section */}
      <div className="space-y-4 lg:col-span-3 border border-solid border-gray-300 rounded-md p-4 bg-white">
        <h2 className="bg-white w-full pt-2 px-4 font-gilroy font-semibold text-[20px] leading-[30px]">
          Preview
        </h2>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={hightlight1}
            alt="Germany celebrating"
            className="w-full object-cover rounded-md border border-solid border-gray-300"
          />
          <img
            src={hightlight2}
            alt="Scotland celebrating"
            className="w-full object-cover rounded-md border border-solid border-gray-300"
          />
        </div>

        {/* Highlight */}
        <div className="p-4  rounded-md">
          <h3 className="text-lg font-semibold">Highlight</h3>
          <p>
            Germany will face off against Scotland in a Club Friendlies match at
            12:00:00.
          </p>
        </div>

        {/* Form */}
        <div className="p-4 border-t-[1px] border-solid border-gray-300 rounded-md">
          <h3 className="text-lg font-semibold">Form</h3>
          <p>
            Germany has won three of their last 5 matches while Scotland has won
            2 of their last five matches.
          </p>
        </div>

        {/* Head to Head */}
        <div className="p-4 border-t-[1px] border-solid border-gray-300 rounded-md">
          <h3 className="text-lg font-semibold">Head to Head</h3>
          <p>
            Both teams have played 3 times with Germany winning 3 time(s) in the
            last 3 encounters while Scotland has won 0 time(s).
          </p>
        </div>

        {/* Goal Stats */}
        <div className="p-4 border-t-[1px] border-solid border-gray-300 rounded-md">
          <h3 className="text-lg font-semibold">Goal Stats</h3>
          <p>
            Germany has a goal ratio of 1.75 per match while Scotland has a goal
            ratio of 1.35 per match this season.
          </p>
        </div>
      </div>

      {/* Lineup section  */}
      <div className="lg:col-span-2 ">
        <LineUp margintop={"mt-0"} />
      </div>
    </div>
  );
};

export default MatchPreview;
