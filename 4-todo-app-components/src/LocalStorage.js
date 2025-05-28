const storageKey = "ReactTodo";

export const setDataInLocalStorage = (Todo) => {
  if (!Array.isArray(Todo)) return; // Ensure only valid arrays are stored
  localStorage.setItem(storageKey, JSON.stringify(Todo));
};

export const getDataFromLocalStorage = () => {
  const rawTodos = localStorage.getItem(storageKey);
  if (!rawTodos) return [];
  try {
    return JSON.parse(rawTodos);
  } catch (error) {
    console.error("Invalid JSON in localStorage:", error);
    return []; // Return an empty array if parsing fails
  }
};