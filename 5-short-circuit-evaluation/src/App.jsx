import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [login, setLogin] = useState(true)
  const [user, setUser] = useState("")

  return (
    <>
    <div className="max-w-4xl mx-auto p-6 space-y-8">
  <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
    Welcome to the ShortCircuit Evaluation
  </h1>
  <p>Please log in </p>
  {login && <p>You are logged in </p> }
  {user ? `Hello, ${user}` : ""}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <button onClick={()=>{setLogin(!login)}} className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md">
      Toggle Login State
    </button>
    <button onClick={()=>{setUser("Swapnil Agarwal")}} className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-md">
      Set User
    </button>
    <button onClick={()=>{setUser("")}} className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-md">
      Clear User
    </button>
  </div>
</div>
        
    </>
  )
}

export default App
