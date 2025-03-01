import {useEffect, useState} from "react";
import {Todo} from "../components/todo/todo.ts";
import {dummyData} from "../data/todos.ts";

export default function useTodos() {
  const todosKey = "todos";

  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(localStorage.getItem(todosKey) || "[]");
    return savedTodos.length > 0 ? savedTodos : dummyData
  });

  useEffect(() => {
    localStorage.setItem(todosKey, JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map(todo => (todo.id === id ? {...todo, completed } : todo)));
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function addTodo(title: string) {
    setTodos((prevTodos) => [...prevTodos,
      {
        id: Date.now(),
        title,
        completed: false,
      }]);
  }

  function deleteAllCompletedTodos() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }
  
  return {
    todos, setTodoCompleted, deleteTodo, addTodo, deleteAllCompletedTodos
  }
}