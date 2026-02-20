import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextInput } from './TextInput'
import { TextInputProps } from './types'
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay'
import CharacterCounter from './components/CharacterCounter/CharacterCounter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TextInput onTextChange={count+1} placeholder='Start typing your content here...' initialValue=''/>
      <CharacterCounter/>
    </>
  )
}

export default App
