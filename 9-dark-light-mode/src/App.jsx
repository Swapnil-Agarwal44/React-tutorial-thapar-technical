import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DarkTheme, ThemeProvider } from './Darklight'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <DarkTheme />
    </ThemeProvider>
  )
}

export default App
