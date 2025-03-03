import {FormEvent, useState} from "react";
import {useTodoContext} from "../../hooks/useTodoContext.ts";

export default function AddTodoForm() {
  const [input, setInput] = useState("");
  const {addTodo} = useTodoContext();
  
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (!input.trim()) return;

    addTodo(input);
    setInput("");
  }
  
  return (
    <form className="flex" onSubmit={(handleSubmit)}>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?" 
        className="rounded-s-md grow border border-gray-400 
        p-2 bg-white hover:bg-slate-50"/>
      <button 
        type="submit" 
        className="rounded-e-md w-16 bg-slate-900 text-white hover:bg-slate-800">
        Add
      </button>
    </form>
  )
}