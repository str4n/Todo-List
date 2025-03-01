import {Todo} from "../todo/todo.ts";

interface TodoSummaryProps {
  todos: Todo[]
  deleteAllCompleted: () => void;
}

export default function TodoSummary({todos, deleteAllCompleted}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <>
      {completedTodos.length > 0 && (
        <div className="text-center space-y-2">
          <p className={"text-sm font-medium"}>
            {completedTodos.length}/{todos.length} todos completed
          </p>

          <button
            onClick={deleteAllCompleted}
            className={"text-red-500 hover:underline text-sm font-medium"}>
            Delete all completed
          </button>
        </div>
      )}
    </>
  )
}