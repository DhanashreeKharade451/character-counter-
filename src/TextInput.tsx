import React from 'react';
import type { TextInputProps } from './types';
import { useState } from 'react'; 
 
export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = 'Start typing...',
  initialValue = ''
}) => {

    // const [count, setCount] = useState(0)
  return (
    <>

    <div className="w-full ">
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
    </div>
    {/* <div className='w-full'>
        <button>Characters</button>
        <button>Words</button>
        <button>Reading Time</button>
    </div> */}
    </>
    
  );
};