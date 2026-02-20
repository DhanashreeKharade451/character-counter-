//Create a StatsDisplay component that shows various statistics about the text.
import React from "react";
import type { StatsDisplayProps } from "../../types";


export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
    showReadingTime = true,
    // minWords,
    // maxWords,
    // targetReadingTime
}) => {

    const formatReadingTime = () =>{
        const minutes = Stats.readingTime;
        const seconds = Math.round((stats.wordCount /200 -minutes)*60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    //const wordStatusColor =
   //const {characterCount, wordCount, readingTime} = stats

  return (
    <div className="mt-6 space-y-4">
        <div>
            <div>
                <p>Characters</p>
                <p>{stats.characterCount}</p>
            </div>

            <div>
                <p>Words</p>
                <p>{stats.wordCount}</p>
                <p>
                    Min:{stats.minWords} |MAx: {stats.maxWords}
                </p>
            </div>


        </div>

    </div>
  );
};