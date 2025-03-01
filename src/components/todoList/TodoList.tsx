import TodoItem from "../todo/TodoItem.tsx";
import {Todo} from "../todo/todo.ts";

interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDeleted: (id: number) => void;
}

export default function TodoList({todos, onCompletedChange, onDeleted}: TodoListProps) {
  todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? -1 : 1;
  });
  
  return (
    <>
      <div className="space-y-2">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompletedChange}
            onDeleted={onDeleted}
          />
        ))}
      </div>

      {todos.length === 0 && (
        <p className="text-center text-sm text-gray-500">
          No todos yet.
        </p>
      )}
    </>
  );
}