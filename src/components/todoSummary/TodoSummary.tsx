import {useTodoContext} from "../../hooks/useTodoContext.ts";


export default function TodoSummary() {
  const {todos, deleteAllCompletedTodos} = useTodoContext();
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <>
      {completedTodos.length > 0 && (
        <div className="text-center space-y-2">
          <p className={"text-sm font-medium"}>
            {completedTodos.length}/{todos.length} todos completed
          </p>

          <button
            onClick={deleteAllCompletedTodos}
            className={"text-red-500 hover:underline text-sm font-medium"}>
            Delete all completed
          </button>
        </div>
      )}
    </>
  )
}