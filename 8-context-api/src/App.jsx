import { useState } from 'react'
import './App.css'
import { BioProvider } from './Context'
import { Home } from './Home'
import { About } from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BioProvider>
      <Home/>
      <About/>
     </BioProvider>
    </>
  )
}

export default App
