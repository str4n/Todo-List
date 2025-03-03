import useTodos from "../../hooks/useTodos.ts";
import {ReactNode} from "react";
import {TodoContext as TodoContext1} from "./TodoContext.tsx";
import {TodoContextType} from "./TodoContextType.ts";

export function TodoProvider({ children }: { children: ReactNode }) {
  const { todos, setTodoCompleted, deleteTodo, addTodo, deleteAllCompletedTodos } = useTodos();

  const contextValue: TodoContextType = {
    todos,
    setTodoCompleted,
    deleteTodo,
    addTodo,
    deleteAllCompletedTodos,
  };

  return (
    <TodoContext1 value={contextValue}>
      {children}
    </TodoContext1>
  );
}

export default TodoProvider;