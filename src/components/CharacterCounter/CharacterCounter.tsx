// //Create a CharacterCounter component that combines the above components and manages the state.

import { useState, useEffect } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";
import { TextInput } from "../../TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 25,
  maxWords = 100,
  targetReadingTime = 1,
}) => {
  const [text, setText] = useState("");

  const calculateStates = (input: string): TextStates => {
    const characterCount = input.length;

    const wordArray = input.trim().split(/\s+/).filter(Boolean);
    const wordCount = input.trim() === "" ? 0 : wordArray.length;

    const readingTime = Math.floor(wordCount / 200);

    return {
      characterCount,
      wordCount,
      readingTime,
    };
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <div className="w-full">
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[200px] resize-y bg-white"
          placeholder="Start typing your content here..."
        ></textarea>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Characters</p>
            <p className="text-2xl font-semibold text-gray-700">0</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Words</p>
            <p className="text-2xl font-semibold text-red-600">0</p>
            <p className="text-xs text-gray-500">Min: 25 | Max: 100</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Reading Time</p>
            <p className="text-2xl font-semibold text-gray-700">0:00</p>
          </div>
        </div>
      </div>
    </div>

    // <div >
    //    <h1> Character Counter </h1>

    //    <TextInput  onTextChange={setText}/>

    // </div>
  );
};

export default CharacterCounter;
