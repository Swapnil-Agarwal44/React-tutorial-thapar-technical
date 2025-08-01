import { useEffect } from "react";
import { useState } from "react"
import { fetchPosts } from "../API/Api";
import {useQuery} from '@tanstack/react-query'

export const FetchRQ = () =>{

    const fetchAPIPosts = async () =>{
        try {   
            const res = await fetchPosts(); 
            if(res) console.log(res);
            return res.status === 200 ? res.data : []
        } catch (error) {
            console.log("The error is : ", error);
            return []; 
        }
    }

    const { data, isPending, isError, Error } = useQuery({
        queryKey: ["posts"], 
        queryFn: fetchAPIPosts,
    })
 
    if(isPending) return <h1>Loading...</h1>
    if(isError) return <h1>{ error.message || "Something went wrong"}</h1>
    return <>
        <h1>This is FetchRQ </h1>

        <div>
            <ul>
                {(data??[]).map((cur) =>{
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
