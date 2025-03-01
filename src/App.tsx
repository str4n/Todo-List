import AddTodoForm from "./components/todoForm/AddTodoForm.tsx";
import TodoList from "./components/todoList/TodoList.tsx";
import TodoSummary from "./components/todoSummary/TodoSummary.tsx";
import useTodos from "./hooks/useTodos.ts";

function App() {
  const {todos, setTodoCompleted, deleteTodo, addTodo, deleteAllCompletedTodos} = useTodos()
  
  return (
    <main className="py-10 h-screen space-y-5 bg-slate-100 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto rounded-md p-5 space-y-6">
        <TodoList 
          todos={todos} 
          onCompletedChange={setTodoCompleted} 
          onDeleted={deleteTodo}/>
        <AddTodoForm onSubmit={addTodo}/>
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos}/>
    </main>
  )
}

export default App
