import React from "react";
import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import DateTime from "./DateTime";
import TodoList from "./TodoList";
import { setDataInLocalStorage, getDataFromLocalStorage } from "./LocalStorage";


const Todo = ()=>{

    const [Todo, setTodo] = useState(()=>getDataFromLocalStorage())

    setDataInLocalStorage(Todo)
    
    const handleSubmit = (inputValue) =>{
        // event.preventDefault()

        const {id, content, checked} = inputValue;

        //if (Todo.includes(inputValue)) return  //this line is used as a validation to make sure that no same task is given by the user.

        const ifTodoContentMatched = Todo.find((todo)=>{ //since now our each todo is an object contating the id, string and checked option, we cannot directly use our array method to search for existing todo.
            todo.content === content
        })

        if(ifTodoContentMatched) return; 

        if(inputValue.content === "") return //this line is used as a validation to make sure that a task is not added if the user presses a button on empty input box.

        setTodo((prev) => [...prev, {id, content, checked}]);
   
        console.log(Todo);
    };

    const handleDelete = (index) =>{
        // event.preventDefault();
        // console.log(Todo[event.target.value])
        const newTodo = Todo.filter((todo) => todo.id != index);
        // console.log(newTodo)
        setTodo([...newTodo])

    }

    const updateTodo = (id) => {
        setTodo((prev) =>
          prev.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
          )
        );
      };

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
   <DateTime />
    <TodoForm addTodo = {handleSubmit}/>
        <TodoList Todo={Todo} deleteTodo={handleDelete} updateTodo={updateTodo} />
</>
     )
}

export default Todo