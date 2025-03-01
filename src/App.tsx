import {dummyData} from "./data/todos.ts";
import {useState} from "react";
import AddTodoForm from "./components/todoForm/AddTodoForm.tsx";
import TodoList from "./components/todoList/TodoList.tsx";
import TodoSummary from "./components/todoSummary/TodoSummary.tsx";

function App() {
  const [todos, setTodos] = useState(dummyData);
  
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => 
      prevTodos.map(todo => (todo.id === id ? {...todo, completed } : todo)));
  }
  
  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  
  function addTodo(title: string) {
    setTodos((prevTodos) => [...prevTodos, 
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      }]);
  }
  
  function deleteAllCompletedTodos() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }
  
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
