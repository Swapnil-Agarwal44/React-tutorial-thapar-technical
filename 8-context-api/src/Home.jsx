import { useContext } from "react"
import { BioContext } from "./Context"


export const Home = () =>{
    const {myName, myAge} = useContext(BioContext)
    return (
        <>
        <h1> Hello Context API</h1>
        <h1> My name is {myName}</h1>
        <h1> My age is {myAge} </h1>
        </>
    )
}