// //Create a CharacterCounter component that combines the above components and manages the state.

import { useState, useEffect } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";

import { StatsDisplay } from "../StatsDisplay/StatsDisplay.tsx";




export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 1,
}) => {
  const [text, setText] = useState("");

  //Calculate Statistics

    const calculateStates = (input: string): TextStats => {
         const characterCount = input.length;

    const wordArray = input.trim().split(/\s+/).filter(Boolean);
    const wordCount = input.trim() === "" ? 0 : wordArray.length;

      //Average Reading speed =200 word per minute
          const readingTime = Math.floor(wordCount / 200);

    return {
      characterCount,
      wordCount,
      readingTime,
    };
  };

  return (
    <>
      <div className="w-full">
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[200px] resize-y bg-white"
          placeholder="Start typing your content here..."
        ></textarea>
      </div>

      <StatsDisplay   
      stats={stats}
    minWords ={minWords}   
      maxWords = {maxWords}
   targetReadingTime ={targetReadingTime}
      />
    </>
   
  );
};

export default CharacterCounter;



  // <div>
  //     <h2>Interactive Character Counter</h2>

  //     <TextInput onTextChange={setText}/>

  //     {/* ProgressBar */}
  //     <div>
  //       <div>
  //         <div className="bg-blue-500 h-3 rounded-full transition-all"
  //         style={{width: `${onprogress}%`}}>

  //         </div>
  //       </div>
  //         <p>Min: {minWords} | Max: {maxWords}</p>
  //     </div>
  //   </div>