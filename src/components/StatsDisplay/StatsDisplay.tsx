//Create a StatsDisplay component that shows various statistics about the text.
import React from "react";
import type { StatsDisplayProps } from "../../types";
export const StatsDisplay: React.FC<StatsDisplayProps> = ({
    stats,
    showReadingTime = true,
}) => {
   const {characterCount, wordCount, readingTime} = stats

  return (
    <div>
        <div>
            <h3>Characters</h3>
            <p>Character Count</p>
        </div>

        <div>
            <h3>Words</h3>
            <p>Word Count</p>
        </div>

        {showReadingTime && (
            <div>
                <h3>Reading Time</h3>
                <p>
                    {Math.floor(readingTime)};
                    {Math.round((readingTime%1)*60)
                    .toString()
                    .padStart(2,"0")}
                </p>
            </div>
        )}


    </div>
  );
};