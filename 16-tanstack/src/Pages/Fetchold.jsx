import { useEffect } from "react";
import { useState } from "react"
import { fetchPosts } from "../API/Api";


export const Fetchold = () =>{

    const [posts, setPosts] = useState([]);

    const fetchAPIPosts = async () =>{
        try {   
            const res = await fetchPosts(); 
            if(res) console.log(res);
            res.status === 200 ? setPosts(res.data) : []
        } catch (error) {
            console.log("The error is : ", error);
            return []; 
        }
    }


    useEffect(()=>{
        fetchAPIPosts(); 
    }, [])

    return <>
        <h1>This is Fetchold </h1>

        <div>
            <ul>
                {posts.map((cur) =>{
                    return (
                        <li key = {cur.id}>
                            <p>{cur.title}</p>
                            <p>{cur.body}</p>
                        </li>
                    )
                })}
            </ul>
        </div>

    </>
}