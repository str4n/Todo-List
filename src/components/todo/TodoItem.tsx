import {Todo} from "./todo.ts";
import {X} from "lucide-react";
import {useTodoContext} from "../../hooks/useTodoContext.ts";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({todo}: TodoItemProps) {
  const {setTodoCompleted, deleteTodo} = useTodoContext()
  return (
    <div>
      <label
        className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 justify-between">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => setTodoCompleted(todo.id, e.target.checked)}
            className="scale-125"
          />
          <span className={todo.completed ? "line-through text-gray-400" : ""}>
            {todo.title}
          </span>
        </div>

        <button onClick={() => deleteTodo(todo.id)}>
          <X className="hover:text-red-800"/>
        </button>
      </label>
    </div>
  );
}