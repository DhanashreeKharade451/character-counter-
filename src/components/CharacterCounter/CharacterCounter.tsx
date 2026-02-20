// //Create a CharacterCounter component that combines the above components and manages the state.

import { useState, useEffect } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";
import { TextInput } from "../../TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import { Stats } from "fs";


export const CharacterCounter: React.FC<CharacterCounterProps> =({
   minWords =25,
  maxWords =100,
  targetReadingTime = 1,
}) => {
  
  const [text, setText] =useState("");

  const calculateStates = (input:string): TextStates =>{
    const characterCount = input.length;

    const wordArray = input.trim().split(/\s+/).filter(Boolean);
    const wordCount =input.trim() === "" ? 0 :wordArray.length;

    const readingTime = Math.floor(wordCount / 200);

    return{
        characterCount,
      wordCount,
      readingTime,
    }
  
  };

  return (
    <div >
       <h1> Character Counter </h1>

       <TextInput  onTextChange={setText}/>

       <StatsDisplay
       stats = {Stats} 
       />
    </div>
  );
}

export default CharacterCounter;



     