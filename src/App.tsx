import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextInput } from './TextInput'
import type { TextInputProps } from './types'
import type { StatsDisplay } from './components/StatsDisplay/StatsDisplay.tsx'
import CharacterCounter from './components/CharacterCounter/CharacterCounter'


function App() {
  const [count, setCount] = useState(0)

  //calculate stats
  const calculateStates = (content: string): textStats => {
    const characterCount = content.length;
  }

  return (
    <>
      <CharacterCounter
          minWords={25}
          maxWords={100}
          targetReadingTime={1}
      />
    </>
  )
}


export default App

