import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "./Store";

const Todo = () => {

    // const state = useSelector((state) => state) // this is used to get the whole redux store 

    const tasks = useSelector((state) => state.task) // this is used to get the task array from the state of redux store. 
    // console.log(state);

    const dispatch = useDispatch();
    
    const [task, setTask] = useState("")

    const handleFormSubmit = (e) =>{
        e.preventDefault(); 
        dispatch(addTask(task));
        return setTask("")
      
    }

    const handleDelete = (id) =>{
        // e.preventDefault();
        return dispatch(deleteTask(id));
    }
 
  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Todo App</h2>
      <form onSubmit={handleFormSubmit} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter a task"
          value = {task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            flex: 1,
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px"
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Add
        </button>
      </form>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((todo, idx) => (
          <li
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              marginBottom: "8px",
              background: "#f9f9f9",
              borderRadius: "4px",
              border: "1px solid #eee",
              color: "#000000"
            }}
          >
            <span>{todo}</span>
            <button
             onClick={() => handleDelete(idx)} 
              style={{
                padding: "4px 10px",
                background: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;