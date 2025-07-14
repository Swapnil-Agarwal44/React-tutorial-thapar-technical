import axios from "axios";
import { useEffect, useState } from "react";

export const Movies = () => {

    const [data, setData] = useState([])

    // const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

    // in this code, we are trying the use of axios to fetch the data. Although it works like fetch, but axios provides a cleaner code, and automatically converts the data into the json object. 

    const getMoviesData = async () =>{
        try{
            const res = await axios.get(API);
            console.log(res);
            setData(res.data.search);
            
        }catch(error){
            console.log(error);
            
        } 
    }

    useEffect(()=>{
        getMoviesData();
    }, [])

    return (
        <> 
            <ul>
                {/* all the data that you want to pass through it  */}
            </ul>
        </>
    )
}