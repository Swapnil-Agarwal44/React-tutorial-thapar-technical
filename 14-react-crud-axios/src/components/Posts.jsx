import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import { Input } from "./Input";

export const Posts = () => {
  const [posts, setPosts] = useState([]);


  // const [edit, setEdit] =  useState({
  //   title: "", 
  //   body: ""
  // })

  const [edit, setEdit] = useState({}) // the reason why we have converted the edit state to an empty object state is because this will be used to transform the button the form from add to edit and vice versa when we want to edit the post. 

  const getPostData = async () => {
    const res = await getPost();
    setPosts(res.data);
  };
  useEffect(() => {
    getPostData();
  }, []);


  // This deleteTask method is a basic method, in which we are just trying to modify our posts state, accordig to condition. However,the posts will revert back to their original state, if the application is refreshed. To ensure that the data remains the same even after refreshing, we will use axios delete method to alter the data that we are getting by the api.  

//   const deleteTask = (id)=>{
//     // e.preventDefault();
//     console.log(id);
//     // posts = posts.filter((cur)=>{ cur.id != id});
//     // setPosts(posts);
//     setPosts((prev) => prev.filter((cur)=>{return cur.id != id}))
    
//   }


const deleteTask = async (id) =>{
    try {
        const res = await deletePost(id);
        console.log(res);
        if(res.status === 200){
            setPosts((prev) => prev.filter((cur) => cur.id != id));
        }
        
    } catch (error) {
        console.log(error);
        
    }
}


const handleEdit = (cur) =>{
  // console.log(cur)
  setEdit(cur);  // we are passing the whole element to the function. 
}

// The above code is used to make sure that the data is also deleted from the api. However, in this case, data may not be deleted from the api, because we are using a mock of fake api, that does not store data in the database, and may resets or restarts on every refreshes. However, other than that, the code is correct. 


  return (
    <>
    <Input posts={posts} setPosts={setPosts} edit = {edit} setEdit ={setEdit}/>
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Posts</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((cur) => {
            const { id, body, title } = cur;
            return (
              <li
                key={id}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
              >
                <h1> {id} </h1>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Title: {title}</h2>
                <p className="text-gray-600 mb-4 flex-1">Body: {body}</p>
                <div className="flex gap-4 mt-4">
                  <button onClick = {()=>handleEdit(cur)}className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Edit
                  </button>
                  <button onClick = { ()=>deleteTask(id)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    </>
  );
};