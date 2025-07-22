import {useEffect, useState} from "react";
import { addPost, updatePost } from "../api/PostApi";

// export const Input = ()=>{
//     return (
//     <>
//     <input name = "title" value = "title" type = "text" placeholder = "Enter the title of the post"/>
//     <input name = "body" value = "body" type = "text" placeholder = "Enter the body of the post"/> 
//     </>
    
// )  
// }

export const Input = ({posts, setPosts, edit, setEdit}) => {
    const [input, setInput] = useState({
        title: "", 
        body: ""
    })

    const handleEdit = () =>{
      edit && 
      setInput({title: edit.title || "", body: edit.body || "",})
    }

    let isEmpty = Object.keys(edit).length === 0; // this statement is used to check whether the edit state is empty or not. This will be used to convert the add button to the edit button in the form, whenever, we will click in the form. 

    useEffect(()=>{
      handleEdit();
    }, [edit])

    const inputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((prev) => {return {...prev, 
            [name] :  value,
        }})
    }


    const submitData = async () =>{
        try{
        const res = await addPost(input);
        console.log("res", res);
        if(res.status === 201){
            setPosts([...posts, res.data]); // in this spread operator, we have to use the name of the state after ... like in this example, if you are not using it in the function, like we did in the previous case. 

            setInput({title: "" , body: ""})
        }   
        }catch(error){
            console.log("The error is: ", error)
        }
                                            
        
    }

    const updatePostData = async () =>{
      try {
        const res = await updatePost(edit.id, input);
        console.log(res);
        if(res.status === 200){
          setPosts((prev) =>{
          return prev.map((curr)=>{
            return curr.id === res.data.id ? res.data : curr;
          })
        })
        }
        setEdit({});
        
      } catch (error) {
        console.log(error);
        
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;   // this code is used to take the value of the button on the basis of the condition. 
        if(action === "Add"){
          submitData();
        }
        else if(action === "Edit"){
          updatePostData();
        }
    }

  return (
    <>
    <form className="bg-white rounded-xl shadow-md p-6 mb-8 max-w-3xl mx-auto flex flex-col gap-4"
      onSubmit={handleSubmit}>
  <div className="flex flex-col md:flex-row gap-4">
    <input
      name="title"
      type="text"
      value={input.title}
      placeholder="Enter the title of the post"
      onChange={inputChange}
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />
    <input
      name="body"
      type="text"
      value={input.body}
      onChange={inputChange}
      placeholder="Enter the body of the post"
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    />
  </div>
  <button
    type="submit"
    className="self-end px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow"
    value = {isEmpty ? "Add" : "Edit"}
  >
    {isEmpty ? "Add" : "Edit"}
  </button>
</form>
    </>
   
  );
};