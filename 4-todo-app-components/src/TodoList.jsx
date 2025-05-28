const TodoList = ({ Todo, deleteTodo, updateTodo }) => {
  const deleteTask = (event) => {
    event.preventDefault();
    const index = event.target.value;
    deleteTodo(index);
  };

  const markTask = (event) => {
    const todoId = event.target.value;
    updateTodo(todoId);
  };
  return (
    <>
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          margin: "0",
          textAlign: "center",
        }}
      >
        {Todo.map((todo) => (
          <li
            key={todo.id}
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
              fontSize: "16px",
            }}
          >
            <span
              style={{
                textDecoration: todo.checked ? "line-through" : "none",
              }}
            >
              {todo.content}
            </span>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={markTask}
                value={todo.id}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                ✓
              </button>
              <button
                onClick={deleteTask}
                value={todo.id}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#FF4D4D",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
