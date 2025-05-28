import { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [inputValue, setInputValue] = useState({id: "", content: "", checked: false});

  const handleChange = (event) => {
    setInputValue({id: event.target.value, content: event.target.value, checked: false});
  };

  const addNewTodo = (event) =>{
    event.preventDefault()
    addTodo(inputValue)
    setInputValue({id: "", content: "", checked: false});
  }

  return (
    <form
      onSubmit={addNewTodo}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        margin: "20px 0",
      }}
    >
      <input
        type="text"
        value={inputValue.content}
        onChange={handleChange}
        placeholder="Enter your task"
        style={{
          padding: "10px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "16px",
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
          fontSize: "16px",
        }}
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
