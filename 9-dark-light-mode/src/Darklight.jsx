import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{

    const [theme, setTheme] = useState("Dark")

    const toggleTheme = () =>{
        setTheme((prev)=>(prev === "Dark" ? "Light" : "Dark"))
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const DarkTheme = ()=>{

    const {theme, toggleTheme} = useContext(ThemeContext)

    return(

//     <div className={`min-h-screen w-full flex flex-col items-center justify-center gap-6 ${theme === "Dark" ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-blue-50 to-white text-gray-800'
// }  p-8`}>
//     <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//         {theme === "Dark" ? "Dark Mode Website" : "Light Mode Website"}
//     </h1>
//     <p className="text-lg text-gray-300">
//         {theme === "Dark" ? "Currently we are in the dark mode of the website" : "Currently we are in the light mode of the website"}
//     </p>
//     <button onClick={toggleTheme} className="px-6 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 shadow-lg hover:shadow-xl">
//        {theme === "Dark" ? "Switch to light mode" : "Switch to dark mode"} 
//     </button>
//     </div>

<div className={`min-h-screen w-full flex flex-col items-center justify-center gap-6 ${
    theme === "Dark" 
    ? 'bg-gray-900 text-white' 
    : 'bg-gradient-to-b from-blue-50 to-white text-gray-800'
}  p-8`}>
    <h1 className={`text-4xl font-bold tracking-tight ${
        theme === "Dark"
        ? 'bg-gradient-to-r from-blue-400 to-purple-500'
        : 'bg-gradient-to-r from-blue-600 to-purple-600'
    } bg-clip-text text-transparent`}>
        {theme === "Dark" ? "Dark Mode Website" : "Light Mode Website"}
    </h1>
    <p className={`text-lg ${
        theme === "Dark"
        ? 'text-gray-300'
        : 'text-gray-600'
    }`}>
        {theme === "Dark" ? "Currently we are in the dark mode of the website" : "Currently we are in the light mode of the website"}
    </p>
    <button 
        onClick={toggleTheme} 
        className={`px-6 py-2 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl ${
            theme === "Dark"
            ? 'bg-white text-gray-900 hover:bg-gray-200'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}>
        {theme === "Dark" ? "Switch to light mode" : "Switch to dark mode"}
    </button>
</div>
    )
}