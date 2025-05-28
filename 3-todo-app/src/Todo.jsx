import React from "react";
import { useState, useEffect } from "react";

const Todo = ()=>{

    const [Todo, setTodo] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [dateTime, setDateTime] = useState("")

    useEffect(()=>{
        setInterval(()=>{
            const now = new Date;
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
    
            setDateTime(`${formattedDate} - ${formattedTime}`)
        }, 1000)
    }, [])

    const handleChange = (event) =>{
        // event.preventDefault();
        setInputValue(event.target.value);
    };
    const handleSubmit = (event) =>{
        event.preventDefault()

        if (Todo.includes(inputValue)) return  //this line is used as a validation to make sure that no same task is given by the user.

        if(inputValue === "") return //this line is used as a validation to make sure that a task is not added if the user presses a button on empty input box.

        setTodo((prev) => [...prev, inputValue]);
        setInputValue("");
        console.log(Todo);
    };

    const handleDelete = (event) =>{
        event.preventDefault();
        // console.log(Todo[event.target.value])
        const index = event.target.value
        const newTodo = Todo.filter((todo,i) => i != index);
        // console.log(newTodo)
        setTodo([...newTodo])



    }

    //  useEffect(() => {
    //     console.log(Todo);
    // }, [Todo]);

//Important note: Whenever we are trying to enter a todo from our input box and submitting it, the todo is getting stored in the Todo state, however, it is not being reflected on the console properly (as we also have consoled log the todo after updating it, it should also include the latest todo in the array. However, the array given in the console only shows the todo till the previous ones. It won't show the newly added todo. If we again add a new todo, it will again show till the previous one.). This is mainly due to the fact that the react updates the state asynchronously while the console.log is carried out immediately. So when we submit the form, the react will bundle all the states, and will then render it on the states. Whereas the console is carried out immediately. So react may take a little time to update the state, which is why console doesn't store the latest updated todo immediately. To solve this, we have to use the useEffect hook, that is used to render our state update, whenever there is a change in todo state. 

//This problem and reason was discovered by me, without being told by any other person.

     return (
    //     <>
    //         <h1>Todo App </h1>
    //         <form onSubmit={handleSubmit}> 
    //             <input type="text" value = {inputValue} onChange = {handleChange} placeholder="Enter your task"/> 
    //             <button type="submit"> </button>
    //         </form> 
    //         <ul>
    //         {Todo.map((todo,index)=>(<li key={index}>{todo}</li>))}
    //         </ul>
    //     </>
    

    <>
    <h1 style={{ textAlign: "center", color: "#333", fontFamily: "Arial, sans-serif" }}>Todo App</h1>
    <h3>{dateTime} </h3>
    <form 
        onSubmit={handleSubmit} 
        style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            gap: "10px", 
            margin: "20px 0" 
        }}
    >
        <input 
            type="text" 
            value={inputValue} 
            onChange={handleChange} 
            placeholder="Enter your task" 
            style={{ 
                padding: "10px", 
                width: "300px", 
                border: "1px solid #ccc", 
                borderRadius: "5px", 
                fontSize: "16px" 
            }} 
        />
        <button 
            type="submit" 
            style={{ 
                padding: "10px 20px", 
                backgroundColor: "#007BFF", 
                color: "#fff", 
                border: "none", 
                borderRadius: "5px", 
                cursor: "pointer", 
                fontSize: "16px" 
            }}
        >
            Add Task
        </button>
    </form>
    <ul 
        style={{ 
            listStyleType: "none", 
            padding: "0", 
            margin: "0", 
            textAlign: "center" 
        }}
    >
        {Todo.map((todo, index) => (
    <li 
        key={index} 
        style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "10px", 
            margin: "5px 0", 
            backgroundColor: "#f9f9f9", 
            color: "#111111",
            border: "1px solid #ddd", 
            borderRadius: "5px", 
            fontSize: "16px" 
        }}
    >
        <span>{todo}</span>
        <button onClick={handleDelete} value = {index}
            style={{ 
                padding: "5px 10px", 
                backgroundColor: "#FF4D4D", 
                color: "#fff", 
                border: "none", 
                borderRadius: "5px", 
                cursor: "pointer", 
                fontSize: "14px" 
            }}
        >
            Delete
        </button>
    </li>
))}
    </ul>
</>
     )
}

export default Todo