import axios from "axios";

// this is another method to use the axios that is used in the industry. 
// Here we are creating an instance of the axios, that we can set with the base URL, and export it to another files
const api = axios.create({ 
    baseURL : "https://jsonplaceholder.typicode.com"
});

export const getPost = ()=>{
    return api.get("/posts")  //"/posts" in this case is not the http method, but a property of the baseURL, that said using this routes will give the data from the api. 
}

export const deletePost = (id) => {
    return api.delete(`/posts/${id}`)
}

export const addPost = (post) =>{
    return api.post('/posts', post)  // through this api, we are sending the data that we want to add in the api. 
}

export const updatePost = (id, post) =>{
    return api.put(`/posts/${id}`, post)
}