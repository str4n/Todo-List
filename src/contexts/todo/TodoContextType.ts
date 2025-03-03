import {Todo} from "../../components/todo/todo.ts";

export interface TodoContextType {
  todos: Todo[];
  setTodoCompleted: (id: number, completed: boolean) => void;
  deleteTodo: (id: number) => void;
  addTodo: (text: string) => void;
  deleteAllCompletedTodos: () => void;
}