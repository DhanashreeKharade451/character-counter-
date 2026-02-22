//Create a StatsDisplay component that shows various statistics about the text.
import React, { useState } from "react";
import type { StatsDisplayProps} from "../../types";


export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
   showReadingTime = true,
   minWords = 0,
   maxWords = 100,
   targetReadingTime,

}) => {

    const {characterCount, wordCount, readingTime } = stats;

    const formatReadingTime = (minutes: number) =>{
        const mins = Math.floor(minutes)
        const seconds = Math.round((minutes - mins)*60);
        return `${mins}:${seconds.toString().padStart(2,"0")}`;
    };

    // Word goal color feedback
//   const wordColor =
//     wordCount < minWords
//       ? "text-red-500"
//       : wordCount > maxWords
//       ? "text-yellow-500"
//       : "text-green-600";

  // Progress percentage
//   const progress = Math.min((wordCount / maxWords) * 100, 100);

  return (

    //<div className="max-w-2xl mx-auto p-4 space-y-4 ">
      
      <div className="bg-white rounded-lg shadow-sm p-4 ">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Characters</p>
            <p className="text-2xl font-semibold text-gray-700">{characterCount}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Words</p>
            <p className="text-2xl font-semibold text-red-600">{wordCount}</p>
            <p className="text-xs text-gray-500">Min: {minWords} | Max: {maxWords}</p>
          </div>

         {showReadingTime && (
          <div className="text-center">
            <p className="text-sm text-gray-500">Reading Time</p>
            <p className="text-2xl font-semibold text-gray-700">
              {formatReadingTime(readingTime)}
            </p>
          </div>
        )}
        </div>
      </div>
   
  );
};

// </div>
    // <div className="mt-6 space-y-4">
    //     <div>
    //         {/* <div>
    //             <p>Characters</p>
    //             <p>{stats.characterCount}</p>
    //         </div> */}

    //         <div>
    //             <p>Words</p>
    //             <p>{stats.wordCount}</p>
    //             <p>
    //                 Min:{stats.minWords} |MAx: {stats.maxWords}
    //             </p>
    //         </div>


    //     </div>

    // </div>