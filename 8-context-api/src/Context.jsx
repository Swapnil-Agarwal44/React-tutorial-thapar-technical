import { createContext } from "react";

// first step is to create a context, in which we will store the data.
// Important note: createContext returns a context component, not a variable. 
export const BioContext = createContext();


// second step is to create a context provider, which will pass the data to the children component. 
// if more than one values has to be passed to the children, then the data should be passed in double paranthesis {{}}.

export const BioProvider = ({children})=>{

    const myName = "Swapnil";
    const myAge = 22;
    return( 
    <BioContext.Provider value={{myName, myAge}}>
        {children}
    </BioContext.Provider>
    )
}