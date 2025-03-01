import {FormEvent, useState} from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({onSubmit}: AddTodoFormProps) {
  const [input, setInput] = useState("");
  
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    onSubmit(input);
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