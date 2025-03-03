import TodoItem from "../todo/TodoItem.tsx";
import {useTodoContext} from "../../hooks/useTodoContext.ts";

export default function TodoList() {
  const {todos} = useTodoContext()
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