import {Todo} from "./todo.ts";
import {X} from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDeleted: (id: number) => void;
}

export default function TodoItem({todo, onCompletedChange, onDeleted}: TodoItemProps) {
  return (
    <div>
      <label
        className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 justify-between">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
            className="scale-125"
          />
          <span className={todo.completed ? "line-through text-gray-400" : ""}>
            {todo.title}
          </span>
        </div>

        <button onClick={() => onDeleted(todo.id)}>
          <X className="hover:text-red-800"/>
        </button>
      </label>
    </div>
  );
}