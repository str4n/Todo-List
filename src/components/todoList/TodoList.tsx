import TodoItem from "../todo/TodoItem.tsx";
import {Todo} from "../todo/todo.ts";

interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onRemovedChange: (id: number) => void;
}

export default function TodoList({todos, onCompletedChange, onRemovedChange}: TodoListProps) {
  return (
    <div className="space-y-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompletedChange={onCompletedChange}
          onRemovedChange={onRemovedChange}
        />
      ))}
    </div>
  );
}