//Create a StatsDisplay component that shows various statistics about the text.
import React from "react";
import type { StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
    showReadingTime = true,
}) => {
   //const {characterCount, wordCount, readingTime} = stats

  return (
    <div className="w-full p-4 border border-black-500 ">
        <div>
            <h3>Characters</h3>
            <p>{stats.characterCount}</p>
        </div>

        <div>
            <h3>Words</h3>
            <p>{stats.wordCount}</p>
        </div>

        {showReadingTime && (
            <div>
                <h3>Reading Time</h3>
                <p>
                    {Math.floor(stats.readingTime)};
                    {Math.round((stats.readingTime%1)*60)
                    .toString()
                    .padStart(2,"0")}
                </p>
            </div>
        )}


    </div>
  );
};