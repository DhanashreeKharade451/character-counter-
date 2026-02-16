//Create a CharacterCounter component that combines the above components and manages the state.

import React, {useState,useEffect} from "react";
import type { CharacterCounterProps, TextStats } from "../../types";
import { TextInput } from "../../TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";


export const CharacterCounter: React.FC<CharacterCounterProps> = ({
    minWord =0,
    maxWords,
    targetReadingTime,

})=> 
    const [text,setText] = useState<string>("");
    const [stats, setStats] = useState<TextStats>({
        characterCount: 0,
        wordCount: 0,
       ReadingTime: 0,
    })